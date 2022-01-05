import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';

import Translation from '../../../../assets/data/translation';
import FeatureSwap from '../../../../assets/svg/visual/feature-swap.svg';
import FeatureMultiSwap from '../../../../assets/svg/visual/feature-multi-swap.svg';
import FeatureNukeButton from '../../../../assets/svg/visual/feature-nuke-button.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';

export type MlFeaturesProps = { }

function MlFeatureSwap({ 
  ...props 
}: MlFeaturesProps): ReactElement {

  const launchApp = () => {
    window.open(ExternalRoutes.Menu.Swap, `_blank`);
  }

  return (
    <div className='ml-section ml-features ml-feature-swap' data-aos='fade-in'>
      <div className='ml-section__wrap ml-features__content'>
        <div className='ml-features__box' {...animSlideUp()}>
          <h2 className='ml-section__title ml-features__title' {...animSlideOut()}>
            {Translation.en.section.features.swap.title}
          </h2>
          <p className='ml-features__description'>
            {Translation.en.section.features.swap.description}
          </p>
          <ul className='ml-features__info'>
            <li className='ml-features__info__item'>
              <FeatureMultiSwap className='ml-features__info__icon' />
              <span className='ml-features__info__text'>
                {Translation.en.section.features.swap.multiToken}
              </span>
            </li>
            <li className='ml-features__info__item'>
              <FeatureNukeButton className='ml-features__info__icon' />
              <span className='ml-features__info__text'>
                {Translation.en.section.features.swap.nukeButton}
              </span>
            </li>
          </ul>
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
          <FeatureSwap />
        </div>
      </div>
    </div>
  );
}

export default MlFeatureSwap;
