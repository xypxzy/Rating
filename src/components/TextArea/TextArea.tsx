import { TextAreaProps } from './TextArea.props';
import cn from 'classnames';
import styles from './TextArea.module.css';
import { ForwardedRef, forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef(
  (
    { className, error, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <textarea
          className={cn(styles.textarea, {
            [styles.error]: error,
          })}
          {...props}
          ref={ref}
        />
        {error && <span className={styles.message}>{error.message}</span>}
      </div>
    );
  }
);
