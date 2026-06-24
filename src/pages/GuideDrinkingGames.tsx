import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuideDrinkingGames = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
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

      {/* Article */}
      <main className="flex-1 py-12 px-6">
        <article className="max-w-3xl mx-auto space-y-8">

          <header className="space-y-3">
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">술자리</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              🍻 술자리 벌칙 게임 추천 BEST — 준비물 없이 바로 즐기기
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              회식이나 친구들과의 술자리에서 분위기가 가라앉을 때, 게임 하나면 충분합니다.
              따로 준비물이 필요 없고 누구나 금방 규칙을 익힐 수 있는 인기 벌칙 게임을 모았습니다.
              각 게임의 규칙과 진행 팁, 그리고 벌칙을 정하는 방법까지 함께 정리했어요.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">술자리 게임을 고를 때 기준</h2>
            <p className="text-foreground/80 leading-relaxed">
              좋은 술자리 게임에는 몇 가지 공통점이 있습니다. 첫째, 규칙이 단순해서 한두 번 설명으로
              모두가 이해할 수 있어야 합니다. 둘째, 특별한 도구나 앱 없이도 진행할 수 있으면 좋습니다.
              셋째, 운이 크게 작용해서 누구든 벌칙에 걸릴 수 있어야 긴장감이 유지됩니다. 아래 게임들은
              이 세 가지 조건을 모두 만족하는, 모임에서 실패 확률이 낮은 것들로 골랐습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. 동물 경주 게임 — 운으로 끝내는 깔끔한 승부</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                벌칙 대상을 정하는 가장 공정하고 빠른 방법은 &lsquo;운&rsquo;에 맡기는 것입니다.
                각자 동물 캐릭터를 하나씩 고른 뒤 경주를 시작하면, 누구의 개입도 없이 순위가 정해집니다.
                실력이 끼어들 여지가 없어 결과에 누구도 불만을 갖기 어렵고, 진행이 매우 빠릅니다.
              </p>
              <p>
                Speedy Paws Race는 바로 이 방식을 디지털로 옮긴 게임입니다. 인원수를 맞춰 동물을 고르고
                꼴찌(또는 원하는 순위)를 벌칙 대상으로 설정하면, 매번 다른 결과가 나옵니다. 벌칙 대상이
                여러 명일 때는 &lsquo;몰아주기&rsquo;로 한 명만 추려낼 수도 있습니다.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                💡 <strong>진행 팁:</strong> 술잔을 채워둔 상태에서 경주를 시작하고, 꼴찌가 정해지면
                바로 벌칙을 진행하면 흐름이 끊기지 않습니다.
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. 369 게임 — 집중력과 순발력 대결</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                순서대로 숫자를 외치되, 3·6·9가 들어간 숫자에서는 숫자 대신 박수를 칩니다(예: 13에서는
                박수 한 번, 33에서는 박수 두 번). 틀리거나 박자를 놓치면 벌칙입니다. 도구가 전혀 필요 없고
                인원 제한도 거의 없어 어떤 자리에서든 바로 시작할 수 있는 고전 게임입니다.
              </p>
              <p>
                속도를 점점 올리면 난이도가 급격히 높아져 웃음이 끊이지 않습니다. 변형으로 &lsquo;3의 배수&rsquo;
                규칙을 더하거나, 박수 대신 특정 동작을 지정하면 새로운 재미가 생깁니다.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. 손병호 게임 — 숨은 경험 들춰내기</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                모두 손가락 다섯 개를 펴고 시작합니다. 돌아가며 &ldquo;~해 본 사람 접어&rdquo; 같은 문장을
                말하고, 해당되는 사람은 손가락을 하나 접습니다. 손가락을 모두 접으면 벌칙입니다. 서로의
                의외의 경험을 알게 되는 재미가 커서, 처음 모인 자리에서도 분위기가 금방 풀립니다.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                ⚠️ <strong>주의:</strong> 지나치게 사적이거나 민감한 질문은 피하고, 가볍고 웃긴
                주제 위주로 진행하면 모두가 편하게 즐길 수 있습니다.
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. 초성 게임 — 빠른 두뇌 회전</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                제시어의 초성(예: &lsquo;ㄱㅂ&rsquo;)을 보고 해당하는 단어를 가장 먼저 외치는 사람이 이깁니다.
                주제를 음식, 영화, 연예인 등으로 좁히면 더 치열해집니다. 가장 늦게 답하거나 답을 못 한
                사람이 벌칙을 받습니다. 머리를 써야 해서 술이 적당히 깨는(?) 효과도 있습니다.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">벌칙은 가볍게, 강요는 금물</h2>
            <p className="text-foreground/80 leading-relaxed">
              게임의 핵심은 승부가 아니라 함께 웃는 시간입니다. 술을 못 마시거나 원치 않는 사람에게는
              음료나 다른 가벼운 벌칙으로 대체해 주세요. 벌칙 아이디어가 떠오르지 않는다면 아래
              모음 글이 도움이 됩니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                <Link to="/guides/penalty-ideas" className="text-primary hover:underline">
                  벌칙 아이디어 모음 보러 가기 →
                </Link>
              </li>
              <li>
                <Link to="/guides/team-building" className="text-primary hover:underline">
                  회식·MT 팀빌딩 게임 모음 →
                </Link>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">
              벌칙 대상을 공정하게 정하고 싶다면, 동물 경주로 깔끔하게 끝내보세요.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
            >
              🏃 경주 시작하기
            </Link>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
};

export default GuideDrinkingGames;
