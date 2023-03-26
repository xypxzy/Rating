import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement //Чтобы свойство с обычных button'ов тоже работали, расширяем
  > {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
