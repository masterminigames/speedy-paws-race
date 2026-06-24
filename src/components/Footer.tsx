import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full mt-auto py-4 px-6 border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          © 2026 Speedy Paws Race. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            to="/about"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            게임 소개
          </Link>
          <span className="text-muted-foreground/40 text-xs">|</span>
          <Link
            to="/how-to-play"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            이용 방법
          </Link>
          <span className="text-muted-foreground/40 text-xs">|</span>
          <Link
            to="/guides"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            게임 가이드
          </Link>
          <span className="text-muted-foreground/40 text-xs">|</span>
          <Link
            to="/updates"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            업데이트
          </Link>
          <span className="text-muted-foreground/40 text-xs">|</span>
          <Link
            to="/terms"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            이용약관
          </Link>
          <span className="text-muted-foreground/40 text-xs">|</span>
          <Link
            to="/privacy-policy"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            개인정보처리방침
          </Link>
          <span className="text-muted-foreground/40 text-xs">|</span>
          <a
            href="mailto:jinokiing@gmail.com"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            문의하기
          </a>
        </nav>
      </div>
    </footer>
  );
}
