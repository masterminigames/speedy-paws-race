import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuideSchoolRecreation = () => {
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
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">레크리에이션</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              🏫 학교 레크리에이션·수련회 단체 게임 모음
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              학급 활동, 수련회, 캠프, 동아리 행사에서 진행자가 바로 쓸 수 있는 단체 게임을 모았습니다.
              도구가 거의 필요 없고 규칙이 단순해, 초등학생부터 고등학생·대학생까지 두루 활용할 수
              있는 것들로 골랐습니다.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">진행자가 기억할 3가지</h2>
            <p className="text-foreground/80 leading-relaxed">
              단체 레크리에이션은 &lsquo;규칙 설명 시간&rsquo;이 짧아야 성공합니다. 학생 수가 많을수록
              규칙이 복잡하면 집중이 흐트러지기 때문입니다. 또한 승패보다 <strong>모두가 참여하는
              구조</strong>가 중요하고, 벌칙은 창피를 주기보다 웃으며 넘길 수 있는 것으로 준비해야 합니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">교실·실내에서 하는 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>가위바위보 왕 뽑기:</strong> 진 사람이 이긴 사람 뒤에 붙어 기차를 만들며, 마지막에
                가장 긴 기차의 맨 앞이 우승. 순식간에 반 전체가 하나로 이어져 분위기가 좋아집니다.
              </p>
              <p>
                <strong>스피드 퀴즈:</strong> 조를 나눠 제시어를 설명하고 맞히는 게임. 교과 내용으로도
                응용할 수 있어 수업 활동으로도 좋습니다.
              </p>
              <p>
                <strong>동물 경주로 발표·역할 정하기:</strong> 조 대표, 발표 순서, 청소 당번 등을 정할 때
                각 조가 동물을 골라 경주하면 공정하게 정해집니다. 화면을 함께 보며 응원하는 재미도 있어
                학생들이 결과에 승복하기 쉽습니다.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">운동장·야외에서 하는 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>단체 줄넘기·이인삼각:</strong> 협동이 필요한 활동으로 팀워크를 기르기에 좋습니다.
                안전을 위해 바닥 상태와 준비운동을 꼭 확인하세요.
              </p>
              <p>
                <strong>보물찾기·미션 투어:</strong> 구역마다 미션 쪽지를 숨겨 조별로 수행하게 하면
                넓은 공간을 활용해 오래 즐길 수 있습니다.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                ⚠️ 야외 활동은 인솔 교사·진행자가 안전 구역과 인원 점검을 수시로 해주세요.
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">함께 보면 좋은 글</h2>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li><Link to="/guides/mt-games" className="text-primary hover:underline">MT 게임 추천 총정리 →</Link></li>
              <li><Link to="/guides/fair-picker" className="text-primary hover:underline">공정하게 순서·당첨 정하는 법 →</Link></li>
            </ul>
          </section>

          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">조 대표·발표 순서 정하기, 동물 경주로 공정하게 해보세요.</p>
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

export default GuideSchoolRecreation;
