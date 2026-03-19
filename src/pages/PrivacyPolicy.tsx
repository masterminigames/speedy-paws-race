import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const PrivacyPolicy = () => {
  const effectiveDate = '2026년 3월 19일';
  const siteName = 'Speedy Paws Race';

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
            <h1 className="text-3xl font-bold text-foreground">개인정보처리방침</h1>
            <p className="text-sm text-muted-foreground">시행일: {effectiveDate}</p>
            <p className="text-foreground/80 leading-relaxed">
              {siteName}(이하 "당 사이트")은 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 및
              관련 법령을 준수합니다. 본 개인정보처리방침은 당 사이트가 수집하는 정보의 종류,
              수집 방법, 이용 목적, 보호 조치 등을 안내합니다.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              1. 수집하는 개인정보의 항목 및 수집 방법
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                당 사이트는 기본적으로 회원가입 없이 이용 가능하며, 별도의 개인 식별 정보를
                직접 수집하지 않습니다.
              </p>
              <p>
                다만, 서비스 품질 향상 및 광고 서비스 제공을 위하여 아래와 같은 정보가
                자동으로 수집될 수 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                <li>IP 주소</li>
                <li>브라우저 유형 및 버전</li>
                <li>운영체제 정보</li>
                <li>방문 페이지 및 체류 시간</li>
                <li>쿠키 및 유사 추적 기술을 통한 정보</li>
                <li>광고 클릭 및 노출 데이터 (Google AdSense)</li>
              </ul>
              <p className="text-sm">
                위 정보는 이용자 개인을 특정하는 데 사용되지 않으며, 서비스 분석 및 광고 최적화
                목적으로만 활용됩니다.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              2. 개인정보의 수집 및 이용 목적
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>수집된 정보는 다음 목적으로 이용됩니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>서비스 운영 및 안정적인 게임 환경 제공</li>
                <li>서비스 이용 현황 분석 및 통계 작성</li>
                <li>맞춤형 광고 제공 (Google AdSense를 통한 광고)</li>
                <li>서비스 품질 개선 및 신규 기능 개발</li>
                <li>법적 의무 이행 및 분쟁 해결</li>
              </ul>
            </div>
          </section>

          {/* Section 3 - Google AdSense */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              3. Google AdSense 및 제3자 광고
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-sm">
              <p>
                당 사이트는 Google LLC에서 제공하는 <strong>Google AdSense</strong> 광고 서비스를 사용합니다.
                Google AdSense는 쿠키를 사용하여 이용자의 이전 방문 기록을 기반으로 맞춤형 광고를
                제공할 수 있습니다.
              </p>
              <p>
                Google의 광고 쿠키 사용 방식에 대한 자세한 내용은
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline mx-1"
                >
                  Google 개인정보처리방침
                </a>
                에서 확인하실 수 있습니다.
              </p>
              <p>
                이용자는 Google의
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline mx-1"
                >
                  광고 설정 페이지
                </a>
                를 통해 맞춤형 광고 수신을 거부할 수 있습니다.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-medium mb-1">Google AdSense 관련 안내:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Google은 제3자 쿠키를 사용하여 사이트 방문자에게 광고를 게재합니다</li>
                  <li>광고는 이전 방문 기록 또는 다른 사이트 방문 정보를 기반으로 표시될 수 있습니다</li>
                  <li>이용자는 <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.aboutads.info</a>를 통해 맞춤 광고를 비활성화할 수 있습니다</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              4. 쿠키(Cookie) 사용에 관한 안내
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                쿠키는 웹사이트가 이용자의 브라우저에 저장하는 작은 텍스트 파일입니다.
                당 사이트와 제3자 광고 서비스는 다음과 같은 목적으로 쿠키를 사용합니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>사이트 방문 분석 (Google Analytics 등)</li>
                <li>광고 성과 측정</li>
                <li>맞춤형 광고 제공</li>
              </ul>
              <p>
                대부분의 웹 브라우저는 기본적으로 쿠키를 허용하도록 설정되어 있으나,
                브라우저 설정을 변경하여 쿠키를 거부하거나 삭제할 수 있습니다.
                단, 쿠키를 비활성화할 경우 일부 서비스 이용이 제한될 수 있습니다.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              5. 개인정보의 보유 및 이용 기간
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                당 사이트는 개인정보 수집 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                자동 수집된 로그 데이터는 최대 6개월간 보관 후 삭제됩니다.
              </p>
              <p>
                단, 관계 법령에 의해 보존해야 하는 경우 법령에서 정한 기간 동안 보관됩니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>전자상거래 기록: 5년 (전자상거래법)</li>
                <li>소비자 불만 처리 기록: 3년 (전자상거래법)</li>
                <li>접속 로그 기록: 3개월 (통신비밀보호법)</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              6. 개인정보의 제3자 제공
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                당 사이트는 이용자의 사전 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
                다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차에 따른 요구가 있는 경우</li>
                <li>서비스 제공을 위해 필요한 최소한의 정보를 광고 서비스 제공자(Google)에게 제공하는 경우</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              7. 이용자의 권리
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>이용자는 다음과 같은 권리를 가집니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>열람권</strong>: 자신의 개인정보 처리 현황을 열람할 수 있습니다</li>
                <li><strong>정정·삭제권</strong>: 부정확하거나 불완전한 개인정보의 정정 또는 삭제를 요청할 수 있습니다</li>
                <li><strong>처리정지권</strong>: 개인정보의 처리 정지를 요청할 수 있습니다</li>
                <li><strong>동의 철회권</strong>: 개인정보 수집·이용에 대한 동의를 언제든지 철회할 수 있습니다</li>
              </ul>
              <p>
                위 권리 행사를 원하시는 경우 아래의 개인정보 보호 책임자에게 연락주시기 바랍니다.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              8. 개인정보 보호 책임자
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border space-y-2 text-sm text-foreground/80">
              <p><strong>서비스명:</strong> {siteName}</p>
              <p><strong>이메일:</strong> jinokiing@gmail.com</p>
              <p className="text-xs text-muted-foreground mt-2">
                개인정보 관련 문의사항이 있으시면 위 이메일로 연락주시기 바랍니다.
                접수된 문의는 7영업일 이내에 답변드리겠습니다.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">
              9. 개인정보처리방침의 변경
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
              <p>
                본 개인정보처리방침은 법령 및 서비스 변경에 따라 내용이 추가·변경될 수 있습니다.
                변경 사항은 사이트 공지 또는 본 페이지를 통해 안내될 예정입니다.
              </p>
              <p>
                개인정보처리방침 변경 시 시행일로부터 최소 7일 전에 공지사항을 통해 안내해 드리겠습니다.
                중요한 변경이 있을 경우에는 30일 전에 안내합니다.
              </p>
            </div>
          </section>

          {/* Effective Date */}
          <section className="bg-muted rounded-xl p-6 text-sm text-muted-foreground space-y-1">
            <p>본 개인정보처리방침은 <strong>{effectiveDate}</strong>부터 적용됩니다.</p>
            <p>이전 개인정보처리방침은 별도로 제공되지 않습니다.</p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
