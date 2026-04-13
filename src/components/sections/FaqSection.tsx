import type { FaqItem } from '../../types/faq';
import { FaqCard } from '../ui/FaqCard';
import styles from './FaqSection.module.css';

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="faq-title">
          FAQ
        </h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <FaqCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
