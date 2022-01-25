import React, { Fragment, ReactElement } from 'react';
import { ButtonBase } from '@mui/material';

import * as ga from '../../../lib/google-analytics';
import Translation from '../../../data/translation';
import AppSwap from '../../../../assets/svg/visual/app-swap.svg';
import AppPerp from '../../../../assets/svg/visual/app-perp.svg';
import AppZap from '../../../../assets/svg/visual/app-zap.svg';
import CloseIcon from '../../../../assets/svg/icon/close.svg';
import { useLaunchPanel } from '../../../context/launch-panel.context';
import { ExternalRoutes } from '../../../pages/routes';

export interface MlLaunchPanelProps { }

export type MlLaunchAAppItem = {
  index?: number;
  icon: ReactElement;
  active: boolean;
  name: string;
  description: string;
  actionText: string;
  actionFunction: () => void,
}

const MlLaunchApp = ({index = 0, ...item}: MlLaunchAAppItem) => {
  return (
    <li className={`ml-launch-panel__item${!item.active ? ` ml-launch-panel__item--disable` : ``}`}>
      <div className='ml-launch-panel__item__box' onClick={item.actionFunction}>
        <i className='ml-launch-panel__item__icon'>
          {item.icon}
        </i>
        <h3 className='ml-launch-panel__item__name ml-typo--highlight'>
          {item.name}
        </h3>
        <p className='ml-launch-panel__item__description'>
          {item.description}
        </p>
        <ButtonBase 
          className={`ml-button ml-button--alt ml-button--small ml-launch-panel__item__action${!item.active ? ` ml-button--disable` : ``}`} 
          children={item.actionText}
          onClick={item.actionFunction}
        />
      </div>
    </li>
  )
};

function MlLaunchPanel({
  ...props
}: MlLaunchPanelProps): ReactElement {
  const {active, setActive} = useLaunchPanel();
  const appList: MlLaunchAAppItem[] = [
    {
      active: true,
      icon: <AppSwap />,
      name: Translation.en.section.apps.swap.title,
      description: Translation.en.section.apps.swap.description,
      actionText: Translation.en.common.launchApp,
      actionFunction: () => launchSwap(),
    },
    {
      active: true,
      icon: <AppPerp />,
      name: Translation.en.section.apps.perp.title,
      description: Translation.en.section.apps.perp.description,
      actionText: Translation.en.common.launchApp,
      actionFunction: () => launchPerp(),
    },
    {
      active: false,
      icon: <AppZap />,
      name: Translation.en.section.apps.zap.title,
      description: Translation.en.section.apps.zap.description,
      actionText: Translation.en.common.comingSoon,
      actionFunction: () => launchZap(),
    },
  ];

  const closeLaunchPanel = () => {
    setActive(false);
  }

  const launchSwap = () => {
    closeLaunchPanel();
    window.open(ExternalRoutes.Menu.Swap, `_blank`);
    ga.event(`launch_app`, {event_category: `swap`});
  }

  const launchPerp = () => {
    closeLaunchPanel();
    window.open(ExternalRoutes.Menu.Perpetual, `_blank`);
    ga.event(`launch_app`, {event_category: `perp`});
  }

  const launchZap = () => {
    console.info(`Coming Soon`);
    ga.event(`launch_app`, {event_category: `zap`});
  }

  return (
    <Fragment>
      <div className={`ml-section ml-launch-panel${active ? ` ml-launch-panel--active` : ``}`}>
        <i className='ml-launch-panel__close' onClick={() => closeLaunchPanel()}>
          <ButtonBase 
            className='ml-button-icon ml-launch-panel__close__icon' 
            children={<CloseIcon />}
          />
        </i>
        <div className='ml-section__wrap ml-launch-panel__content'>
          <ul className='ml-launch-panel__list'>
            {appList.map((appItem, index) => 
              <MlLaunchApp key={index} index={index} {...appItem} />
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default MlLaunchPanel;
