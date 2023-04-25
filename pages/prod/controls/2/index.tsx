import styles from './Controls2.module.css';
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
        <meta name="keywords" content="Блок управления AUMA MATIC AM" />
        <title>Блок управления AUMA MATIC AM</title>
        <meta
          name="description"
          content="AUMA MATIC АМ является наиболее эффективным с ценовой точки зрения решением для случаев, когда требуется обычное управление приводом в режиме ОТКРЫТЬ - ЗАКРЫТЬ."
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
              <h2 className={styles.title}>Блок управления AUMA MATIC AM</h2>
              <p className={styles.text}>
                AUMA MATIC АМ является наиболее эффективным с ценовой точки
                зрения решением для случаев, когда требуется обычное управление
                приводом в режиме ОТКРЫТЬ - ЗАКРЫТЬ.
              </p>
              <p className={styles.text}>
                Блоки управления AUMA MATIC могут быть скомбинированы с
                многооборотными приводами SA, многооборотными приводами SAR и
                неполнооборотными приводами SQ.
              </p>
              <Image
                src={'/images/controls/2.png'}
                alt="Блок управления AUMA MATIC AM"
                width={260}
                height={250}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Модульное дистанционное управление</li>
                <li>
                  Местное управление с запираемым ключом-селектором, кнопками
                  управления и индикаторными лампами
                </li>
                <li>
                  Программируемая логика управления (&quot;по нажатию&quot; или
                  &quot;самоподхват&quot;)
                </li>
                <li>
                  Программируемый тип отключения (по положению или по моменту)
                </li>
                <li>Возможен отдельный монтаж на настенном креплении</li>
                <li>
                  Управление электродвигателем посредством реверсивных
                  пускателей или тиристоров (опция)
                </li>
                <li>Автоматическая коррекция фаз</li>
                <li>Внешнее питание 24В постоянного тока(опция)</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Оболочка с высокой степенью герметичности</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применения</li>
              </ul>
              <h3 className={styles.title}>Интерфейсы и особенности:</h3>
              <ul className={styles.text}>
                <li>
                  Управляющие входы с различными напряжениями
                  (постоянное/переменное)
                </li>
                <li>
                  Беспотенциальные сигнальные реле для индикации состояния
                </li>
                <li>Аналоговое управление (0/4-20 мА)</li>
                <li>Цифровые шины</li>
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
