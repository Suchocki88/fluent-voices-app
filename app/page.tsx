/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from 'react';

/* ---------------------------------------------------------------
   Content
   --------------------------------------------------------------- */

const agenda = [
  { time: '7:00', item: 'Arrivals, and introductions for anyone new' },
  {
    time: '7:10',
    item: 'Each writer’s problem — eight minutes apiece, order rotates monthly',
  },
  { time: '8:00', item: 'Open craft and trade talk' },
  { time: '8:25', item: 'What you’re bringing next month' },
];

const circle = {
  name: 'How a circle runs',
  when: 'Second Thursday',
  time: '7:00 – 8:30 PM Mountain',
  convener: 'The first circle convenes in 2026',
  seats: 'Six writers maximum',
};

const programBooks = [
  {
    src: '/images/UAIVol1Cover605.jpg',
    alt: 'Understanding and Working with AI, Volume 1: Foundations and Practice',
    title: 'Volume 1',
    subtitle: 'Foundations and Practice',
  },
  {
    src: '/images/UAIVol2Cover605.jpg',
    alt: 'Understanding and Working with AI, Volume 2: Society and the Future',
    title: 'Volume 2',
    subtitle: 'Society and the Future',
  },
];

const novels = [
  {
    src: '/images/ThresholdHi.jpg',
    alt: 'The Threshold, a novel by John Suchocki and Claude',
    title: 'The Threshold',
    subtitle: 'The Future of AI and Humanity',
  },
  {
    src: '/images/NeolithicHi.jpg',
    alt: 'The Neolithic, a novel by John Suchocki and Claude',
    title: 'The Neolithic',
    subtitle: 'Echoes of Our Origins',
  },
];

const tickerWords = [
  'Craft',
  'Company',
  'Trade',
  'First drafts',
  'Revisions',
  'Showing up',
];

const stages = [
  {
    number: '01',
    title: 'You join a circle',
    body: [
      'Six writers, grouped by genre, meeting once a month online. You bring one thing you are stuck on — the scene that will not work, the character who has gone flat, the ending you cannot find.',
      'No pages required. Most months, talking the problem through is the work.',
    ],
  },
  {
    number: '02',
    title: 'You learn the trade',
    body: [
      'The part of writing nobody teaches: how querying actually goes, what rights you are signing away, which publishers and contests have changed their rules lately, and what disclosure they now expect.',
      'This is changing quickly. A room that tracks it together is worth more than any of us reading the news alone.',
    ],
  },
  {
    number: '03',
    title: 'Your finished book meets readers',
    body: [
      'When a member finishes, we arrange a reading — a book club takes on the book, and the author joins for the final session to answer whatever comes up.',
      'A dozen people who read the whole thing and arrived with questions. Most first-time authors never get that once.',
    ],
  },
];

const joinSteps = [
  'Pick a circle whose standing time you can actually make.',
  'We send you the meeting link a few days beforehand.',
  'You come once and decide whether it is for you.',
];

/* ---------------------------------------------------------------
   Artwork
   --------------------------------------------------------------- */

function DeskArtwork() {
  return (
    <svg
      viewBox="0 0 760 520"
      role="img"
      aria-label="Illustration of an open manuscript, a closed book, and a cup on a writing desk"
    >
      <defs>
        <linearGradient id="paper" x1="0" x2="1">
          <stop offset="0" stopColor="#f3e9d9" />
          <stop offset="1" stopColor="#e7d8c2" />
        </linearGradient>
        <linearGradient id="desk" x1="0" x2="1">
          <stop offset="0" stopColor="#8b5d3d" />
          <stop offset="1" stopColor="#6d432d" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodOpacity=".18" />
        </filter>
      </defs>

      <rect x="70" y="365" width="620" height="34" rx="8" fill="url(#desk)" />
      <rect x="110" y="395" width="26" height="96" rx="6" fill="#6d432d" />
      <rect x="622" y="395" width="26" height="96" rx="6" fill="#6d432d" />

      <g filter="url(#softShadow)">
        <rect x="188" y="86" width="320" height="252" rx="8" fill="url(#paper)" stroke="#263a33" strokeWidth="3" />
        <rect x="220" y="58" width="320" height="252" rx="8" fill="#fffaf0" stroke="#263a33" strokeWidth="3" />
        <line x1="266" y1="112" x2="480" y2="112" stroke="#a57b5a" strokeWidth="4" strokeLinecap="round" />
        <line x1="266" y1="146" x2="494" y2="146" stroke="#d1bea6" strokeWidth="4" strokeLinecap="round" />
        <line x1="266" y1="178" x2="466" y2="178" stroke="#d1bea6" strokeWidth="4" strokeLinecap="round" />
        <line x1="266" y1="210" x2="500" y2="210" stroke="#d1bea6" strokeWidth="4" strokeLinecap="round" />
        <line x1="266" y1="242" x2="448" y2="242" stroke="#d1bea6" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(85 238) rotate(-8)">
        <rect x="0" y="0" width="114" height="144" rx="8" fill="#2e4a40" />
        <rect x="12" y="15" width="90" height="114" rx="4" fill="#f1e7d5" />
        <path d="M32 104c22-30 37-52 58-76" stroke="#9d6f50" strokeWidth="5" strokeLinecap="round" />
        <path d="M41 94c8-3 18-3 28 0" stroke="#9d6f50" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(532 214)">
        <ellipse cx="74" cy="124" rx="86" ry="18" fill="#000" opacity=".08" />
        <path d="M20 20h105v92a24 24 0 0 1-24 24H44a24 24 0 0 1-24-24Z" fill="#b96548" />
        <path d="M125 42h12c29 0 34 46 3 55h-15" fill="none" stroke="#b96548" strokeWidth="12" strokeLinecap="round" />
        <path d="M50 3c10 10 8 21 2 30M82 0c10 10 8 21 2 30" fill="none" stroke="#b7a68d" strokeWidth="4" strokeLinecap="round" />
      </g>

      <path
        d="M180 424c64 24 142 20 208-1 73-23 144-20 210 8"
        fill="none"
        stroke="#2e4a40"
        strokeWidth="3"
        strokeDasharray="8 10"
        opacity=".45"
      />
      <circle cx="177" cy="424" r="7" fill="#b96548" />
      <circle cx="602" cy="431" r="7" fill="#b96548" />
    </svg>
  );
}

function QuillMark() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <path
        d="M98 12C62 21 34 51 21 93c18-12 36-24 52-39-14 18-27 34-39 49"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 77c12 1 22-2 30-10M55 60c11 2 21-1 30-10M67 44c9 1 17-2 24-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Page
   --------------------------------------------------------------- */

export default function HomePage(): ReactNode {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="top-strip" />

      <header className="masthead">
        <div className="masthead-inner">
          <div className="masthead-row">
            <p className="edition-note">Monthly · Online · Small groups</p>
            <p className="brand">FLUENT VOICES</p>
            <a className="masthead-action" href="#join">
              Join the circle
            </a>
          </div>

          <p className="descriptor">Writing Circles for a Changing Craft</p>

          <nav className="nav" aria-label="Main">
            <a href="#why">Why</a>
            <a href="#meetings">Meetings</a>
            <a href="#arc">What happens</a>
            <a href="#origin">The books</a>
            <a href="#join">Join</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <h1 className="sr-only">
          Fluent Voices — writing circles for a changing craft
        </h1>

        <section className="hero" id="meetings">
          <div>
            <p className="eyebrow">A circle that meets</p>

            <h2>
              Writing is solitary. <em>Writers do not have to be.</em>
            </h2>

            <p className="hero-copy">
              Once a month, six writers sit down together and work through what each of
              them is stuck on. Same day, same time, someone always opens the room. That
              is the whole idea — everything else grows out of that meeting.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#join">
                Join the circle
              </a>
              <a className="button secondary" href="#arc">
                See what happens
              </a>
            </div>

            <p className="status-note">
              Fluent Voices is being built now. The first circles convene in 2026, and
              this page describes how they will run.
            </p>
          </div>

          <aside className="session-card" aria-labelledby="session-heading">
            <p className="session-kicker">{circle.name}</p>
            <p className="session-when" id="session-heading">
              {circle.when}
            </p>
            <p className="session-where">{circle.time} · Online</p>
            <p className="session-convener">{circle.convener}</p>

            <ol className="session-agenda">
              {agenda.map((entry) => (
                <li key={entry.time}>
                  <span className="session-time">{entry.time}</span>
                  <span>{entry.item}</span>
                </li>
              ))}
            </ol>

            <p className="session-foot">
              {circle.seats}. The link goes out to whoever has signed up.
              <strong>Bring one problem. No pages required.</strong>
            </p>
          </aside>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <ul className="ticker-group" key={copy}>
                {tickerWords.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section className="section" id="why">
          <div className="section-heading">
            <p className="section-kicker">Why Fluent Voices</p>
            <div>
              <h2 className="section-title">Writers need other writers.</h2>
              <p className="section-lede">
                Not an audience. Not a verdict. People who are working on the same
                impossible thing and can tell you why chapter four is not landing.
              </p>
            </div>
          </div>

          <div className="intro-grid">
            <div className="intro-art">
              <DeskArtwork />
            </div>

            <div className="intro-copy">
              <p className="dropcap">
                Some of our members are finally starting the book they have been
                imagining for thirty years. Others are on their third, or deep in a
                revision, or trying to work out what the trade even looks like now.
              </p>
              <p>
                What they have in common is the bug — the thing where you cannot not
                write, and you need to talk to someone who understands that without
                requiring an explanation.
              </p>
              <blockquote className="pullquote">
                “The guild exists for the craft — and for the company of it.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="arc-section" id="arc">
          <div className="section">
            <div className="section-heading">
              <p className="section-kicker">What happens</p>
              <div>
                <h2 className="section-title">A member’s first year, roughly.</h2>
                <p className="section-lede">
                  These come in order. Most people spend a long time in the first one,
                  and that is the point.
                </p>
              </div>
            </div>

            <ol className="arc-grid">
              {stages.map((stage) => (
                <li className="arc-stage" key={stage.number}>
                  <p className="arc-number">{stage.number}</p>
                  <div className="arc-mark">
                    <QuillMark />
                  </div>
                  <h3>{stage.title}</h3>
                  {stage.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </li>
              ))}
            </ol>

            <p className="arc-note">
              Members can also add a finished book to the guild’s reading list, which is
              how book clubs find work to take on. It is a list, not a storefront —
              sharing is optional, and you keep every right to your own work.
            </p>
          </div>
        </section>

        <section className="community-band">
          <div className="community-inner">
            <blockquote>
              The craft is changing. The need for story, fellowship, and a voice of
              one’s own is not.
            </blockquote>
            <p>
              The tools will keep changing. At the heart of every story is a human
              experience, and finding the means to polish that story until it shines is
              what the circles are for.
            </p>
          </div>
        </section>

        <section className="origin-section" id="origin">
          <p className="origin-plate">
            From Conceptual Academy, publishers of
            <em>Understanding and Working with AI</em>
          </p>

          <div className="section">
            <div className="section-heading">
              <p className="section-kicker">Origins</p>
              <div>
                <h2 className="section-title">The books behind the circles.</h2>
                <p className="section-lede">
                  Fluent Voices grew out of a two-volume program that asks its readers to
                  finish something — and out of two novels written to find out whether the
                  method held up.
                </p>
              </div>
            </div>

            <div className="shelf-grid">
              <div className="shelf-group">
                <p className="shelf-label">The program</p>
                <ul className="covers">
                  {programBooks.map((book) => (
                    <li key={book.title}>
                      <span className="cover-frame">
                        <img src={book.src} alt={book.alt} />
                      </span>
                      <p className="cover-title">{book.title}</p>
                      <p className="cover-subtitle">{book.subtitle}</p>
                    </li>
                  ))}
                </ul>
                <p className="shelf-note">
                  Volume 2 closes by inviting adult readers here, manuscript in hand.{' '}
                  <a className="inline-link" href="https://understandingai.ai">
                    See the program at UnderstandingAI.ai
                  </a>
                </p>
              </div>

              <div className="shelf-group">
                <p className="shelf-label">Where it started</p>
                <ul className="covers">
                  {novels.map((book) => (
                    <li key={book.title}>
                      <span className="cover-frame">
                        <img src={book.src} alt={book.alt} />
                      </span>
                      <p className="cover-title">{book.title}</p>
                      <p className="cover-subtitle">{book.subtitle}</p>
                    </li>
                  ))}
                </ul>
                <p className="shelf-note">
                  Two novels written to test whether the work would hold — and the reason
                  the circles exist at all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="join-section" id="join">
          <div className="join-card">
            <div className="join-copy">
              <p className="eyebrow">Join</p>
              <h2>Bring the work. Find your people.</h2>

              <ol className="join-steps">
                {joinSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <a
                className="button primary"
                href="mailto:John@ConceptualAcademy.com?subject=Fluent%20Voices%20—%20joining%20a%20circle"
              >
                Join the circle
              </a>

              <p>
                No writing sample, no publication history, no finished manuscript. If you
                are working on something, you belong here.
              </p>
              <p>
                Every circle will have a convener — someone who keeps the standing time
                and opens the room. If you would like to convene one of your own, say so
                and we will help you start it.
              </p>
              <p className="join-support">
                Fluent Voices is free to join. It is supported by Conceptual Academy, the
                public benefit corporation behind the AI-Ed program.
              </p>
            </div>

            <div className="join-art">
              <div className="join-mark">
                <QuillMark />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-brand">FLUENT VOICES</p>
            <p className="footer-copy">Writing Circles for a Changing Craft</p>
            <p className="footer-origin">
              From Conceptual Academy, publishers of{' '}
              <a className="inline-link" href="https://understandingai.ai">
                <em>Understanding and Working with AI</em>
              </a>
              .
            </p>
          </div>

          <div className="footer-right">
            <img
              className="footer-logo"
              src="/images/Logo1200Horizontal.png"
              alt="Conceptual Academy"
            />
            <nav className="footer-links" aria-label="Footer">
              <a href="#why">Why</a>
              <a href="#meetings">Meetings</a>
              <a href="#arc">What happens</a>
              <a href="#origin">The books</a>
              <a href="#join">Join</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}