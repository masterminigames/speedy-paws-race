import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

interface UpdateEntry {
  date: string;
  version: string;
  title: string;
  type: 'feature' | 'improvement' | 'event' | 'fix';
  description: string;
  details: string[];
}

const updates: UpdateEntry[] = [
  {
    date: '2026-06-24',
    version: 'v2.1.0',
    title: '닭 변신 시스템 & UI 개선',
    type: 'feature',
    description: '닭 캐릭터에 변신 시스템을 추가하고, 게임 모드에 따른 벌칙 색상 테마를 적용했습니다.',
    details: [
      '닭 선택 시 매 판마다 확률로 변신: 닭(🐔) 60%, 병아리(🐣) 25%, 불사조(🐦‍🔥) 15%',
      '불사조: 2배 크기, 5% 빠른 속도, 장애물 면역, 팔다리 없음',
      '병아리: 10% 느린 속도, 팔다리 없음',
      '유니콘/닭/불사조/병아리 이모지 좌우 반전 (우측 방향)',
      '벌칙 색상 테마: 달리기 모드 빨간색, 수영 모드 파란색',
      '다시 시작, 몰아주기 시에도 매 판 새로운 변신 확률 적용',
    ],
  },
  {
    date: '2026-06-10',
    version: 'v2.0.0',
    title: '수영 모드 & 배 부스터 추가',
    type: 'feature',
    description: '달리기와 수영 두 가지 경주 모드를 지원합니다. 수영 모드에서는 배 부스터와 파도 이벤트가 등장합니다.',
    details: [
      '수영 모드 추가 (기본 모드): 물속 배경, 수영 애니메이션, 물보라 효과',
      '배 부스터(🚤): 60% 확률로 등장, 랜덤 레인 20% 지점 배치, 먹으면 4배 속도',
      '수영 모드 장애물: 돌멩이 대신 파도(🌊) 등장',
      '수영 레인: 레인 로프 시각 효과, 파란색 테마',
      '달리기 모드도 기존과 동일하게 유지',
    ],
  },
  {
    date: '2026-05-20',
    version: 'v1.6.0',
    title: '장애물 이벤트 밸런스 조정',
    type: 'improvement',
    description: '장애물 이벤트의 발생 확률과 발동 지점을 조정하여 밸런스를 개선했습니다.',
    details: [
      '장애물 이벤트 발생 확률 60%로 상향 조정',
      '장애물 발동 지점 80% 지점으로 변경 (기존 75%)',
      '장애물 종류 모드별 분리: 달리기 돌멩이(🪨), 수영 파도(🌊)',
    ],
  },
  {
    date: '2026-04-29',
    version: 'v1.5.0',
    title: '봄 시즌 이벤트 - 벚꽃 날리기 (종료)',
    type: 'event',
    description: '봄을 맞이하여 경주 화면에 벚꽃이 날리는 시각 효과를 추가했습니다. (시즌 종료)',
    details: [
      '경주 중 화면에 벚꽃 파티클이 대각선 방향으로 흩날립니다',
      '20개의 꽃잎이 각각 다른 속도와 크기로 애니메이션됩니다',
      '게임 성능에 영향을 주지 않도록 CSS 애니메이션으로 구현',
      '봄 시즌 한정 이벤트 (종료됨)',
    ],
  },
  {
    date: '2026-04-29',
    version: 'v1.4.0',
    title: '몰아주기 기능 추가',
    type: 'feature',
    description: '벌칙 대상자가 2명 이상일 때, 벌칙 대상자끼리 다시 한 번 경주하여 최종 1명을 결정하는 몰아주기 기능을 추가했습니다.',
    details: [
      '결과 모달에서 "몰아주기" 버튼을 눌러 즉시 재경주 시작',
      '벌칙 대상자만 참여하는 소규모 경주 진행',
      '몰아주기 경주에서는 꼴찌가 최종 벌칙 대상자로 결정',
      '몰아주기 결과에서 최종 벌칙 대상자는 ☠️ 아이콘으로 표시',
      '몰아주기 중에는 돌멩이 이벤트가 발생하지 않음',
    ],
  },
  {
    date: '2026-04-15',
    version: 'v1.3.0',
    title: '돌멩이 이벤트 개선',
    type: 'improvement',
    description: '돌멩이 이벤트의 발동 조건과 확률을 조정하여 더욱 긴장감 있는 게임 경험을 제공합니다.',
    details: [
      '돌멩이 이벤트 발생 확률을 50%로 조정',
      '선두 캐릭터가 75% 지점을 통과하면 돌멩이 출현',
      '85% 지점에서 선두 캐릭터가 넘어지는 연출 추가',
      '넘어진 캐릭터는 87% 지점에 고정되며 다른 캐릭터가 추월 가능',
      '넘어진 캐릭터에 💫 회전 이모지 애니메이션 추가',
    ],
  },
  {
    date: '2026-03-25',
    version: 'v1.2.0',
    title: '벌칙 시스템 도입',
    type: 'feature',
    description: '경주 결과에 따라 특정 순위의 참가자에게 벌칙을 부여하는 시스템을 도입했습니다.',
    details: [
      '꼴찌 1~3명에게 벌칙을 부여하는 옵션 추가',
      '벌칙 대상자는 결과 모달에서 💣 아이콘과 함께 강조 표시',
      '실시간 순위판에서도 벌칙 대상 순위 붉은색 강조',
      '벌칙 설정 단계를 게임 시작 전 설정 화면에 통합',
    ],
  },
  {
    date: '2026-03-22',
    version: 'v1.1.0',
    title: '가속 버프 시스템',
    type: 'feature',
    description: '경주 중 랜덤한 위치에서 가속 버프가 발동하여 더욱 역동적인 경주를 즐길 수 있습니다.',
    details: [
      '게임당 캐릭터별 4회 가속 버프 발동',
      '0~85% 구간에서 랜덤한 위치에 버프 포인트 배치',
      '버프 발동 시 0.8초간 속도 증가 (1.5~3.5%/s 추가)',
      '각 캐릭터별 독립적인 버프 위치와 가속량으로 공정성 확보',
    ],
  },
  {
    date: '2026-03-20',
    version: 'v1.0.0',
    title: '서비스 출시',
    type: 'feature',
    description: 'Speedy Paws Race(커피 달리기 경주) 서비스를 정식 출시했습니다.',
    details: [
      '2~15명 참가 가능한 동물 달리기 경주 게임',
      '15종의 귀여운 동물 캐릭터 (강아지, 고양이, 토끼, 여우, 곰 등)',
      '완전 랜덤 기반의 공정한 경주 시스템',
      '실시간 순위판 및 결과 모달',
      '다시 시작 및 캐릭터 재설정 기능',
      '모바일/데스크톱 반응형 디자인',
      'Google AdSense 광고 연동',
    ],
  },
];

const typeLabels: Record<UpdateEntry['type'], { label: string; color: string }> = {
  feature: { label: '신규 기능', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  improvement: { label: '개선', color: 'bg-green-100 text-green-700 border-green-200' },
  event: { label: '이벤트', color: 'bg-pink-100 text-pink-700 border-pink-200' },
  fix: { label: '수정', color: 'bg-amber-100 text-amber-700 border-amber-200' },
};

const Updates = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full py-4 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← 게임으로 돌아가기
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <span className="text-sm font-semibold text-foreground">🐾 Speedy Paws Race</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Title */}
          <section className="text-center space-y-4">
            <div className="text-6xl">📝</div>
            <h1 className="text-4xl font-bold text-foreground">업데이트 내역</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Speedy Paws Race의 새로운 기능과 개선 사항을 확인하세요.<br />
              지속적으로 더 재미있는 게임을 만들어가고 있습니다.
            </p>
          </section>

          {/* Summary Stats */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-card rounded-xl p-4 border border-border text-center">
              <div className="text-2xl font-bold text-foreground">{updates.length}</div>
              <div className="text-xs text-muted-foreground">총 업데이트</div>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border text-center">
              <div className="text-2xl font-bold text-foreground">
                {updates.filter(u => u.type === 'feature').length}
              </div>
              <div className="text-xs text-muted-foreground">신규 기능</div>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border text-center">
              <div className="text-2xl font-bold text-foreground">
                {updates.filter(u => u.type === 'improvement').length}
              </div>
              <div className="text-xs text-muted-foreground">개선 사항</div>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border text-center">
              <div className="text-2xl font-bold text-foreground">
                {updates.filter(u => u.type === 'event').length}
              </div>
              <div className="text-xs text-muted-foreground">시즌 이벤트</div>
            </div>
          </section>

          {/* Timeline */}
          <section className="space-y-6">
            {updates.map((update, index) => {
              const typeInfo = typeLabels[update.type];
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < updates.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-border -mb-6 hidden sm:block" />
                  )}

                  <div className="flex gap-4">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary items-center justify-center mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-2xl p-6 border border-border space-y-4">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${typeInfo.color}`}>
                          {typeInfo.label}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">{update.version}</span>
                        <span className="text-xs text-muted-foreground">{update.date}</span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{update.title}</h3>
                        <p className="text-sm text-foreground/80 mt-1 leading-relaxed">{update.description}</p>
                      </div>

                      {/* Details */}
                      <ul className="space-y-1.5">
                        {update.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="shrink-0 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Footer Note */}
          <section className="bg-muted rounded-xl p-6 text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              더 재미있는 기능을 계속 준비하고 있습니다. 건의사항이나 아이디어가 있다면 알려주세요!
            </p>
            <a
              href="mailto:jinokiing@gmail.com"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              ✉️ jinokiing@gmail.com
            </a>
          </section>

          {/* CTA */}
          <section className="text-center py-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
            >
              🏃 게임 시작하기
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Updates;
