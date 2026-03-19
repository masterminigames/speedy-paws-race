import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const HowToPlay = () => {
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

          {/* Title */}
          <section className="text-center space-y-4">
            <div className="text-6xl">📖</div>
            <h1 className="text-4xl font-bold text-foreground">이용 방법</h1>
            <p className="text-lg text-muted-foreground">
              Speedy Paws Race를 즐기는 방법을 단계별로 안내해 드립니다.
            </p>
          </section>

          {/* Quick Start */}
          <section className="bg-primary/10 rounded-2xl p-8 border border-primary/20 space-y-4">
            <h2 className="text-xl font-bold text-foreground">⚡ 빠른 시작 요약</h2>
            <ol className="space-y-2 text-foreground/80">
              <li className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                참가자 수를 설정한다
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                각자 동물 캐릭터를 선택한다
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                벌칙 순위를 정한다
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                경주 시작 후 응원한다
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">5</span>
                결과 확인 후 벌칙 대상자를 처벌한다 🎉
              </li>
            </ol>
          </section>

          {/* Step-by-step Guide */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">📋 단계별 상세 가이드</h2>

            {/* Step 1 */}
            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">1</div>
                <h3 className="text-xl font-bold text-foreground">참가자 수 설정</h3>
              </div>
              <div className="ml-13 space-y-3 text-foreground/80 leading-relaxed">
                <p>
                  게임을 시작하면 가장 먼저 참가자 수를 설정하는 화면이 나타납니다.
                  <strong> 최소 2명부터 최대 15명</strong>까지 설정할 수 있습니다.
                </p>
                <p>
                  화면의 <strong>+ / −</strong> 버튼을 눌러 참가 인원을 조절하세요.
                  모든 참가자가 준비되면 다음 단계로 넘어갑니다.
                </p>
                <div className="bg-muted rounded-lg p-4 text-sm">
                  💡 <strong>팁:</strong> 많은 인원이 참가할수록 경주가 더 박진감 넘칩니다!
                  8~10명 정도가 가장 흥미로운 경험을 제공합니다.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">2</div>
                <h3 className="text-xl font-bold text-foreground">동물 캐릭터 선택</h3>
              </div>
              <div className="ml-13 space-y-3 text-foreground/80 leading-relaxed">
                <p>
                  각 참가자는 자신을 대표할 동물 캐릭터를 선택합니다.
                  화면에 표시된 귀여운 동물 이모지 중 원하는 것을 클릭하세요.
                </p>
                <p>
                  선택 가능한 동물은 다음과 같습니다:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {['🐶 강아지', '🐱 고양이', '🐰 토끼', '🦊 여우', '🐻 곰', '🐼 팬더', '🐯 호랑이', '🐸 개구리', '🐧 펭귄', '🦁 사자'].map((animal) => (
                    <div key={animal} className="bg-muted rounded-lg p-2 text-center text-sm">
                      {animal}
                    </div>
                  ))}
                </div>
                <p className="text-sm">
                  같은 동물을 여러 명이 선택할 수 없습니다. 원하는 캐릭터를 먼저 선택하세요!
                  모두 고르기 어렵다면 <strong>🔀 랜덤 배정</strong> 버튼을 눌러 자동으로 배정받을 수도 있습니다.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">3</div>
                <h3 className="text-xl font-bold text-foreground">벌칙 설정</h3>
              </div>
              <div className="ml-13 space-y-3 text-foreground/80 leading-relaxed">
                <p>
                  경주에서 특정 순위에 도달한 참가자에게 벌칙을 부여할 수 있습니다.
                  벌칙 인원 수와 대상 순위를 자유롭게 설정하세요.
                </p>
                <p>예시 설정:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>꼴찌 1명에게 벌칙 (기본 설정)</li>
                  <li>꼴찌 2~3명에게 벌칙 (더 긴장감 있는 게임)</li>
                  <li>특정 순위 (예: 3등)에게 벌칙 (색다른 게임)</li>
                </ul>
                <div className="bg-muted rounded-lg p-4 text-sm">
                  💡 <strong>활용 아이디어:</strong> 술자리에서는 벌주 마시기, 게임에서는 미션 수행 등
                  다양하게 활용할 수 있습니다!
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">4</div>
                <h3 className="text-xl font-bold text-foreground">경주 시작 & 관전</h3>
              </div>
              <div className="ml-13 space-y-3 text-foreground/80 leading-relaxed">
                <p>
                  설정이 완료되면 <strong>경주 시작</strong> 버튼을 누릅니다.
                  3, 2, 1 카운트다운 후 동물들이 일제히 출발합니다!
                </p>
                <p>
                  경주 화면에서 확인할 수 있는 정보:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>각 레인</strong>: 동물 캐릭터의 현재 위치</li>
                  <li><strong>실시간 순위</strong>: 현재 순위 (1등부터 꼴찌까지)</li>
                  <li><strong>붉은색 강조</strong>: 현재 벌칙 대상 순위</li>
                </ul>
                <div className="bg-muted rounded-lg p-4 text-sm">
                  🪨 <strong>주의:</strong> 40% 확률로 후반부에 돌멩이가 등장합니다!
                  선두를 달리던 캐릭터가 돌멩이에 걸려 넘어지는 극적인 반전이 일어날 수 있어요.
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">5</div>
                <h3 className="text-xl font-bold text-foreground">결과 확인 & 다음 게임</h3>
              </div>
              <div className="ml-13 space-y-3 text-foreground/80 leading-relaxed">
                <p>
                  모든 캐릭터가 결승선을 통과하면 결과 모달이 자동으로 표시됩니다.
                  최종 순위와 벌칙 대상자를 확인하세요.
                </p>
                <p>게임 종료 후 선택 가능한 옵션:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>🔄 다시 시작</strong>: 같은 캐릭터 설정으로 즉시 재경주</li>
                  <li><strong>🏠 첫화면으로</strong>: 처음부터 새로 설정</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Events */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">🎲 특별 이벤트 안내</h2>

            <div className="bg-card rounded-2xl p-8 border border-border space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                🪨 돌멩이 이벤트
              </h3>
              <div className="space-y-3 text-foreground/80 leading-relaxed">
                <p>돌멩이 이벤트는 다음과 같이 진행됩니다:</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>게임 시작 시 <strong>40% 확률</strong>로 돌멩이 이벤트 활성화 여부 결정</li>
                  <li>선두 캐릭터가 <strong>82% 지점</strong>을 통과하는 순간 이벤트 발동</li>
                  <li><strong>85% 지점</strong>에 돌멩이가 모든 레인에 동시 등장</li>
                  <li>돌멩이를 처음 밟은 선두 캐릭터가 <strong>90도 회전하며 넘어짐</strong></li>
                  <li>넘어진 캐릭터는 <strong>87% 지점에서 정지</strong>, 이후 캐릭터들이 추월 가능</li>
                </ol>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                  ⚠️ 돌멩이 이벤트 덕분에 경주 막판까지 절대 안심할 수 없습니다.
                  1등이었어도 돌멩이로 인해 순식간에 역전될 수 있어요!
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">❓ 자주 묻는 질문</h2>
            <div className="space-y-4">
              {[
                {
                  q: '게임 결과가 조작되나요?',
                  a: '아니요, 완전히 랜덤입니다. 0.5초마다 각 캐릭터의 속도가 무작위로 변경되며, 누구도 결과를 예측하거나 조작할 수 없습니다.',
                },
                {
                  q: '모바일에서도 사용할 수 있나요?',
                  a: '네, 모바일 기기에서도 원활하게 작동합니다. 스마트폰이나 태블릿으로도 게임을 즐길 수 있습니다.',
                },
                {
                  q: '한 번에 최대 몇 명까지 참가할 수 있나요?',
                  a: '최대 15명까지 동시에 참가할 수 있습니다.',
                },
                {
                  q: '같은 동물을 여러 명이 선택할 수 있나요?',
                  a: '아니요, 각 동물 캐릭터는 한 명만 선택할 수 있습니다. 먼저 선택한 사람이 해당 캐릭터를 사용합니다.',
                },
                {
                  q: '돌멩이 이벤트가 매번 발생하나요?',
                  a: '아니요, 40% 확률로만 발생합니다. 게임 시작 시 랜덤으로 결정되며, 60%의 경우에는 돌멩이 없이 깔끔하게 경주가 진행됩니다.',
                },
              ].map((item) => (
                <div key={item.q} className="bg-card rounded-xl p-6 border border-border space-y-2">
                  <h3 className="font-bold text-foreground">Q. {item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">A. {item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-4 py-4">
            <p className="text-muted-foreground">준비가 됐다면 지금 바로 시작해보세요!</p>
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

export default HowToPlay;
