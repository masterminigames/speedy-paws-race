import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

interface GuideCard {
  to: string;
  emoji: string;
  title: string;
  desc: string;
  tag: string;
}

const guides: GuideCard[] = [
  {
    to: '/guides/drinking-games',
    emoji: '🍻',
    title: '술자리 벌칙 게임 추천 BEST',
    desc: '회식, 술자리에서 분위기를 띄우는 인기 벌칙 게임과 룰을 정리했습니다. 준비물 없이 바로 할 수 있는 게임 위주로 골랐어요.',
    tag: '술자리',
  },
  {
    to: '/guides/team-building',
    emoji: '🤝',
    title: '회식·MT 팀빌딩 아이스브레이킹 게임 모음',
    desc: '처음 만난 사람들과도 금방 친해지는 아이스브레이킹 게임과 단체 게임을 소개합니다. 인원수별 추천도 함께 담았습니다.',
    tag: '팀빌딩',
  },
  {
    to: '/guides/penalty-ideas',
    emoji: '🎯',
    title: '벌칙 아이디어 모음 (술자리·회식·가족 모임)',
    desc: '게임에서 진 사람에게 줄 벌칙, 무엇으로 할지 고민될 때 참고하세요. 부담 없는 것부터 분위기 폭발하는 것까지 단계별로 정리했습니다.',
    tag: '벌칙',
  },
];

const Guides = () => {
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
          <section className="text-center space-y-4">
            <div className="text-6xl">📚</div>
            <h1 className="text-4xl font-bold text-foreground">게임 가이드 &amp; 꿀팁</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              모임을 더 재미있게 만들어 줄 게임과 벌칙 아이디어를 모았습니다.<br />
              상황에 맞는 게임을 골라 Speedy Paws Race와 함께 즐겨보세요.
            </p>
          </section>

          {/* Intro */}
          <section className="bg-primary/10 rounded-2xl p-8 border border-primary/20 space-y-3">
            <h2 className="text-xl font-bold text-foreground">🎉 모임 게임, 왜 중요할까요?</h2>
            <p className="text-foreground/80 leading-relaxed">
              사람이 모이면 어색한 침묵의 순간이 찾아오기 마련입니다. 이때 간단한 게임 하나면
              분위기가 순식간에 달라집니다. 게임은 서로를 알아가는 자연스러운 계기가 되고,
              승부의 긴장과 벌칙의 웃음이 더해지면 그날의 모임은 오래 기억에 남습니다.
              아래 가이드에서 술자리, 회식, MT, 가족 모임 등 다양한 상황에 어울리는 게임과
              벌칙 아이디어를 확인해 보세요.
            </p>
          </section>

          {/* Guide Cards */}
          <section className="space-y-4">
            {guides.map((guide) => (
              <Link
                key={guide.to}
                to={guide.to}
                className="block bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-soft transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">{guide.emoji}</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {guide.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{guide.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </section>

          {/* CTA */}
          <section className="text-center space-y-4 py-4">
            <p className="text-muted-foreground">게임을 정했다면, 승부는 운에 맡겨보세요!</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
            >
              🏃 경주 시작하기
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;
