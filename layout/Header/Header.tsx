import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import Link from 'next/link';


const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <>
      <div className={cn(className, styles.headerWrapper)} {...props}>
        <div className={styles.headerLeft}>
          <Link href={'/'}>
            <Image src={'/images/logo.webp'} alt="лого аумаприводсервис" width={313} height={61} />
          </Link>
        </div>
        <div className={styles.headerCenter}>
          <div>
            <span>E-mail:{' '}</span>
            <a className={styles.headerLink} href="mailto:auma@aumaprivod.ru">
              auma@aumaprivod.ru
            </a>
          </div>
          <div>
            <span>Телефон:{' '}</span>
            <a className={styles.headerLink} href="tel:+73462236234">
              +7 (3462) 236-234
            </a>
          </div>
        </div>
        <div className={styles.headerRight}>
          <p>Электроприводы AUMA</p>
        </div>
        <div className={styles.headerMenu}>
          <Link href={'/company'}>
            <div className={styles.headerMenuItem}>
              Компания
            </div>
          </Link>
          <Link href={'/prod'}>
            <div className={styles.headerMenuItem}>
              Продукция
            </div>
          </Link>
          <Link href={'/docs'}>
            <div className={styles.headerMenuItem}>
              Документация
            </div>
          </Link>
          <Link href={'/contacts'}>
            <div className={styles.headerMenuItem}>
              Контакты
            </div>
          </Link>        
        </div>
      </div>
    </>
  );
};

export default Header;
