import styles from './Nepoln2.module.css';
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
          content="Взрывозащищенные электроприводы SQEx и SQREx"
        />
        <title>Взрывозащищенные электроприводы SQEx и SQREx</title>
        <meta
          name="description"
          content="Неполнооборотные приводы SQR.2 предназначены для работы в повторно-кратковременном режиме S4 - 25%. Для режимов работы S4 - 50% и S5 - 25% используются приводы в специальном исполнении."
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
              title: <Link href={'/prod/nepoln'}>Неполнооборотные приводы</Link>,
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Взрывозащищенные электроприводы SQEx и SQREx
              </h2>
              <p className={styles.text}>
                Неполнооборотные приводы SQR.2 предназначены для работы в
                повторно-кратковременном режиме S4 - 25%. Для режимов работы S4
                - 50% и S5 - 25% используются приводы в специальном исполнении.
              </p>
              <p className={styles.text}>
                Приводы могут сочетаться с различными средствами управления. Это
                могут быть как несложные средства управления для работы в режиме
                ОТКРЫТЬ-ЗАКРЫТЬ, так и средства, оснащенные микроконтроллером с
                возможностью регистрации рабочих характеристик и полевой шиной.
              </p>
              <Image
                src={'/images/nepoln/1.2.png'}
                alt="Взрывозащищенные электроприводы SQEx и SQREx"
                width={300}
                height={290}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Диапазон моментов от 75Нм до 2400Нм</li>
                <li>Диапазон момента регулирования от 75Нм до 1200Нм</li>
                <li>Не более 1500 пусков/час</li>
                <li>
                  Угол поворота от 75° до 105°. Иные углы поворота опционально
                  (15°-45°, 45°-75°, 105°-135°)
                </li>
                <li>Время поворота на 90° от 8 сек до 100сек</li>
                <li>Отключение по положению и по моменту</li>
                <li>Однофазные и трехфазные электродвигатели</li>
                <li>Маховик для ручного управления</li>
                <li>Механический индикатор положения</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Оболочка с высокой степенью герметичности</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применения</li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <ul className={styles.text}>
                <li>
                  Электрическое присоединение через штепсельный разъем АУМА
                  (клеммы в качестве опции)
                </li>
                <li>Кабельные вводы различных исполнений</li>
                <li>
                  Нормы выходного вала в соответствии со стандартами ISO и DIN
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
