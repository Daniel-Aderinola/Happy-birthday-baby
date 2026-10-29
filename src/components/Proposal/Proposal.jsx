import React, { useState, useCallback } from "react";
import styles from "./Proposal.module.css";
import img1 from "../../images/WhatsApp Image 2026-10-29 at 16.26.36.jpeg";
import img2 from "../../images/WhatsApp Image 2026-10-29 at 16.26.37 (1).jpeg";
import img3 from "../../images/WhatsApp Image 2026-10-29 at 16.26.37.jpeg";
import img4 from "../../images/WhatsApp Image 2026-10-29 at 16.26.38.jpeg";
import img5 from "../../images/WhatsApp Image 2026-10-29 at 16.26.43 (1).jpeg";
import img6 from "../../images/WhatsApp Image 2026-10-29 at 16.26.44.jpeg";

/**
 * PhotoGallery — A carousel of favorite photos and love quotes.
 */

const photos = [
  {
    src: img1,
    caption: "Wherever I am with you feels like exactly where I belong. 💕",
  },
  {
    src: img2,
    caption: "Your smile turns even the simplest day into something beautiful. ✨",
  },
  {
    src: img3,
    caption: "In a world full of moments, you are my favorite one. ❤️",
  },
  {
    src: img4,
    caption: "I choose your hand today, tomorrow, and every day after. 🤝",
  },
  {
    src: img5,
    caption: "Love is laughing together and still wanting one more moment. 🥰",
  },
  {
    src: img6,
    caption: "Life is brighter and more fun with you beside me. 💖",
  },
];

const Proposal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const totalSlides = photos.length;

  // Go to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Show a placeholder if a photo cannot be loaded.
  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  // Placeholder emojis for photos not yet added
  const placeholderEmojis = ["📸", "💑", "🥰", "🌅", "✈️", "🎉", "🎄", "💕"];

  return (
    <section className={styles["gallery-section"]} id="proposal">
      {/* Faded photo icons floating up */}
      <div className={styles["icons-container"]}>
        {[
          "📷",
          "🖼️",
          "📸",
          "🎞️",
          "📷",
          "🖼️",
          "📸",
          "🎞️",
          "📷",
          "🖼️",
          "📸",
          "🎞️",
          "📷",
          "🖼️",
          "📸",
          "🎞️",
        ].map((icon, i) => (
          <span key={i} className={styles["photo-icon"]}>
            {icon}
          </span>
        ))}
      </div>

      <div className={styles["gallery-header"]}>
        <h2>Love in Frames 📸</h2>
        <p>Six little reminders of why my heart will always choose you. 💕</p>
      </div>

      <div className={styles["carousel-wrapper"]}>
        {/* Left arrow */}
        <button
          className={`${styles["nav-arrow"]} ${styles["nav-prev"]}`}
          onClick={prevSlide}
          aria-label="Previous photo"
        >
          ‹
        </button>

        {/* Slides */}
        <div className={styles["carousel-track-container"]}>
          <div
            className={styles["carousel-track"]}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles["slide-image-wrapper"]}>
                  {imageErrors[index] ? (
                    <div className={styles["slide-placeholder"]}>
                      <span className={styles["slide-placeholder-emoji"]}>
                        {placeholderEmojis[index % placeholderEmojis.length]}
                      </span>
                      <span className={styles["slide-placeholder-text"]}>
                        This photo could not be loaded
                      </span>
                    </div>
                  ) : (
                    <img
                      className={styles["slide-image"]}
                      src={photo.src}
                      alt={photo.caption}
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className={styles["slide-caption"]}>
                  <p className={styles["slide-caption-text"]}>
                    {photo.caption}
                  </p>
                  <p className={styles["slide-caption-date"]}>{photo.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          className={`${styles["nav-arrow"]} ${styles["nav-next"]}`}
          onClick={nextSlide}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className={styles.dots}>
        {photos.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Proposal;
