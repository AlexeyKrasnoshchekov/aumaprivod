import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import styles from './SidebarLayout.module.css';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';

import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { SidebarLayoutProps } from './SidebarLayout.props';

const { Sider } = Layout;

const items2: MenuProps['items'] = [
  { id: 1,link:'brochure', name: 'Брошюры', childs: [] },
  {
    id: 2,
    link:'instruc',
    name: 'Инструкции по эксплуатации',
    childs: [
      'Комплектующие',
      'Мастер-станция',
      'Многооборотные приводы без блоков управления',
      'Неполнооборотные приводы без блоков управления',
      'Многооборотные приводы с блоками управления',
      'Неполнооборотные приводы с блоками управления',
      'Прямоходные приводы с блоками управления',
      'Приложения',
      'Редукторы',
    ],
  },
  {
    id: 3,
    link:'short',
    name: 'Краткие инструкции',
    childs: ['Приводы', 'Редукторы', 'Средства управления'],
  },
  {
    id: 4,
    link:'connect',
    name: 'Схемы подключения',
    childs: ['Приводы без блоков управления', 'Приводы с блоками управления'],
  },
  {
    id: 5,
    name: 'Таблицы размеров',
    link:'table',
    childs: [
      'Выходные валы',
      'Комплектующие',
      'Приводы',
      'Редукторы',
      'Средства управления',
    ],
  },
  {
    id: 6,
    link:'techs',
    name: 'Технические данные',
    childs: [
      'Комплектующие',
      'Мастер-станция',
      'Приводы',
      'Редукторы',
      'Средства управления'
    ],
  },
  { id: 7,link:'descr', name: 'Технические описания', childs: [] },
].map((item) => {
  return {
    key: item.id,
    // icon: React.createElement(icon),
    // label: <Link href={`/docs/${item.link}`}>{item.name}</Link>,
    label: item.name,

    children:
      item.childs &&
      item.childs.length !== 0 &&
      item.childs.map((name, j) => {
        const subKey: number = item.id * item.childs.length + j + 1;
        return {
          key: subKey,
          label: name,
        };
      }),
  };
});

function SidebarLayout({ children }: SidebarLayoutProps): JSX.Element {
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
            <Sider className={styles.sider}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
              />
            </Sider>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
}

export default SidebarLayout;

export const withSidebarLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withSidebarLayoutComponent(props: T): JSX.Element {
    return (
      <SidebarLayout>
        <Component {...props} />
      </SidebarLayout>
    );
  };
};
