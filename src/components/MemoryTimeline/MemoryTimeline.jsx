import React from "react";
import styles from "./MemoryTimeline.module.css";
import photo1 from "../../images/WhatsApp Image 2026-10-29 at 16.26.36.jpeg";
import photo2 from "../../images/WhatsApp Image 2026-10-29 at 16.26.37 (1).jpeg";
import photo3 from "../../images/WhatsApp Image 2026-10-29 at 16.26.37.jpeg";
import photo4 from "../../images/WhatsApp Image 2026-10-29 at 16.26.38.jpeg";
import photo5 from "../../images/WhatsApp Image 2026-10-29 at 16.26.43 (1).jpeg";
import photo6 from "../../images/WhatsApp Image 2026-10-29 at 16.26.44.jpeg";

const loveMoments = [
  {
    image: photo1,
    alt: "A peaceful view across the water",
    quote: "“Wherever I am with you feels like exactly where I belong.”",
  },
  {
    image: photo2,
    alt: "A beautiful portrait outdoors",
    quote: "“Your smile turns even the simplest day into something beautiful.”",
  },
  {
    image: photo3,
    alt: "A joyful close-up portrait",
    quote: "“In a world full of moments, you are my favorite one.”",
  },
  {
    image: photo4,
    alt: "Two hands held together",
    quote: "“I choose your hand today, tomorrow, and every day after.”",
  },
  {
    image: photo5,
    alt: "A happy couple together",
    quote: "“Love is laughing together and still wanting one more moment.”",
  },
  {
    image: photo6,
    alt: "A playful couple in a car",
    quote: "“Life is better, brighter, and much more fun with you beside me.”",
  },
];

const MemoryTimeline = () => {
  return (
    <section className={styles.timeline} id="timeline">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Love in frames</p>
        <h2>Little Moments, Big Love</h2>
        <p>Six little reminders of why my heart will always choose you.</p>
      </div>

      <div className={styles.list}>
        {loveMoments.map((moment) => (
          <article className={styles.card} key={moment.image}>
            <img className={styles.image} src={moment.image} alt={moment.alt} />
            <p className={styles.quote}>{moment.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MemoryTimeline;
