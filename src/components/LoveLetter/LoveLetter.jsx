import React, { useState, useEffect, useRef } from "react";
import styles from "./LoveLetter.module.css";

const LETTER_TEXT = `

Today is all about celebrating you and I just want you to know how grateful I am to have you in my life. You make my days brighter, my heart happier, and my life more beautiful in so many ways.

I hope this year brings you endless happiness good health, success, and everything you've been dreaming of. 

Thank you for your love, your care, and for being such an important part of my life. I hope we create many more beautiful memories together.

Enjoy your special day and remember how deeply you're loved.

Once again Happy Birthday My man! I love you so much. 💕`;

const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Start typing when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Typewriter effect — types one character at a time
  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const speed = 30; // milliseconds per character — adjust for faster/slower

    const timer = setInterval(() => {
      if (index < LETTER_TEXT.length) {
        setDisplayedText(LETTER_TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingDone(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section
      className={styles["love-letter"]}
      id="love-letter"
      ref={sectionRef}
    >
      {/* Floating roses & love petals (rising up) */}
      <div className={styles["roses-container"]}>
        {[
          "🌹",
          "🤍",
          "❤️",
          "🥀",
          "🤍",
          "🌹",
          "❤️",
          "🤍",
          "🥀",
          "🌹",
          "❤️",
          "🌹",
          "🤍",
          "❤️",
        ].map((emoji, i) => (
          <span key={i} className={styles.rose}>
            {emoji}
          </span>
        ))}
      </div>

      {/* Falling flowers & hearts (from top) */}
      <div className={styles["falling-container"]}>
        {[
          "🌸",
          "💖",
          "🌹",
          "💗",
          "🌺",
          "❤️",
          "🌷",
          "💕",
          "🌸",
          "💖",
          "🌺",
          "💗",
        ].map((emoji, i) => (
          <span key={i} className={styles.petal}>
            {emoji}
          </span>
        ))}
      </div>

      <div
        className={`${styles["letter-container"]} reveal ${hasStarted ? "visible" : ""}`}
      >
        {/* 💡 Change "My Dearest" to her name or your pet name for her */}
        <h2 className={styles["letter-greeting"]}>Happy Birthday, My Husband</h2>

        <div className={styles["letter-body"]}>
          {displayedText}
          {!isTypingDone && <span className={styles["typing-cursor"]} />}
        </div>

        {/* Signature fades in when typing is done */}
        <p
          className={`${styles["letter-signature"]} ${isTypingDone ? styles.visible : ""}`}
        >
          {/* 💡 Change this to your name */}
          Forever yours, ❤️
        </p>
      </div>
    </section>
  );
};

export default LoveLetter;
