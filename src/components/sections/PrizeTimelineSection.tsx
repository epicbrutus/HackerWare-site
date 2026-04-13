import {
  prizeNintendoSwitchImage,
  prizeQuestionBlockImage,
  prizeSwitch2Image,
  prizeWarioFaceImage
} from '../../data/assets';
import styles from './PrizeTimelineSection.module.css';

type PrizeTimelineSectionProps = {
  content: {
    leftCopy: string;
    bulletPoints: readonly string[];
    midpointLabel: string;
    prizeTitle: string;
    prizeCaption: string;
  };
};

function PrizeConsoles() {
  return (
    <div className={styles.consoleCluster} aria-hidden="true">
      <img
        className={`${styles.consoleImage} ${styles.consoleLeft}`}
        src={prizeNintendoSwitchImage}
        alt=""
      />
      <img
        className={`${styles.consoleImage} ${styles.consoleRight}`}
        src={prizeSwitch2Image}
        alt=""
      />
    </div>
  );
}

export function PrizeTimelineSection({ content }: PrizeTimelineSectionProps) {
  return (
    <section className={`panel-surface ${styles.section}`} aria-labelledby="timeline-title">
      <div className={styles.cardGrid}>
        <article className={styles.challengeCard}>
          <img className={styles.mascot} src={prizeWarioFaceImage} alt="" />
          <p className={styles.challengeLead}>{content.leftCopy}</p>
          <ul className={styles.challengeList}>
            {content.bulletPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <div className={styles.midpoint} id="timeline-title">
          {content.midpointLabel}
        </div>

        <article className={styles.prizeCard}>
          <img className={styles.questionBlock} src={prizeQuestionBlockImage} alt="" />
          <PrizeConsoles />
          <h2 className={styles.prizeTitle}>{content.prizeTitle}</h2>
          <p className={styles.prizeCaption}>{content.prizeCaption}</p>
        </article>
      </div>
      <div className={styles.arrow} aria-hidden="true" />
    </section>
  );
}
