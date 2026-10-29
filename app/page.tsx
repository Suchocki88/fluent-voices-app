
    
  
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
              <h2 style={{ fontSize: "clamp(2.1rem, 4vw, 3.7rem)", lineHeight: 1.12 }}>Bring your work. Find a human reader.</h2>

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

