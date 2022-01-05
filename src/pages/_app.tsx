import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/main.scss';
import { aosConfig } from '../shared/config/aos';
import { LaunchPanelProvider } from '../shared/context/launch-panel.context';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => AOS.init(aosConfig), []);
  return (
    <LaunchPanelProvider>
      <Component {...pageProps} />
    </LaunchPanelProvider>
  )
}

export default MyApp;
