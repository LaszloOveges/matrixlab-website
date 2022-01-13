import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';

import Translation from '../../../../assets/data/translation';
import FeatureZap from '../../../../assets/svg/visual/feature-zap.svg';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';

export type MlFeaturesProps = { }

function MlFeatureZap({ 
  ...props 
}: MlFeaturesProps): ReactElement {

  const launchApp = () => {
    console.info(`Coming Soon`);
  }

  return (
    <div className='ml-section ml-features ml-feature-zap' data-aos='fade-in'>
      <div className='ml-section__wrap ml-features__content'>
        <div className='ml-features__box' {...animSlideUp()}>
          <h2 className='ml-section__title ml-features__title' {...animSlideOut()}>
            {Translation.en.section.features.zap.title}
          </h2>
          <p className='ml-features__description'>
            {Translation.en.section.features.zap.description}
          </p>
          <p className='ml-features__action'>
            <ButtonBase 
              className='ml-button ml-button--alt ml-button--small ml-button--disable'
              onClick={() => launchApp()}
            >
              {Translation.en.common.comingSoon}
            </ButtonBase>
          </p>
        </div>
        <div className='ml-features__visual' {...animFadeIn()}>
          <FeatureZap />
        </div>
      </div>
    </div>
  );
}

export default MlFeatureZap;
