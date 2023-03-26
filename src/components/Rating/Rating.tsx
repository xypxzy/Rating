import React, { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';
import styles from './Rating.module.css';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  ); //Для того чтобы заполнить элементы. Пустые фрагменты

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    //Функция чтобы заполнить стейт
    const updatedArray = ratingArray.map((rate: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.fill]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  function changeDisplay(rate: number) {
    if (!isEditable) {
      return;
    }
    constructRating(rate);
  }
  function onClick(rate: number) {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(rate);
  }
  function handleSpace(rate: number, e: KeyboardEvent<SVGElement>) {
    if (e.code != 'Space' || !setRating) {
      return;
    }
    setRating(rate);
  }

  return (
    <div {...props}>
      {ratingArray.map((rate, i) => (
        <span key={i}>{rate}</span>
      ))}
    </div>
  );
};
