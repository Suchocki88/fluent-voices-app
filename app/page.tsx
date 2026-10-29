/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from 'react';

// Existing signup form retained. Recommended new fields: genre, manuscript type,
// desired feedback, willingness to review, asynchronous/live preference, and
// comfort reviewing AI-assisted work. Update the form separately before launch.
const WAITLIST_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfmC3t1awl9T0Ed1JZhtW24XEvp0znPoIITpbwcY7WvqYm12Q/viewform?usp=header';

/* ---------------------------------------------------------------
   Content
   --------------------------------------------------------------- */

const agenda = [
  { time: '01', item: 'Arrivals and introductions' },
  {
    time: '02',
    item: 'Each writer brings a craft question',
  },
  { time: '03', item: 'Open discussion and useful next steps' },
  { time: '04', item: 'Agree on a possible follow-up' },
];

const circle = {
  name: 'Beyond one-to-one exchanges',
  when: 'A possible future circle',
  time: 'Online · Timing to be decided',
  convener: 'Proposed format — not yet scheduled',
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
  'Human readers',
  'Trade',
  'Honest feedback',
  'Revisions',
  'Creative agency',
];

const stages = [
  {
    number: '01',
    title: 'Exchange a few pages',
    body: [
      'Start small: a scene, opening chapter, synopsis, pitch, or storyboard. Tell your reader what kind of feedback would help.',
      'We hope to introduce compatible writers for remote, asynchronous exchanges. Matches are not guaranteed; we are beginning with a small pilot.',
    ],
  },
  {
    number: '02',
    title: 'Give the kind of feedback you need',
    body: [
      'Tell the writer where you were drawn in, confused, unconvinced, or eager to continue. Specific, independent human reactions matter more than praise.',
      'Respect confidentiality. Never share another writer’s material or upload it to an AI service without explicit permission.',
    ],
  },
  {
    number: '03',
    title: 'Grow into a community',
    body: [
      'As more writers join, we hope to organize small online circles, conversations about craft and publishing, and eventually opportunities to connect finished books with readers.',
      'These are aspirations, not services already operating. Early participants will help shape what comes next.',
    ],
  },
];

const joinSteps = [
  'Tell us what you write, what feedback you need, and whether you can review others.',
  'We will contact you as suitable remote exchanges or circles become possible.',
  'You decide whether a proposed match or group is right for you.',
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

      <style>{`
        .masthead .brand { font-size: clamp(42px, 5.1vw, 76px) !important; line-height: 1.05 !important; }
        .hero h2 { font-size: clamp(42px, 4.2vw, 68px) !important; line-height: 1.08 !important; }
        .section-title, .join-copy h2 { font-size: clamp(34px, 3.15vw, 50px) !important; line-height: 1.12 !important; }
        @media (max-width: 600px) {
          .masthead .brand { font-size: clamp(32px, 9vw, 48px) !important; }
          .hero h2 { font-size: clamp(38px, 9vw, 52px) !important; }
          .section-title, .join-copy h2 { font-size: clamp(30px, 7.4vw, 40px) !important; }
        }
      `}</style>

      <div className="top-strip" />

      <header className="masthead">
        <div className="masthead-inner">
          <div className="masthead-row">
            <p className="edition-note">Human feedback · Remote exchanges · Writing circles</p>
            <p className="brand" style={{ fontSize: "clamp(42px, 5.1vw, 76px)", lineHeight: 1.05 }}>FLUENT VOICES</p>
            <a className="masthead-action" href="#join">
              Add me to the list
            </a>
          </div>

          <p className="descriptor">Human Readers for a Changing Craft</p>

          <nav className="nav" aria-label="Main">
            <a href="#why">Why</a>
            <a href="#exchange">Feedback exchange</a>
            <a href="#arc">How it works</a>
            <a href="/essay">The essay</a>
              <a href="#origin">The books</a>
            <a href="#join">Join</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <h1 className="sr-only">
          Fluent Voices — human feedback for a changing craft
        </h1>

        <section className="hero" id="exchange">
          <div>
            <p className="eyebrow">A human reader matters</p>

            <h2 style={{ fontSize: "clamp(42px, 4.2vw, 68px)", lineHeight: 1.08 }}>
              Writing is solitary. <em>Writers do not have to be.</em>
            </h2>

            <p className="hero-copy">
              AI can help you develop a manuscript. But eventually, you need another
              human being to read it. Fluent Voices is an emerging community connecting
              writers who want thoughtful, independent feedback — including on work
              created with AI.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#join">
                Add me to the list
              </a>
              <a className="button secondary" href="/essay">
                Why human readers matter
              </a>
            </div>

            <p className="status-note">
              We are beginning with a small, remote reviewer-exchange pilot. We cannot
              promise a match or a meeting yet. Join the interest list to help shape it.
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
              {circle.seats}. This is a possible future format, not a scheduled event.
              <strong>Reviewer exchanges can begin with just two writers.</strong>
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
              <h2 className="section-title" style={{ fontSize: "clamp(34px, 3.15vw, 50px)", lineHeight: 1.12 }}>A manuscript needs a human reader.</h2>
              <p className="section-lede">
                Not automatic praise. Not a machine’s reassurance. Someone who can tell you
                where a character feels real, where the story drags, and where they stopped believing.
              </p>
            </div>
          </div>

          <div className="intro-grid">
            <div className="intro-art">
              <DeskArtwork />
            </div>

            <div className="intro-copy">
              <p className="dropcap">
                Fluent Voices is for the writer finally starting the book they have
                imagined for thirty years — and for the one on their third, deep in a
                revision, or trying to work out what the trade even looks like now.
              </p>
              <p>
                Some write without AI; others use it for brainstorming, revision, or drafting.
                You do not need to defend your process here. What matters is honest craft,
                respect for readers, and a willingness to return the favor.
              </p>
              <blockquote className="pullquote">
                “AI may help you write a manuscript. Human readers help you discover whether you have written a story.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section" id="essay-preview">
          <div className="section-heading">
            <p className="section-kicker">An essay</p>
            <div>
              <h2 className="section-title" style={{ fontSize: "clamp(34px, 3.15vw, 50px)", lineHeight: 1.12 }}>The Work Is Not the Whole Story</h2>
              <p className="section-lede">
                AI can open a door to creativity. The finished manuscript is only part of
                what matters — and it still needs the honest response of human readers.
              </p>
              <p><a className="inline-link" href="/essay">Read the essay →</a></p>
            </div>
          </div>
        </section>

        <section className="section" id="near-you">
          <div className="section-heading">
            <p className="section-kicker">Find your circle</p>
            <div>
              <h2 className="section-title" style={{ fontSize: "clamp(34px, 3.15vw, 50px)", lineHeight: 1.12 }}>A local group may still be right for you.</h2>
              <p className="section-lede">
                Writing circles are more common than most people realize — a great many
                public libraries quietly host one already. Often the best circle is the
                closest one.
              </p>
            </div>
          </div>

          <div className="intro-copy">
            <p className="dropcap">
              Before you wait on us, ask at your local library. Many run a writers’ group,
              a writers’ café, or a critique circle — in Colorado alone we have found dozens
              meeting in public libraries. Look through your library’s events calendar, or
              simply ask a librarian. If there is one that fits, go: in person and down the
              street beats anything we can offer online.
            </p>
            <p>
              If there is no welcoming group nearby — or if you need someone comfortable
              reviewing AI-assisted work — Fluent Voices is exploring remote exchanges.
              A thoughtful critique need not require travel or a standing meeting.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#join">Add me to the list</a>
              <a className="button secondary" href="#arc">See how exchanges work</a>
            </div>
          </div>
        </section>

        <section className="arc-section" id="arc">
          <div className="section">
            <div className="section-heading">
              <p className="section-kicker">What happens</p>
              <div>
                <h2 className="section-title" style={{ fontSize: "clamp(34px, 3.15vw, 50px)", lineHeight: 1.12 }}>Start with a meaningful exchange.</h2>
                <p className="section-lede">
                  Begin with selected material and honest feedback. Other possibilities can
                  grow from those first relationships.
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
              A simple exchange should begin with mutual expectations: share only material
              you choose, keep others’ work private, do not redistribute or feed it into
              AI without permission, and give specific, respectful criticism. Credit for
              reviewers is optional and requires their consent. We are not a publisher,
              rights manager, or guarantor of confidentiality.
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
              why human feedback matters.
            </p>
          </div>
        </section>

        <section className="origin-section" id="origin">
          <p className="origin-plate">
            From Conceptual Academy, publishers of{' '}
            <em>Understanding and Working with AI</em>
          </p>

          <div className="section">
            <div className="section-heading">
              <p className="section-kicker">Origins</p>
              <div>
                <h2 className="section-title" style={{ fontSize: "clamp(34px, 3.15vw, 50px)", lineHeight: 1.12 }}>The books behind the idea.</h2>
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
                  Our AI literacy program invites writers to examine both the work they create and what they learn in creating it.{' '}
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
                  Fluent Voices began.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="join-section" id="join">
          <div className="join-card">
            <div className="join-copy">
              <p className="eyebrow">Join</p>
              <h2 style={{ fontSize: "clamp(34px, 3.15vw, 50px)", lineHeight: 1.12 }}>Bring your work. Find a human reader.</h2>

              <ol className="join-steps">
                {joinSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <a
                className="button primary"
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add me to the list
              </a>

              <p className="status-note">
                Fluent Voices is at the pilot stage. We will contact interested writers if a
                suitable exchange or online circle becomes possible. Signing up does not
                guarantee a match or a meeting. Early voices will help shape the project.
              </p>
              <p>
                No writing sample, no publication history, no finished manuscript. If you
                are working on something, you belong here.
              </p>
              <p>
                When you sign up, please tell us your genre, what material you want reviewed,
                whether you can review someone else’s work, and whether you prefer
                exchanging comments asynchronously or meeting online. The current form
                may not yet ask all of these questions; you can include them in its notes.
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
            <p className="footer-copy">Human Readers for a Changing Craft</p>
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
              <a href="#exchange">Feedback exchange</a>
              <a href="#arc">How it works</a>
              <a href="/essay">The essay</a>
              <a href="#origin">The books</a>
              <a href="#join">Join</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
