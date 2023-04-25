import styles from './Mnogo5.module.css';
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
        <meta name="keywords" content="Электроприводы SAV и SARV с ACV" />
        <title>Электроприводы SAV и SARV с ACV</title>
        <meta
          name="description"
          content="Электроприводы SAV .2 для режима Открыть-Закрыть и SARV .2 для режима регулирования оснащены блоком ACV .2 с частотным преобразователем. Проверенная временем линейка приводов SA/SAR была расширена за счет приводов с изменяемой скоростью. Компания AUMA предлагает рынку новые технологии, делающие возможным регулирование скорости в широком диапазоне"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <><Breadcrumb
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
        /><div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <div className={styles.left80}>
            <h2 className={styles.title}>Электроприводы SAV и SARV с ACV</h2>
            <p className={styles.text}>
              Электроприводы SAV .2 для режима Открыть-Закрыть и SARV .2 для
              режима регулирования оснащены блоком ACV .2 с частотным
              преобразователем. Проверенная временем линейка приводов SA/SAR
              была расширена за счет приводов с изменяемой скоростью. Компания
              AUMA предлагает рынку новые технологии, делающие возможным
              регулирование скорости в широком диапазоне
            </p>
            <p className={styles.text}>
              Приводы SAV для режимов Открыть-Закрыть и позиционирования
              предназначены для класса A и B или режима работы S2 - 15 мин..
              Предлагается также специальное исполнение для режима работы S2 -
              30 мин.
            </p>
            <p className={styles.text}>
              Регулирующие приводы SARV для класса C или режима работы S4 - 25
              %. Предлагаются также специальные режимы S4 - 50 % and S4 - 75 %
            </p>
            <Image
              src={'/images/mnogo/3.1.png'}
              alt="Электроприводы SAV и SARV с ACV"
              width={300}
              height={250}
            />
            <h3 className={styles.title}>Технические характеристики SAV:</h3>
            <ul className={styles.text}>
              <li>Крутящий момент от 10 Нм до 1000 Нм</li>
              <li>Выходная скорость от 6 до 240 об/мин</li>
              <li>Концевые и моментные выключатели</li>
              <li>Трехфазные электродвигатели переменного тока</li>
              <li>Ручной маховик для ручного управления</li>
              <li>Плавный пуск и останов для защиты арматуры</li>
              <li>Изменяемая скорость для избежания резких перепадов давления</li>
              <li>Регулируемая скорость для аварийного функционирования</li>
              <li>Синхронизация работы двух приводов</li>
            </ul>
            <h3 className={styles.title}>Технические характеристики SARV:</h3>
            <ul className={styles.text}>
              <li>Крутящий момент от 15 Нм до 1000 Нм</li>
              <li>Момент регулирования от 15 Нм до 350 Нм</li>
              <li>Макс. количество пусков 1500 ц/час</li>
              <li>Выходная скорость от 6 до 240 об/мин</li>
              <li>Трехфазные электродвигатели переменного тока</li>
              <li>Ручной маховик для ручного управления</li>
              <li>Высокая точность позиционирования</li>
              <li>Плавный пуск и останов для защиты арматуры</li>
              <li>Изменяемая скорость для избежания резких перепадов давления</li>
              <li>Регулируемая скорость для аварийного функционирования</li>
              <li>Синхронизация работы двух приводов</li>
            </ul>
            <h3 className={styles.title}>Условия окружающей среды:</h3>
            <ul className={styles.text}>
              <li>Высокая защита оболочки</li>
              <li>Высокая степень защиты от коррозии</li>
              <li>Широкий температурный диапазон применимости</li>
            </ul>
            <h3 className={styles.title}>Опции:</h3>
            <ul className={styles.text}>
              <li>Промежуточные выключатели</li>
              <li>Сдвоенные выключатели</li>
              <li>Дистанционный датчик положения</li>
              <li>Магнитный датчик положения и момента</li>
              <li>Механический указатель положения</li>
            </ul>
            <h3 className={styles.title}>Интерфейсы:</h3>
            <ul className={styles.text}>
              <li>Электрический разъем AUMA (клеммы в качестве опции)</li>
              <li>Крышка с резьбой под различные кабельные вводы</li>
              <li>Формы присоединения выходного вала в соответствии со стандартами ISO, DIN</li>
            </ul>
          </div>
        </div>
      </div></>
    </>
  );
}

export default withLayout(Klin);
