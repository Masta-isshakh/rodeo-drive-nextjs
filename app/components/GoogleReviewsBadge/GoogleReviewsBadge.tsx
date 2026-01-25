import styles from "./GoogleReviewsBadge.module.css";
import { SITE } from "@/app/config/site";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className={styles.star} aria-hidden="true">
      <path
        d="M12 2.6l2.88 5.83 6.44.94-4.66 4.55 1.1 6.42L12 17.93 6.24 20.34l1.1-6.42L2.68 9.37l6.44-.94L12 2.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function GoogleReviewsBadge() {
  return (
    <a
      className={styles.badge}
      href={SITE.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Google Reviews"
      title="Google Reviews"
    >
      <span className={styles.stars} aria-hidden="true">
        <Star /><Star /><Star /><Star /><Star />
      </span>
      <span className={styles.text}>Google Reviews</span>
      <span className={styles.cta}>View</span>
    </a>
  );
}
