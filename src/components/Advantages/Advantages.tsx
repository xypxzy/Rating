import cn from 'classnames';
import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CompleteIcon from './completeIcon.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((advantage) => {
        return (
          <div key={advantage._id} className={styles.advantage}>
            <CompleteIcon />
            <div className={styles.title}>{advantage.title}</div>
            <hr className={styles.vline} />
            <div className={styles.description}>{advantage.description}</div>
          </div>
        );
      })}
    </>
  );
};
