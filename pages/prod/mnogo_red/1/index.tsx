import styles from './Mnogo_red1.module.css';
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
        <meta name="keywords" content="Цилиндрические редукторы GST" />
        <title>Цилиндрические редукторы GST</title>
        <meta
          name="description"
          content="Цилиндрические редукторы AUMA используются для управления многооборотной арматурой (например, задвижки, клапаны)."
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
              <h2 className={styles.title}>Цилиндрические редукторы GST</h2>
              <p className={styles.text}>
                Цилиндрические редукторы АУМА используются для управления
                многооборотной арматурой (например, задвижки, клапаны).
              </p>
              <h3 className={styles.title}>
                Они предназначены для эксплуатации в одном из двух случаев:
              </h3>
              <ul className={styles.text}>
                <li>Ручное управление непосредственно маховиком</li>
                <li>
                  Управление от электродвигателя (многооборотный электропривод)
                </li>
              </ul>
              <p className={styles.text}>
                Режим работы: кратковременный S2-15мин (режим Открыть-Закрыть)
                или повторно-кратковременный S4-25% (режим регулирования).
                Редуктор подготовлен для установки фланца под привод
              </p>
              <p className={styles.text}>
                Вращению по часовой стрелке входного вала соответствует вращение
                по часовой стрелке выходного вала. Чтобы изменить направление
                вращения GST 10.1 - GST 30.1, может быть использован реверсивный
                редуктор GW 14.1. GST 10.1 - GST 16.1 одноступенчатые редукторы
                с промежуточным звеном GST 25.1 - GST 40.1 двухступенчатые
                редукторы.
              </p>
              <Image
                src={'/images/mnogo_red/1.png'}
                alt="Цилиндрические редукторы GST"
                width={300}
                height={261}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Крутящие моменты до 16000Нм</li>
                <li>Передаточное число от 1:1 до 1:22</li>
                <li>
                  Формы выходного вала в соответствии со стандартами ISO или
                  DIN.
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
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
