import React from "react";
import styles from "./Closing.module.css";

/**
 * Closing — The final emotional closing page.
 * A dark, starry background with a romantic promise.
 *
 * PERSONALIZATION TIPS:
 * - Replace "Your Name" & "Her Name" with your actual names
 * - Write your own promise / closing message
 * - Add the year you want to highlight
 */

const Closing = () => {
  return (
    <section className={styles["closing-section"]} id="closing">
      {/* Twinkling stars */}
      <div className={styles["stars-container"]}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className={styles.star} />
        ))}
      </div>

      {/* Shooting stars */}
      <div className={styles["stars-container"]}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={styles["shooting-star"]} />
        ))}
      </div>

      <div className={styles["closing-content"]}>
        <span className={styles["closing-heart"]}>💖</span>


        <p className={styles["closing-message"]}>
          Thank you for being the most amazing husband
          💕
        </p>

       

        {/* 💡 CHANGE THESE TO YOUR REAL NAMES */}
       

        <p className={styles["closing-forever"]}>∞ forever and always ∞</p>
      </div>
    </section>
  );
};

export default Closing;
