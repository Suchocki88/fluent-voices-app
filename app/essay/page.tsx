import type { ReactNode } from 'react';

export default function EssayPage(): ReactNode {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="top-strip" />
      <header className="masthead">
        <div className="masthead-inner">
          <div className="masthead-row">
            <p className="edition-note">An essay from Fluent Voices</p>
            <p className="brand"><a href="/">FLUENT VOICES</a></p>
            <a className="masthead-action" href="/#join">Join the interest list</a>
          </div>
          <p className="descriptor">Human Readers for a Changing Craft</p>
          <nav className="nav" aria-label="Main">
            <a href="/">Home</a>
            <a href="/#exchange">Feedback exchange</a>
            <a href="/#join">Join</a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="section" aria-labelledby="essay-title">
          <div className="section-heading">
            <p className="section-kicker">Why Fluent Voices exists</p>
            <div>
              <h1 className="section-title" id="essay-title" style={{ fontSize: "clamp(2.1rem, 4vw, 3.7rem)", lineHeight: 1.12 }}>The Work Is Not the Whole Story</h1>
              <p className="section-lede">AI, human imagination, and why writers still need readers</p>
            </div>
          </div>
          <article className="intro-copy" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p className="dropcap">For years, someone may carry a story they want to tell. They know the world, the characters, perhaps even the ending. But the distance between imagining a book and writing one can seem enormous. Artificial intelligence has begun to change that distance.</p>
            <p>AI can help a writer explore a scene, test a character, organize a plot, or produce a draft. For some, it opens a door that once felt closed. For others, it is simply another tool in a familiar writing practice. Neither experience guarantees a good book. Both deserve thoughtful examination.</p>
            <h2>The experience of creating</h2>
            <p>Something important can happen during the process itself. A writer imagines a character; AI offers a possibility; the writer responds; an unexpected scene emerges. One idea leads to another. The experience can become absorbing, even exhilarating. Someone who once believed “I am not a writer” may discover a genuine love of storytelling.</p>
            <p>That experience matters, even when the resulting manuscript is imperfect. It may also help a writer develop confidence, judgment, and craft. Or it may not. A tool that does too much of the thinking can leave a person with a polished draft but fewer abilities of their own. The difference is worth paying attention to.</p>
            <h2>A draft is not yet a story that works</h2>
            <p>Fluent prose is easy to mistake for successful storytelling. A chapter may sound accomplished while its characters remain unconvincing. A scene may move quickly but go nowhere. Dialogue may be smooth and strangely interchangeable. AI can sometimes identify these weaknesses, but it can also agree too readily with the writer and reinforce a weak direction.</p>
            <p>There is no substitute for discovering what happens when another person reads your work. Where did they become curious? Where were they confused? Which character felt alive? Where did they put the pages down? A human reader brings a life of experiences to the encounter—and an independent response that the author cannot manufacture.</p>
            <h2>Why the exchange matters</h2>
            <p>Writers need more than applause. They need careful, specific, generous criticism. That can be hard to find, especially for people who work remotely, are new to writing communities, or use AI in ways some conventional groups distrust.</p>
            <p>Fluent Voices begins with a modest idea: connect writers willing to exchange selected work and give one another honest feedback. A chapter, scene, synopsis, pitch, or storyboard is enough to start. A remote exchange between two writers may be more useful than waiting for a larger group to form.</p>
            <p>We welcome writers who use AI and writers who do not. We ask for respect for the craft, for one another’s creative choices, and for the privacy of shared work. A reviewer should not redistribute a manuscript or put it into an AI service without the writer’s permission. Acknowledging reviewers in a published book is welcome when everyone agrees, but never required.</p>
            <h2>What comes next</h2>
            <p>Fluent Voices is just beginning. We hope that individual exchanges may grow into writing circles, conversations about publishing, and opportunities for finished books to find readers. We do not pretend those structures are already in place. We would rather learn from a few meaningful exchanges and build what writers actually need.</p>
            <p>AI may help us discover the stories we have to tell. But other people help us discover whether those stories are reaching anyone. The work matters. The experience matters. And the human connections made along the way matter, too.</p>
            <p><a className="button primary" href="/#join">Join the interest list</a></p>
            <p><a className="inline-link" href="/">← Return to Fluent Voices</a></p>
          </article>
        </section>
      </main>
      <footer className="site-footer"><div className="footer-inner"><p className="footer-brand">FLUENT VOICES</p><a className="inline-link" href="/">Home</a></div></footer>
    </>
  );
}
