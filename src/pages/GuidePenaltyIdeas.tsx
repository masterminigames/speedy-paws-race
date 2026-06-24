import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const GuidePenaltyIdeas = () => {
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
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">벌칙</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              🎯 벌칙 아이디어 모음 — 술자리·회식·가족 모임용
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              게임에서 진 사람에게 어떤 벌칙을 줄지 고민될 때 참고하세요. 부담 없이 웃고 넘기는 것부터
              분위기를 확 끌어올리는 것까지, 상황과 강도별로 정리했습니다. 누구도 상처받지 않는 선에서
              즐기는 것이 가장 중요합니다.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">좋은 벌칙의 조건</h2>
            <p className="text-foreground/80 leading-relaxed">
              벌칙은 &lsquo;처벌&rsquo;이 아니라 모두를 웃게 만드는 장치여야 합니다. 신체적으로
              위험하거나, 특정인을 비하하거나, 강요로 느껴지는 벌칙은 분위기를 오히려 식게 만듭니다.
              가장 좋은 벌칙은 당사자도 함께 웃을 수 있고, 짧게 끝나며, 다음 라운드로 자연스럽게
              이어지는 것입니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">😄 가벼운 벌칙 (누구나 부담 없이)</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
              <li>애교 부리기 또는 좋아하는 노래 한 소절 부르기</li>
              <li>옆 사람 칭찬 세 가지 진지하게 말하기</li>
              <li>다음 라운드까지 존댓말/사투리로만 대화하기</li>
              <li>휴대폰 최근 사진 한 장 공개하기</li>
              <li>성대모사 또는 좋아하는 캐릭터 흉내 내기</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">🔥 분위기 띄우는 벌칙 (중간 강도)</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
              <li>즉석 장기자랑 30초</li>
              <li>랜덤 미션 뽑기 (미리 적어둔 쪽지 중 하나 실행)</li>
              <li>다음 게임에서 핸디캡 안고 진행하기</li>
              <li>지목한 사람에게 음료/커피 사기</li>
              <li>그날의 &lsquo;심부름 담당&rsquo; 한 라운드 맡기</li>
            </ul>
            <div className="bg-muted rounded-lg p-4 text-sm">
              💡 <strong>팁:</strong> 벌칙을 미리 쪽지에 적어 통에 넣어두고 뽑게 하면, 정하는 시간이
              줄고 &lsquo;무엇이 나올까&rsquo; 하는 긴장감도 더해집니다.
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">🍻 술자리 전용 벌칙</h2>
            <p className="text-foreground/80 leading-relaxed">
              술자리라면 자연스럽게 음주와 연결되지만, 반드시 대체 선택지를 함께 두세요.
              술을 못 마시거나 원치 않는 사람은 음료나 가벼운 미션으로 대신할 수 있어야 합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
              <li>건배사 즉석으로 만들어 외치기</li>
              <li>다음 잔 따라주는 역할 맡기 (음주 강요 대신)</li>
              <li>무알코올 음료로 &lsquo;원샷 퍼포먼스&rsquo;</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              ⚠️ 음주는 절대 강요하지 마세요. 과도한 음주를 유도하는 벌칙은 피하고, 모두가 즐거운
              선에서 마무리하는 것이 진짜 좋은 모임입니다.
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">👨‍👩‍👧‍👦 가족·아이와 함께하는 벌칙</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 leading-relaxed">
              <li>꿀밤 대신 &lsquo;엉덩이로 이름 쓰기&rsquo;</li>
              <li>설거지/심부름 한 번 도와주기</li>
              <li>가족 한 명씩 안아주며 칭찬하기</li>
              <li>좋아하는 춤 10초 추기</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">벌칙 대상은 어떻게 정할까?</h2>
            <p className="text-foreground/80 leading-relaxed">
              벌칙 게임에서 가장 신경 쓰이는 부분은 &lsquo;공정성&rsquo;입니다. 사람이 직접 뽑으면
              늘 시비가 따라붙죠. 이럴 때 운에 100% 맡기는 동물 경주를 활용하면 누구도 이의를 달 수
              없는 결과가 나옵니다. 꼴찌 한 명만 벌칙을 받게 하거나, 여러 명을 추린 뒤 몰아주기로
              최종 한 명을 가릴 수도 있습니다.
            </p>
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

export default GuidePenaltyIdeas;
