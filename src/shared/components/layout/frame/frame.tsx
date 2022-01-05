import React, { Fragment, ReactElement, ReactNode } from 'react';
import Head from 'next/head';

import MlHeader from '../header/header';
import MlFooter from '../footer/footer';
import MlLaunchPanel from '../launch-panel/launch-panel';
import Translation from '../../../../assets/data/translation';

export enum MlSiteLayout {
  Landing = 'landing',
}

export interface MlFrameProps {
  children: ReactNode | undefined,
  title?: string;
  description?: string;
  layout?: MlSiteLayout,
}

function MlFrame({
  title = Translation.en.meta.title,
  description = Translation.en.meta.description,
  layout = MlSiteLayout.Landing,
  ...props
}: MlFrameProps): ReactElement {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={title} />
        <meta property='og:image' content='https://matrixlab.io/assets/icons/icon-512x512.png' />
        <meta property='og:url' content='https://matrixlab.io/' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='https://matrixlab.io/assets/icons/icon-512x512.png' />
        <meta name='twitter:url' content='https://matrixlab.io/' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content={title} />
      </Head>
      <div className={`ml-layout ${layout ? `ml-layout--${layout}` : ``}`}>
        <MlLaunchPanel />
        <MlHeader />
        <main className='ml-layout__content'>
          {props.children}
        </main>
        <MlFooter />
      </div>
    </Fragment>
  );
}

export default MlFrame;
