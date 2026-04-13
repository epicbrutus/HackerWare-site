import { heroCaseArtwork, heroLogoImage } from '../../data/assets';
import { PrimaryButton } from '../ui/PrimaryButton';
import styles from './HeroSection.module.css';

type HeroSectionProps = {
  content: {
    title: string;
    eyebrow: string;
    subtitle: string;
  };
};

const orbitCases = [
  { id: 'left-far', angle: -36, restAngle: 0, scale: 1.04, opacity: 0.32 },
  { id: 'left', angle: -24, restAngle: 0, scale: 1, opacity: 0.38 },
  { id: 'left-inner', angle: -12, restAngle: 0, scale: 0.96, opacity: 0.31 },
  { id: 'center', angle: 0, restAngle: 0, scale: 0.95, opacity: 0.28 },
  { id: 'right-inner', angle: 12, restAngle: 0, scale: 0.96, opacity: 0.31 },
  { id: 'right', angle: 24, restAngle: 0, scale: 1, opacity: 0.38 },
  { id: 'right-far', angle: 36, restAngle: 0, scale: 1.04, opacity: 0.32 }
];

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.orbitRing} aria-hidden="true">
        {orbitCases.map((item) => (
          <div
            key={item.id}
            className={styles.caseSlot}
            style={{
              transform: `rotate(${item.angle}deg) translateY(-105rem) scale(${item.scale})`,
              opacity: item.opacity
            }}
          >
            <div
              className={styles.caseCounterSpin}
              style={{ ['--case-rest' as string]: `${item.restAngle}deg` }}
            >
              <img
                className={styles.caseImage}
                src={heroCaseArtwork}
                alt=""
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.titleCard}>
        <div className={styles.titleShadow} aria-hidden="true" />
        <h1 className={styles.logoWrap} id="hero-title">
          <img className={styles.logo} src={heroLogoImage} alt={content.title} />
        </h1>
        <p className={styles.subtitle}>{content.subtitle}</p>
      </div>

      <div className={styles.ctaWrap}>
        <div className={styles.ctaShadow} aria-hidden="true" />
        <PrimaryButton aria-label="Get started">
          Get Started!
        </PrimaryButton>
      </div>
    </section>
  );
}
