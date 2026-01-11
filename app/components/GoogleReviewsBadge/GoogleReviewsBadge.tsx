import styles from "./GoogleReviewsBadge.module.css";
import { SITE } from "@/app/config/site";

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
      <span className={styles.stars} aria-hidden="true">★★★★★</span>
      <span className={styles.text}>Google Reviews</span>
      <span className={styles.cta}>View</span>
    </a>
  );
}
