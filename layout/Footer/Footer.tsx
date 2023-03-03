import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import Link from 'next/link';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footerWrapper)} {...props}>
      <div className={styles.footerLeft}>
        <span>628401, Ханты-Мансийский автономный округ,</span>
        <span>
           г Сургут, ул
          Рационализаторов, д.23/2
        </span>
      </div>
      <div className={styles.footerCenter}>
        <div>
          <span>E-mail: </span>
          <a className={styles.headerLink} href="mailto:auma@aumaprivod.ru">
            auma@aumaprivod.ru
          </a>
        </div>
        <div>
          <span>Телефон: </span>
          <a className={styles.headerLink} href="tel:+73462236234">
            +7 (3462) 236-234
          </a>
        </div>
      </div>
      <div className={styles.footerRight}>
        <span>ООО АумаПриводСервис</span>
        <div>Все права защищены, {format(new Date(), 'yyyy')}</div>
      </div>
    </footer>
  );
};

export default Footer;
