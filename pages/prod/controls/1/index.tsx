import styles from './Controls1.module.css';
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
        <meta name="keywords" content="Блок управления AUMATIC АС" />
        <title>Блок управления AUMATIC АС</title>
        <meta
          name="description"
          content="Блок управления AUMATIC c микроконтроллером представляет собой 4-е поколение встроенных средств управления приводом. Приннцип конструкции: модульная система, состоящая из функций, интерфейсов связи и элементов оборудования, обеспечивает идеальное решение для любой задачи по автоматизации арматуры."
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
                <Link href={'/prod/controls'}>Средства управления</Link>
              ),
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>Блок управления AUMATIC АС</h2>
              <p className={styles.text}>
                Блок управления AUMATIC c микроконтроллером представляет собой
                4-е поколение встроенных средств управления приводом. Приннцип
                конструкции: модульная система, состоящая из функций,
                интерфейсов связи и элементов оборудования, обеспечивает
                идеальное решение для любой задачи по автоматизации арматуры.
              </p>
              <p className={styles.text}>
                Важная для процесса информация, то есть, количество пусков или
                общее время работы, записывается встроенным регистратором
                данных. Таким образом, настройки можно проверить, и при
                необходимости оптимизировать. Расширенные функции диагностики
                позволяют произвести быстрые корректирующие действия в случае
                возникновения неисправности.
              </p>
              <p className={styles.text}>
                Блоки управления AUMATIC AC могут быть скомбинированы с
                многооборотными приводами SA, многооборотными приводами SAR и
                неполнооборотными приводами SQ.
              </p>
              <Image
                src={'/images/controls/1.png'}
                alt="Блок управления AUMATIC АС"
                width={300}
                height={261}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Модульное дистанционное управление</li>
                <li>
                  Местное управление с запираемым ключом-селектором, кнопками
                  управления и индикаторными лампами
                </li>
                <li>
                  ЖК дисплей для индикации состояния и упрощения
                  программирования
                </li>
                <li>
                  Настройка привода и программирование управления без вскрытия
                  оболочки привода (в сочетании с магнитным датчиком положения и
                  момента MWG)
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
                <li>
                  Программируемый пошаговый режим (для увеличения времени хода)
                </li>
                <li>Контроллер процесса (PID)</li>
                <li>
                  Цифровое управление (PROFIBUS DP/DP_V1, MODBUS RTU, Foundation
                  Fieldbus, DeviceNet)
                </li>
                <li>
                  Цифровой интерфейс также возможен в версии с компонентным
                  дублированием
                </li>
                <li>
                  Программируемое функционирование в аварийных ситуациях и во
                  время потери связи
                </li>
                <li>
                  Аналоговый сигнал по положению и моменту (в сочетании с
                  магнитным датчиком положения и момента MWG)
                </li>
                <li>Запись рабочих данных</li>
                <li>Bluetooth для связи с ноутбуком или КПК</li>
              </ul>
              <h3 className={styles.title}>Интерфейсы:</h3>
              <ul className={styles.text}>
                <li>
                  Электрическое присоединение через штепсельный разъем AUMA
                  (клеммы в качестве опции)
                </li>
                <li>Кабельные вводы в различном исполнении</li>
                <li>Оптоволоконные соединения для цифровой шины</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
