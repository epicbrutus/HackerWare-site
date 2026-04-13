import { PrimaryButton } from '../ui/PrimaryButton';
import { GameEmbedPlaceholder } from '../ui/GameEmbedPlaceholder';
import styles from './BeginnerSection.module.css';

type BeginnerSectionProps = {
  content: {
    heading: string;
    paragraphs: readonly string[];
    closer: string;
  };
};

export function BeginnerSection({ content }: BeginnerSectionProps) {
  const highlightPhrase = 'to the right';
  const [closerPrefix, closerSuffix = ''] = content.closer.split(highlightPhrase);

  return (
    <section className={`panel-surface ${styles.section}`} aria-labelledby="beginner-title">
      <div className={styles.layout}>
        <div className={styles.copyCard}>
          <h2 className={styles.heading} id="beginner-title">
            {content.heading}
          </h2>
          <div className={styles.copyStack}>
            {content.paragraphs.map((paragraph) => (
              <p className={styles.copy} key={paragraph}>
                {paragraph}
              </p>
            ))}
            <p className={`${styles.copy} ${styles.copyAccent}`}>
              {closerPrefix}
              <span className={styles.copyHighlight}>{highlightPhrase}!</span>
              {closerSuffix}
            </p>
          </div>
          <PrimaryButton compact aria-label="View gallery">
            Gallery
          </PrimaryButton>
        </div>

        <div className={styles.embedWrap}>
          <GameEmbedPlaceholder title="Embedded microgame preview" />
        </div>
      </div>
    </section>
  );
}
