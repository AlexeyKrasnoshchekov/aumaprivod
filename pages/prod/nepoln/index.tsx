import styles from './Nepoln.module.css';
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
        <meta name="keywords" content="НЕПОЛНООБОРОТНЫЕ ПРИВОДЫ" />
        <title>НЕПОЛНООБОРОТНЫЕ ПРИВОДЫ</title>
        <meta
          name="description"
          content="В соответствии со стандартом ISO 5211, неполнооборотные приводы передают крутящий момент на арматуру для ее перемещения на один поворот или меньше. Не могут выдерживать осевую нагрузку."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>НЕПОЛНООБОРОТНЫЕ ПРИВОДЫ</h2>
        <p className={styles.text}>
          В соответствии со стандартом ISO 5211, неполнооборотные приводы
          передают крутящий момент на арматуру для ее перемещения на один
          поворот или меньше. Не могут выдерживать осевую нагрузку.
        </p>
        <p className={styles.text}>
          Электроприводы предлагаются в общепромышленном и взрывозащищенном
          исполнениях. Подходят для применения в энергетике, водной
          промышленности, нефтегазовой отрасли, также предлагаются компактные
          приводы АУМА для судостроения.
        </p>
        <p className={styles.text}>
          Неполнооборотные приводы SQ имеют встроенные концевые упоры для
          точного доведения до конечных положений в ручном режиме управления.
        </p>
        {/* <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2> */}
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <Link href={'/prod/nepoln/1'}>
              <h2 className={styles.title}>
                Неполнооборотные приводы SQ и SQR
              </h2>
            </Link>
            <Image
              src={'/images/nepoln/1.1.png'}
              alt="Неполнооборотные приводы SQ и SQR"
              width={175}
              height={150}
            />
            <p className={styles.text}>
              Общепромышленные приводы SQ/SQR применяются в водном хозяйстве,
              энергетике, а также в судостроении, целлюлозно-бумажной и пищевой
              отраслях промышленности, в системах кондиционирования воздуха..
              Температурный диапазон применения очень широк: от -60 до +80
              градусов. Предлагается также специальное исполнение от 0 до +120
              градусов. Электроприводы SQ/SQR 07.2 – SQ/SQR 14.2 могут быть
              оснащены блоками управления АМ и АС.
            </p>
          </div>
          <div className={styles.right50}>
            <Link href={'/prod/nepoln/2'}>
              <h2 className={styles.title}>
                Взрывозащищенные электроприводы SQEx и SQREx
              </h2>
            </Link>
            <Image
              src={'/images/nepoln/1.2.png'}
              alt="Взрывозащищенные электроприводы SQEx и SQREx"
              width={200}
              height={190}
            />
            <p className={styles.text}>
              Взрывозащищенное оборудование используется на наружных и
              внутренних установках во взрывоопасных зонах. Взрывозащищенные
              неполнооборотные электроприводы АУМА эксплуатируются при
              температуре окружающей среды от -63 до +60 градусов. Маркировка
              взрывозащиты - 1Exd(e)IICT4/T3 (согласно ТР ТС). Приводы могут
              эксплуатироваться в подземных выработках шахт и рудников, а также
              во взрывоопасных зонах.
            </p>
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <Link href={'/prod/nepoln/3'}>
              <h2 className={styles.title}>
                Комбинации многооборотных приводов SA с червячным редуктором GS
              </h2>
            </Link>
            <Image
              src={'/images/nepoln/2.1.png'}
              alt="Комбинации многооборотных приводов SA с червячным редуктором GS"
              width={150}
              height={180}
            />
            <p className={styles.text}>
              Многооборотный привод SA с червячным редуктором GS представляет
              собой комбинацию, аналогичную неполнооборотному электроприводу с
              высоким крутящим моментом. Эти комбинации дополняют ряд
              неполнооборотных приводов SQ, диапазон крутящего момента которого
              ограничен до 2400Нм.
            </p>
          </div>
          <div className={styles.right50}>
            <Link href={'/prod/nepoln/4'}>
              <h2 className={styles.title}>
                Взрывозащищенные неполнооборотные приводы SQEx и комбинации SA с
                червячными редукторами GS
              </h2>
            </Link>
            <Image
              src={'/images/nepoln/2.2.png'}
              alt="Взрывозащищенные неполнооборотные приводы SQEx и комбинации SA с червячными редукторами GS"
              width={150}
              height={160}
            />
            <p className={styles.text}>
              Оглядываясь на 50 летний опыт, AUMA обрела множество
              производственных секретов в области взрывозащиты. С ее системой
              управления качеством, которая была аттестована согласно
              сертификатам ISO 9001 и CD 94/9/EC, AUMA соответствует всем
              требованиям для производства и продажи взрывозащищенной продукции.
            </p>
          </div>
        </div>

        {/* <div className={styles.gradient}></div> */}
      </div>
    </>
  );
}

export default withLayout(Klin);
