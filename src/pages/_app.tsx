import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';
import nProgress from 'nprogress';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/main.scss';
import * as ga from '../shared/lib/google-analytics';
import { aosConfig } from '../shared/config/aos';
import { LaunchPanelProvider } from '../shared/context/launch-panel.context';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  useEffect(() => AOS.init(aosConfig), []);
  return (
    <LaunchPanelProvider>
      <Component {...pageProps} />
    </LaunchPanelProvider>
  )
}

export default MyApp;
