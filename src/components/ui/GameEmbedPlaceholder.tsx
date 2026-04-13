import styles from './GameEmbedPlaceholder.module.css';

type GameEmbedPlaceholderProps = {
  title: string;
};

const assetBase = import.meta.env.BASE_URL;

function resolveAssetPath(path: string) {
  const normalizedBase = assetBase.endsWith('/') ? assetBase : `${assetBase}/`;

  return path.startsWith('/') ? `${normalizedBase}${path.slice(1)}` : `${normalizedBase}${path}`;
}

export function GameEmbedPlaceholder({ title }: GameEmbedPlaceholderProps) {
  return (
    <div className={styles.frame} aria-label={title}>
      <iframe
        className={styles.embed}
        src={resolveAssetPath('controller-prototype.html')}
        title={`${title} controller`}
        scrolling="no"
        loading="eager"
      />
    </div>
  );
}
