import React, { ReactElement } from 'react';

import Translation from '../../../data/translation';
import VisiondBg from '../../../../assets/svg/visual/vision-bg.svg';
import { animSlideUp, animSlideOut } from '../../../config/anim';

export type MlVisionProps = { }

function MlVision({ 
  ...props 
}: MlVisionProps): ReactElement {
  return (
    <div className='ml-section ml-vision' data-aos='fade-in'>
      <div className='ml-section__wrap ml-vision__content'>
        <div className='ml-vision__card' {...animSlideUp()}>
          <VisiondBg className='ml-vision__bg' />
          <div className='ml-vision__content'>
            <h2 className='ml-typo--highlight ml-vision__title'>
              {Translation.en.section.vision.title}
            </h2>
            <p className='ml-vision__text' {...animSlideOut()}>
              {Translation.en.section.vision.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlVision;
