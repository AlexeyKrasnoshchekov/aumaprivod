import styles from './Nepoln_red1.module.css';
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
        <meta name="keywords" content="Червячные редукторы GS" />
        <title>Червячные редукторы GS</title>
        <meta
          name="description"
          content="Червячные редукторы AUMA используются для управления неполнооборотной арматурой (например, дисковые затворы, шаровые краны)."
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
              <h2 className={styles.title}>Червячные редукторы GS</h2>
              <p className={styles.text}>
                Червячные редукторы AUMA используются для управления
                неполнооборотной арматурой (например, дисковые затворы, шаровые
                краны).
              </p>
              <p className={styles.text}>
                Они предназначены для эксплуатации в одном из двух случаев:
              </p>
              <ul className={styles.text}>
                <li>Ручное управление непосредственно маховиком</li>
                <li>
                  Управление от электродвигателя (многооборотный электропривод)
                </li>
              </ul>
              <p className={styles.text}>
                Редуктор подготовлен для установки фланца под привод Вращение по
                часовой стрелке входного вала соответствует вращению по часовой
                стрелке выходного вала.
              </p>
              <Image
                src={'/images/nepoln_red/1.png'}
                alt="Червячные редукторы GS"
                width={250}
                height={250}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Крутящие моменты до 675000Нм</li>
                <li>Передаточное число от 39:1 до 3328:1</li>
                <li>Угол поворота до 100°</li>
                <li>Регулируемые концевые упоры (опция)</li>
                <li>Формы выходного вала в соответствии со стандартом ISO</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая защита оболочки</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применимости</li>
              </ul>
              <h3 className={styles.title}>Опции:</h3>
              <ul className={styles.text}>
                <li>
                  Угол поворота более 100° или многооборотный (без концевых
                  упоров)
                </li>
                <li>Бронзовое червячное колесо для регулирования</li>
                <li>
                  Вращение входного вала по часовой стрелке соответствует
                  вращению выходного вала против часовой стрелки.
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
