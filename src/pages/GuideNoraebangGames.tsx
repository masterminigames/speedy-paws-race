import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideNoraebangGames = () => {
  return (
    <GuideLayout
      tag="노래방"
      title="🎤 노래방 게임 & 벌칙 모음 — 2차가 즐거워지는"
      intro="노래만 부르면 금방 지루해지는 노래방. 순서를 정하고, 가벼운 벌칙을 더해 분위기를 끝까지 살리는 게임과 아이디어를 모았습니다."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">노래방에서 하는 게임</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>랜덤 선곡 룰렛:</strong> 번호를 무작위로 눌러 나온 곡을 무조건 부르기. 예측 불가라 웃음 폭발.</p>
          <p><strong>이어 부르기 릴레이:</strong> 한 소절씩 돌아가며 부르다가 가사·박자 틀리면 벌칙.</p>
          <p><strong>점수 내기:</strong> 채점 기능으로 최고점·최저점을 가려 벌칙·상품 연결.</p>
          <p><strong>제목 이어 부르기:</strong> 앞 노래 제목의 끝 글자로 시작하는 노래 부르기(끝말잇기 응용).</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">노래방 벌칙 아이디어</h2>
        <ul className="list-disc list-inside space-y-1.5 text-foreground/80 leading-relaxed">
          <li>다음 곡 무조건 신청곡(남이 골라준 곡) 부르기</li>
          <li>탬버린·마라카스로 한 곡 내내 반주 담당</li>
          <li>일어서서 안무까지 완벽 재현</li>
          <li>발라드를 트로트 창법으로(또는 반대로) 부르기</li>
          <li>다음 라운드 음료·간식 사 오기</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">부를 순서 정하기</h2>
        <p className="text-foreground/80 leading-relaxed">
          노래방에서 가장 애매한 게 &lsquo;누가 먼저 부를지&rsquo;입니다. 서로 미루다 시간만 가죠. 각자 동물을
          골라 경주를 돌려 순서를 정하거나, 꼴찌가 다음 곡 부르기·벌칙 담당을 맡는 식으로 정하면
          진행이 매끄럽고 재밌어집니다.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/penalty-ideas" className="text-primary hover:underline">벌칙 아이디어 모음 →</Link></li>
          <li><Link to="/guides/year-end-games" className="text-primary hover:underline">송년회·회식 게임 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideNoraebangGames;
