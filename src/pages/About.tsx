import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const About = () => {
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
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Hero Section */}
          <section className="text-center space-y-4">
            <div className="text-6xl">🏆</div>
            <h1 className="text-4xl font-bold text-foreground">Speedy Paws Race</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              귀여운 동물 캐릭터들이 펼치는 스릴 넘치는 달리기 경주 게임!<br />
              누가 1등으로 결승선을 통과할지, 아무도 예측할 수 없습니다.
            </p>
          </section>

          {/* Game Concept */}
          <section className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              🎯 기획 의도
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Speedy Paws Race는 친구들과 함께 즐기는 <strong>파티 게임</strong>으로 기획되었습니다.
                술자리 게임, 팀 빌딩, 가족 모임 등 여러 명이 모인 자리에서 누구나 쉽게 참여하고
                즐길 수 있도록 설계했습니다.
              </p>
              <p>
                각 플레이어는 자신의 동물 캐릭터를 선택하고, 경주가 시작되면 완전히 운에 맡겨야 합니다.
                어떤 전략도, 어떤 기술도 필요 없어요. 그저 자신의 동물이 빠르게 달려주기를 응원하면 됩니다!
              </p>
              <p>
                경주마다 결과가 달라지는 <strong>랜덤 속도 시스템</strong> 덕분에 이전 경기에서 꼴찌였던
                캐릭터가 다음 경기에서는 1등을 달릴 수 있습니다. 예측 불가능한 결과가 게임을 더욱
                흥미롭게 만들어 줍니다.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              ✨ 주요 재미 요소
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '🎲',
                  title: '완전 랜덤 결과',
                  desc: '0.5초마다 속도가 변하는 랜덤 시스템으로 매 경기마다 새로운 결과가 나옵니다. 어떤 동물이 이길지 아무도 모릅니다!',
                },
                {
                  icon: '🪨',
                  title: '돌멩이 이벤트',
                  desc: '50% 확률로 경주 후반부에 돌멩이가 등장합니다. 선두 캐릭터가 돌멩이에 걸려 넘어지는 극적인 역전 드라마를 경험하세요!',
                },
                {
                  icon: '🏅',
                  title: '벌칙 시스템',
                  desc: '꼴찌 또는 특정 순위에 벌칙을 설정할 수 있습니다. 술자리 게임, 내기 등 다양한 활용이 가능합니다.',
                },
                {
                  icon: '🐾',
                  title: '다양한 동물 캐릭터',
                  desc: '개, 고양이, 토끼, 여우, 곰, 팬더, 호랑이 등 귀여운 동물 캐릭터 중에서 자신만의 캐릭터를 선택하세요.',
                },
                {
                  icon: '👥',
                  title: '최대 15명 지원',
                  desc: '2명부터 최대 15명까지 참여할 수 있습니다. 소규모 모임부터 대규모 파티까지 모두 지원합니다.',
                },
                {
                  icon: '📊',
                  title: '실시간 순위',
                  desc: '경주 중 실시간으로 순위가 업데이트됩니다. 내 캐릭터가 몇 등인지 항상 확인할 수 있어요.',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-xl p-6 border border-border space-y-3"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Development Story */}
          <section className="bg-secondary/30 rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              🛠️ 개발 이야기
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                이 게임은 바이브 코딩(Vibe Coding) 방식으로 제작되었습니다. AI와의 협업을 통해
                게임 아이디어를 실제로 구현하는 과정을 거쳤습니다.
              </p>
              <p>
                처음에는 단순한 달리기 게임으로 시작했지만, 다양한 피드백을 반영하며 발전시켰습니다.
                러버밴딩 시스템, 랜덤 속도 변화, 돌멩이 이벤트 등을 순차적으로 추가하면서
                지금의 형태가 갖춰졌습니다.
              </p>
              <p>
                특히 React의 <code className="bg-muted px-1 rounded text-sm">setInterval</code>과
                클로저 문제를 해결하는 과정에서 <code className="bg-muted px-1 rounded text-sm">useRef</code>와
                <code className="bg-muted px-1 rounded text-sm">useState</code>를 함께 사용하는
                패턴을 적용하여 안정적인 게임 로직을 구현했습니다.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-4 py-4">
            <p className="text-muted-foreground">지금 바로 게임을 시작해보세요!</p>
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

export default About;
