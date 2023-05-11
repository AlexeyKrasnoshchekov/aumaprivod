import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import styles from './Company.module.css';
import { withLayout } from '@/layout/Layout';
import { RiArrowRightSFill } from 'react-icons/ri';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Company({ posts }: any): JSX.Element {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1400px)' });
  // const sortedPosts = posts.sort((a: Post, b: Post) => b.id - a.id);
  return (
    <>
      <Head>
        <title>АумаПриводСервис электроприводы Auma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h4 className={styles.titleMain}>
          Компания ООО «АумаПриводСервис» с 2007 года занимается продажами,
          сервисным обслуживанием и технической поддержкой оборудования компании
          AUMA Riester GmbH» Германия
        </h4>
        <div className={styles.innerWrapper}>
          <div className={styles.left}>
            <div className={styles.bodyNews}>
              <Link href={'/news'}>
                <h4
                  className={styles.newsHeader}
                  style={{
                    fontSize: '1.2rem',
                    margin: '0',
                    textTransform: 'uppercase',
                  }}
                >
                  Новости
                </h4>
              </Link>

              {posts &&
                posts.map((post: Post) => (
                  <div key={post.id} className={styles.newsWrapper}>
                    {post.images.length > 0 && (
                      <div className={styles.newsImageWrapper}>
                        <Image
                          src={`${post.images[0]}`}
                          alt="фото новостей компании"
                          // fill
                          width={200}
                          height={200}
                          quality={100}
                          className={styles.newsImage}
                        />
                      </div>
                    )}
                    <h5 className={styles.newsTitle}>
                      <Link href={`/news/${post.id}`}>
                        {post.titleShort ? post.titleShort : post.title}
                      </Link>
                    </h5>
                    <span>{post.dateString}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.right}>
            <h4
              style={{
                fontSize: '1.2rem',
                margin: '0',
                textTransform: 'uppercase',
              }}
            >
              AUMA - это
            </h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>
                  Проверенная временем, надёжная модульная конструкция, с
                  большим количеством взаимозаменяемых деталей и широкими
                  возможностями модернизации
                </span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>
                  Электроприводы: многооборотные электроприводы,
                  неполнооборотные электроприводы, рычажные электроприводы,
                  прямоходные электроприводы
                </span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>Исполнения: общепромышленное и взрывозащищенное</span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>Температурный диапазон от -60° до +170° (для АЭС)</span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>Степень защиты IP67, IP68</span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>
                  Возможность управления по цифровым протоколам ModBus,
                  ProfiBus, DeviceNet, Foundation Fieldbus
                </span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>
                  Редукторы: червячные редукторы, конические редукторы,
                  цилиндрические редукторы
                </span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>Блоки управления: AUMATIC, AUMA MATIC и VARIOMATIC</span>
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                <span>Мастер-станции для электроприводов</span>
              </li>
            </ul>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/about.jpg'}
                alt="фото сфер деятельности компании"
                //   fill
                width={isBigScreen ? 800 : 600}
                height={isBigScreen ? 350 : 270}
                quality={100}
                className={styles.image}
              />
            </div>
            <h4>Сервис</h4>
            <p>
              Сервисная служба компании AUMA играет важную роль во всем процессе
              послепродажного обслуживания приводов. Оперативное устранение
              неисправностей, обеспечение бесперебойной работы – в этом и
              заключается основная задача сервисного отдела. Это является и
              залогом хорошей репутации компании.
            </p>
            <p>
              Специалисты сервисного отдела готовы помочь Вам в решении любых
              задач и предложить оптимальное решение
            </p>
            <p>Предлагаемые услуги:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                Техническое обслуживание
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                Подключение оборудования
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                Устранение возможных неисправностей прямо на месте
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                Регулярные превентивные проверки работы оборудования
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                Проверка приводов на предмет адаптации к арматуре заказчика
              </li>
              <li className={styles.listItem}>
                <RiArrowRightSFill className={styles.arrow} />
                Проведение пуско-наладочных работ
              </li>
            </ul>
            <h4>Обучение</h4>
            <p>Компания AUMA предлагает специальную программу обучения.</p>
            <p>
              В рамках ее теоретической части проводятся презентации, предметом
              которых является детальное описание продукции, услуг, а также
              функциональных возможностей приводов и блоков управления, дается
              подробный инструктаж по работе с оборудованием.
            </p>
            <p>
              В рамках ее практической части проводятся сервис-тренинги,
              обучающимся предоставляется возможность освоить принципы работы
              оборудования в учебном классе.
            </p>
            <h4>Консультация по телефону:</h4>
            <p className={styles.parag}>
              Квалифицированные сервисные инженеры компании AUMA готовы ответить
              на все интересующие Вас вопросы и помочь разрешить возможные
              проблемы в дистанционном режиме.
            </p>
            <p>
              Консультация абсолютно бесплатная. Звоните. Всегда рады помочь.
            </p>
            {/* <p className={styles.parag}>
          (3462) 236-233, 236-234, 236-299<br></br>Шатов Владимир – сервисный
          инженер +7 922 7986340, г. Сургут.<br></br>Горынин Юрий - сервисный инженер +7 913 6187653, г. Омск.
        </p> */}
            <div className={styles.consWrapper}>
              <p className={styles.parag}>(3462) 236-233, 236-234, 236-299</p>
              <p className={styles.parag}>
                Шатов Владимир – сервисный инженер +7 922 7986340, г. Сургут.
              </p>
              <p className={styles.parag}>
                Горынин Юрий - сервисный инженер +7 913 6187653, г. Омск.
              </p>
              <p className={styles.parag}>
                Кондрашин Андрей – Руководитель ОП ООО «АПС» г. Тюмень +7 919
                9508413.
              </p>
              <p className={styles.parag}>
                Рудых Антон – сервисный инженер +7 914 9279522, г. Иркутск.
              </p>
            </div>
            <p>
              Для получения подробной информации о характеристиках и техническом
              обслуживании приводов, просьба указывать их ком. номер.
            </p>
            <p>
              Более подробная информация содержится в брошюре «Сервисное
              обслуживание».
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayout(Company);

import fsPromises from 'fs/promises';
import path from 'path';
import { Post, Posts } from '@/interfaces/post.interface';
import Link from 'next/link';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());

  let convData = { posts: [] };

  convData.posts = objectData.posts
    .sort((a: Post, b: Post) => {
      return b.id - a.id;
    })
    .slice(0, 4);

  return {
    props: convData,
  };
}
