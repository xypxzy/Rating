import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

export const Button = ({
  appearance,
  children,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, { [styles.down]: arrow == 'down' })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
