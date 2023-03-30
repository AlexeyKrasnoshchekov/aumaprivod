import styles from './News.module.css';
import { withLayout } from '../../layout/Layout';
import Image from 'next/image';
import Head from 'next/head';

function News({ posts }: any): JSX.Element {
  // console.log('first', posts);

  const sortedPosts = posts.sort((a:Post,b:Post) => b.id - a.id);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Новости компании Стандарм" />
        <title>Новости компании Стандарм</title>
        <meta name="description" content="Новости компании Стандарм" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.outerWrapper}>
        <h2 className={styles.heading}>Новости компании</h2>
        <div className={styles.wrapper}>
          {sortedPosts.map((post: Post) => {
            return (
              <div
                key={post.id}
                className={styles.innerWrapper}
                // style={{ padding: 20}}
              >
                <div className={styles.date}>{post.dateString}</div>
                <Link href={`news/${post.id}`}>
                  <h3 className={styles.title}>
                    {post.titleShort ? post.titleShort : post.title}
                  </h3>
                </Link>
                {/* {post.images.length !== 0 && (
                  <Image
                    key={post.images[0]}
                    src={post.images[0]}
                    alt="лого стандарма"
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                )}
                <Link className={styles.titleWrapper} href={`news/${post.id}`}>
                  <h3 className={styles.title}>
                    {post.titleShort ? post.titleShort : post.title}
                  </h3>
                  <p className={styles.date}>{post.dateString}</p>
                </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default withLayout(News);

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
import { Post, Posts } from '@/interfaces/post.interface';
import Link from 'next/link';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());

  let convData = { posts: [] };

  convData.posts = objectData.posts.sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: convData,
  };
}
