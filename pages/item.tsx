import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ItemProps } from '../types/interfaces';

import { getItem } from '../components/fetch';
import Layout from '../components/layout';
import ItemDetail from '../components/item-detail';
import Comment from '../components/comment';

interface Props {
  item: ItemProps;
}

export const Item = ({ item }: Props) => (
  <Layout>
    <Head>
      <title>
        {item.title ? `Hacker News - ${item.title}` : 'Hacker News'}
      </title>
      <meta name="robots" content="noindex" />
    </Head>
    {item.id ? (
      <>
        <ItemDetail item={item} />
        {item.descendants > 0 && (
          <div className="comments">
            <h5>
              {item.descendants}
              {item.descendants > 1 ? ' Comments:' : ' Comment:'}
            </h5>
            {item.kids &&
              item.kids.map((comment: number) => (
                <Comment item={comment} key={comment} />
              ))}
          </div>
        )}
      </>
    ) : (
      <div className="load">Error loading post.</div>
    )}

    <style jsx global>
      {`
        .comments_link {
          display: none;
        }
      `}
    </style>
    <style jsx global>
      {`
        h5 {
          background-color: #eee;
          color: #111;
          padding: 15px 20px;
          margin-top: -20px;
          margin-bottom: 20px;
          margin-left: -20px;
          margin-right: -20px;
          font-size: 16px;
        }
        .comments {
          padding: 20px;
        }
      `}
    </style>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  // @ts-ignore
  const item = await getItem(id);
  return {
    props: {
      item,
    },
  };
};

export default Item;
