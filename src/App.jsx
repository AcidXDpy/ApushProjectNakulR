import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, Clapperboard, Cpu, HeartHandshake, Sparkles, Trophy } from 'lucide-react';

const chapters = [
  {
    id: 'family',
    label: 'Beginning',
    kicker: 'Where My Story Starts',
    title: 'Kumon was where opportunity first started to feel real to me.',
    icon: HeartHandshake,
    accent: '#c2417a',
    stat: 'First chapter',
    body:
      'I remember vividly the first day that I stepped into Kumon. I knew it would be a few years of torture and intensive math during classes, and even more intensive math at home with my mom and her super powerful weapon of a pen that would find its way onto my wrist whenever I would get something wrong. I thought at the time that I was being tortured and that this would not be useful, but now I know what that has done for me. I am now pretty good at math, and that is all thanks to my parents.',
    reflection:
      'I think Kumon let me unlock my inner potential, kind of like when Wembanyama went to China to train with the monks, so I would like to think I am the Wembanyama of my Calc BC class. That could not have been done without the great opportunity of Kumon that this country offered me. I feel like America gives everyone the drive to do more and to be more, and my parents also infused that ideal upon me, which I am very grateful for.',
    artifacts: ['kumon packet', 'red pen', 'calc bc'],
    gallery: [
      { src: '/images/story/beginning-wemby-shaolin.png', caption: 'wemby mode' },
      { src: '/images/story/beginning-study.jpg', caption: 'work at home' },
      { src: '/images/story/beginning-books.jpg', caption: 'building habits' },
    ],
  },
  {
    id: 'sports',
    label: 'Sports',
    kicker: 'Sports & Leisure',
    title: 'America does sports like no other country in the world.',
    icon: Trophy,
    accent: '#e4572e',
    stat: 'After school',
    body:
      'I think America does sports like no other country in the world. There is a great variety of sports to be played and to be watched, so people have a great diversion from the tolls of real life and a way to destress and relax. Though I have not been greatly successful in any sports, they have been a core part of my life since I was very young, and I think they taught me important skills like dedication and perseverance.',
    reflection:
      'America offers a great culture of sports that other countries do not prioritize as much, which I feel adds on to the American Dream.',
    artifacts: ['game day', 'practice', 'dedication'],
    gallery: [
      { src: '/images/story/sports-court.jpg', caption: 'places to play' },
      { src: '/images/story/sports-running.jpg', caption: 'discipline' },
      { src: '/images/story/sports-track.jpg', caption: 'competition' },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    kicker: 'Film & Media',
    title: 'Media taught me that stories can change what people think is possible.',
    icon: Clapperboard,
    accent: '#7b61ff',
    stat: 'On screen',
    body:
      'I think America does media like no other, whether it be films or other forms of television. The culture around film and media is great, and it showcases many stories and creates a good pastime for people looking for a getaway. Movies offer inspiration and can give a person the ability to dream, which is very nice.',
    reflection:
      'I really like watching movies and TV, and I was only able to do so because of the good film culture in the U.S.',
    artifacts: ['opening scene', 'shared playlist', 'camera rolling'],
    gallery: [
      { src: '/images/story/media-cinema.jpg', caption: 'movie culture' },
      { src: '/images/story/media-theater.jpg', caption: 'a getaway' },
      { src: '/images/story/media-camera.jpg', caption: 'stories' },
    ],
  },
  {
    id: 'future',
    label: 'Future',
    kicker: 'Career & Future',
    title: 'The biggest thing of all is the variety of a future that America offers.',
    icon: Cpu,
    accent: '#087ea4',
    stat: 'What comes next',
    body:
      'The biggest thing of all would probably be the variety of a future that America offers. I think the industries in this country are incomparable to other nations, mainly because people from other countries want to come here to work. That is partly due to the power of the dollar as a currency and the higher salaries here, but I also think it could be due to the prospective work-life balance here. Not all people have a good work-life balance, but I feel like there is definitely room to have one.',
    reflection:
      'You can enjoy all the cultures of the world while working in the best companies globally, so that is a great perk of this nation. It is easy to compare and say that other nations offer better work experience, more work-life balance, or better paychecks, but I still feel that America balances these categories and anyone can be happy. It is easy to get lost and consumed by your job, but it is important to prioritize well-being and your outside life. This country offers the opportunity to do that, with a reasonable distribution of priority on hard work culture as well as leisure.',
    artifacts: ['career options', 'work life', 'future plans'],
    gallery: [
      { src: '/images/story/future-office.jpg', caption: 'career variety' },
      { src: '/images/story/future-workspace.jpg', caption: 'work-life balance' },
      { src: '/images/story/future-jamie-dimon.jpg', caption: 'business leadership' },
    ],
  },
];

const principles = [
  'Opportunity starts as a family decision, then becomes a personal responsibility.',
  'Sports, media, and future careers are not random categories; they are places where Americans practice ambition.',
  'What America means to me is simple: a chance given by my parents, shaped by culture, and carried into my future.',
];

function useScrollMotion() {
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.id) setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-28% 0px -42% 0px', threshold: 0.08 },
    );

    document.querySelectorAll('.reveal, .chapter').forEach((node) => observer.observe(node));
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return active;
}

function StoryPanel({ chapter, index }) {
  const Icon = chapter.icon;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % chapter.gallery.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [chapter.gallery.length]);

  return (
    <div className="visual-panel story-panel" aria-hidden="true">
      <div className="visual-topline">
        <span>{chapter.stat}</span>
        <Icon size={22} />
      </div>
      <div className="image-gallery">
        {chapter.gallery.map((image, imageIndex) => (
          <figure className={`gallery-slide ${activeSlide === imageIndex ? 'is-active' : ''}`} key={image.src}>
            <img src={image.src} alt="" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-labels">
        {chapter.artifacts.map((artifact, artifactIndex) => (
          <span key={artifact}>
            {String(index + 1).padStart(2, '0')}.{artifactIndex + 1} {artifact}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const active = useScrollMotion();
  const activeIndex = useMemo(() => chapters.findIndex((chapter) => chapter.id === active), [active]);

  return (
    <div className="site-shell">
      <div className="progress-line" style={{ transform: `scaleX(${Math.max(activeIndex + 1, 1) / chapters.length})` }} />

      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#top" className="brand-mark" aria-label="What America is to Nakul home">
          <span>APUSH</span>
          <strong>What America is to Nakul</strong>
        </a>
        <div className="nav-links">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`} className={active === chapter.id ? 'active' : ''}>
              {chapter.label}
            </a>
          ))}
        </div>
      </nav>

      <main id="top">
        <section className="hero-section">
          <div className="hero-art" aria-hidden="true">
            <div className="hero-ticket ticket-one">
              <HeartHandshake size={26} />
              family
            </div>
            <div className="hero-ticket ticket-two">
              <Trophy size={26} />
              belonging
            </div>
            <div className="hero-ticket ticket-three">
              <Cpu size={26} />
              future
            </div>
            <div className="hero-map">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="hero-copy reveal is-visible">
            <p className="eyebrow">
              <Sparkles size={16} />
              What America Means to Me
            </p>
            <h1>What America is to Nakul</h1>
            <p className="thesis">
              America, to me, is defined as a country of opportunity. Opportunity is the sole reason I was brought here
              and the main reason that my parents wanted me to stay here. This country offers the ability to climb up,
              and that is exactly what my parents have envisioned for me.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#family">
                Start the story
                <ArrowDown size={18} />
              </a>
              <a className="ghost-action" href="#future">
                See the future
                <Cpu size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="principles-band reveal" aria-label="Core ideas">
          {principles.map((principle, index) => (
            <article key={principle}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle}</p>
            </article>
          ))}
        </section>

        <section className="story-bridge reveal">
          <p className="eyebrow">Thesis</p>
          <h2>This is not just about success. It is about what a chance can turn into.</h2>
          <p>
            APUSH shows that America has always been shaped by people moving, working, arguing, creating, and trying to
            expand what opportunity means. My version of that story is smaller, but it connects to the same idea: the
            country matters because it gives people room to try.
          </p>
        </section>

        <section className="timeline-wrap" aria-label="Opportunity story chapters">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            return (
              <article className="chapter reveal" id={chapter.id} key={chapter.id} style={{ '--accent': chapter.accent }}>
                <StoryPanel chapter={chapter} index={index} />
                <div className="chapter-copy">
                  <div className="chapter-icon">
                    <Icon size={22} />
                  </div>
                  <p className="chapter-kicker">{chapter.kicker}</p>
                  <h2>{chapter.title}</h2>
                  <p>{chapter.body}</p>
                  <blockquote>{chapter.reflection}</blockquote>
                </div>
              </article>
            );
          })}
        </section>

        <section className="reflection-section reveal">
          <div className="reflection-grid">
            <div>
              <p className="eyebrow">
                <HeartHandshake size={16} />
                My Answer
              </p>
              <h2>America is the chance my parents wanted me to have, and the responsibility to use it well.</h2>
            </div>
            <p>
              Though America is not a perfect country, I view America as a complex dream. I see it as a place where
              sacrifice turns into results and where ambition can sometimes become achievements. Sports helped me
              understand belonging, media helped me imagine possibility, and working toward my future helped me
              understand my purpose. Putting all these together, this is my America.
            </p>
          </div>
        </section>

        <section className="sources-section reveal" id="sources">
          <p className="eyebrow">APUSH Connection</p>
          <h2>The American Dream is not one dream. It changes depending on who is carrying it.</h2>
          <div className="source-grid">
            {chapters.map((chapter) => (
              <a key={chapter.id} href={`#${chapter.id}`}>
                <span>{chapter.label}</span>
                <strong>{chapter.kicker}</strong>
                <small>{chapter.reflection}</small>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
