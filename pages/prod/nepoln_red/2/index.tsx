import styles from './Nepoln1.module.css';
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
        <meta name="keywords" content="Индикатор положения арматуры WSG" />
        <title>Индикатор положения арматуры WSG</title>
        <meta
          name="description"
          content="Если сигнал о положении арматуры передается через несколько этапов к концевым выключателям многооборотного привода, то накопление зазора может привести к гистерезису."
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
                <Link href={'/prod/nepoln_red'}>
                  Неполнооборотные редукторы
                </Link>
              ),
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>Индикатор положения арматуры WSG</h2>
              <p className={styles.text}>
                Если сигнал о положении арматуры передается через несколько
                этапов к концевым выключателям многооборотного привода, то
                накопление зазора может привести к гистерезису.
              </p>
              <p className={styles.text}>
                Для предотвращения этого эффекта используется индикатор
                положения арматуры WSG. При непосредственном присоединении к
                червячному колесу редуктора, можно получить точный сигнал
                обратной связи о положении арматуры, люфт при этом минимален.
              </p>

              <p className={styles.text}>
                Индикатор положения арматуры WSG 90.1 используется в том случае,
                если угол поворота не превышает 180°, а WGD 90.1 – в том случае,
                если превышает. Индикатор положения арматуры устанавливается на
                червячные редукторы GS 50.3 - 125.3/GS 160 - GS 500.
              </p>
              <Image
                src={'/images/nepoln_red/2.png'}
                alt="Индикатор положения арматуры WSG"
                width={250}
                height={250}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>
                  Прямое присоединение к червячному колесу (зазор маловероятен)
                </li>
                <li>
                  Бесконтактные датчики конечного положения (датчики Холла)
                </li>
                <li>
                  Mодульная конструкция – легко адаптировать к различным
                  размерам редуктора
                </li>
                <li>Монтажные положения каждые 90°</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая защита оболочки</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применимости</li>
              </ul>
              <h3 className={styles.title}>Функции:</h3>
              <ul className={styles.text}>
                <li>Непрерывная механическая индикация положения</li>
                <li>
                  Подача сигнала конечного положения при углах поворота от 80°
                  до 100° для передачи в диспетчерскую
                </li>
                <li>
                  Непрерывный мониторинг хода и передача информации в
                  диспетчерскую (опция)
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
