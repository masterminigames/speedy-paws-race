import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideCoupleGames = () => {
  return (
    <GuideLayout
      tag="커플"
      title="💑 커플이 하기 좋은 게임 — 데이트가 심심할 때"
      intro="집 데이트, 여행, 기념일에 둘이서 즐기기 좋은 게임을 모았습니다. 서로를 더 알아가고, 가벼운 내기로 소소한 재미를 더할 수 있는 것들입니다."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">둘이서 하는 대화 게임</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>커플 밸런스 게임:</strong> &ldquo;연락 잘 되는 무심한 사람 vs 연락 느린 다정한 사람&rdquo; 같은 양자택일로 서로의 생각을 확인. 답이 갈리면 이유를 듣는 게 포인트.</p>
          <p><strong>20문 20답:</strong> 첫 데이트 기억, 서운했던 순간, 고마운 점 등을 번갈아 묻고 답하기. 평소 못 했던 대화를 자연스럽게 꺼낼 수 있습니다.</p>
          <p><strong>스무고개:</strong> 한 명이 사물·인물을 떠올리면 상대가 예/아니오 질문으로 맞히기. 이동 중이나 기다릴 때 딱.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">가벼운 내기 게임</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>끝말잇기·초성 게임:</strong> 진 사람이 오늘 커피 사기, 설거지 하기 같은 소소한 벌칙.</p>
          <p><strong>손병호 게임(둘이 버전):</strong> 손가락 다섯 개로 &ldquo;~해 본 사람 접어&rdquo;. 연애 히스토리를 알아가는 재미가 있습니다.</p>
          <p><strong>가위바위보 이색 벌칙:</strong> 진 사람이 애교 부리기, 상대 칭찬 세 가지 하기 등.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">데이트 코스·메뉴 정하기</h2>
        <p className="text-foreground/80 leading-relaxed">
          &ldquo;오늘 뭐 먹지&rdquo;, &ldquo;누가 고를까&rdquo;로 실랑이할 때는 운에 맡기는 게 제일 깔끔합니다.
          각자 동물을 골라 경주를 돌려 이긴 사람이 메뉴를 정하거나, 진 사람이 오늘 계산하는 식으로 정하면
          서로 기분 상할 일 없이 결정됩니다.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/balance-game" className="text-primary hover:underline">밸런스 게임 질문 모음 →</Link></li>
          <li><Link to="/guides/icebreaker-questions" className="text-primary hover:underline">대화 질문 모음 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideCoupleGames;
