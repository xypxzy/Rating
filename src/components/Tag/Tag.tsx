import React from 'react';
import styles from './Tag.module.css';
import cn from 'classnames';
import { TagProps } from './Tag.props';

export const Tag = ({
  size = 'm',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps) => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {' '}
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
