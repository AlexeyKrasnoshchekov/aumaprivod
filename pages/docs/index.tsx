import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Docs.module.css';
import React, { useEffect, useState } from 'react';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';

import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Sider } = Layout;

type MenuChildren = {
  key: number;
  label: string;
};
type MenuItem = {
  key: number;
  label: string;
  children?: MenuChildren[];
};

function Docs({files}:any): JSX.Element {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1400px)' });
  const [menuItem, setMenuItem] = useState(1);
  const [menuFiles, setMenuFiles] = useState<any>([]);

  useEffect(() => {
    setMenuFiles([]);
    let curFile = files.find((elem:any) => elem.id === menuItem);
    curFile &&
      curFile.files.forEach((file:any) =>
        setMenuFiles((oldArray: any) => [...oldArray, file])
      );
  }, [menuItem, files]);

  const items2: MenuProps['items'] = [
    { id: 1, link: 'brochure', name: 'Брошюры', childs: [] },
    {
      id: 2,
      link: 'instruc',
      name: 'Инструкции по эксплуатации',
      childs: [
        { subKey: 21, name: 'Комплектующие' },
        { subKey: 22, name: 'Мастер-станция' },
        { subKey: 23, name: 'Многооборотные приводы без блоков управления' },
        { subKey: 24, name: 'Неполнооборотные приводы без блоков управления' },
        { subKey: 25, name: 'Многооборотные приводы с блоками управления' },
        { subKey: 26, name: 'Неполнооборотные приводы с блоками управления' },
        { subKey: 27, name: 'Прямоходные приводы с блоками управления' },
        { subKey: 28, name: 'Приложения' },
        { subKey: 29, name: 'Редукторы' },
      ],
    },
    {
      id: 3,
      link: 'short',
      name: 'Краткие инструкции',
      childs: [
        { subKey: 31, name: 'Приводы' },
        { subKey: 32, name: 'Редукторы' },
        { subKey: 33, name: 'Средства управления' },
      ],
    },
    {
      id: 4,
      link: 'connect',
      name: 'Схемы подключения',
      childs: [
        { subKey: 41, name: 'Приводы без блоков управления' },
        { subKey: 42, name: 'Приводы с блоками управления' },
      ],
    },
    {
      id: 5,
      name: 'Таблицы размеров',
      link: 'table',
      childs: [
        { subKey: 51, name: 'Выходные валы' },
        { subKey: 52, name: 'Комплектующие' },
        { subKey: 53, name: 'Приводы' },
        { subKey: 54, name: 'Редукторы' },
        { subKey: 55, name: 'Средства управления' },
      ],
    },
    {
      id: 6,
      link: 'techs',
      name: 'Технические данные',
      childs: [
        { subKey: 61, name: 'Комплектующие' },
        { subKey: 62, name: 'Мастер-станция' },
        { subKey: 63, name: 'Приводы' },
        { subKey: 64, name: 'Редукторы' },
        { subKey: 65, name: 'Средства управления' },
      ],
    },
    { id: 7, link: 'descr', name: 'Технические описания', childs: [] },
  ].map((item) => {
    return {
      key: item.id,
      // icon: React.createElement(icon),
      // label: <Link href={`/docs/${item.link}`}>{item.name}</Link>,
      label: item.name,

      children:
        item.childs &&
        item.childs.length !== 0 &&
        item.childs.map((item, j) => {
          return {
            key: item.subKey,
            label: item.name,
          };
        }),
    };
  });

  const handleMenuItemClick = (key: string) => {
    
    let menuItem1: any;

    if (key.length > 1) {
      let upper: any = items2.find(
        (elem: any) => elem && elem.key === Number(key.substring(0, 1))
      );
      menuItem1 =
        upper &&
        upper.children.find((elem: any) => elem && elem.key === Number(key));
    } else {
      menuItem1 = items2.find((elem: any) => elem && elem.key === Number(key));
    }

    if (menuItem1 && menuItem1.key !== menuItem) {
      setMenuFiles([]);
      setMenuItem(menuItem1.key);
    }

    // if (key && items2 && items2.length !==0 ) {
    //   let menuItem:any = items2.find((elem:any) => elem && elem.key === key);

    //   if(menuItem) {
    //     setMenuItem(menuItem.label);
    //   } else {
    //     items2.forEach((elem:any) => {
    //       if (elem.children) {
    //         console.log('elem222',elem.children.length);
    //       }
    //       // menuItem = elem && elem.children.length !==0 && elem.children.find((item:MenuChildren) => item && item.key === key);
    //     })
    //   }
    //   // console.log('menuItem333',menuItem.label);
    // }
  };

  return (
    <>
      <Head>
        <title>АумаПриводСервис электроприводы АУМА</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <div className={styles.innerWrapper}>
          <div className={styles.siderWrapper}>
            <Sider width={400} className={styles.sider}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0,fontSize: isBigScreen ? '1.2rem' : '1rem' }}
                items={items2}
                onClick={({ key }) => handleMenuItemClick(key)}
              />
            </Sider>
          </div>
          <ul className={styles.list}>
            {menuFiles &&
              menuFiles.length !== 0 &&
              menuFiles.map((file: any) => {
                return (
                  <li className={styles.listItem} key={file.name}>
                    <Image
                      src={'/images/pdf_ico.png'}
                      alt="иконка"
                      width={40}
                      height={40}
                      className={styles.listIcon}
                    />
                    <Link
                      legacyBehavior
                      download
                      className={styles.link}
                      href={file.url}
                    >
                      <a className={styles.link} target="_blank">
                        {file.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
}

export default Docs;

import fsPromises from 'fs/promises';
import path from 'path';
import { useMediaQuery } from 'react-responsive';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'docs.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());

  return {
    props: objectData,
  };
}
