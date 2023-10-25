import styles from './Mnogo1.module.css';
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
        <meta name="keywords" content="Многооборотные приводы SA и SAR" />
        <title>Многооборотные приводы SA и SAR</title>
        <meta
          name="description"
          content="Общепромышленные приводы SA/SAR применяются в водном хозяйстве, энергетике, а также в судостроении, целлюлозно-бумажной и пищевой отраслях промышленности, в системах кондиционирования воздуха."
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
                <Link href={'/prod/mnogo'}>Многооборотные приводы</Link>
              ),
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2>
              <p className={styles.text}>
                Общепромышленные приводы SA/SAR применяются в водном хозяйстве,
                энергетике, а также в судостроении, целлюлозно-бумажной и
                пищевой отраслях промышленности, в системах кондиционирования
                воздуха.
              </p>
              <p className={styles.text}>
                Температурный диапазон применения очень широк: от -60 до +80
                градусов. Предлагается также специальное исполнение от 0 до +120
                градусов.
              </p>
              <p className={styles.text}>
                Электроприводы SA/SAR 07.2 – SA/SAR 16.2 могут быть оснащены
                блоками управления АМ и АС.
              </p>
              <Image
                src={'/images/mnogo/1.1.png'}
                alt="Многооборотные приводы SA и SAR"
                width={270}
                height={240}
              />
              <h3 className={styles.title}>Технические характеристики SAR:</h3>
              <ul className={styles.text}>
                <li>Крутящий момент от 15 Нм до 4000 Нм</li>
                <li>Момент регулирования от 15 Нм до 1600 Нм</li>
                <li>Макс. количество пусков - 1200 пусков в час</li>
                <li>Выходная скорость от 4 до 90 об/мин</li>
                <li>Отключение по пути и по моменту</li>
                <li>
                  Совместимость с 3ф, 1ф электродвигателями переменного тока
                </li>
                <li>Ручной маховик для ручного управления</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая степень защиты оболочки</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применения</li>
              </ul>
              <h3 className={styles.title}>Oпции:</h3>
              <ul className={styles.text}>
                <li>Промежуточные выключатели</li>
                <li>Сдвоенные выключатели</li>
                <li>Дистанционный датчик положения</li>
                <li>Магнитный датчик положения и момента</li>
                <li>Механический указатель положения</li>
                <li>
                  Функциональная безопасность: До SIL 2 для определенных
                  конфигураций
                </li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <ul className={styles.text}>
                <li>Электрический разъем АУМА (клеммы в качестве опции)</li>
                <li>Крышка с резьбой под различные кабельные вводы</li>
                <li>
                  Формы присоединения выходного вала в соответствии со
                  стандартами ISO, DIN и ОСТ
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
