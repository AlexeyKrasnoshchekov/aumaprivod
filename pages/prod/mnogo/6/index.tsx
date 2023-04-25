import styles from './Mnogo6.module.css';
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
        <meta name="keywords" content="Электроприводы SA-UW и SAR-UW" />
        <title>Электроприводы SA-UW и SAR-UW</title>
        <meta
          name="description"
          content="Система уплотнений в сочетании с прекрасными свойствами защиты от коррозии обеспечивают применение электроприводов AUMA под водой."
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
            <h2 className={styles.title}>Электроприводы SA-UW и SAR-UW</h2>
            <p className={styles.text}>
              Система уплотнений в сочетании с прекрасными свойствами защиты от
              коррозии обеспечивают применение электроприводов AUMA под водой.
            </p>
            <p className={styles.text}>
              Кабельные вводы с двойным уплотнением предотвращают попадание воды
              в корпус. Внутренние уплотнения на крышках корпуса, иногда в
              количестве двух штук, а также пустотелый вал из нержавеющей стали
              дополняют эту универсальную конструкцию.
            </p>
            <Image
              src={'/images/mnogo/3.2.png'}
              alt="Электроприводы SA-UW и SAR-UW"
              width={300}
              height={305}
            />
            <h3 className={styles.title}>Технические характеристики SA-UW:</h3>
            <ul className={styles.text}>
              <li>Крутящий момент от 10 Нм до 4000 Нм</li>
              <li>Выходная скорость от 4 до 180 об/мин</li>
              <li>Магнитный датчик положения и момента</li>
              <li>Т3ф электродвигатели переменного тока</li>
            </ul>
            <h3 className={styles.title}>Технические характеристики SAR-UW:</h3>
            <ul className={styles.text}>
              <li>Крутящий момент от 15 Нм до 4000 Нм</li>
              <li>Момент регулирования от 15 Нм до 1600 Нм</li>
              <li>Макс. количество пусков 1200 ц/ч</li>
              <li>Выходная скорость от 4 до 90 об/мин</li>
              <li>Магнитный датчик положения и момента</li>
              <li>3ф электродвигатели переменного тока</li>
              <li>Монтаж блока управления на настенном креплении</li>
            </ul>
            <h3 className={styles.title}>Условия окружающей среды:</h3>
            <ul className={styles.text}>
              <li>
                Высокая степень защиты оболочки для постоянного применения под
                водой, 15 м водяного столба
              </li>
              <li>Высокая степень защиты от коррозии (Im1, Im2, Im3)</li>
              <li>Температура окружающей среды от –30 °C до +70 °C</li>
            </ul>
            <h3 className={styles.title}>Интерфейсы:</h3>
            <ul className={styles.text}>
              <li>Комплект кабельных вводов</li>
              <li>Электрическое подключение через штепсельный разъем AUMA</li>
              <li>
                Формы присоединения выходного вала по стандартам DIN и EN ISO
              </li>
            </ul>
          </div>
        </div>
      </div></>
    </>
  );
}

export default withLayout(Klin);
