import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideCampingGames = () => {
  return (
    <GuideLayout
      tag="캠핑·여행"
      title="🏕️ 캠핑·여행 가서 하는 게임 모음 — 밤이 즐거워지는"
      intro="캠핑장 모닥불 앞, 펜션 거실, 차 안 이동 시간까지. 도구 없이 즐길 수 있는 여행용 게임을 상황별로 정리했습니다."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">🔥 모닥불·거실에서</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>마피아 게임:</strong> 밤에 마피아가 시민을 지목하고 낮에 토론으로 찾아내는 심리 게임. 캠핑 밤 분위기에 최고. 사회자 한 명만 있으면 됩니다.</p>
          <p><strong>진실 게임:</strong> 돌아가며 솔직한 질문에 답하기. 여행지의 편안한 분위기에서 평소 못 한 이야기가 나옵니다.</p>
          <p><strong>몸으로 말해요:</strong> 제시어를 몸짓으로만 표현해 맞히기. 웃음이 끊이지 않습니다.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">🚗 이동 중(차 안)에서</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>끝말잇기·초성 게임:</strong> 준비물 제로, 남녀노소 가능.</p>
          <p><strong>스무고개:</strong> 조용하지만 몰입도 높아 장거리 이동에 딱.</p>
          <p><strong>지금 지나가는 것 빙고:</strong> 파란 차, 터널, 휴게소 표지판 등을 먼저 외치기.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">☀️ 야외 활동</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>보물찾기:</strong> 간식이나 쪽지를 숨겨두고 찾기. 아이가 있으면 특히 좋아합니다.</p>
          <p><strong>미션 릴레이:</strong> 팀을 나눠 간단한 미션을 수행하며 겨루기.</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
            ⚠️ 야외는 안전이 우선. 어두워지면 조명·구역을 확인하고 무리한 활동은 피하세요.
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">역할·순서 정하기</h2>
        <p className="text-foreground/80 leading-relaxed">
          설거지 담당, 텐트 정리 당번, 라면 끓이는 사람… 캠핑엔 정할 게 많습니다. 각자 동물을 골라 경주로
          꼴찌를 뽑으면 잡음 없이 빠르게 정해집니다.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/mt-games" className="text-primary hover:underline">MT 게임 추천 총정리 →</Link></li>
          <li><Link to="/guides/family-games" className="text-primary hover:underline">가족·아이와 하는 게임 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideCampingGames;
