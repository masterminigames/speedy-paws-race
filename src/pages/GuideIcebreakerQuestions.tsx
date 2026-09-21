import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideIcebreakerQuestions = () => {
  return (
    <GuideLayout
      tag="아이스브레이킹"
      title="🧊 아이스브레이킹 질문 모음 40선 — 어색함 깨는 대화 주제"
      intro="처음 만난 사이, 오랜만에 모인 자리에서 대화가 끊길 때 꺼내기 좋은 질문을 상황별로 모았습니다. 가볍게 답할 수 있으면서도 서로를 알아가게 해주는 것들로 골랐어요."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">좋은 아이스브레이킹 질문의 조건</h2>
        <p className="text-foreground/80 leading-relaxed">
          어색함을 푸는 질문은 세 가지를 지켜야 합니다. 답이 어렵지 않아 누구나 바로 말할 수 있을 것,
          너무 사적이거나 민감하지 않을 것, 그리고 답에서 자연스럽게 다음 대화가 이어질 것. 아래 질문들은
          이 기준에 맞춰 &lsquo;가벼운 것 → 조금 더 깊은 것&rsquo; 순으로 정리했습니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">가볍게 시작하는 질문 (10)</h2>
        <ol className="list-decimal list-inside space-y-1.5 text-foreground/80 leading-relaxed">
          <li>요즘 가장 자주 듣는 노래는?</li>
          <li>최근에 산 것 중 제일 만족스러운 건?</li>
          <li>점심으로 절대 안 질리는 메뉴는?</li>
          <li>휴대폰 배경화면이 뭐예요?</li>
          <li>주말엔 주로 뭘 하며 보내요?</li>
          <li>최근에 정주행한 드라마나 영화 있어요?</li>
          <li>커피 vs 차, 어느 쪽?</li>
          <li>여행 간다면 산 vs 바다?</li>
          <li>아침형 인간 vs 저녁형 인간?</li>
          <li>가장 최근에 웃긴 일은 뭐였어요?</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">서로 알아가는 질문 (15)</h2>
        <ol className="list-decimal list-inside space-y-1.5 text-foreground/80 leading-relaxed" start={11}>
          <li>어릴 때 장래희망은 뭐였어요?</li>
          <li>숨은 특기나 취미가 있다면?</li>
          <li>인생 음식 하나만 고른다면?</li>
          <li>스트레스 풀 때 나만의 방법은?</li>
          <li>최근에 도전해 본 새로운 것은?</li>
          <li>가장 좋아하는 계절과 이유는?</li>
          <li>없으면 못 사는 물건 하나는?</li>
          <li>가보고 싶은 나라나 도시는?</li>
          <li>어떤 칭찬을 들을 때 가장 기분 좋아요?</li>
          <li>학창 시절 별명이 있었어요?</li>
          <li>요즘 배우고 싶은 게 있다면?</li>
          <li>인생 영화 또는 인생 책은?</li>
          <li>MBTI를 믿는 편이에요?</li>
          <li>하루가 25시간이면 그 1시간에 뭘 할래요?</li>
          <li>최근 가장 뿌듯했던 순간은?</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">분위기 무르익었을 때 (15)</h2>
        <ol className="list-decimal list-inside space-y-1.5 text-foreground/80 leading-relaxed" start={26}>
          <li>로또 1등에 당첨되면 가장 먼저 할 일은?</li>
          <li>과거로 딱 하루 돌아갈 수 있다면 언제로?</li>
          <li>무인도에 하나만 가져간다면?</li>
          <li>초능력 하나를 가질 수 있다면?</li>
          <li>내 인생의 BGM을 고른다면?</li>
          <li>10년 뒤 내 모습을 상상하면?</li>
          <li>가장 감명 깊었던 여행지는?</li>
          <li>다시 태어나면 어떤 직업을 갖고 싶어요?</li>
          <li>인생에서 제일 잘한 결정은?</li>
          <li>요즘 가장 큰 관심사는?</li>
          <li>나를 동물로 표현하면?</li>
          <li>절대 포기 못 하는 나만의 루틴은?</li>
          <li>최근에 누군가에게 고마웠던 일은?</li>
          <li>버킷리스트 1순위는?</li>
          <li>오늘 이 자리에서 알게 된 사람 중 인상 깊은 사람은? (분위기 마무리용)</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">질문 순서, 이렇게 정하면 편해요</h2>
        <p className="text-foreground/80 leading-relaxed">
          인원이 많으면 &lsquo;누가 먼저 답할지&rsquo;부터 정하느라 시간이 갑니다. 각자 동물을 하나 골라
          경주를 돌려 순서를 정하면 잡음 없이 빠르게 진행됩니다. 꼴찌가 질문을 고르거나, 1등부터 답하는
          식으로 규칙을 붙이면 게임처럼 즐길 수 있어요.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/balance-game" className="text-primary hover:underline">밸런스 게임 질문 모음 →</Link></li>
          <li><Link to="/guides/team-building" className="text-primary hover:underline">회식·MT 팀빌딩 게임 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideIcebreakerQuestions;
