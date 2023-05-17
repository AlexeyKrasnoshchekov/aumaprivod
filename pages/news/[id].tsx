import React, { useEffect, useState } from 'react';
import styles from './NewsItem.module.css';
import Image from 'next/image';
import parse from 'html-react-parser';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useRouter } from 'next/router';

function Post(post: any) {
  const htmlContent = post.post.content && parse(post.post.content);
  const router = useRouter();
  console.log('first', router.asPath);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{post.post.title}</h3>
      <div className={styles.innerWrapper}>
        <div className={styles.textWrapper}>{htmlContent && htmlContent}</div>
        {/* {router.asPath.includes('/news/9') && (
          <div style={{width:'80%'}}>
            <Image
              src={post.post.images[2]}
              alt="фото новости"
              // layout="fill"
              width={640}
              height={560}
              className={styles.image}
            />
            <Image
              src={post.post.images[3]}
              alt="фото новости"
              // layout="fill"
              width={640}
              height={560}
              className={styles.image}
            />
          </div>
        )} */}
        <div className={styles.imageFlex}>
          {post.post.images.length < 2 ? (
            post.post.images.map((image: any) => {
              return (
                <div key={post.post.id} className={styles.imageWrapper}>
                  <Image
                    src={image}
                    alt="фото новости"
                    layout="fill"
                    className={styles.image}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              );
            })
          ) : (
            <Carousel
              useKeyboardArrows={true}
              showArrows={true}
              showStatus={false}
              autoPlay={false}
              showThumbs={false}
              swipeable={true}
              // centerMode={true}
              // centerSlidePercentage={100}
            >
              {post.post.images.map((image: any) => {
                return (
                  <div key={post.post.id}>
                    <Image
                      src={image}
                      alt="фото новости"
                      // layout="fill"
                      width={640}
                      height={560}
                      className={styles.image}
                    />
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}

export default withLayout(Post);

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
import { Post, Posts } from '@/interfaces/post.interface';
import { withLayout } from '@/layout/Layout';
import { Carousel } from 'react-responsive-carousel';
export async function getStaticProps(context: any) {
  const params = context.params;
  const id = params.id;
  //   console.log('333', id);

  if (!id) {
    return {
      notFound: true,
    };
  }

  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());
  //   console.log('444', objectData);

  const post = objectData.posts.filter((post: Post) => post.id == id)[0];
  if (post.id === 1) post.images.shift();
  //   console.log('555', post);
  if (post === 0) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { post }, // will be passed to the page component as props
    };
  }
}

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());
  // const users = await response.json();

  const ids = objectData.posts.map((post: Post) => post.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
