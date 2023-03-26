import cn from 'classnames';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href='#'>Пользовательское соглашение</a>
      <a href='#'>Политика конфиденциальности</a>
    </footer>
  );
};
