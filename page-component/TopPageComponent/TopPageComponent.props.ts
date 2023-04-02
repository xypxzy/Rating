import {
  TopLevelCategory,
  TopPagesModel,
} from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPagesModel;
  products: ProductModel[];
}
