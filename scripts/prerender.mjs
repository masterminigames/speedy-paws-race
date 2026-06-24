// 정적 콘텐츠 페이지를 빌드 시점에 완성된 HTML로 미리 생성(prerender)합니다.
// 크롤러/검색엔진/AdSense가 JavaScript 실행 없이도 본문을 바로 읽을 수 있게 합니다.
// 게임 페이지("/")는 사용자 조작이 필요하므로 대상에서 제외합니다.
import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

const SITE = 'Speedy Paws Race';

// 미리 생성할 콘텐츠 페이지 목록 (게임 페이지 "/"는 제외)
const ROUTES = [
  {
    path: '/about',
    module: '/src/pages/About.tsx',
    title: `게임 소개 - ${SITE}`,
    description:
      'Speedy Paws Race는 친구들과 함께 즐기는 무료 동물 경주 파티 게임입니다. 기획 의도와 주요 재미 요소를 소개합니다.',
  },
  {
    path: '/how-to-play',
    module: '/src/pages/HowToPlay.tsx',
    title: `이용 방법 - ${SITE}`,
    description:
      '참가자 설정부터 동물 선택, 벌칙 설정, 경주 진행까지 Speedy Paws Race를 즐기는 방법을 단계별로 안내합니다.',
  },
  {
    path: '/updates',
    module: '/src/pages/Updates.tsx',
    title: `업데이트 내역 - ${SITE}`,
    description:
      '수영 모드, 배 부스터, 닭 변신 시스템 등 Speedy Paws Race의 새로운 기능과 개선 사항을 확인하세요.',
  },
  {
    path: '/guides',
    module: '/src/pages/Guides.tsx',
    title: `게임 가이드 & 꿀팁 - ${SITE}`,
    description:
      '술자리, 회식, MT, 가족 모임을 더 재미있게 만들어 줄 게임과 벌칙 아이디어 모음입니다.',
  },
  {
    path: '/guides/drinking-games',
    module: '/src/pages/GuideDrinkingGames.tsx',
    title: `술자리 벌칙 게임 추천 BEST - ${SITE}`,
    description:
      '준비물 없이 바로 즐기는 인기 술자리 벌칙 게임과 규칙, 진행 팁을 정리했습니다. 369·손병호·초성 게임 등.',
  },
  {
    path: '/guides/team-building',
    module: '/src/pages/GuideTeamBuilding.tsx',
    title: `회식·MT 팀빌딩 아이스브레이킹 게임 모음 - ${SITE}`,
    description:
      '처음 만난 사람들과도 금방 친해지는 아이스브레이킹 게임과 단체 게임을 인원수·상황별로 소개합니다.',
  },
  {
    path: '/guides/penalty-ideas',
    module: '/src/pages/GuidePenaltyIdeas.tsx',
    title: `벌칙 아이디어 모음 (술자리·회식·가족 모임) - ${SITE}`,
    description:
      '게임에서 진 사람에게 줄 벌칙 아이디어를 강도·상황별로 정리했습니다. 가벼운 것부터 분위기 띄우는 것까지.',
  },
  {
    path: '/terms',
    module: '/src/pages/Terms.tsx',
    title: `이용약관 - ${SITE}`,
    description: 'Speedy Paws Race 서비스 이용약관입니다.',
  },
  {
    path: '/privacy-policy',
    module: '/src/pages/PrivacyPolicy.tsx',
    title: `개인정보처리방침 - ${SITE}`,
    description: 'Speedy Paws Race 개인정보처리방침입니다.',
  },
];

function escapeAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// 템플릿의 <title> 및 description/og 메타를 페이지별 값으로 교체
function applyMeta(template, { title, description, canonicalPath }) {
  let html = template;
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  const canonical = `https://coffeeracing.co.kr${canonicalPath}`;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${d}" />`
  );
  html = html.replace(
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${t}" />`
  );
  html = html.replace(
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${d}" />`
  );
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  return html;
}

async function main() {
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');

  const vite = await createServer({
    root,
    logLevel: 'warn',
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const React = (await import('react')).default;
  const { renderToString } = await import('react-dom/server');
  const { StaticRouter } = await import('react-router-dom/server.mjs');

  let count = 0;
  try {
    for (const route of ROUTES) {
      const mod = await vite.ssrLoadModule(route.module);
      const Page = mod.default;

      const appHtml = renderToString(
        React.createElement(
          StaticRouter,
          { location: route.path },
          React.createElement(Page)
        )
      );

      let html = applyMeta(template, {
        title: route.title,
        description: route.description,
        canonicalPath: route.path,
      });
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      const outPath = path.join(distDir, route.path.replace(/^\//, ''), 'index.html');
      await fs.mkdir(path.dirname(outPath), { recursive: true });
      await fs.writeFile(outPath, html, 'utf-8');
      count++;
      console.log(`  ✓ prerendered ${route.path} → ${path.relative(root, outPath)}`);
    }
  } finally {
    await vite.close();
  }

  console.log(`\n✅ ${count}개 페이지 prerender 완료`);
}

main().catch((err) => {
  console.error('프리렌더 실패:', err);
  process.exit(1);
});
