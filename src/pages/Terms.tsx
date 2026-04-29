import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const Terms = () => {
  const effectiveDate = '2026년 3월 19일';
  const siteName = 'Speedy Paws Race (커피 달리기 경주)';
  const siteUrl = 'coffeeracing.co.kr';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full py-4 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← 게임으로 돌아가기
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <span className="text-sm font-semibold text-foreground">🐾 Speedy Paws Race</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Title */}
          <section className="space-y-3">
            <h1 className="text-3xl font-bold text-foreground">이용약관</h1>
            <p className="text-sm text-muted-foreground">시행일: {effectiveDate}</p>
            <p className="text-foreground/80 leading-relaxed">
              본 이용약관(이하 "약관")은 {siteName}(이하 "서비스")의 이용 조건 및 절차,
              이용자와 서비스 제공자 간의 권리와 의무, 기타 필요한 사항을 규정합니다.
              서비스를 이용하시면 본 약관에 동의한 것으로 간주됩니다.
            </p>
          </section>

          {/* 1. 서비스 개요 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제1조 (서비스 개요)
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                {siteName}은 웹 브라우저에서 즐길 수 있는 온라인 동물 달리기 경주 게임입니다.
                이용자는 별도의 회원가입이나 로그인 없이 서비스를 이용할 수 있습니다.
              </p>
              <p>본 서비스는 다음과 같은 기능을 제공합니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>2~15명이 참여 가능한 동물 달리기 경주 게임</li>
                <li>15종의 귀여운 동물 캐릭터 선택 기능</li>
                <li>벌칙 시스템 (꼴찌 또는 특정 순위에 벌칙 부여)</li>
                <li>몰아주기 기능 (벌칙 대상자끼리 재경주)</li>
                <li>돌멩이 이벤트 (50% 확률로 경주 후반 역전 이벤트)</li>
                <li>시즌 이벤트 (벚꽃 날리기 등 계절별 시각 효과)</li>
              </ul>
            </div>
          </section>

          {/* 2. 이용 조건 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제2조 (이용 조건)
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                본 서비스는 인터넷에 접속할 수 있는 환경과 최신 웹 브라우저(Chrome, Safari, Firefox, Edge 등)가
                있으면 누구나 무료로 이용할 수 있습니다.
              </p>
              <p>
                본 서비스는 오락 및 친목 목적으로 제공되며, 도박이나 금전적 이익을 목적으로 하지 않습니다.
                게임 결과는 순수한 난수(랜덤)에 의해 결정되며, 어떤 방법으로도 결과를 예측하거나 조작할 수 없습니다.
              </p>
              <p>
                이용자는 서비스를 이용하면서 다음의 행위를 하여서는 안 됩니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>서비스의 안정적인 운영을 방해하는 행위</li>
                <li>다른 이용자의 정상적인 이용을 방해하는 행위</li>
                <li>서비스를 이용하여 불법적인 활동을 하는 행위</li>
                <li>서비스의 소스 코드를 무단으로 변경, 복제, 배포하는 행위</li>
                <li>자동화된 수단으로 서비스에 접근하는 행위</li>
              </ul>
            </div>
          </section>

          {/* 3. 게임 규칙 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제3조 (게임 규칙 및 결과)
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                게임의 모든 결과는 프로그램 내부의 난수 생성 알고리즘에 의해 결정됩니다.
                서비스 제공자는 게임 결과를 조작하지 않으며, 특정 캐릭터에 유리한 설정을 적용하지 않습니다.
              </p>
              <p>
                벌칙 시스템은 이용자가 자유롭게 설정할 수 있으며, 설정된 벌칙의 실행 여부 및 내용은
                이용자 간의 합의에 따릅니다. 서비스 제공자는 벌칙의 실행에 대한 어떠한 책임도 지지 않습니다.
              </p>
              <p>
                몰아주기 기능은 벌칙 인원이 2명 이상일 때 활성화되며, 벌칙 대상자끼리 다시 한 번 경주하여
                최종 꼴찌 1명을 결정합니다. 이 기능의 이용 여부는 참가자 간의 합의에 따릅니다.
              </p>
            </div>
          </section>

          {/* 4. 광고 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제4조 (광고 서비스)
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                본 서비스는 무료로 제공되며, 운영비 충당을 위해 Google AdSense를 통한 광고가 표시됩니다.
                광고의 내용은 Google의 광고 정책에 따라 결정되며, 서비스 제공자가 직접 선택하지 않습니다.
              </p>
              <p>
                광고로 인해 발생하는 제3자와의 거래 또는 분쟁에 대해 서비스 제공자는 관여하거나 책임을 지지 않습니다.
              </p>
            </div>
          </section>

          {/* 5. 지적재산권 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제5조 (지적재산권)
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                본 서비스의 디자인, 소스 코드, 게임 로직, 콘텐츠 등 일체의 지적재산권은
                서비스 제공자에게 귀속됩니다.
              </p>
              <p>
                이용자는 서비스 제공자의 사전 서면 동의 없이 서비스의 전부 또는 일부를
                복제, 수정, 배포, 전송, 출판, 방송 또는 기타 방법으로 이용할 수 없습니다.
              </p>
            </div>
          </section>

          {/* 6. 면책 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제6조 (면책 조항)
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>서비스 제공자는 다음의 경우에 대해 책임을 지지 않습니다:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>천재지변, 서버 장애 등 불가항력으로 인한 서비스 중단</li>
                <li>이용자의 기기 환경 또는 네트워크 문제로 인한 서비스 이용 장애</li>
                <li>이용자 간의 게임 결과에 따른 분쟁</li>
                <li>벌칙 시스템 이용에 따른 이용자 간의 분쟁 및 손해</li>
                <li>제3자 광고를 통해 발생하는 거래 및 손해</li>
              </ul>
              <p>
                서비스 제공자는 서비스의 안정적인 운영을 위해 최선을 다하지만,
                서비스의 지속적 제공을 보장하지는 않습니다. 서비스는 사전 고지 없이
                변경, 일시 중단 또는 종료될 수 있습니다.
              </p>
            </div>
          </section>

          {/* 7. 약관 변경 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제7조 (약관의 변경)
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                서비스 제공자는 필요한 경우 관련 법령을 위반하지 않는 범위 내에서 본 약관을 변경할 수 있습니다.
                약관이 변경될 경우 시행일 7일 전에 사이트 공지를 통해 안내합니다.
              </p>
              <p>
                변경된 약관에 동의하지 않는 이용자는 서비스 이용을 중단할 수 있으며,
                변경 약관 시행 이후 서비스를 계속 이용할 경우 변경 약관에 동의한 것으로 간주합니다.
              </p>
            </div>
          </section>

          {/* 8. 문의 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              제8조 (문의처)
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border space-y-2 text-sm text-foreground/80">
              <p><strong>서비스명:</strong> {siteName}</p>
              <p><strong>사이트:</strong> {siteUrl}</p>
              <p><strong>이메일:</strong> jinokiing@gmail.com</p>
              <p className="text-xs text-muted-foreground mt-2">
                약관 관련 문의사항이 있으시면 위 이메일로 연락주시기 바랍니다.
              </p>
            </div>
          </section>

          {/* Effective Date */}
          <section className="bg-muted rounded-xl p-6 text-sm text-muted-foreground space-y-1">
            <p>본 이용약관은 <strong>{effectiveDate}</strong>부터 적용됩니다.</p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
