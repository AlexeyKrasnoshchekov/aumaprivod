/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Contact.module.css';
import { withLayout } from '@/layout/Layout';

function Contacts(): JSX.Element {
  return (
    <>
      <Head>
        <title>АумаПриводСервис электроприводы Auma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={cn(styles.innerWrapper, styles.surgut)}>
          <h4 className={styles.header}>ООО "АумаПриводСервис"</h4>
          <div className={styles.address}>
            628404, ХМАО-Югра, г. Сургут, ул. Рационализаторов, д.23/2
          </div>
          <div className={styles.tel}>
            <strong>Тел./Факс:</strong> (3462) 236-234, 236-299
          </div>
          <div className={styles.email}>
            <strong>E-mail:</strong> auma@aumaprivod.ru
          </div>
          <div className={styles.map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9eb300ee438b407ddcbe609b84c0104937c914f9ef5a5ff4c401295d8b300da7&amp;source=constructor"
              width="400"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h4 className={styles.header}>
            Обособленное подразделение ООО "АумаПриводСервис"&nbsp;г.Иркутск
          </h4>
          <div className={styles.address}>
            664009, г.Иркутск, улица
            Советская, дом 109, офис 313 Б
          </div>
          <div className={styles.tel}>
            <strong>Тел.:</strong> (3952) 27-01-87, 27-01-89, 99-87-93
          </div>
          <div className={styles.email}>
            <strong>E-mail:</strong> auma@aumaprivod.ru
          </div>
          <div className={styles.map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa0e3830ac4ead1444ab07d292eba01dc73efb9c8b8c9a8009b2b8bf37799ed02&amp;source=constructor"
              width="400"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h4 className={styles.header}>
            Обособленное подразделение ООО "АумаПриводСервис"&nbsp;г.Омск
          </h4>
          <div className={styles.address}>
            644123, г.Омск, ул.70 Лет Октября, 24, офис 410
          </div>
          <div className={styles.tel}>
            <strong>Тел.:</strong> (3812) 700-012
          </div>
          <div className={styles.email}>
            <strong>E-mail:</strong> auma@aumaprivod.ru
          </div>
          <div className={styles.map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Add560a00ffec987ce0ff0d53cf7d213976b4367b6738ca37f7a86d7d9226bc5d&amp;source=constructor"
              width="400"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h4 className={styles.header}>
            Обособленное подразделение ООО "АумаПриводСервис"&nbsp;г.Тюмень
          </h4>
          <div className={styles.address}>
            625000, г. Тюмень, ул. Республики, д. 61, офис 605
          </div>
          <div className={styles.tel}>
            <strong>Тел.:</strong> (3452) 69-63-51
          </div>
          <div className={styles.email}>
            <strong>E-mail:</strong> auma@aumaprivod.ru
          </div>
          <div className={styles.map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad3713db04d3ffd8bf453014ae3e141ae5369ae938a3a32f4ce0341c91302dcad&amp;source=constructor"
              width="400"
              height="300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayout(Contacts);
