import styles from './Nepoln_red4.module.css';
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
          content="Неполнооборотные редукторы GS 50.3—GS 250.3 с опорой и рычагом"
        />
        <title>
          Неполнооборотные редукторы GS 50.3—GS 250.3 с опорой и рычагом
        </title>
        <meta
          name="description"
          content="В основе конструкции описываемого здесь редуктора - редуктор GS.3. Вместо выходного фланца и втулки в исполнении «с опорой и рычагом» устанавливается опорный фланец и рычаг."
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
                Неполнооборотные редукторы GS 50.3—GS 250.3 с опорой и рычагом
              </h2>
              <p className={styles.text}>
                В основе конструкции описываемого здесь редуктора - редуктор
                GS.3. Вместо выходного фланца и втулки в исполнении «с опорой и
                рычагом» устанавливается опорный фланец и рычаг.
              </p>
              <p className={styles.text}>
                На рычаг, как правило, монтируется рычажное управление с шаровым
                шарниром для крепления арматуры. Исполнение RL, RR, LR, LL.
                Первый символ исполнения обозначает положение червячного вала
                относительно червячного колеса (вид со стороны входного вала).
                Второй символ указывает на направление вращения выходного вала
                (вид со стороны крышки корпуса) при вращении входного вала по
                часовой стрелке.
              </p>
              <Image
              src={'/images/nepoln_red/4.png'}
              alt="Неполнооборотные редукторы GS 50.3—GS 250.3 с опорой и рычагом"
              width={250}
              height={250}
            />

              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая защита оболочки</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применимости</li>
              </ul>
              <h3 className={styles.title}>
                Оборудование и функциональные возможности:
              </h3>
              <ul className={styles.text}>
                <li>
                  Редуктор изготавливается на основе неполнооборотного редуктора
                  типа GS.3.
                </li>
                <li>
                  Таким образом, для него действительны технические
                  характеристики серии GF
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
