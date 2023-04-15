import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.message}>{error.message}</span>}
    </div>
  )
);
