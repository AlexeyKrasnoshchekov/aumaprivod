import styles from './Mnogo2.module.css';
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
        <meta
          name="keywords"
          content="Взрывозащищенные электроприводы SAEx и SAREx"
        />
        <title>Взрывозащищенные электроприводы SAEx и SAREx</title>
        <meta
          name="description"
          content="Оглядываясь в прошлое, на более чем 25 летний опыт в области защиты от взрывов, АУМА достигла всеобъемлющих технологий. С этой качественной системой управления, которая была аттестована согласно сертификатам ISO 9001 и CD 94/9/EC, АУМА соответствует всем требованиям для производства и продажи взрывозащищенной продукции."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <div className={styles.left80}>
            <h2 className={styles.title}>
              Взрывозащищенные электроприводы SAEx и SAREx
            </h2>
            <p className={styles.text}>
              Оглядываясь в прошлое, на более чем 25 летний опыт в области
              защиты от взрывов, АУМА достигла всеобъемлющих технологий. С этой
              качественной системой управления, которая была аттестована
              согласно сертификатам ISO 9001 и CD 94/9/EC, АУМА соответствует
              всем требованиям для производства и продажи взрывозащищенной
              продукции.
            </p>
            <p className={styles.text}>
              Приводы типов SA ... Ex 07.2 - SA ... Ex 16.2 можно комбинировать
              с взрывозащищенными системами управления. От простого ЗАПОРНОГО
              управления до микро контролируемой версии с фиксированием рабочих
              данных или цифрового интерфейса.
            </p>
            <p className={styles.text}>
              При комбинации с взрывозащищенными коническими редукторами GK или
              цилиндрическими редукторами GST, можно изменить направление или
              угол между валом арматуры и выходным валом.
            </p>
            <div style={{display: 'flex',width: '100%', justifyContent: 'space-around'}}>
              <Image
                src={'/images/mnogo/1.5.png'}
                alt="Взрывозащищенные электроприводы SAEx и SAREx"
                width={250}
                height={250}
              />
              <Image
                src={'/images/mnogo/5.png'}
                alt="Взрывозащищенные электроприводы SAEx и SAREx"
                width={250}
                height={250}
              />
            </div>
            <h3 className={styles.title}>Особенности конструкции:</h3>
            <ul className={styles.text}>
              <li>Крутящий момент от 10 Нм до 32,000 Нм</li>
              <li>Выходная скорость от 4 до 180 об/м</li>
              <li>Отключение по перемещению и моменту</li>
              <li>С двигателями DCС двигателями DC</li>
            </ul>
            <h3 className={styles.title}>Условия окружающей среды:</h3>
            <ul className={styles.text}>
              <li>Высокая степень защиты оболочки</li>
              <li>Высокая степень защиты от коррозии</li>
              <li>Широкий температурный диапазон применения</li>
            </ul>
            <h3 className={styles.title}>Oпции:</h3>
            <ul className={styles.text}>
              <li>Переключатель промежуточного положения</li>
              <li>Переключатель в тандемной версии</li>
              <li>Дистанционный датчик положения</li>
              <li>Магнитный датчик положения и момента</li>
              <li>Индикатор механического положения</li>
            </ul>
            <h3 className={styles.title}>Интерфейсы:</h3>
            <ul className={styles.text}>
              <li>
                Электрическое штекерное присоединение АУМА с соединительным
                щитком (подсоединение клеммные разъемы опционально)
              </li>
              <li>Крышка с резьбой для кабельных вводов</li>
              <li>Выходные формы соответствуют стандартам ISO и DIN</li>
            </ul>
          </div>
        </div>

        {/* <div className={styles.gradient}></div> */}
      </div>
    </>
  );
}

export default withLayout(Klin);
