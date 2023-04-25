import styles from './Mnogo.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';


function Klin(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="МНОГООБОРОТНЫЕ ПРИВОДЫ" />
        <title>МНОГООБОРОТНЫЕ ПРИВОДЫ</title>
        <meta
          name="description"
          content="Многооборотные приводы АUМА используются, например, для автоматизации
          задвижек или клапанов. Это наиболее разнообразный продукт компании
          АUМА."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>МНОГООБОРОТНЫЕ ПРИВОДЫ</h2>
        <p className={styles.text}>
          Многооборотные приводы АUМА используются, например, для автоматизации
          задвижек или клапанов. Это наиболее разнообразный продукт компании
          АUМА.
        </p>
        <p className={styles.text}>
          Существует много версий для отсечной работы SA, или для регулирующей
          работы SAR, или для применения в потенциально взрывоопасных зонах
          (SAEx или SAREx).
        </p>
        {/* <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2> */}
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <Link href={'/prod/mnogo/1'}>
              <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2>
            </Link>
            <Image
              src={'/images/mnogo/1.1.png'}
              alt="Многооборотные приводы SA и SAR"
              width={200}
              height={161}
            />
            <p className={styles.text}>
              Общепромышленные приводы SA/SAR применяются в водном хозяйстве,
              энергетике, а также в судостроении, целлюлозно-бумажной и пищевой
              отраслях промышленности, в системах кондиционирования воздуха.
              Температурный диапазон применения очень широк: от -60 до +80
              градусов. Предлагается также специальное исполнение от 0 до +120
              градусов. Электроприводы SA/SAR 07.2 – SA/SAR 16.2 могут быть
              оснащены блоками управления АМ и АС.
            </p>
          </div>
          <div className={styles.right50}>
            <Link href={'/prod/mnogo/2'}>
              <h2 className={styles.title}>
                Взрывозащищенные электроприводы SAEx и SAREx
              </h2>
            </Link>
            <Image
              src={'/images/mnogo/1.5.png'}
              alt="Взрывозащищенные электроприводы SAEx и SAREx"
              width={160}
              height={150}
            />
            <p className={styles.text}>
              Если вал арматуры должен быть под определенным углом к выходному
              валу привода, или направление смещено на 90 градусов, используются
              комбинации многооборотных приводов SA ... с цилиндрическими
              редукторами АUМА GST или коническими редукторами GK.
            </p>
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
          <Link href={'/prod/mnogo/3'}><h2 className={styles.title}>Комбинации с редукторами</h2></Link>
            <Image
              src={'/images/mnogo/2.2.png'}
              alt="Комбинации с редукторами"
              width={150}
              height={180}
            />
            <p className={styles.text}>
              Если вал арматуры должен быть под определенным углом к выходному
              валу привода, или направление смещено на 90 градусов, используются
              комбинации многооборотных приводов SA ... с цилиндрическими
              редукторами АUМА GST или коническими редукторами GK.
            </p>
          </div>
          <div className={styles.right50}>
          <Link href={'/prod/mnogo/4'}><h2 className={styles.title}>
              Приводы арматуры SV для корабельной промышленности
            </h2></Link>
            <Image
              src={'/images/mnogo/2.3.png'}
              alt="Приводы арматуры SV для корабельной промышленности"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Уже много лет АUМА поставляет оборудование для корабельной
              промышленности и соответствует высоким требованиям военных
              кораблей. Электрические приводы арматуры SV были оптимизированы
              для такого применения.
            </p>
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
          <Link href={'/prod/mnogo/5'}><h2 className={styles.title}>Электроприводы SAV и SARV с ACV</h2></Link>
            <Image
              src={'/images/mnogo/3.1.png'}
              alt="Электроприводы SAV и SARV с ACV"
              width={200}
              height={160}
            />
            <p className={styles.text}>
              Электроприводы SAV .2 для режима Открыть-Закрыть и SARV .2 для
              режима регулирования оснащены блоком ACV .2 с частотным
              преобразователем. Проверенная временем линейка приводов SA/SAR
              была расширена за счет приводов с изменяемой скоростью. Компания
              AUMA предлагает рынку новые технологии, делающие возможным
              регулирование скорости в широком диапазоне.
            </p>
          </div>
          <div className={styles.right50}>
          <Link href={'/prod/mnogo/6'}><h2 className={styles.title}>Электроприводы SA-UW и SAR-UW</h2></Link>
            <Image
              src={'/images/mnogo/3.2.png'}
              alt="Электроприводы SA-UW и SAR-UW"
              width={200}
              height={205}
            />
            <p className={styles.text}>
              Система уплотнений в сочетании с прекрасными свойствами защиты от
              коррозии обеспечивают применение электроприводов AUMA под водой.
              Кабельные вводы с двойным уплотнением предотвращают попадание воды
              в корпус. Внутренние уплотнения на крышках корпуса, иногда в
              количестве двух штук, а также пустотелый вал из нержавеющей стали
              дополняют эту универсальную конструкцию.
            </p>
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
          <Link href={'/prod/mnogo/7'}><h2 className={styles.title}>
              Электропривод с изменяемой скоростью AUMA SEVEN
            </h2></Link>
            <Image
              src={'/images/mnogo/4.png'}
              alt="Электропривод с изменяемой скоростью AUMA SEVEN"
              width={200}
              height={180}
            />
            <p className={styles.text}>
              Данный электропривод оснащен частотным преобразователем, который
              обеспечивает следующие функции: изменяемую скорость, плавный пуск
              и останов, отсутствие пусковых токов, колебаний напряжения и
              частоты. Такой электропривод устойчив к неблагоприятным условиям
              окружающей среды (стандартный класс коррозионной стойкости C5,
              IP67, двойное уплотнение – уровень защиты поддерживается при вводе
              в эксплуатацию), уровни защиты могут быть повышены.
            </p>
          </div>
          <div className={styles.right50}></div>
        </div>

        <div className={styles.gradient}></div>
      </div>
    </>
  );
}

export default withLayout(Klin);
