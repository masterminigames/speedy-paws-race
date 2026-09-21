import { Link } from 'react-router-dom';
import { GuideLayout } from '@/components/GuideLayout';

const GuideOfficeWorkshop = () => {
  return (
    <GuideLayout
      tag="직장·워크숍"
      title="💼 직장인 회의·워크숍 아이스브레이커 — 3분이면 충분"
      intro="워크숍, 팀 회의, 신규 입사자 환영 자리에서 어색함을 풀고 참여를 끌어내는 짧은 아이스브레이커를 모았습니다. 준비물이 거의 없고 3~5분 안에 끝나는 것들입니다."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">왜 아이스브레이커가 필요할까</h2>
        <p className="text-foreground/80 leading-relaxed">
          회의 시작 직후엔 다들 긴장해 발언이 적습니다. 짧은 아이스브레이커 하나면 분위기가 풀리고 이후
          논의 참여도가 눈에 띄게 올라갑니다. 핵심은 <strong>짧고, 부담 없고, 강요하지 않는 것</strong>입니다.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">5분 안에 끝나는 아이스브레이커</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>두 개의 진실, 하나의 거짓:</strong> 각자 자기 얘기 세 개(하나는 거짓)를 말하고 나머지가 거짓 맞히기. 서로의 의외의 면을 알게 됩니다.</p>
          <p><strong>한 단어 체크인:</strong> &ldquo;지금 내 기분을 한 단어로&rdquo; 돌아가며 말하기. 팀 컨디션 파악에도 좋음.</p>
          <p><strong>주말 하이라이트:</strong> 지난 주말 가장 좋았던 순간을 한 문장으로 공유.</p>
          <p><strong>이모지 근황:</strong> 요즘 나를 표현하는 이모지 하나와 이유 말하기.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">팀 빌딩용 (조금 더 긴 것)</h2>
        <div className="space-y-2 text-foreground/80 leading-relaxed">
          <p><strong>공통점 찾기:</strong> 조를 나눠 정해진 시간 안에 조원 전체의 공통점을 최대한 많이 찾기.</p>
          <p><strong>버킷리스트 공유:</strong> 올해 이루고 싶은 것 한 가지씩. 서로 응원하는 분위기가 만들어집니다.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground">발표 순서·역할 정하기</h2>
        <p className="text-foreground/80 leading-relaxed">
          발표 순서, 조 대표, 회식 총무를 정할 때 지목하면 부담을 느끼기 쉽습니다. 각자 동물을 골라 경주로
          정하면 누구도 서운하지 않게, 공정하게 결정됩니다. 큰 화면에 띄우면 다 함께 응원하며 분위기도
          부드러워집니다.
        </p>
        <ul className="list-disc list-inside space-y-1 text-foreground/80">
          <li><Link to="/guides/team-building" className="text-primary hover:underline">회식·MT 팀빌딩 게임 →</Link></li>
          <li><Link to="/guides/fair-picker" className="text-primary hover:underline">공정하게 순서 정하는 법 →</Link></li>
        </ul>
      </section>
    </GuideLayout>
  );
};

export default GuideOfficeWorkshop;
