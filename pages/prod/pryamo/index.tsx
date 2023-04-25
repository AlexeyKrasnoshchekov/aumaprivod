import styles from './Pryamo.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';

function Klin(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="ПРЯМОХОДНЫЕ ПРИВОДЫ" />
        <title>ПРЯМОХОДНЫЕ ПРИВОДЫ</title>
        <meta
          name="description"
          content="Многооборотный электропривод SA может выступать в комбинации с прямоходным модулем LE для выполнения возвратно-поступательного движения, например, при автоматизации прямоходных клапанов. Если требуется управление через рычажную сборку, прямоходный модуль может быть смонтирован на основании."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ПРЯМОХОДНЫЕ ПРИВОДЫ</h2>
        <p className={styles.text}>
          Многооборотный электропривод SA может выступать в комбинации с
          прямоходным модулем LE для выполнения возвратно-поступательного
          движения, например, при автоматизации прямоходных клапанов. Если
          требуется управление через рычажную сборку, прямоходный модуль может
          быть смонтирован на основании.
        </p>
        {/* <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2> */}
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <Link href={'/prod/pryamo/1'}>
              <h2 className={styles.title}>
                Комбинации многооборотных приводов SA с прямоходными модулями LE
              </h2>
            </Link>
            <Image
              src={'/images/pryamo/1.png'}
              alt="Комбинации многооборотных приводов SA с прямоходными модулями LE"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Если требуется прямоходное движение, для автоматизации, например,
              клапанов, многооборотный привод SA нужно скомбинировать с
              прямоходным модулем LE. В комплектации с рычагом прямоходный
              модуль может быть установлен на базу
            </p>
          </div>
          <div className={styles.right50}>
            {/* <Link href={'/prod/pryamo/2'}>
              <h2 className={styles.title}>Прямоходные приводы ALS</h2>
            </Link>
            <Image
              src={'/images/pryamo/2.png'}
              alt="Прямоходные приводы ALS"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Из соображений безопасности, требуется функция аварийного
              срабатывания привода. В случае пропажи питанрия, арматура должна
              быть открыта или закрытта с помощью пружины. Прямоходные приводы
              ALS отвечают этому требованию
            </p> */}
            <Link href={'/prod/pryamo/3'}>
              <h2 className={styles.title}>Взрывозащищенные версии</h2>
            </Link>
            <Image
              src={'/images/pryamo/3.png'}
              alt="Взрывозащищенные версии"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Оглядываясь в прошлое, на более чем 25 летний опыт в области
              предохранения от взрыва, АУМА достигла всеобъемлющих технологий. С
              этой качественной системой управления, которая была аттестована
              согласно сертификатам ISO 9001 и CD 94/9/EC, АУМА соответствует
              всем требованиям для производства и продажи взрывозащищенной
              продукции.
            </p>
          </div>
        </div>
        {/* <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <Link href={'/prod/pryamo/3'}>
              <h2 className={styles.title}>Взрывозащищенные версии</h2>
            </Link>
            <Image
              src={'/images/pryamo/3.png'}
              alt="Взрывозащищенные версии"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Оглядываясь в прошлое, на более чем 25 летний опыт в области
              предохранения от взрыва, АУМА достигла всеобъемлющих технологий. С
              этой качественной системой управления, которая была аттестована
              согласно сертификатам ISO 9001 и CD 94/9/EC, АУМА соответствует
              всем требованиям для производства и продажи взрывозащищенной
              продукции.
            </p>
          </div>
          <div className={styles.right50}></div>
        </div> */}

        {/* <div className={styles.gradient}></div> */}
      </div>
    </>
  );
}

export default withLayout(Klin);
