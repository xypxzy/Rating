import cn from 'classnames';
import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';

export const Advantages = ({
  _id,
  title,
  description,
}: AdvantagesProps): JSX.Element => {
  return <div className={styles.advantages}>{title}</div>;
};
