import cn from 'classnames';
import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';
import RateItem from './rate.svg';
import styles from './HhData.module.css';
import { priceRu } from '../../../helper/helper';

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card color='white' className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card color='white' className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateItem className={styles.filled} />
            <RateItem />
            <RateItem />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateItem className={styles.filled} />
            <RateItem className={styles.filled} />
            <RateItem />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateItem className={styles.filled} />
            <RateItem className={styles.filled} />
            <RateItem className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
