import React, { ReactElement } from 'react';

import Translation from '../../../../assets/data/translation';
import AboutBg from '../../../../assets/svg/visual/about-us-bg.svg';
import AboutRocket from '../../../../assets/image/visual/about-us-rocket.png';
import AboutRocketShadow from '../../../../assets/svg/visual/about-us-rocket-shadow.svg';
import { animZoomOut, animFadeUp, animFadeIn } from '../../../config/anim';
import Image from 'next/image';

export type MlAboutProps = { }

function MlAbout({ 
  ...props 
}: MlAboutProps): ReactElement {
  return (
    <div className='ml-section ml-about'>
      <div className='ml-section__wrap ml-about__content'>
        <div className='ml-about__box'>
          <h1 className='ml-about__title ml-typo--highlight' {...animZoomOut()}>
            {Translation.en.section.about.title}
          </h1>
          <p className='ml-about__description' {...animFadeUp()}>
            {Translation.en.section.about.description}
          </p>
        </div>
        <div className='ml-about__visual' {...animFadeIn()}>
          <AboutBg className='ml-about__visual__bg' />
          <div className='ml-about__visual__rocket'>
            <AboutRocketShadow className='ml-about__visual__shadow' />
            <Image 
              src={AboutRocket} 
              alt='Rocket' 
              layout='fill' 
              loading='lazy' 
              placeholder='blur' 
              quality={100}
              className='ml-about__visual__body'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlAbout;
