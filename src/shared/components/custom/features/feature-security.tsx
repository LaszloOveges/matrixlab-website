import React, { ReactElement } from 'react';

import Translation from '../../../data/translation';
import FeatureSecurity from '../../../../assets/svg/visual/feature-security.svg';
import SecuredByHalborn from '../../../../assets/svg/visual/secured-halborn.svg';
import { animSlideOut, animSlideUp, animFadeIn } from '../../../config/anim';

export type MlFeaturesProps = { }

function MlFeatureSecurity({ 
  ...props 
}: MlFeaturesProps): ReactElement {
  return (
    <div className='ml-section ml-features ml-features--right ml-feature-security' data-aos='fade-in'>
      <div className='ml-section__wrap ml-features__content'>
        <div className='ml-features__box' {...animSlideUp()}>
          <h2 className='ml-section__title ml-features__title' {...animSlideOut()}>
            {Translation.en.section.features.security.title}
          </h2>
          <p className='ml-features__description'>
            {Translation.en.section.features.security.description}
          </p>
          <ul className='ml-features__info'>
            <li className='ml-features__info__item'>
              <span className='ml-features__info__text'>
                {Translation.en.section.features.security.secured}
              </span>
              <SecuredByHalborn className='ml-features__info__icon ml-features__info__icon--wide' />
            </li>
          </ul>
        </div>
        <div className='ml-features__visual' {...animFadeIn()}>
          <FeatureSecurity />
        </div>
      </div>
    </div>
  );
}

export default MlFeatureSecurity;
