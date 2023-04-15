import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import Image from 'next/image';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button, Divider, Review, ReviewForm } from '..';
import { declOfNum, priceRu } from '../../../helper/helper';
import { forwardRef, ForwardedRef, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Product = motion(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setReviewIsOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const scrollToReview = () => {
        setReviewIsOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card color={'white'} className={styles.product}>
            <div className={styles.logo}>
              <Image
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                width={70}
                height={70}
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              {priceRu(product.price)}
              {product.oldPrice && (
                <Tag color='green' className={styles.oldPrice}>
                  {priceRu(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              {priceRu(product.credit)}/
              <span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <Tag key={c} color='ghost' className={styles.category}>
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
              <a href='#ref' onClick={scrollToReview}>
                {product.reviewCount}
                {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map((c) => {
                return (
                  <div className={styles.characteristics} key={c.name}>
                    <span className={styles.characteristicsName}>{c.name}</span>
                    <span className={styles.characteristicsDots}></span>
                    <span className={styles.characteristicsValue}>
                      {c.value}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Приемущество</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Недостатки</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
              <Button appearance='primary'>Узнать подробнее</Button>
              <Button
                appearance='ghost'
                arrow={isReviewOpened ? 'down' : 'right'}
                className={styles.reviewBtn}
                onClick={() => setReviewIsOpened(!isReviewOpened)}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>
          <Card
            color='blue'
            className={cn(styles.reviews, {
              [styles.opened]: isReviewOpened,
              [styles.closed]: !isReviewOpened,
            })}
            ref={reviewRef}
          >
            {product.reviews.map((userReview) => (
              <div key={userReview._id}>
                <Review review={userReview} />
                <Divider />
              </div>
            ))}
            <ReviewForm productId={product._id} />
          </Card>
        </div>
      );
    }
  )
);
