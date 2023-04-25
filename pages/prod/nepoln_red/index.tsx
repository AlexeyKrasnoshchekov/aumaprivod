import styles from './Nepoln_red.module.css';
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
        <meta name="keywords" content="НЕПОЛНООБОРОТНЫЕ РЕДУКТОРЫ" />
        <title>НЕПОЛНООБОРОТНЫЕ РЕДУКТОРЫ</title>
        <meta
          name="description"
          content="Неполнооборотные редукторы АUМА применяются, там, где для работы
          арматуры необходим поворот рабочего органа на 90°."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>НЕПОЛНООБОРОТНЫЕ РЕДУКТОРЫ</h2>
        <p className={styles.text}>
          Неполнооборотные редукторы АUМА применяются, там, где для работы
          арматуры необходим поворот рабочего органа на 90°.
        </p>
        <p className={styles.text}>
          Если диапазон крутящего момента неполнооборотных приводов с прямой
          установкой недостаточен, решением может быть комбинация
          многооборотного привода SA … и червячного редуктора GS . Таким образом
          можно достигнуть крутящего момента до 360,000 Нм.
        </p>
        {/* <h2 className={styles.title}>Многооборотные приводы SA и SAR</h2> */}
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
          <Link href={'/prod/nepoln_red/1'}><h2 className={styles.title}>Червячные редукторы GS</h2></Link>
            <Image
              src={'/images/nepoln_red/1.png'}
              alt="Червячные редукторы GS"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Червячные редукторы AUMA используются для управления
              неполнооборотной арматурой (например, дисковые затворы, шаровые
              краны).
            </p>
          </div>
          <div className={styles.right50}>
          <Link href={'/prod/nepoln_red/2'}><h2 className={styles.title}>Индикатор положения арматуры WSG</h2></Link>
            <Image
              src={'/images/nepoln_red/2.png'}
              alt="Индикатор положения арматуры WSG"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Если сигнал о положении арматуры передается через несколько этапов
              к концевым выключателям многооборотного привода, то накопление
              зазора может привести к гистерезису.
            </p>
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
          <Link href={'/prod/nepoln_red/3'}><h2 className={styles.title}>
              Неполнооборотные редукторы GHE для кораблестроения
            </h2></Link>
            <Image
              src={'/images/nepoln_red/3.png'}
              alt="Неполнооборотные редукторы GHE для кораблестроения"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              Несмотря на высокий уровень автоматизации, все еще существует
              арматура с ручным управлением. Это особый случай, когда
              соответствующий клапан должен открываться или закрываться крайне
              редко. Диапазон GHE хорошо подходит для управления
              неполнооборотной арматурой (поворотные дисковые затворы
              «Баттерфляй» и шаровые краны), которые преимущественно используют
              в кораблестроении.
            </p>
          </div>
          <div className={styles.right50}>
          <Link href={'/prod/nepoln_red/4'}><h2 className={styles.title}>
              Неполнооборотные редукторы GS 50.3 — GS 250.3 с опорой и рычагом
            </h2></Link>
            <Image
              src={'/images/nepoln_red/4.png'}
              alt="Неполнооборотные редукторы GS 50.3—GS 250.3 с опорой и рычагом"
              width={150}
              height={150}
            />
            <p className={styles.text}>
              В основе конструкции описываемого здесь редуктора - редуктор GS.3.
              Вместо выходного фланца и втулки в исполнении «с опорой и рычагом»
              устанавливается опорный фланец и рычаг. На рычаг, как правило,
              монтируется рычажное управление с шаровым шарниром для крепления
              арматуры. Исполнение RL, RR, LR, LL. Первый символ исполнения
              обозначает положение червячного вала относительно червячного
              колеса (вид со стороны входного вала). Второй символ указывает на
              направление вращения выходного вала (вид со стороны крышки
              корпуса) при вращении входного вала по часовой стрелке.
            </p>
          </div>
        </div>

        {/* <div className={styles.gradient}></div> */}
      </div>
    </>
  );
}

export default withLayout(Klin);
