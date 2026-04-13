import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './PrimaryButton.module.css';

type PrimaryButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    compact?: boolean;
  }
>;

export function PrimaryButton({
  children,
  className,
  compact = false,
  type = 'button',
  ...props
}: PrimaryButtonProps) {
  const classes = [styles.button, compact ? styles.compact : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} type={type} {...props}>
      <span className={styles.label}>{children}</span>
    </button>
  );
}
