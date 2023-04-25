import styles from './Mnogo_red3.module.css';
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
        <meta name="keywords" content="Многооборотные редукторы GHT" />
        <title>Многооборотные редукторы GHT</title>
        <meta
          name="description"
          content="Для трубопроводов с высоким давлением необходимы многооборотные приводы с высоким крутящим моментом."
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
              <h2 className={styles.title}>Многооборотные редукторы GHT</h2>
              <p className={styles.text}>
                Для трубопроводов с высоким давлением необходимы многооборотные
                приводы с высоким крутящим моментом.
              </p>
              <p className={styles.text}>
                Многооборотный привод в сочетании с многооборотным редуктором
                GHT создают крутящий момент до 80000Нм.
              </p>
              <p className={styles.text}>
                Режим работы: Кратковременный режим S2 - 15 мин. (режим работы
                ОТКРЫТЬ-ЗАКРЫТЬ). Управление: от электродвигателя. Без
                самоблокировки.
              </p>
              <Image
                src={'/images/mnogo_red/3.png'}
                alt="Многооборотные редукторы GHT"
                width={250}
                height={280}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Крут¤щие моменты до 80000Нм</li>
                <li>Передаточное число 1:12</li>
                <li>
                  Формы выходного вала в соответствии со стандартами с ISO 5210
                  или ISO 5211
                </li>
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
