import styles from './Mnogo_red4.module.css';
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
        <meta name="keywords" content="Концевые выключатели WSH" />
        <title>Концевые выключатели WSH</title>
        <meta
          name="description"
          content="Для арматуры с ручным управлением может быть необходима информация о положении арматуры, которая отображается в диспетчерской."
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
              title: (
                <Link href={'/prod/mnogo_red'}>Многооборотные редукторы</Link>
              ),
            },
          ]}
        />
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <div className={styles.left80}>
            <h2 className={styles.title}>Концевые выключатели WSH</h2>
            <p className={styles.text}>
            Для арматуры с ручным управлением может быть необходима информация о положении арматуры, которая отображается в диспетчерской.
            </p>
            <p className={styles.text}>
            Это системы, где, например, клапан может находиться в открытом положении только тогда, когда другой клапан закрыт.
            </p>
            <p className={styles.text}>
            Концевые выключатели WSH для арматуры, управляемой вручную, подходят именно для таких случаев.
            </p>
            <Image
              src={'/images/mnogo_red/4.png'}
              alt="Концевые выключатели WSH"
              width={230}
              height={280}
            />
            <h3 className={styles.title}>Функции:</h3>
            <ul className={styles.text}>
              <li>Непрерывная механическая индикация положения</li>
              <li>Подача сигнала конечного положения для диапазона от 2 до 500 оборотов (опция: дo 2000) на ход штока</li>
              <li>Выработка двух дополнительных сигналов промежуточного положения, один в направлении ОТКРЫТЬ и один в направлении ЗАКРЫТЬ (опция)</li>
              <li>Непрерывный мониторинг хода и передача данных в диспетчерскую (опция)</li>
            </ul>
            <h3 className={styles.title}>Особенности конструкции:</h3>
            <ul className={styles.text}>
              <li>Подходит для принятия осевых усилий (с выходным валом типа А)</li>
              <li>Монтажные положения с шагом 90°</li>
            </ul>
            <h3 className={styles.title}>Условия окружающей среды:</h3>
            <ul className={styles.text}>
              <li>Оболочка с высокой степенью герметичности</li>
              <li>Высокая степень защиты от коррозии</li>
              <li>Широкий температурный диапазон применимости</li>
            </ul>
          </div>
        </div>
      </div>
      </>
    </>
  );
}

export default withLayout(Klin);
