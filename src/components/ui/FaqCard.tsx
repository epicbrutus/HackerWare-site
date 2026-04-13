import type { FaqItem } from '../../types/faq';
import styles from './FaqCard.module.css';

type FaqCardProps = {
  item: FaqItem;
};

export function FaqCard({ item }: FaqCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.question}>{item.question}</h3>
      </header>
      <p className={styles.answer}>{item.answer}</p>
    </article>
  );
}
