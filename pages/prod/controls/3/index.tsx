import styles from './Controls3.module.css';
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
        <meta name="keywords" content="Мастер-станция SIMA" />
        <title>Мастер-станция SIMA</title>
        <meta
          name="description"
          content="Мастер станция SIMA имеет модульную конструкцию, основанную на промышленной технологии персонального компьютера, и предлагает различные интерфейсы для сообщения с окружающим миром. Она может быть использована как черный ящик для сбора всей исходящей информации от приводов AUMA, находящихся в зоне работы, и ее передачи в сжатом виде на главный контроллер более высокого уровня."
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
              title: <Link href={'/prod/controls'}>Средства управления</Link>,
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>Мастер-станция SIMA</h2>
              <p className={styles.text}>
                Мастер станция SIMA имеет модульную конструкцию, основанную на
                промышленной технологии персонального компьютера, и предлагает
                различные интерфейсы для сообщения с окружающим миром. Она может
                быть использована как черный ящик для сбора всей исходящей
                информации от приводов AUMA, находящихся в зоне работы, и ее
                передачи в сжатом виде на главный контроллер более высокого
                уровня.
              </p>
              <p className={styles.text}>
                Кроме того, SIMA может работать как самостоятельная мастер
                станция для управления приводами.
              </p>
              <Image
                src={'/images/controls/3.png'}
                alt="Мастер-станция SIMA"
                width={250}
                height={280}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>19&quot; стойка с защитой ЭМС</li>
                <li>Интерфейс Windows</li>
                <li>Встроенный сервер для доступа к Интернету</li>
              </ul>
              <h3 className={styles.title}>Функции:</h3>
              <ul className={styles.text}>
                <li>Поддержка систем дублирования</li>
                <li>Регистрация и хранение всех рабочих данных</li>
                <li>Местное управление и мониторинг</li>
              </ul>
              <h3 className={styles.title}>Cистема связи:</h3>
              <ul className={styles.text}>
                <li>
                  Подчиненные устройства: протоколы PROFIBUS-DP или MODBUS-RTU
                </li>
                <li>
                  Система РСУ: дополнительно DeviceNet, Ethernet или RS232
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
