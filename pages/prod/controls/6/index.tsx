import styles from './Controls6.module.css';
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
        <meta name="keywords" content="Цифровые шины" />
        <title>Цифровые шины</title>
        <meta
          name="description"
          content="Системы полевых шин все чаще используются для связи автоматизированной системы управления технологическими процессами и полевых устройств в рамках автоматизации различных задач и процессов в промышленной сфере."
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
              <h2 className={styles.title}>Цифровые шины</h2>
              <p className={styles.text}>
                Системы полевых шин все чаще используются для связи
                автоматизированной системы управления технологическими
                процессами и полевых устройств в рамках автоматизации различных
                задач и процессов в промышленной сфере.
              </p>
              <p className={styles.text}>
                Данная разработка позволяет сократить затраты во время
                планирования и ввода в промышленную эксплуатацию, а также во
                время эксплуатации и обслуживании этих систем. Хорошее
                взаимодействие различных полевых устройств гарантировано
                международными стандартами открытых цифровых протоколов.
                Благодаря модульной конструкции АУМА, все приводы АУМА можно
                оборудовать стандартными цифровыми интерфейсами, такими как
                Profibus или Modbus. Принцип конструкции: Любая задача по
                автоматизации может быть решена благодаря модульной системе,
                которая состоит из средств управления приводом, цифрового
                интерфейса, предлагаемых средств передачи данных и дублирующих
                схем. Для блока управления приводам AUMATIC АС существуют
                различные цифровые интерфейсы.
              </p>
              <Image
              src={'/images/controls/6.png'}
              alt="Цифровые шины"
              width={350}
              height={305}
            />
              <h3 className={styles.title}>
                Цифровые интерфейсы для AUMATIC АС:
              </h3>
              <ul className={styles.text}>
                <li>Profibus DP-V0 и Profibus DP-V1 (oпция)</li>
                <li>Modbus RTU</li>
                <li>DeviceNet</li>
                <li>Foundation Fieldbus</li>
              </ul>
              <h3 className={styles.title}>Средства передачи:</h3>
              <ul className={styles.text}>
                <li>RS-485 (Profibus и Modbus)</li>
                <li>
                  Оптоволокно с топологией линия, звезда и дублированием по
                  кольцу (Profibus and Modbus)
                </li>
                <li>CAN (DeviceNet)</li>
                <li>IEC 61158 (Foundation Fieldbus)</li>
              </ul>
              <h3 className={styles.title}>
                Данные цифровых интерфейсов для сетевой передачи информации:
              </h3>
              <p>Рабочие команды:</p>
              <ul className={styles.text}>
                <li>Управление ОТКРЫТЬ-СТОП-ЗАКРЫТЬ</li>
                <li>
                  Установка позиционного управления посредством трехпозиционного
                  контроллера (опция)
                </li>
                <li>
                  Установка позиционного управления посредством контроллера
                  процесса PID )
                </li>
                <li>До 8 промежуточных позиций (oпция)</li>
              </ul>
              <p>Сигналы:</p>
              <ul className={styles.text}>
                <li>Достигнуто конечное положение</li>
                <li>Достигнута промежуточное положение</li>
                <li>Ошибки (сигнал общего сбоя))</li>
                <li>Срабатывание защиты электродвигателя</li>
                <li>Превышение установленного крутящего момента</li>
                <li>Положение ключа-селектора (МЕСТНЫЙ или ДИСТ.)</li>
                <li>Потеря фазы</li>
                <li>Индикация работы</li>
                <li>Индикация положения</li>
                <li>Индикация крутящего момента (опция для AUMATIC)</li>
              </ul>
              <h3 className={styles.title}>
                Данные интерфейса для диагностики и обслуживания:
              </h3>
              <ul className={styles.text}>
                <li>Доступ к рабочим данным привода (через Profibus DP-V1)</li>
                <li>
                  Доступ к электронной именной табличке привода (через Profibus
                  DP-V1)
                </li>
              </ul>
              <h3 className={styles.title}>
                Элементы, интегрированные в систему управления процессом:
              </h3>
              <ul className={styles.text}>
                <li>
                  EDD (Описание электронного устройства) для Simatic PDM
                  (Process Device Manager)
                </li>
                <li>
                  DTM (Device Type Manager) для систем управления процессом с
                  FDT 1.2 интерфейсом
                </li>
                <li>SIMA мастер станция</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default withLayout(Klin);
