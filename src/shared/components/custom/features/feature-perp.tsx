import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';

import Translation from '../../../data/translation';
import FeaturePerp from '../../../../assets/svg/visual/feature-perp.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';

export type MlFeaturesProps = { }

function MlFeaturePerp({ 
  ...props 
}: MlFeaturesProps): ReactElement {

  const launchApp = () => {
    window.open(ExternalRoutes.Menu.Perpetual, `_blank`);
  }

  return (
    <div className='ml-section ml-features ml-features--right ml-feature-perp' data-aos='fade-in'>
      <div className='ml-section__wrap ml-features__content'>
        <div className='ml-features__box' {...animSlideUp()}>
          <h2 className='ml-section__title ml-features__title' {...animSlideOut()}>
            {Translation.en.section.features.perp.title}
          </h2>
          <p className='ml-features__description'>
            {Translation.en.section.features.perp.description}
          </p>
          <p className='ml-features__action'>
            <ButtonBase 
              className='ml-button ml-button--alt ml-button--small'
              onClick={() => launchApp()}
            >
              {Translation.en.common.enterApp}
            </ButtonBase>
          </p>
        </div>
        <div className='ml-features__visual' {...animFadeIn()}>
          <FeaturePerp />
        </div>
      </div>
    </div>
  );
}

export default MlFeaturePerp;
