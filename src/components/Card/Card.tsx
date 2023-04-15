import cn from 'classnames';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import { forwardRef, ForwardedRef } from 'react';

// eslint-disable-next-line react/display-name
export const Card = forwardRef(
  (
    { color = 'white', children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.blue]: color == 'blue',
          [styles.white]: color == 'white',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
