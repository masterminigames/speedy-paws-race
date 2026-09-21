import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideBalanceGame = () => {
  return (
    <GuideLayout
      tag="밸런스 게임"
      title="⚖️ 밸런스 게임 질문 모음 50선 — 극과 극 양자택일"
      intro="정답이 없어 누구나 편하게 참여할 수 있는 밸런스 게임 질문을 주제별로 모았습니다. 술자리, 회식, 커플, MT 어디서나 대화가 폭발하는 것들로 골랐어요."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">밸런스 게임, 이렇게 하면 더 재밌어요</h2>
        <p className="text-foreground/80 leading-relaxed">
          그냥 고르기만 하면 금방 시들해집니다. <strong>고른 이유를 한 명씩 설명하게</strong> 하거나,
          소수 쪽에 선 사람에게 가벼운 벌칙을 주면 훨씬 흥이 납니다. 팽팽하게 갈리는 질문일수록
          토론이 길어지고 서로의 가치관도 알게 되죠.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">😆 일상·취향</h2>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 leading-relaxed">
          <li>평생 치킨만 vs 평생 피자만</li>
          <li>탕수육 부먹 vs 찍먹</li>
          <li>여름에 에어컨 없이 vs 겨울에 난방 없이</li>
          <li>돈 많은데 백수 vs 적당히 벌지만 천직</li>
          <li>매일 지각 vs 매일 야근</li>
          <li>평생 라면만 vs 평생 김밥만</li>
          <li>말 못 하는 하루 vs 못 듣는 하루</li>
          <li>아침형 인간 되기 vs 야식 끊기</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">💘 연애·관계</h2>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 leading-relaxed">
          <li>연락 잘 되는 무심한 사람 vs 연락 느린 다정한 사람</li>
          <li>매일 보는 장거리 없는 연애 vs 가끔 보는 애틋한 연애</li>
          <li>돈 잘 쓰는 애인 vs 알뜰한 애인</li>
          <li>나만 좋아하는 연애 vs 상대만 좋아하는 연애</li>
          <li>화나면 말 안 하는 사람 vs 바로 따지는 사람</li>
          <li>친구 같은 연인 vs 설레는 연인</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">🤔 극한 상황</h2>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 leading-relaxed">
          <li>과거로 돌아가기 vs 미래 보기</li>
          <li>하늘 날기 vs 투명인간 되기</li>
          <li>모든 언어 마스터 vs 모든 악기 마스터</li>
          <li>10억 받고 절친과 절연 vs 그대로 살기</li>
          <li>평생 여름 vs 평생 겨울</li>
          <li>기억력 최고 vs 체력 최고</li>
          <li>유명하지만 욕먹기 vs 무명이지만 편하기</li>
          <li>1년 세계여행 vs 집 한 채</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">🍻 술자리용 (수위 살짝 ↑)</h2>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 leading-relaxed">
          <li>전 애인 소환 vs 흑역사 공개</li>
          <li>첫사랑에게 연락 vs 원수에게 사과</li>
          <li>취중진담 vs 비밀 무덤까지</li>
          <li>친구의 연애 훈수 vs 내 연애 비공개</li>
          <li>단톡방 대화 공개 vs 검색 기록 공개</li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          ⚠️ 수위 높은 질문은 분위기를 봐가며. 부담스러워하는 사람이 있으면 &lsquo;패스&rsquo; 찬스를 주세요.
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">답변 순서 정하기</h2>
        <p className="text-foreground/80 leading-relaxed">
          한 명씩 이유를 말하게 할 때 순서가 애매하면, 동물 경주로 순번을 정해보세요. 꼴찌가 다음 질문을
          고르는 식으로 연결하면 진행이 매끄럽습니다.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/icebreaker-questions" className="text-primary hover:underline">아이스브레이킹 질문 모음 →</Link></li>
          <li><Link to="/guides/drinking-games" className="text-primary hover:underline">술자리 벌칙 게임 추천 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideBalanceGame;
