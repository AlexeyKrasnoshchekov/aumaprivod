import styles from './Controls4.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';
import { Breadcrumb } from 'antd';

function Klin(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Взрывозащищенные блоки управления AUMA MATIC (AMExC) и AUMATIC (ACExC)"
        />
        <title>
          Взрывозащищенные блоки управления AUMA MATIC (AMExC) и AUMATIC (ACExC)
        </title>
        <meta
          name="description"
          content="Для многооборотных приводов SAEx 07.2 – SAEx 16.2 и для неполнооборотных приводов SQEx 05.2 -SQEx 14.2 подходят AMExC 01.1 и ACExC 01.1, обе системы управления со встроенным местным управлением."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Breadcrumb
          items={[
            {
              title: <Link href={'/prod'}>Продукция</Link>,
            },
            {
              title: <Link href={'/prod/controls'}>Средства управления</Link>,
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Взрывозащищенные блоки управления AUMA MATIC (AMExC) и AUMATIC
                (ACExC)
              </h2>
              <p className={styles.text}>
                Оглядываясь на 50 летний опыт, АУМА обрела множество
                производственных секретов в области взрывозащиты. С ее системой
                управления качеством, которая была аттестована согласно
                сертификатам ISO 9001 и CD 94/9/EC, АУМА соответствует всем
                требованиям для производства и продажи взрывозащищенной
                продукции.
              </p>
              <p className={styles.text}>
                Для многооборотных приводов SAEx 07.2 – SAEx 16.2 и для
                неполнооборотных приводов SQEx 05.2 -SQEx 14.2 подходят AMExC
                01.1 и ACExC 01.1, обе системы управления со встроенным местным
                управлением.
              </p>
              <Image
                src={'/images/controls/4.png'}
                alt="Взрывозащищенные блоки управления AUMA MATIC (AMExC) и AUMATIC (ACExC)"
                width={262}
                height={480}
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
