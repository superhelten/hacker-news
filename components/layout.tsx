import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const iconApple = require('../public/img/apple-touch-icon.png').default;
const icon32 = require('../public/img/favicon-32x32.png').default;
const icon16 = require('../public/img/favicon-16x16.png').default;

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>SISTE</title>
        <meta
          name="description"
          content="A Hacker News clone built with React and Next.js. Hacker News is a social news website focusing on computer science and entrepreneurship."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#fc6621" />
        <link rel="apple-touch-icon" sizes="180x180" href={iconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
        <link rel="preconnect" href="https://hacker-news.firebaseio.com" />
      </Head>

      <div id="container">
        <header>
          <h1>
            <Link href="/">
              <a title="Hacker News is a social news website focusing on computer science and entrepreneurship.">
                SISTE
              </a>
            </Link>
          </h1>
        </header>
        <div id="main">{children}</div>
      </div>
      <style jsx>
        {`
          #container {
            width: 95%;
            max-width: 800px;
            margin: auto;
          }
          #main {
            background-color: #fff;
            border-radius: 5px;
            overflow: hidden;
          }
          header {
            background-color: #fc6621;
            padding: 12px 20px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          h1 {
            font-size: 50px;
            font-weight: bold;
            margin: 0;
            position: relative;
            left: -3px;
          }
          h1 a {
            color: #fff;
            text-decoration: none;
          }
          h1 a:hover {
            color: #fff;
            text-decoration: none;
          }

          @media only screen and (max-width: 320px) {
            h1 {
              font-size: 40px;
            }
          }
        `}
      </style>
    </>
  );
}
