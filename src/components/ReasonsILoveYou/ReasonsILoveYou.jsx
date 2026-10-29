import React, { useState } from "react";
import styles from "./ReasonsILoveYou.module.css";

/**
 * ReasonsILoveYou — An interactive grid of clickable hearts.
 * Each heart reveals a reason why you love her.
 *
 * PERSONALIZATION TIPS:
 * - Replace each reason with something personal about her
 * - Use inside jokes, shared memories, specific things you adore
 * - The more personal, the more she'll love it!
 */

// 💡 REPLACE THESE WITH YOUR REAL REASONS!
const reasons = [
  "You make me laugh even on my worst days.",
  "You support me no matter what.",
  "Your smile lights up my world.",
  "I love how thoughtful you are.",
  "You make me want to be a better person.",
  "I can always be myself around you.",
  "You make ordinary moments feel special.",
  "You inspire me every day.",
  "You listen to me when I need it most.",
  "You see the best in me.",
  "I love the way you make me feel loved.",
  "You give the best hugs.",
  "You're my home, no matter where we are.",
  "You're my best friend and my partner in everything.",
  "I love the way you look at me.",
  "You make me feel important.",
  "You're always there when I need you.",
  "You make me feel special every day.",
  "You're my safe place.",
  "You make me feel loved in a million ways.",
  "I love how we can talk about anything.",
  "You're my favorite person to be around.",
  "I love how you take care of me.",
  "I love the life we're building together.",
  "I feel complete with you by my side.",
  "I love the way you care for others.",
  "You make me feel lucky every day.",
  "I can be vulnerable with you.",
  "You never let me face anything alone.",
  "You love me unconditionally.",
  "You give the best comfort when I need it.",
  "I love the way you protect me.",
];

const ReasonsILoveYou = () => {
  const [revealedCards, setRevealedCards] = useState(new Set());

  const handleCardClick = (index) => {
    setRevealedCards((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  return (
    <section className={styles["reasons-section"]} id="reasons">
      {/* Rising dots background */}
      <div className={styles["dots-container"]}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>

      <div className={styles["reasons-header"]}>
        <h2> 32 Reasons I Love You</h2>
        <p>Tap each heart to reveal a reason 💖</p>
      </div>

      <div className={styles["hearts-grid"]}>
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`${styles["heart-card"]} ${revealedCards.has(index) ? styles.revealed : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {revealedCards.has(index) ? (
              <>
                <span className={styles["heart-card-emoji"]}>💖</span>
                <p className={styles["heart-card-reason"]}>{reason}</p>
              </>
            ) : (
              <>
                <span className={styles["heart-card-emoji"]}>❤️</span>
                <span className={styles["heart-card-number"]}>
                  #{index + 1}
                </span>
                <span className={styles["heart-card-hint"]}>tap me</span>
              </>
            )}
          </div>
        ))}
      </div>

      <p className={styles["reasons-counter"]}>
        {revealedCards.size === reasons.length
          ? "💕 You found all my reasons! But the real list is infinite..."
          : `${revealedCards.size} of ${reasons.length} reasons revealed`}
      </p>
    </section>
  );
};

export default ReasonsILoveYou;
