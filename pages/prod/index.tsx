import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Products.module.css';
import { withLayout } from '@/layout/Layout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import Card from '@/components/Card/Card';
import classNames from 'classnames';

function Products(): JSX.Element {
  return (
    <>
      <Head>
        <title>АумаПриводСервис электроприводы Auma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={classNames(styles.screen)}>
            <div style={{ display: 'flex' }}>
              <div className={styles.width40}>
                <div
                  className={classNames(
                    styles.screenInner,
                    styles.linearToLeft
                  )}
                  style={{ marginBottom: '3rem' }}
                >
                  <span className={styles.icon}>
                    <Image
                      src={'/images/privod_cards/mnogo.png'}
                      alt="МНОГООБОРОТНЫЕ ПРИВОДЫ"
                      width={120}
                      height={120}
                    />
                  </span>
                  <Link className={styles.link} href={'/mnogo'}>
                    <h4>Многооборотные приводы</h4>
                  </Link>
                  <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                    Многооборотные приводы АUМА используются, например, для
                    автоматизации задвижек или клапанов. Это наиболее
                    разнообразный продукт компании АUМА
                  </p>
                </div>
                <div
                  className={classNames(
                    styles.screenInner,
                    styles.linearToLeft
                  )}
                  style={{ marginBottom: '3rem' }}
                >
                  <span className={styles.icon}>
                    <Image
                      src={'/images/privod_cards/controls.png'}
                      alt="Средства управления"
                      width={90}
                      height={90}
                    />
                  </span>
                  <Link className={styles.link} href={'/controls'}>
                    <h4>Средства управления</h4>
                  </Link>
                  <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                    Основная идея встроенных средств управления приводом -
                    снижение временных затрат и стоимости для конечного
                    пользователя на этапе планирования, установки и
                    подключения...
                  </p>
                </div>
              </div>
              <div className={styles.width60}>
                {/* <div className={styles.picture}> */}
                <Image
                  src={'/images/prod1.png'}
                  alt="Неполнооборотные приводы"
                  fill
                  className={styles.image}
                  // width={800}
                  // height={800}
                />
                {/* </div> */}
              </div>
            </div>
            <div className={styles.screenMiddle}>
              <div
                className={classNames(styles.screenInner, styles.linearToLeft)}
              >
                <span className={styles.icon}>
                  <Image
                    src={'/images/privod_cards/nepoln.png'}
                    alt="Неполнооборотные приводы"
                    width={90}
                    height={90}
                  />
                </span>
                <Link className={styles.link} href={'/nepoln'}>
                  <h4>Неполнооборотные приводы</h4>
                </Link>

                <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                  Неполнооборотные приводы передают крутящий момент на арматуру
                  для ее перемещения на один поворот или меньше
                </p>
              </div>
              <div
                className={classNames(styles.screenInner, styles.linearToRight)}
              >
                <span className={styles.icon}>
                  <Image
                    src={'/images/privod_cards/pryamo.png'}
                    alt="Прямоходные приводы"
                    width={90}
                    height={90}
                  />
                </span>
                <Link className={styles.link} href={'/pryamo'}>
                  <h4>Прямоходные приводы</h4>
                </Link>

                <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                  Многооборотный электропривод SA может выступать в комбинации с
                  прямоходным модулем LE для выполнения
                  возвратно-поступательного движения
                </p>
              </div>
            </div>
          </div>
          <Link href={'/'}>
            <h4 className={styles.title}>Скачать опросный лист</h4>
          </Link>

          <div
            className={classNames(
              styles.screen
              // styles.screenRight,
              // styles.backImage2
            )}
            // style={{ backgroundImage: 'url(/images/prod2.png)' }}
          >
            <div className={styles.screenMiddle}>
              <div
                className={classNames(styles.screenInner, styles.linearToLeft)}
              >
                <span className={styles.icon}>
                  <Image
                    src={'/images/privod_cards/nepoln_red.png'}
                    alt="Неполнооборотные редукторы"
                    width={90}
                    height={90}
                  />
                </span>
                <Link className={styles.link} href={'/nepoln_red'}>
                  <h4>Неполнооборотные редукторы</h4>
                </Link>

                <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                  Неполнооборотные редукторы АUМА применяются, там, где для
                  работы арматуры необходим поворот рабочего органа на 90°
                </p>
              </div>
              <div
                className={classNames(styles.screenInner, styles.linearToRight)}
              >
                <span className={styles.icon}>
                  <Image
                    src={'/images/privod_cards/mnogo_red.png'}
                    alt="Многооборотные редукторы"
                    width={90}
                    height={90}
                  />
                </span>
                <Link className={styles.link} href={'/mnogo_red'}>
                  <h4>Многооборотные редукторы</h4>
                </Link>

                <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                  Mногооборотные приводы SA можно комбинировать с коническими и
                  цилиндрическими редукторами AUMA для увеличения крутящего
                  момента...
                </p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div className={styles.width60} style={{ padding: '0 3%' }}>
                {/* <div className={styles.picture}> */}
                <Image
                  src={'/images/prod2.png'}
                  alt="Неполнооборотные приводы"
                  fill
                  className={styles.image}
                  // width={800}
                  // height={800}
                />
                {/* </div> */}
              </div>
              <div
                className={styles.width40}
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  className={classNames(
                    styles.screenInner,
                    styles.linearToRight
                  )}
                  style={{ marginTop: '3rem', marginBottom: '3rem' }}
                >
                  <span className={styles.icon}>
                    <Image
                      src={'/images/privod_cards/rychag_red.png'}
                      alt="Рычажные редукторы"
                      width={90}
                      height={90}
                    />
                  </span>
                  <Link className={styles.link} href={'/rychag_red'}>
                    <h4>Рычажные редукторы</h4>
                  </Link>

                  <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                    Рычажные редукторы АУМА используются для управления
                    двигателем задвижек посредством рычажного устройства...
                  </p>
                </div>
                <div
                  className={classNames(
                    styles.screenInner,
                    styles.linearToRight
                  )}
                >
                  <span className={styles.icon}>
                    <Image
                      src={'/images/privod_cards/rychag.png'}
                      alt="Рычажные приводы"
                      width={90}
                      height={90}
                    />
                  </span>
                  <Link className={styles.link} href={'/rychag'}>
                    <h4>Рычажные приводы</h4>
                  </Link>

                  <p style={{ textAlign: 'center', padding: '0', margin: '0' }}>
                    Рычажные приводы SQF являются оптимальным решением в том
                    случае, если неполнооборотный привод невозможно установить
                    непосредственно на арматуру...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayout(Products);
