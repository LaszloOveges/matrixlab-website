import React, { Fragment, ReactElement } from 'react';

import { MlFooterItemsProps } from './footer';
import { Routes, ExternalRoutes } from '../../../pages/routes';
import Translation from '../../../data/translation';
import MatrixLabsLogo from '../../../../assets/svg/logo/matrixlabs-logo.svg';
import SocialTelegram from '../../../../assets/svg/social/telegram.svg';
import SocialTwitter from '../../../../assets/svg/social/twitter.svg';
import SocialDiscord from '../../../../assets/svg/social/discord.svg';
import SocialGithub from '../../../../assets/svg/social/github.svg';
import SocialMedium from '../../../../assets/svg/social/medium.svg';
import { animSlideUp } from '../../../config/anim';

export interface MlFooterMenuProps { }

const footerMenuItems: MlFooterItemsProps[] = [
  {
    title: Translation.en.menupoint.about,
    children: [
      {
        title: Translation.en.menupoint.blog,
        link: Routes.Menu.Blog,
      },
      {
        title: Translation.en.menupoint.learn,
        link: ExternalRoutes.Menu.Learn,
      },
      {
        title: Translation.en.menupoint.technicalDocs,
        link: ExternalRoutes.Menu.Docs,
      },
    ],
  },
  {
    title: Translation.en.menupoint.support,
    children: [
      {
        title: Translation.en.menupoint.faq,
        link: ExternalRoutes.Menu.Faq,
      },
      {
        title: Translation.en.menupoint.contact,
        link: ExternalRoutes.Menu.Contact,
      },
      {
        title: Translation.en.menupoint.whitepaper,
        link: ExternalRoutes.Menu.Whitepaper,
      },
    ],
  },
  {
    title: Translation.en.menupoint.community,
    children: [
      {
        title: Translation.en.section.social.telegram.title,
        link: ExternalRoutes.Social.Telegram,
        icon: <SocialTelegram />,
      },
      {
        title: Translation.en.section.social.twitter.title,
        link: ExternalRoutes.Social.Twitter,
        icon: <SocialTwitter />,
      },
      {
        title: Translation.en.section.social.discord.title,
        link: ExternalRoutes.Social.Discord,
        icon: <SocialDiscord />,
      },
      {
        title: Translation.en.section.social.github.title,
        link: ExternalRoutes.Social.Github,
        icon: <SocialGithub />,
      },
      {
        title: Translation.en.section.social.medium.title,
        link: ExternalRoutes.Social.Medium,
        icon: <SocialMedium />,
      },
    ],
  },
];

function MlFooterMenu({
  ...props
}: MlFooterMenuProps): ReactElement {
  return (
    <Fragment>
      <div className='ml-footer-menu' {...animSlideUp()}>
        <div className='ml-footer-menu__logo'>
          <MatrixLabsLogo />
        </div>
        <ul className='ml-footer-menu__list'>
          {footerMenuItems.map((item, index) =>
            <li key={index} className={`ml-footer-menu__item${item.title === Translation.en.menupoint.community ? ` ml-footer-menu__item--double` : ``}`}>
              <h3 className='ml-footer-menu__title'>
                {item.title}
              </h3>
              <ul className='ml-footer-menu__sublist'>
                {item.children?.map((subItem, subIndex) =>
                  <li key={subIndex} className='ml-footer-menu__subitem'>
                    <a href={subItem.link} target='_blank' rel='noopener noreferrer' className='ml-link ml-footer-menu__link'>
                      {subItem.icon && 
                        <i className={`ml-icon ml-footer-menu__icon ml-footer-menu__icon--${subItem.title.toLowerCase()}`}>
                          {subItem.icon}
                        </i>
                      } 
                      {subItem.title}
                    </a>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
}

export default MlFooterMenu;
