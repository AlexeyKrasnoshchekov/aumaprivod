import styles from './Controls5.module.css';
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
        <meta name="keywords" content="Блоки управления AC SIL и ACEx SIL" />
        <title>Блоки управления AC SIL и ACEx SIL</title>
        <meta
          name="description"
          content="Блоки управления могут поставляться с функциями безопасности, которые обычно присутствуют в приводе. Кроме того, одна из двух функций ESD (Безопасное Открытие/Закрытие) может сочетаться с функцией Безопасного останова. Для функции ESD можно выбрать различные типы отключения по конечному положению."
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
              <h2 className={styles.title}>
                Блоки управления AC SIL и ACEx SIL
              </h2>
              <p className={styles.text}>
                В соответствии с МЭК 61508 / МЭК 61511, для самых высоких
                требований по функциональной безопасности (SIL), AUMA предлагает
                специальные блоки управления в версии AC.2-SIL.
              </p>
              <p className={styles.text}>
                Они были сертифицированы органом по сертификации TÜV в
                комбинации с многооборотными электроприводами SA.2 / SAEx.2 в
                соответствии с самым последним (изд. 2) и самым полным по
                количеству требований изданием стандарта МЭК 61508, который
                может быть использован до уровня SIL 2, в системах дублирования
                (например, &quot;1oo2&quot;) до SIL 3.
              </p>
              <p className={styles.text}>
                Блоки управления могут поставляться с функциями безопасности,
                которые обычно присутствуют в приводе. Кроме того, одна из двух
                функций ESD (Безопасное Открытие/Закрытие) может сочетаться с
                функцией Безопасного останова. Для функции ESD можно выбрать
                различные типы отключения по конечному положению.
              </p>
              <p className={styles.text}>
                В связи с тем, что AC.2-SIL/ACEx.2-SIL конструктивно базируются
                на блоках управления AC.2/ACEx.2 (функция безопасности при этом
                обеспечивается с помощью дополнительно PCB), функции управления
                и мониторинга блоков AC.2 / ACEx.2 могут использоваться в
                рабочем режиме.
              </p>
              <Image
                src={'/images/controls/5.png'}
                alt="Блоки управления AC SIL и ACEx SIL"
                width={300}
                height={240}
              />
              <h3 className={styles.title}>Технические характеристики:</h3>
              <ul className={styles.text}>
                <li>Модульный интерфейс для дистанционного управления</li>
                <li>
                  Панель местного управления с запираемым ключом-селектором,
                  кнопками и индикаторными лампами
                </li>
                <li>ЖК-дисплей для индикации состояния и настройки</li>
                <li>
                  Настройка без вскрытия корпуса привода и программирование
                  средств управления (при наличии магнитного датчика положения и
                  момента MWG)
                </li>
                <li>Возможен разнесенный монтаж на настенном креплении</li>
                <li>
                  Управление электродвигателем через реверсивные или тиристорные
                  пускатели
                </li>
                <li>Автоматическая коррекция фаз</li>
                <li>Внешнее питание 24 В постоянного тока (опция)</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая степень защиты оболочки</li>
                <li>Высокая степень защиты от коррозии</li>
                <li>Широкий температурный диапазон применения</li>
              </ul>
              <h3 className={styles.title}>Интерфейсы и функции:</h3>
              <ul className={styles.text}>
                <li>
                  Управляющие входы с различным напряжением (постоянный
                  ток/переменный ток)
                </li>
                <li>
                  Беспотенциальные сигнальные реле для индикации состояния
                </li>
                <li>Аналоговое управление (0/4-20 мA)</li>
                <li>
                  Программируемый пошаговый режим (для увеличения времени
                  работы)
                </li>
                <li>Свободно настраиваемые промежуточные положения</li>
                <li>Регулятор процесса (PID)</li>
                <li>
                  Управление по цифровому протоколу (Profibus DP/DPV1, Modbus
                  RTU, Foundation Fieldbus, DeviceNet, HART, Беспроводное
                  соединение)
                </li>
                <li>Дублирующий цифровой интерфейс</li>
                <li>
                  Данные о положении и моменте в виде аналогового сигнала (при
                  наличии магнитного датчика положения и момента MWG)
                </li>
                <li>Перенос рабочих данных через Bluetooth на ноутбук</li>
                <li>
                  Функциональная безопасность: До уровня SIL 1 для определенных
                  конфигураций
                </li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <ul className={styles.text}>
                <li>Электрический разъем АУМА (клеммы в качестве опции)</li>
                <li>Крышка с резьбой под различные кабельные вводы</li>
                <li>ОВК соединение для цифровых интерфейсов</li>
                <li>HART</li>
              </ul>
              <h3 className={styles.title}>
                Функциональная безопасность – SIL:
              </h3>
              <ul className={styles.text}>
                <li>Сертифицировано TÜV в соответствии с МЭК 61508 изд. 2</li>
                <li>
                  Используется до версии SIL 2, в системах дублирования
                  (например, &quot;1oo2&quot;) до уровня SIL 3
                </li>
                <li>
                  Функции безопасности: Безопасное Открытие (ESD), Безопасное
                  Закрытие (ESD), Безопасный останов в направлении Открыть и
                  Безопасный останов в направлении Закрыть, а также комбинации
                  Безопасный останов Открыть/Закрыть с одной из двух ESD функций
                </li>
                <li>
                  Выбираемые типы отключения для безопасного управления:
                  отключение по концевым выключателям в конечном положении в
                  аварийном режиме, отключение по концевым выключателям с
                  защитой от перегрузки в аварийном режиме, отключение по
                  моменту в аварийном режиме, обход защитных функций в случае
                  аварии
                </li>
                <li>
                  Реализация функции безопасности (низкая активность) через
                  контроль входов 24 В пост.тока по дублированной линии ESD
                </li>
              </ul>
              <h3 className={styles.title}>Разрешения:</h3>
              <ul className={styles.text}>
                <li>
                  ATEX (Европа) Ex de IIC/IIB T4 или T3 Ex d IIC/IIB T4 или T3
                </li>
                <li>
                  IEC (международный) Ex de IIC/IIB T4 или T3 Ex d IIC/IIB T4
                  или T3
                </li>
                <li>
                  FM (США) FM CLASS I DIV 1 GROUPS (B), C, D T4 (T3C) FM CLASS
                  II DIV 1 GROUPS E, F, G T4 (T3C) FM CLASS III DIV 1 T4 (T3)
                </li>
                <li>
                  Россия - Ростехнадзор/EAC (TR-CU) 1ExdeIICT4/T3 1ExdIICT4/T3
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