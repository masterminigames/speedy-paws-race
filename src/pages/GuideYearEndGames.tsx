import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuideYearEndGames = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full py-4 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← 가이드 목록
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <Link to="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            🐾 Speedy Paws Race
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 px-6">
        <article className="max-w-3xl mx-auto space-y-8">
          <header className="space-y-3">
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">회식</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              🎊 송년회·회식 게임 추천 — 분위기 살리는 모임 게임
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              연말 송년회, 부서 회식, 동호회 모임에서 어색함을 깨고 분위기를 띄우는 게임을 모았습니다.
              직급이 섞인 자리에서도 부담 없이 즐길 수 있는 것 위주로, 진행 순서와 상품·벌칙 활용법까지
              정리했습니다.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">회식 게임의 핵심은 &lsquo;공평함&rsquo;</h2>
            <p className="text-foreground/80 leading-relaxed">
              회사 회식은 친구 모임과 다릅니다. 직급·나이 차이가 있어, 특정인이 계속 걸리거나 누군가만
              부담을 지면 분위기가 오히려 어색해집니다. 그래서 회식 게임은 &lsquo;누구든 똑같이 걸릴 수
              있는&rsquo; 운 기반 게임이 안전합니다. 상품이나 벌칙도 가볍고 유쾌한 선에서 준비하는 것이
              좋습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">상품·경품 추첨에 좋은 방식</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                송년회의 하이라이트는 역시 경품 추첨입니다. 번호표를 뽑는 전통적인 방식도 좋지만,
                <strong> 각자 동물을 골라 경주로 순위를 정하는 방식</strong>은 모두가 화면을 보며 응원하게
                되어 훨씬 흥이 납니다. 1등에게 경품, 꼴찌에게 가벼운 벌칙처럼 순위별로 활용할 수 있어
                진행이 매끄럽습니다.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                💡 <strong>진행 팁:</strong> 빔프로젝터나 큰 모니터에 경주 화면을 띄우면 수십 명이 모인
                자리에서도 모두가 함께 몰입할 수 있습니다.
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">테이블에서 바로 하는 간단 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>초성 퀴즈:</strong> 회사·업계 관련 단어의 초성을 내고 맞히면 재미가 배가됩니다.
                가장 늦게 맞힌 사람이 다음 건배사를 맡는 식으로 연결하면 자연스럽습니다.
              </p>
              <p>
                <strong>공통점 찾기:</strong> 무작위로 두 사람을 지목하고 공통점 세 가지를 찾게 하는 게임.
                서로를 알아가는 계기가 되어 팀 분위기가 부드러워집니다.
              </p>
              <p>
                <strong>밸런스 게임:</strong> 가벼운 양자택일 질문으로 대화를 유도합니다. 정답이 없어
                누구나 편하게 참여할 수 있어 자리 초반 아이스브레이킹에 특히 좋습니다.
              </p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">함께 보면 좋은 글</h2>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li><Link to="/guides/drinking-games" className="text-primary hover:underline">술자리 벌칙 게임 추천 BEST →</Link></li>
              <li><Link to="/guides/penalty-ideas" className="text-primary hover:underline">벌칙 아이디어 모음 →</Link></li>
            </ul>
          </section>

          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">경품 추첨·벌칙 대상을 공정하게 정하고 싶다면 동물 경주를 활용해 보세요.</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
              🏃 경주 시작하기
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default GuideYearEndGames;
