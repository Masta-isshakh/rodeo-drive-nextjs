import styles from "./CinematicShowcase.module.css";
import Image from "next/image";

import CinematicShowcaseText from "./CinematiqueShowcaseClient";
import CinematicShowcaseEnhance from "./CinematiqueShowcaseEnhance";

export default function CinematicShowcase() {
  const ids = {
    section: "cs-section",
    title: "cs-title",
    subtitle: "cs-subtitle",
    cards: "cs-cards",
    stats: "cs-stats",
    cars: "cs-cars",
    clients: "cs-clients",
    years: "cs-years",
    rating: "cs-rating",
  } as const;

  return (
    <section className={styles.showcase} id={ids.section}>
      {/* ✅ Client: translation injection only (same concept, very small JS) */}
      <CinematicShowcaseText ids={ids} />

      <div className={styles.container}>
        <div className={styles.header}>
          {/* Text will be injected by CinematicShowcaseText */}
          <h2 className={styles.title} id={ids.title} />
          <p className={styles.subtitle} id={ids.subtitle} />
        </div>

        <div className={styles.cardsGrid} id={ids.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/10.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle} data-k="premiumDetailingTitle" />
            <p className={styles.cardDesc} data-k="premiumDetailingDesc" />
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/11.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle} data-k="ceramicCoatingTitle" />
            <p className={styles.cardDesc} data-k="ceramicCoatingDesc" />
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/12.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle} data-k="paintCorrectionTitle" />
            <p className={styles.cardDesc} data-k="paintCorrectionDesc" />
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              <Image src="/13.avif" alt="" width={44} height={44} priority={false} />
            </div>
            <h3 className={styles.cardTitle} data-k="interiorLuxuryTitle" />
            <p className={styles.cardDesc} data-k="interiorLuxuryDesc" />
          </div>
        </div>

        <div className={styles.stats} id={ids.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber} id={ids.cars}>0+</div>
            <div className={styles.statLabel} data-k="carsDetailedLabel" />
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber} id={ids.clients}>0+</div>
            <div className={styles.statLabel} data-k="happyClientsLabel" />
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber} id={ids.years}>0+</div>
            <div className={styles.statLabel} data-k="yearsExperienceLabel" />
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber} id={ids.rating}>0</div>
            <div className={styles.statLabel} data-k="averageRatingLabel" />
          </div>
        </div>
      </div>

      {/* ✅ Client: GSAP/ScrollTrigger lazy-loaded only when near viewport */}
      <CinematicShowcaseEnhance ids={ids} />
    </section>
  );
}
