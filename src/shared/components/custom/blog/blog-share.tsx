import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { animSlideUp } from '../../../config/anim';
import { WebFlowPostProps } from '../../../model/post';
import Translation from '../../../../assets/data/translation';
import IconLinkedin from '../../../../assets/svg/social/linkedin.svg';
import IconInstagram from '../../../../assets/svg/social/instagram.svg';
import IconTwitter from '../../../../assets/svg/social/twitter.svg';

export type MlBlogShareProps = {
  blogPost: WebFlowPostProps,
}

function MlBlogShare({ blogPost }: MlBlogShareProps): ReactElement {
  
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;
    const path = router.pathname.replace(`[slug]`, blogPost.slug)
    setCurrentUrl(`${baseUrl}${path}`);
  }, [router.pathname]);

  const socialList = [
    {
      name: `Linkedin`,
      link: `https://www.linkedin.com/company/matrixswap/`,
      icon: <IconLinkedin />,
    },
    {
      name: `Twitter`,
      link: `https://twitter.com/matrixswap`,
      icon: <IconTwitter />,
    },
    {
      name: `Instagram`,
      link: `https://www.instagram.com/matrixswap/`,
      icon: <IconInstagram />,
    },
  ];

  return (
    <div className='ml-section ml-blog-share' data-aos='fade-in'>
      <div className='ml-section__wrap ml-blog-share__content'>
        <div className='ml-blog-share__block'>
          <h3 className='ml-blog-share__title' {...animSlideUp()}>
            {Translation.en.blog.sharePost}
          </h3>
          <ul className='ml-blog-share__social'>
            {socialList.map((social, index) =>
              <li key={index} className='ml-blog-share__social__item'>  
                <a 
                  className='ml-blog-share__social__link' 
                  aria-label={social.name}
                  href={social.link} 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  {social.icon}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MlBlogShare;
