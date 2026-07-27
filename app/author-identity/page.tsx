"use client";

import { FormEvent, useMemo, useState } from "react";

export default function AuthorIdentityPage() {
  const [authorName, setAuthorName] = useState("");
  const [authorIntroduction, setAuthorIntroduction] = useState("");
  const [message, setMessage] = useState("");

  const formComplete = useMemo(
    () => authorName.trim().length >= 2,
    [authorName]
  );

  function submit(e: FormEvent) {
    e.preventDefault();

    if (!formComplete) {
      setMessage("Please enter the public author name before continuing.");
      return;
    }

    setMessage("Author identity saved. Next, review the registration details.");
  }

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box" as const,
    padding: "0.85rem",
    border: "1px solid #777",
    borderRadius: "4px",
    fontSize: "1rem",
    fontFamily: "inherit",
  };

  return (
    <main
      style={{
        maxWidth: "740px",
        margin: "0 auto",
        padding: "4rem 2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p style={{ color: "#666" }}>Step 3 of 4</p>

      <div
        style={{
          height: "8px",
          background: "#e5e5e5",
          borderRadius: "999px",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "100%",
            background: "#444",
            borderRadius: "999px",
          }}
        />
      </div>

      <h1>Choose the Public Author Name</h1>

      <p style={{ color: "#555", lineHeight: 1.6 }}>
        Choose how readers will know the author when the work is shared.
      </p>

      <section
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "1.2rem",
          background: "#fafafa",
          margin: "2rem 0",
        }}
      >
        <strong>Privacy by Choice</strong>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          The public author name may be a full name, first name, initials, or a
          pseudonym. No legal name is required.
        </p>
      </section>

      <form onSubmit={submit}>
        <label htmlFor="authorName">
          <strong>Public Author Name</strong>
        </label>

        <input
          id="authorName"
          value={authorName}
          onChange={(e) => {
            setAuthorName(e.target.value);
            setMessage("");
          }}
          placeholder="For example: Sam, A.J., or River North"
          style={{ ...inputStyle, marginTop: "0.5rem" }}
          maxLength={80}
        />

        <p
          style={{
            fontSize: "0.9rem",
            color: "#666",
            marginTop: "0.5rem",
            lineHeight: 1.5,
          }}
        >
          This is the name friends, family, teachers, and other readers will see
          whenever the work is shared.
        </p>

        <div style={{ height: "1.5rem" }} />

        <label htmlFor="authorIntroduction">
          <strong>About the Author</strong> <span style={{ color: "#666" }}>(optional)</span>
        </label>

        <textarea
          id="authorIntroduction"
          value={authorIntroduction}
          onChange={(e) => setAuthorIntroduction(e.target.value)}
          placeholder="Share a few sentences about the author's interests, inspirations, or the kinds of work they enjoy creating."
          rows={6}
          maxLength={600}
          style={{
            ...inputStyle,
            marginTop: "0.5rem",
            resize: "vertical",
            lineHeight: 1.5,
          }}
        />

        <p
          style={{
            fontSize: "0.9rem",
            color: "#666",
            marginTop: "0.5rem",
          }}
        >
          {authorIntroduction.length}/600 characters
        </p>

        <aside
          style={{
            background: "#f5f5f5",
            padding: "1rem",
            borderRadius: "10px",
            margin: "2rem 0",
          }}
        >
          <strong>Before You Continue</strong>
          <p style={{ color: "#555", lineHeight: 1.6 }}>
            Only the public author name and optional author introduction will be
            shown with published work. The parent account name and email address
            remain private.
          </p>
          <p style={{ color: "#555", lineHeight: 1.6, marginBottom: 0 }}>
            The public author name can be changed later.
          </p>
        </aside>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/parent-account"
            style={{
              color: "#333",
              textDecoration: "none",
              padding: "0.95rem 0",
            }}
          >
            ← Back
          </a>

          <button
            type="submit"
            disabled={!formComplete}
            style={{
              padding: "0.95rem 1.6rem",
              border: "none",
              borderRadius: "8px",
              background: formComplete ? "#333" : "#aaa",
              color: "white",
              cursor: formComplete ? "pointer" : "not-allowed",
            }}
          >
            Continue to Review →
          </button>
        </div>

        {message && (
          <p
            style={{
              marginTop: "1rem",
              color: formComplete ? "#087a20" : "#a82424",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </main>
  );
}