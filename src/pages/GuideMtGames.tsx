import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuideMtGames = () => {
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
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">단체 게임</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              🏕️ MT 게임 추천 — 실내·야외 단체 게임 총정리
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              MT의 성패는 결국 &lsquo;얼마나 재미있게 놀았는가&rsquo;로 갈립니다. 처음 만난 신입생부터
              오랜 동기들까지 모두가 어울릴 수 있는 게임을 실내용과 야외용으로 나눠 정리했습니다.
              준비물과 인원수, 진행 팁까지 함께 담았어요.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">MT 게임을 고를 때 체크할 것</h2>
            <p className="text-foreground/80 leading-relaxed">
              MT는 인원이 많고, 서로 친밀도도 제각각입니다. 그래서 게임을 고를 때는 세 가지를 봐야 합니다.
              첫째, 많은 인원이 동시에 참여하거나 빠르게 순번이 돌아가는가. 둘째, 몸을 크게 쓰지 않아도
              되는가(부상 위험). 셋째, 처음 보는 사람도 부담 없이 낄 수 있는가. 아래 게임들은 이 기준을
              고려해 골랐습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">실내에서 하기 좋은 MT 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>마피아 게임:</strong> 밤이 되면 마피아가 시민을 지목하고, 낮에는 토론으로 마피아를
                찾아내는 심리 게임입니다. 8명 이상일 때 특히 재미있고, 사회자 한 명만 있으면 몇 시간도
                즐길 수 있습니다.
              </p>
              <p>
                <strong>몸으로 말해요:</strong> 제시어를 말 없이 몸짓으로만 표현해 팀원이 맞히는 게임.
                준비물이 거의 없고, 웃음이 끊이지 않아 분위기를 단숨에 끌어올립니다.
              </p>
              <p>
                <strong>동물 경주로 벌칙·순서 정하기:</strong> 게임 사이사이 &lsquo;누가 심부름 갈지&rsquo;,
                &lsquo;누가 벌칙 받을지&rsquo;를 정할 때 각자 동물을 골라 경주를 돌리면 잡음 없이 빠르게
                결정됩니다. 큰 화면에 띄우면 다 같이 응원하며 즐길 수 있습니다.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">야외에서 하기 좋은 MT 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>이어달리기·미션 릴레이:</strong> 팀을 나눠 구간마다 간단한 미션(신발 신고 뛰기,
                등에 물건 얹고 걷기 등)을 수행하며 달리는 게임. 몸을 움직이며 팀워크를 다지기에 좋습니다.
              </p>
              <p>
                <strong>보물찾기:</strong> 쪽지나 작은 상품을 숨겨두고 찾는 고전 게임. 야외 공간이 넓다면
                난이도를 높여 팀 대항으로 진행할 수 있습니다.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                💡 <strong>안전 팁:</strong> 야외 게임은 부상 위험이 있으니 무리한 몸싸움은 피하고,
                준비운동과 안전 구역 확인을 먼저 해주세요.
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">함께 보면 좋은 글</h2>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li><Link to="/guides/team-building" className="text-primary hover:underline">회식·MT 팀빌딩 아이스브레이킹 게임 →</Link></li>
              <li><Link to="/guides/penalty-ideas" className="text-primary hover:underline">벌칙 아이디어 모음 →</Link></li>
            </ul>
          </section>

          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">순서·당첨자 정하기가 고민이라면 동물 경주로 한 번에 해결하세요.</p>
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

export default GuideMtGames;
