import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideKidsBirthday = () => {
  return (
    <GuideLayout
      tag="어린이"
      title="🎂 어린이 생일파티 게임 모음 — 집에서 신나게"
      intro="아이들 생일파티나 모임에서 진행하기 좋은 게임을 모았습니다. 규칙이 쉽고, 준비물이 적고, 다치지 않으면서 다 함께 웃을 수 있는 것들로 골랐어요."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">진행할 때 기억할 점</h2>
        <p className="text-foreground/80 leading-relaxed">
          아이들 게임은 <strong>규칙이 아주 단순</strong>해야 하고, 지는 아이가 창피하지 않도록
          벌칙은 귀엽고 가벼워야 합니다. 승패보다 &lsquo;모두 한 번씩 주인공&rsquo;이 되는 구성이 좋아요.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">몸으로 하는 게임</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>무궁화 꽃이 피었습니다:</strong> 고전이지만 아이들이 가장 좋아하는 게임 중 하나.</p>
          <p><strong>의자 뺏기:</strong> 음악이 멈추면 의자에 앉기. 의자를 하나씩 빼며 진행.</p>
          <p><strong>얼음땡:</strong> 술래에게 잡히기 전 &ldquo;얼음&rdquo;을 외치면 멈춤, 친구가 &ldquo;땡&rdquo; 해주면 다시 움직임.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">앉아서 하는 게임</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>스피드 퀴즈:</strong> 동물·과일 등 쉬운 주제로 설명하고 맞히기.</p>
          <p><strong>이구동성:</strong> 여러 명이 한 글자씩 동시에 외치면 한 명이 단어 맞히기.</p>
          <p><strong>쿵쿵따:</strong> 세 글자 단어로 리듬 맞춰 끝말잇기.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">아이도 웃는 귀여운 벌칙</h2>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 leading-relaxed">
          <li>좋아하는 동물 흉내 내기</li>
          <li>10초 댄스 타임</li>
          <li>노래 한 소절 부르기</li>
          <li>친구 세 명 칭찬하기</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">순서·팀 정하기</h2>
        <p className="text-foreground/80 leading-relaxed">
          &ldquo;누가 먼저 할래&rdquo;로 다투지 않게, 각자 좋아하는 동물을 골라 경주로 순서를 정해보세요.
          아이들이 화면을 보며 자기 동물을 응원하는 것만으로도 즐거워합니다.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/family-games" className="text-primary hover:underline">가족·아이와 하는 게임 →</Link></li>
          <li><Link to="/guides/school-recreation" className="text-primary hover:underline">학교 레크리에이션 게임 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideKidsBirthday;
