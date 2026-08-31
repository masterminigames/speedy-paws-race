import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuideFairPicker = () => {
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
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">공정한 선택</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              🎲 제비뽑기·사다리타기 대신 — 공정하게 순서·당첨 정하는 법
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              발표 순서, 당번, 벌칙 대상, 경품 당첨자를 정할 때 &lsquo;누가 정했느냐&rsquo;로 잡음이
              생기기 쉽습니다. 제비뽑기, 사다리타기, 룰렛, 경주 등 대표적인 방법들을 비교하고, 상황별로
              어떤 방식이 가장 공정하고 편리한지 정리했습니다.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">공정한 선택이 왜 중요할까</h2>
            <p className="text-foreground/80 leading-relaxed">
              사람이 직접 지목하거나 가위바위보로 정하면 &lsquo;봐줬다&rsquo;, &lsquo;일부러 걸었다&rsquo;는
              오해가 생기기 쉽습니다. 결과에 모두가 승복하려면 <strong>사람의 개입이 없고, 결과를 미리
              알 수 없어야</strong> 합니다. 아래 방법들은 이 조건을 얼마나 잘 만족하는지에 차이가 있습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">방법별 비교</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>제비뽑기:</strong> 가장 전통적이고 직관적입니다. 다만 종이를 준비해야 하고,
                뽑는 순서에 따라 심리적 부담이 생기며, 몰래 확인 등 조작 여지가 아주 없지는 않습니다.
              </p>
              <p>
                <strong>사다리타기:</strong> 준비가 간단하고 결과가 한눈에 보입니다. 하지만 선을 그리는
                사람이 구조를 조정할 수 있어, 완전한 무작위라고 보긴 어렵습니다.
              </p>
              <p>
                <strong>룰렛:</strong> 돌리는 재미가 있지만, 인원이 많으면 칸이 좁아지고 한 명만 정할 때
                주로 쓰입니다. 순위를 매기긴 어렵습니다.
              </p>
              <p>
                <strong>경주(레이스):</strong> 각자 캐릭터를 맡아 동시에 달리므로 개입 여지가 없고,
                <strong> 1등부터 꼴찌까지 순위가 한 번에 나온다</strong>는 큰 장점이 있습니다. 순서 정하기,
                여러 명 당첨, 벌칙 대상 선정까지 모두 커버됩니다.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">상황별 추천</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
              <li><strong>한 명만 뽑을 때</strong> (당번, 총대): 룰렛 또는 경주 꼴찌</li>
              <li><strong>전체 순서를 정할 때</strong> (발표, 게임 턴): 경주 순위가 가장 편리</li>
              <li><strong>여러 명을 뽑을 때</strong> (벌칙 2~3명): 경주 하위 순위로 지정</li>
              <li><strong>최종 한 명을 가릴 때</strong>: 후보끼리 다시 경주(몰아주기)</li>
            </ul>
            <div className="bg-muted rounded-lg p-4 text-sm">
              💡 Speedy Paws Race는 이 &lsquo;경주&rsquo; 방식을 디지털로 옮긴 도구입니다. 인원과 벌칙
              순위만 정하면 매번 무작위로 순위가 정해져, 누구도 결과에 이의를 달 수 없습니다.
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">함께 보면 좋은 글</h2>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li><Link to="/guides/penalty-ideas" className="text-primary hover:underline">벌칙 아이디어 모음 →</Link></li>
              <li><Link to="/guides/team-building" className="text-primary hover:underline">회식·MT 팀빌딩 게임 →</Link></li>
            </ul>
          </section>

          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">잡음 없이 공정하게 정하고 싶다면, 동물 경주로 끝내보세요.</p>
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

export default GuideFairPicker;
