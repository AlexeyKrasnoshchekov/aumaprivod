import styles from './Rychag2.module.css';
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
        <meta name="keywords" content="Рычажные приводы SQF 05.2 - SQF 14.2" />
        <title>Рычажные приводы SQF 05.2 - SQF 14.2</title>
        <meta
          name="description"
          content="Рычажные приводы SQF основаны на неполнооборотных SQ и поэтому обладают такими же характеристиками."
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
              title: <Link href={'/prod/rychag'}>Рычажные приводы</Link>,
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Рычажные приводы SQF 05.2 - SQF 14.2
              </h2>
              <p className={styles.text}>
                Рычажные приводы SQF основаны на неполнооборотных SQ и поэтому
                обладают такими же характеристиками.
              </p>
              <Image
                src={'/images/rychag/2.png'}
                alt="Комбинации многооборотных приводов SA и рычажных редукторов GF"
                width={270}
                height={250}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Диапазон моментов от 50Нм до 2400Нм</li>
                <li>Отключение по положению и моменту</li>
                <li>Трехфазные и однофазные двигатели</li>
                <li>Маховик для ручного управления</li>
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
                  Электрическое присоединение через штепсельный разъем AUMA
                  (клеммы в качестве опции)
                </li>
                <li>Кабельные вводы в различном исполнении</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
