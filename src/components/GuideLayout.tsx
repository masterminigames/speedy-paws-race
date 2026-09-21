import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

interface GuideLayoutProps {
  tag: string;
  title: string;
  intro: string;
  children: ReactNode;
}

export function GuideLayout({ tag, title, intro, children }: GuideLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full py-4 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← 가이드 목록
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <Link to="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            🐾 Speedy Paws Race
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 px-6">
        <article className="max-w-3xl mx-auto space-y-8">
          <header className="space-y-3">
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{tag}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">{title}</h1>
            <p className="text-muted-foreground leading-relaxed">{intro}</p>
          </header>

          {children}

          <section className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
            <p className="text-foreground/80">순서·벌칙 대상을 공정하게 정하고 싶다면, 동물 경주로 깔끔하게 끝내보세요.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
            >
              🏁 경주 시작하기
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
