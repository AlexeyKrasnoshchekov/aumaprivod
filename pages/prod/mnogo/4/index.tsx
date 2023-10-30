import styles from './Mnogo4.module.css';
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
          content="Приводы арматуры SV для корабельной промышленности"
        />
        <title>Приводы арматуры SV для корабельной промышленности</title>
        <meta
          name="description"
          content="Общепромышленные приводы SA/SAR применяются в водном хозяйстве, энергетике, а также в судостроении, целлюлозно-бумажной и пищевой отраслях промышленности, в системах кондиционирования воздуха."
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
              title: <Link href={'/prod/mnogo'}>Многооборотные приводы</Link>,
            },
          ]}
        />
        <div className={styles.wrapper}>
          <div className={styles.middleWrapper}>
            <div className={styles.left80}>
              <h2 className={styles.title}>
                Приводы арматуры SV для корабельной промышленности
              </h2>
              <p className={styles.text}>
                Электричество доступно на любом корабле. Больше ничего не нужно
                для источника питания приводов АУМА. Гидравлические или
                пневматические линии с их вспомогательными системами не длиннее
                требуемых. Значительное преимущество во время установки, без
                упоминаемых далее требований к обслуживанию.
              </p>
              <p className={styles.text}>
                Привод и система контроля снабжены всеми необходимыми
                компонентами. От редуктора с концевыми выключателями и
                дистанционного датчика положения до ручного маховика для
                аварийной работы.
              </p>
              <p className={styles.text}>
                Клапаны расположены после неполнооборотной арматуры, который
                является самой распространенной арматурой на кораблях. С
                арматурными приводами SV АУМА предлагает оптимально
                автоматизированное решение.
              </p>
              <Image
                src={'/images/mnogo/2.3.png'}
                alt="Приводы арматуры SV для корабельной промышленности"
                width={200}
                height={200}
              />
              <h3 className={styles.title}>Особенности конструкции:</h3>
              <ul className={styles.text}>
                <li>Крутящий момент от 10 Нм до 40 Нм</li>
                <li>макс. 8 оборотов на удар</li>
                <li>Рабочее время на удар от 3 сек</li>
              </ul>
              <h3 className={styles.title}>Условия окружающей среды:</h3>
              <ul className={styles.text}>
                <li>Высокая защита оболочки</li>
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
