import React, { ReactElement } from 'react';
import { ButtonBase } from '@mui/material';

import Translation from '../../../../assets/data/translation';
import AppSwap from '../../../../assets/svg/visual/app-swap.svg';
import AppPerp from '../../../../assets/svg/visual/app-perp.svg';
import AppZap from '../../../../assets/svg/visual/app-zap.svg';
import { ExternalRoutes } from '../../../pages/routes';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type MlAppsProps = { }

export type MlAppItem = {
  active: boolean;
  index?: number;
  icon: ReactElement;
  name: string;
  description: string;
  actionText: string;
  actionFunction: () => void,
}

const MlApp = ({index = 0, ...item}: MlAppItem) => {
  return (
    <li className='ml-apps__item' {...animSlideUp()}>
      <div className='ml-card ml-apps__card'>
        <i className='ml-apps__item__icon' {...animSlideOut()}>
          {item.icon}
        </i>
        <h3 className='ml-apps__item__name ml-typo--highlight'>
          {item.name}
        </h3>
        <p className='ml-apps__item__description'>
          {item.description}
        </p>
        <ButtonBase 
          className={`ml-button ml-button--small ml-apps__item__action${!item.active ? ` ml-button--disable` : ``}`}
          children={item.actionText}
          onClick={item.actionFunction}
        />
      </div>
    </li>
  )
};

function MlApps({ 
  ...props 
}: MlAppsProps): ReactElement {

  const appList: MlAppItem[] = [
    {
      active: true,
      icon: <AppSwap />,
      name: Translation.en.section.apps.swap.title,
      description: Translation.en.section.apps.swap.description,
      actionText: Translation.en.section.apps.swap.action,
      actionFunction: () => launchSwap(),
    },
    {
      active: true,
      icon: <AppPerp />,
      name: Translation.en.section.apps.perp.title,
      description: Translation.en.section.apps.perp.description,
      actionText: Translation.en.section.apps.perp.action,
      actionFunction: () => launchPerp(),
    },
    {
      active: false,
      icon: <AppZap />,
      name: Translation.en.section.apps.zap.title,
      description: Translation.en.section.apps.zap.description,
      actionText: Translation.en.common.comingSoon,
      actionFunction: () => comingSoon(),
    },
  ];

  const launchSwap = () => {
    window.open(ExternalRoutes.Menu.Swap, `_blank`);
  }

  const launchPerp = () => {
    window.open(ExternalRoutes.Menu.Perpetual, `_blank`);
  }

  const comingSoon = () => {
    console.info(`Coming Soon`);
  }

  return (
    <div className='ml-section ml-apps' data-aos='fade-in'>
      <div className='ml-section__wrap ml-apps__content'>
        <h2 className='ml-section__title ml-apps__title' {...animSlideOut()}>
          {Translation.en.section.apps.title}
        </h2>
        <ul className='ml-apps__list'>
          {appList.map((appItem, index) => 
            <MlApp key={index} index={index} {...appItem} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default MlApps;
