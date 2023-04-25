import styles from './Pryamo1.module.css';
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
          content="Комбинации многооборотных приводов SA с прямоходными модулями LE"
        />
        <title>
          Комбинации многооборотных приводов SA с прямоходными модулями LE
        </title>
        <meta
          name="description"
          content="Если требуется прямоходное движение, для автоматизации, например, клапанов, многооборотный привод SA нужно скомбинировать с прямоходным модулем LE. В комплектации с рычагом прямоходный модуль может быть установлен на базу"
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
                <Link href={'/prod/pryamo'}>Прямоходные приводы</Link>
              ),
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Комбинации многооборотных приводов SA с прямоходными модулями LE
              </h2>
              <p className={styles.text}>
                Если требуется прямоходное движение, для автоматизации,
                например, клапанов, многооборотный привод SA нужно
                скомбинировать с прямоходным модулем LE. В комплектации с
                рычагом прямоходный модуль может быть установлен на базу
              </p>
              <Image
              src={'/images/pryamo/1.png'}
              alt="Комбинации многооборотных приводов SA с прямоходными модулями LE"
              width={250}
              height={250}
            />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Усилие от 4 кН до 217 кН</li>
                <li>Ход штока до 500мм</li>
                <li>Скорость от 20мм/мин до 360мм/мин</li>
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
                <li>Электрическое присоединение через штепсельный</li>
                <li>Разъем AUMA (клеммы в качестве опции)</li>
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
