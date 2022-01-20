import React, { Fragment, ReactElement } from 'react';

import { MlFooterItemsProps } from './footer';
import { Routes } from '../../../pages/routes';
import Translation from '../../../data/translation';
import { animSlideDown } from '../../../config/anim';

export interface MlFooterLegalProps { }

const legalMenuItems: MlFooterItemsProps[] = [
  {
    title: Translation.en.menupoint.privacyPolicy,
    link: Routes.Legal.PrivacyPolicy,
  },
  {
    title: Translation.en.menupoint.termsOfUse,
    link: Routes.Legal.TermsOfUse,
  },
  {
    title: Translation.en.menupoint.disclaimer,
    link: Routes.Legal.Disclaimer,
  },
];

function MlFooterLegal({
  ...props
}: MlFooterLegalProps): ReactElement {

  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <div className='ml-footer-legal' {...animSlideDown()}>  
        <p className='ml-footer-legal__copyright'>
          {Translation.en.footer.copyright} ©{currentYear} {Translation.en.meta.title}. {Translation.en.footer.allRightsReserved}
        </p>       
        <ul className='ml-footer-legal__list'>
          {legalMenuItems.map((item, index) =>
            <li key={index} className='ml-footer-legal__item'>
              <a href={item.link} target='_blank' rel='noopener noreferrer' className='ml-link ml-footer-legal__link'>
                {item.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
}

export default MlFooterLegal;
