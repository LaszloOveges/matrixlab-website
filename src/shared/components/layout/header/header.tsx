import React, { ReactElement, useEffect } from 'react';
import { ButtonBase } from '@mui/material';
import Link from 'next/link';

import MlMenu from '../menu/menu';
import Translation from '../../../data/translation';
import MatrixLabsIcon from '../../../../assets/svg/logo/matrixlabs-icon.svg';
import MatrixLabsTextMatrix from '../../../../assets/svg/logo/matrixlabs-matrix.svg';
import MatrixLabsTextLabs from '../../../../assets/svg/logo/matrixlabs-labs.svg';
import { animFadeIn } from '../../../config/anim';
import { Routes } from '../../../pages/routes';
import { useLaunchPanel } from '../../../context/launch-panel.context';

export interface MlHeaderProps { }

function MlHeader({
  ...props
}: MlHeaderProps): ReactElement {

  const {active, setActive} = useLaunchPanel();

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e: Event) => {
    const header = document.querySelector('.ml-header');
    const scrollTop = window.scrollY;
    if (header) {
      if (scrollTop > 20) {
        header.classList.add('ml-header--sticky')
      } else {
        header.classList.remove('ml-header--sticky');
      } 
    }
  };

  const launchApp = () => {
    setActive(!active);
  }

  return (
    <div className='ml-section ml-header'>
      <div className='ml-header__bg'>
        <div className='ml-section__wrap ml-header__content'>
          <div className='ml-header__logo'>
            <Link href={Routes.Menu.Landing}>
              <div className='ml-header__logo__box'>
                <MatrixLabsIcon className='ml-header__logo__svg ml-header__logo__svg--icon' aria-label={Translation.en.meta.title} />
                <MatrixLabsTextMatrix className='ml-header__logo__svg ml-header__logo__svg--text-matrix' aria-label={Translation.en.meta.title} />
                <MatrixLabsTextLabs className='ml-header__logo__svg ml-header__logo__svg--text-labs' aria-label={Translation.en.meta.title} />
              </div>
            </Link>
          </div>
          <div className='ml-header__menu'{...animFadeIn()}>
            <MlMenu />
          </div>
          <div className='ml-header__action'>
            <ButtonBase 
              className='ml-button ml-button--alt ml-button--small ml-button--launch' 
              children={Translation.en.common.launchApp}
              onClick={() => launchApp()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MlHeader;
