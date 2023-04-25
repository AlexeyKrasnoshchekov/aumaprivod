import styles from './Mnogo_red2.module.css';
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
        <meta name="keywords" content="Конические редукторы GK" />
        <title>Конические редукторы GK</title>
        <meta
          name="description"
          content="Конические редукторы АУМА используются для работы арматуры (например, задвижек, клапанов)."
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
            <h2 className={styles.title}>Конические редукторы GK</h2>
            <p className={styles.text}>
              Конические редукторы АУМА используются для работы арматуры
              (например, задвижек, клапанов).
            </p>
            <h3 className={styles.title}>
              Они предназначены для эксплуатации в одном из двух случаев:
            </h3>
            <ul className={styles.text}>
              <li>Ручное управление непосредственно маховиком</li>
              <li>
                Уравление от электродвигателя (многооборотный электропривод)
              </li>
            </ul>
            <p className={styles.text}>
              Цикл работы: кратковременный S2-15мин (режим Открыть-Закрыть) или
              повторно-кратковременный S4-25% (режим регулирования). Редуктор
              подготовлен для установки фланца под привод. Вращению по часовой
              стрелке входного вала соответствует вращение по часовой стрелке
              выходного вала.
            </p>
            <p className={styles.text}>
              Чтобы изменить направление вращения GK 14.2 - GK 25.2, может быть
              использован реверсивный редуктор GW 14.1. Для GK 30.2 - GK 40.2
              может быть изменено направление вращения выходного вала. GK 10.2 -
              GK 25.2 - одноступенчатые редукторы GK 30.2 - GK 40.2 -
              двухступенчатые редукторы
            </p>
            <Image
              src={'/images/mnogo_red/2.png'}
              alt="Конические редукторы GK"
              width={260}
              height={240}
            />
            <h3 className={styles.title}>Особенности конструкции:</h3>
            <ul className={styles.text}>
              <li>Крутящие моменты до 16000Нм</li>
              <li>Передаточное число от 1:1 до 1:22</li>
              <li>
                Формы выходного вала в соответствии со стандартами ISO или DIN.
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

        {/* <div className={styles.gradient}></div> */}
      </div>
      </>
    </>
  );
}

export default withLayout(Klin);

