import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuideTeamBuilding = () => {
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
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">팀빌딩</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              🤝 회식·MT 팀빌딩 아이스브레이킹 게임 모음
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              새로 모인 팀, 오랜만에 만난 동료들과의 어색함을 푸는 데는 게임만 한 것이 없습니다.
              회식, MT, 워크숍, 동아리 모임 등에서 바로 활용할 수 있는 아이스브레이킹 게임을
              인원수와 상황별로 정리했습니다.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">아이스브레이킹, 왜 필요할까?</h2>
            <p className="text-foreground/80 leading-relaxed">
              사람은 낯선 환경에서 본능적으로 긴장합니다. 특히 직급이나 나이 차이가 있는 자리라면
              먼저 말을 꺼내기가 쉽지 않죠. 가벼운 게임은 이 심리적 장벽을 자연스럽게 낮춰 줍니다.
              함께 웃고, 가벼운 승부를 겨루는 경험은 짧은 시간 안에 &lsquo;우리&rsquo;라는 감각을
              만들어 냅니다. 중요한 것은 누구도 소외되지 않고, 부담을 느끼지 않게 진행하는 것입니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">소규모(2~6명)에 좋은 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>두 개의 진실, 하나의 거짓:</strong> 각자 자신에 대한 세 가지 문장을 말하는데,
                그중 하나는 거짓입니다. 나머지가 거짓을 맞히는 게임이죠. 서로의 의외의 면을 알게 되어
                대화의 물꼬가 트입니다.
              </p>
              <p>
                <strong>밸런스 게임:</strong> &ldquo;평생 라면만 vs 평생 치킨만&rdquo; 같은 양자택일
                질문에 각자 답하고 이유를 나눕니다. 정답이 없어 누구나 편하게 참여할 수 있습니다.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">중·대규모(7명 이상)에 좋은 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>동물 경주로 순서·역할 정하기:</strong> 인원이 많을수록 &lsquo;누가 먼저 할지&rsquo;,
                &lsquo;누가 당첨될지&rsquo;를 정하는 데 시간이 걸립니다. 이때 각자 동물을 하나씩 맡아 경주를
                돌리면 순식간에 순위가 정해집니다. 발표 순서, 팀 나누기, 간단한 미션 당첨자 선정 등
                다양하게 활용할 수 있어 진행자의 부담이 크게 줄어듭니다.
              </p>
              <p>
                <strong>이름 이어 말하기:</strong> 첫 사람이 자기 이름을 말하면, 다음 사람은 앞사람 이름을
                모두 부른 뒤 자기 이름을 더합니다. 인원이 많을수록 난이도가 올라가고, 자연스럽게 서로의
                이름을 외우게 되는 효과가 있습니다.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                💡 <strong>진행 팁:</strong> 큰 화면이나 빔프로젝터에 경주 화면을 띄우면 모두가 함께
                응원하며 몰입할 수 있어 단체 모임에서 특히 효과적입니다.
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">성공적인 진행을 위한 체크리스트</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
              <li>규칙은 30초 안에 설명할 수 있을 만큼 단순하게</li>
              <li>한 게임이 너무 길어지지 않도록 시간 제한 두기</li>
              <li>이기는 사람보다 &lsquo;함께 웃는&rsquo; 분위기를 우선하기</li>
              <li>참여를 강요하지 말고, 빠지고 싶은 사람은 응원단으로</li>
              <li>벌칙은 가볍고 유쾌한 것으로 (다음 글 참고)</li>
            </ul>
          </section>

          {/* Related */}
          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">함께 보면 좋은 글</h2>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li>
                <Link to="/guides/drinking-games" className="text-primary hover:underline">
                  술자리 벌칙 게임 추천 BEST →
                </Link>
              </li>
              <li>
                <Link to="/guides/penalty-ideas" className="text-primary hover:underline">
                  벌칙 아이디어 모음 →
                </Link>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">
              순서 정하기, 당첨자 뽑기가 고민이라면 동물 경주로 한 번에 해결하세요.
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

export default GuideTeamBuilding;
