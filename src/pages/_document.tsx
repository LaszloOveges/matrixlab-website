import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <meta name="msapplication-TileColor" content="#03161d" />
          <meta name="msapplication-config" content="/assets/icons/browserconfig.xml" />
          <meta name="theme-color" content="#03161d" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
          <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#03161d" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" 
            rel="stylesheet" 
          />
          <script 
            type="text/javascript" 
            src="https://app.termly.io/embed.min.js" 
            data-auto-block="on" 
            data-website-uuid="f7bf7328-d335-44a3-bd94-b974028ef8c0"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
