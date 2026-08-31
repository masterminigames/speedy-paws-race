import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuideFamilyGames = () => {
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
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">가족</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              👨‍👩‍👧‍👦 가족·아이와 함께하는 게임과 벌칙 (명절·모임)
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              명절, 가족 모임, 생일 파티에서 어른과 아이가 함께 즐길 수 있는 게임을 모았습니다.
              나이 차이가 커도 모두 참여할 수 있고, 벌칙도 아이가 상처받지 않는 귀여운 것들로
              골랐습니다.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">온 가족이 즐기려면</h2>
            <p className="text-foreground/80 leading-relaxed">
              가족 게임의 핵심은 &lsquo;세대 차이를 뛰어넘는 단순함&rsquo;입니다. 어린아이도 규칙을 바로
              이해하고, 할머니·할아버지도 부담 없이 참여할 수 있어야 합니다. 또 운이 크게 작용해야
              아이가 어른을 이기는 반전이 생겨 더 즐겁습니다. 벌칙은 애교나 심부름처럼 웃으며 넘길 수
              있는 것으로 준비하세요.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">둘러앉아 하는 게임</h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                <strong>동물 경주:</strong> 각자 좋아하는 동물을 하나씩 고르고 경주를 시작하면, 실력과
                상관없이 순위가 정해집니다. 아이도 어른을 이길 수 있어 온 가족이 화면을 보며 응원하게
                되는, 명절 모임에 딱 맞는 게임입니다. 꼴찌에게 가벼운 벌칙을 걸면 웃음이 끊이지 않습니다.
              </p>
              <p>
                <strong>이구동성:</strong> 여러 명이 동시에 한 글자씩 외치면, 한 명이 그 단어를 맞히는
                게임. 아이들이 특히 좋아하고 왁자지껄한 재미가 있습니다.
              </p>
              <p>
                <strong>스무고개:</strong> 한 사람이 사물을 떠올리면 나머지가 &lsquo;예/아니오&rsquo; 질문으로
                맞혀 갑니다. 조용하지만 몰입도가 높아 식사 후 대화 게임으로 좋습니다.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">아이도 웃는 귀여운 벌칙</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
              <li>좋아하는 동물 흉내 내기</li>
              <li>가족 한 명씩 안아주며 &ldquo;사랑해&rdquo; 외치기</li>
              <li>엉덩이로 이름 쓰기</li>
              <li>10초 댄스 타임</li>
              <li>다음 판까지 애교 담당하기</li>
            </ul>
            <div className="bg-muted rounded-lg p-4 text-sm">
              💡 <strong>팁:</strong> 아이가 벌칙을 부끄러워하면 어른이 함께 해주세요. 같이 하면
              놀이가 되고, 혼자 시키면 벌이 됩니다.
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">함께 보면 좋은 글</h2>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              <li><Link to="/guides/penalty-ideas" className="text-primary hover:underline">벌칙 아이디어 모음 →</Link></li>
              <li><Link to="/guides/fair-picker" className="text-primary hover:underline">공정하게 순서·당첨 정하는 법 →</Link></li>
            </ul>
          </section>

          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">온 가족이 함께 즐기는 동물 경주, 지금 시작해보세요.</p>
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

export default GuideFamilyGames;
