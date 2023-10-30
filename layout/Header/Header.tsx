import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({ className, ...props }: HeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className={cn(className, styles.headerWrapper)} {...props}>
        <div className={styles.headerLeft}>
          <Link href={'/'}>
            {/* <Image
              src={'/images/logo.webp'}
              alt="лого аумаприводсервис"
              width={313}
              height={61}
            /> */}
            АумаПриводСервис
          </Link>
        </div>
        <div className={styles.headerCenter}>
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
        <div className={styles.headerRight}>Электроприводы АУМА</div>
        <div className={styles.headerMenu}>
          <Link
            href={'/company'}
            style={{
              backgroundColor: router.pathname.includes('/company')
                ? '#3A3A3A'
                : '#006EAB',
            }}
          >
            <div className={styles.headerMenuItem}>Компания</div>
          </Link>
          <Link
            href={'/prod'}
            style={{
              backgroundColor: router.pathname.includes('/prod')
                ? '#3A3A3A'
                : '#006EAB',
            }}
          >
            <div className={styles.headerMenuItem}>Продукция</div>
          </Link>
          <Link
            href={'/docs'}
            style={{
              backgroundColor: router.pathname.includes('/docs')
                ? '#3A3A3A'
                : '#006EAB',
            }}
          >
            <div className={styles.headerMenuItem}>Документация</div>
          </Link>
          <Link
            href={'/service'}
            style={{
              backgroundColor: router.pathname.includes('/service')
                ? '#3A3A3A'
                : '#006EAB',
            }}
          >
            <div className={styles.headerMenuItem}>Сервис</div>
          </Link>
          <Link
            href={'/contacts'}
            style={{
              backgroundColor: router.pathname.includes('/contacts')
                ? '#3A3A3A'
                : '#006EAB',
            }}
          >
            <div className={styles.headerMenuItem}>Контакты</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
