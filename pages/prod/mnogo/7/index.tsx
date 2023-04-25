import styles from './Mnogo7.module.css';
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
          content="Электропривод с изменяемой скоростью AUMA SEVEN"
        />
        <title>Электропривод с изменяемой скоростью AUMA SEVEN</title>
        <meta
          name="description"
          content="Данный электропривод оснащен частотным преобразователем, который обеспечивает следующие функции: изменяемую скорость, плавный пуск и останов, отсутствие пусковых токов, колебаний напряжения и частоты."
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
              title: <Link href={'/prod/mnogo'}>Многооборотные приводы</Link>,
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Электропривод с изменяемой скоростью AUMA SEVEN
              </h2>
              <p className={styles.text}>
                Данный электропривод оснащен частотным преобразователем, который
                обеспечивает следующие функции: изменяемую скорость, плавный
                пуск и останов, отсутствие пусковых токов, колебаний напряжения
                и частоты.
              </p>
              <p className={styles.text}>
                Такой электропривод устойчив к неблагоприятным условиям
                окружающей среды (стандартный класс коррозионной стойкости C5,
                IP67, двойное уплотнение – уровень защиты поддерживается при
                вводе в эксплуатацию), уровни защиты могут быть повышены.
              </p>
              <p className={styles.text}>
                Электропривод AUMA SEVEN предлагается в трех исполнениях:
                ECOTRON, PROFITRON и HiMod.
              </p>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-around',
                }}
              >
                <Image
                  src={'/images/mnogo/4.png'}
                  alt="Электропривод с изменяемой скоростью AUMA SEVEN"
                  width={200}
                  height={180}
                />
                <Image
                  src={'/images/mnogo/4.2.png'}
                  alt="Электропривод с изменяемой скоростью AUMA SEVEN"
                  width={200}
                  height={180}
                />
                <Image
                  src={'/images/mnogo/4.3.png'}
                  alt="Электропривод с изменяемой скоростью AUMA SEVEN"
                  width={200}
                  height={180}
                />
              </div>
              <h3 className={styles.title}>
                Технические характеристики электроприводов ECOTRON:
              </h3>
              <ul className={styles.text}>
                <li>
                  Крутящий момент до 4000 Нм / 2800 Нм (толчковый/регулирование)
                </li>
                <li>
                  Изменяемая выходная скорость до 160 об/мин / 80
                  (толчковый/регулирование)
                </li>
                <li>
                  Классы режимов управления: A (Открыть-Закрыть), B (толчковый)
                  и C (регулирование) в соответствии с EN 15714-2
                </li>
                <li>
                  Символьный ЖК-дисплей с поворотно-нажимной кнопкой для
                  простоты управлени
                </li>
              </ul>
              <h3 className={styles.title}>
                Технические характеристики электроприводов PROFITRON:
              </h3>
              <ul className={styles.text}>
                <li>
                  Крутящий момент до 4000 Нм / 2800 Нм (толчковый/регулирование)
                </li>
                <li>
                  Изменяемая выходная скорость и скорость до 160 об/мин / 80
                  об/мин (толчковый/регулирование)
                </li>
                <li>
                  Классы режимов управления: A (Открыть-Закрыть), B (толчковый
                  режим) и C (регулирование) в соответствии с EN 15714-2
                </li>
                <li>
                  Графический пользовательский интерфейс с поворотно-нажимной
                  кнопкой, интуитивное управление
                </li>
                <li>Опции по настройке</li>
                <li>Внешний USB порт и Bluetooth (стандарт)</li>
              </ul>
              <h3 className={styles.title}>
                Технические характеристики HiMod:
              </h3>
              <ul className={styles.text}>
                <li>Крутящий момент до 2800 Нм (непрерывное регулирование)</li>
                <li>
                  Изменяемая выходная скорость до 80 об/мин (непрерывное
                  регулирование)
                </li>
                <li>
                  Непрерывное регулирование - класс D в соответствии с EN
                  15714-2
                </li>
                <li>
                  Графический интерфейс с поворотно-нажимной кнопкой управления
                </li>
                <li>Опции по настройке (точности управления)</li>
                <li>Высочайшая точность благодаря датчику положения</li>
                <li>
                  Ввод в эксплуатацию без вскрытия оболочки, защита оболочки
                  обеспечивается и при подключении от заказчика
                </li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <ul className={styles.text}>
                <li>
                  Присоединительные формы по стандартам ISO и DIN, специальные
                  решения в качестве опции
                </li>
                <li>
                  Любые варианты подключения к РСУ (Бинарный, Profibus, Modbus,
                  HART)
                </li>
                <li>Программа COM SIPOS</li>
                <li>USB-порт для подключения к ПК или USB флэш-карта</li>
                <li>Bluetooth соединение (PROFITRON и HiMod)</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
