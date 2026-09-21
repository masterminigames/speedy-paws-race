import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideDrinkingGameRules = () => {
  return (
    <GuideLayout
      tag="게임 규칙"
      title="🍺 인기 술게임 규칙 총정리 — 바니바니부터 눈치게임까지"
      intro="이름은 들어봤는데 규칙이 가물가물한 술게임들. 준비물 없이 바로 할 수 있는 인기 게임들의 규칙과 진행 팁을 한 번에 정리했습니다."
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">🐰 바니바니 (당근당근)</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p>
            시작하는 사람이 &ldquo;바니바니&rdquo;를 외치며 양손을 토끼 귀처럼 흔들고, 동시에 다른 사람의
            이름을 지목하듯 &ldquo;○○바니바니&rdquo;라고 넘깁니다. 지목받은 사람은 &ldquo;바니바니&rdquo;,
            양옆 사람은 &ldquo;당근당근&rdquo;을 외치며 손을 흔듭니다. 박자를 놓치거나 틀리면 벌칙.
          </p>
          <p className="text-sm text-muted-foreground">핵심: 박자를 빠르게 유지할수록 실수 폭발.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">🏢 아파트</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p>
            모두 손을 겹겹이 쌓은 뒤 술래가 숫자를 외칩니다. 맨 아래부터 손을 빼서 다시 위로 올리며
            층을 세고, 술래가 외친 숫자에 해당하는 층에 손이 걸린 사람이 벌칙입니다. 노래 &ldquo;아파트&rdquo;에
            맞춰 하면 더 신납니다.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">👀 눈치게임</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p>
            정해진 순서 없이 아무나 일어서며 &ldquo;1&rdquo;, &ldquo;2&rdquo;… 숫자를 외칩니다. 같은 숫자를
            두 명이 동시에 외치면 그 둘이 벌칙. 마지막까지 남은 한 명도 벌칙입니다. 서로 눈치를 보는 긴장감이
            일품인 게임.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">🔢 369 게임</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p>
            순서대로 숫자를 외치되 3·6·9가 들어간 수에서는 숫자 대신 박수를 칩니다(33은 박수 두 번).
            틀리거나 박자를 놓치면 벌칙. 속도를 올리면 난이도가 급상승합니다.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">🖐️ 손병호 게임 (다섯 고개)</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p>
            모두 손가락 다섯 개를 편 상태로 시작. 돌아가며 &ldquo;~해 본 사람 접어&rdquo;를 말하고 해당되면
            손가락을 접습니다. 다섯 개를 다 접으면 벌칙. 서로의 의외의 경험을 알게 되는 재미가 큽니다.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">🍓 딸기 게임 (숫자 이어 말하기)</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p>
            &ldquo;딸기 하나&rdquo; → &ldquo;딸기 하나 딸기 둘&rdquo; 처럼 앞사람 것을 모두 반복한 뒤 하나를
            추가합니다. 순서가 뒤로 갈수록 외울 게 많아져 실수 확률이 높아집니다. 이름·메뉴 등으로 응용 가능.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">벌칙은 가볍게, 강요는 금물</h2>
        <p className="text-foreground/80 leading-relaxed">
          어떤 게임이든 핵심은 함께 웃는 것입니다. 술을 못 하거나 원치 않는 사람에겐 음료·미션으로 대체하고,
          과음을 유도하는 벌칙은 피하세요. 벌칙 대상을 공정하게 정하고 싶다면 동물 경주가 편리합니다.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/penalty-ideas" className="text-primary hover:underline">벌칙 아이디어 모음 →</Link></li>
          <li><Link to="/guides/drinking-games" className="text-primary hover:underline">술자리 벌칙 게임 추천 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideDrinkingGameRules;
