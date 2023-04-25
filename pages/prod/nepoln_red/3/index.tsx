import styles from './Nepoln_red3.module.css';
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
          content="Неполнооборотные редукторы GHE для кораблестроения"
        />
        <title>Неполнооборотные редукторы GHE для кораблестроения</title>
        <meta
          name="description"
          content="Несмотря на высокий уровень автоматизации, все еще существует арматура с ручным управлением. Это особый случай, когда соответствующий клапан должен открываться или закрываться крайне редко."
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
                <Link href={'/prod/nepoln_red'}>
                  Неполнооборотные редукторы
                </Link>
              ),
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Неполнооборотные редукторы GHE для кораблестроения
              </h2>
              <p className={styles.text}>
                Несмотря на высокий уровень автоматизации, все еще существует
                арматура с ручным управлением. Это особый случай, когда
                соответствующий клапан должен открываться или закрываться крайне
                редко.
              </p>
              <p className={styles.text}>
                Диапазон GHE хорошо подходит для управления неполнооборотной
                арматурой (поворотные дисковые затворы «Баттерфляй» и шаровые
                краны), которые преимущественно используют в кораблестроении.
              </p>
              <Image
                src={'/images/nepoln_red/3.png'}
                alt="Неполнооборотные редукторы GHE для кораблестроения"
                width={250}
                height={250}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Крутящие моменты от 125Нм до 1000Нм</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая защита оболочки</li>
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
