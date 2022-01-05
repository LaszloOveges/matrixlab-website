import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';

import Translation from '../../../../assets/data/translation';
import IntroVisual from '../../../../assets/svg/visual/intro.svg';
import Arrow from '../../../../assets/svg/icon/arrow.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { animZoomOut, animFadeIn } from '../../../config/anim';
import { useLaunchPanel } from '../../../context/launch-panel.context';

export type MlIntroProps = { }

function MlIntro({ 
  ...props 
}: MlIntroProps): ReactElement {

  const {active, setActive} = useLaunchPanel();

  const launchApp = () => {
    setActive(!active);
  }

  const learnMore = () => {
    window.open(ExternalRoutes.Menu.Learn, `_blank`);
  }

  return (
    <div className='ml-section ml-intro'>
      <div className='ml-section__wrap ml-intro__content'>
        <div className='ml-intro__visual' {...animFadeIn()}>
          <IntroVisual className='ml-intro__visual__vortex'/>
        </div>
        <div className='ml-intro__box' {...animZoomOut()}>
          <h1 className='ml-intro__title ml-typo--highlight'>
            {Translation.en.section.intro.title}
          </h1>
          <p className='ml-intro__description'>
            {Translation.en.section.intro.description}
          </p>
          <div className='ml-intro__action'>
            <ButtonBase 
              className='ml-button' 
              children={Translation.en.common.launchApp}
              onClick={() => launchApp()}
            />
            <ButtonBase 
              className='ml-button ml-button--alt'
              onClick={() => learnMore()}
            >
              {Translation.en.common.learnMore} 
              <Arrow className='ml-button__icon' />
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlIntro;
