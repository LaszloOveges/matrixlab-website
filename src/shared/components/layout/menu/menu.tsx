import React, { Fragment, ReactElement, ReactNode, useState } from 'react';
import { ClickAwayListener, useMediaQuery } from '@mui/material';
import { UrlObject } from 'url';
import Link from 'next/link';

import Translation from '../../../../assets/data/translation';
import { ExternalRoutes, Routes } from '../../../pages/routes';
import Indicator from '../../../../assets/svg/icon/indicator.svg';
import SocialTelegram from '../../../../assets/svg/social/telegram.svg';
import SocialTwitter from '../../../../assets/svg/social/twitter.svg';
import SocialDiscord from '../../../../assets/svg/social/discord.svg';
import SocialMedium from '../../../../assets/svg/social/medium.svg';
import SocialAnnouncement from '../../../../assets/svg/social/announcement.svg';
import SocialBlog from '../../../../assets/svg/social/blog.svg';
// import SocialWhitepaper from '../../../../assets/svg/social/whitepaper.svg';
// import SocialBuy from '../../../../assets/svg/social/buy.svg';

export interface MlMenuProps { }

declare type Url = string | UrlObject;

export interface MlMenuItemsProps {
  title: string;
  alias?: string;
  link?: string | Url;
  linkType?: `internal` | `external`;
  icon?: ReactNode | undefined;
  children?: MlMenuItemsProps[];
}

const menuItems: MlMenuItemsProps[] = [
  {
    title: Translation.en.menupoint.about,
    link: Routes.Menu.About,
    linkType: `internal`,
  },
  {
    title: Translation.en.menupoint.community,
    children: [
      {
        title: Translation.en.communityMenupoint.telegram,
        link: ExternalRoutes.Social.Telegram,
        alias: `telegram`,
        icon: <SocialTelegram />,
      },
      {
        title: Translation.en.communityMenupoint.annTelegram,
        link: ExternalRoutes.Social.AnnouncementTelegram,
        alias: `announcement`,
        icon: <SocialAnnouncement />,
      },
      {
        title: Translation.en.communityMenupoint.discord,
        link: ExternalRoutes.Social.Discord,
        alias: `discord`,
        icon: <SocialDiscord />,
      },
      {
        title: Translation.en.communityMenupoint.twitter,
        link: ExternalRoutes.Social.Twitter,
        alias: `twitter`,
        icon: <SocialTwitter />,
      },
      {
        title: Translation.en.communityMenupoint.medium,
        link: ExternalRoutes.Social.Medium,
        alias: `medium`,
        icon: <SocialMedium />,
      },
      {
        title: Translation.en.communityMenupoint.blog,
        link: ExternalRoutes.Menu.Blog,
        alias: `blog`,
        icon: <SocialBlog />,
      },
      // {
      //   title: Translation.en.communityMenupoint.whitepaper,
      //   link: ExternalRoutes.Menu.Whitepaper,
      //   alias: `whitepaper`,
      //   icon: <SocialWhitepaper />,
      // },
      // {
      //   title: Translation.en.communityMenupoint.learn,
      //   link: ExternalRoutes.Menu.Learn,
      //   alias: `buy`,
      //   icon: <SocialBuy />,
      // },
    ],
  },
  {
    title: Translation.en.menupoint.learn,
    link: Routes.Menu.Blog,
    linkType: `internal`,
  },
  {
    title: Translation.en.menupoint.docs,
    link: ExternalRoutes.Menu.Docs,
  },
];

const MlMenuLink = (menupoint: MlMenuItemsProps) => {
  return (
    <Fragment>
      {menupoint.link && menupoint.linkType === `internal` ?
        <Link href={menupoint.link as Url}>
          <span className='ml-link ml-menu__link'>
            {menupoint.icon && 
              <i className={`ml-menu__icon ml-menu__icon--${menupoint.alias}`}>
                {menupoint.icon}
              </i>
            } 
            <span className='ml-menu__text'>
              {menupoint.title}
            </span>
          </span>
        </Link>
      :
        <a 
          className='ml-link ml-menu__link'
          href={menupoint.link as string} 
          rel='noopener noreferrer'
          target='_blank'
        >
          {menupoint.icon && 
            <i className={`ml-icon ml-menu__icon ml-menu__icon--${menupoint.alias}`}>
              {menupoint.icon}
            </i>
          } 
          <span className='ml-menu__text'>
            {menupoint.title}
          </span>
        </a>
      }
    </Fragment>
  )
};

function MlMenu({
  ...props
}: MlMenuProps): ReactElement {

  const isMobile = !useMediaQuery(`(min-width:768px)`);
  const [isMenuActive, setMenuActive] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<{[index: number]: EventTarget & HTMLElement} | null>(null);
  const handleMouseOver = (index: number, event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl({ [index]: event.currentTarget });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      {isMobile &&
        <div 
          className={`ml-menu-button${isMenuActive ? ` ml-menu-button--active` : ``}`}
          onClick={() => setMenuActive(!isMenuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
      <div className={`ml-menu${isMobile ? ` ml-compact-dialog` : ``}${isMenuActive ? ` ml-compact-dialog--active` : ``}`}>
        <ul className={`ml-menu__list${isMobile ? ` ml-compact-dialog__content` : ``}`}>
          {menuItems.map((menupoint, index) =>
            <li key={index} className='ml-menu__item'>   
              {menupoint.children && !isMobile ? 
                <div {...(
                  isMobile ? 
                  {onClick: (e) => handleMouseOver(index, e)} :
                  {onMouseOver: (e) => handleMouseOver(index, e)}
                )}>
                  <span className='ml-menu__link' {...(
                    !isMobile && 
                    {onMouseLeave: handleClose}
                  )}>
                    <span className='ml-menu__text'>
                      {menupoint.title}
                    </span>
                    <Indicator className='ml-menu__indicator' />
                  </span>
                  <ClickAwayListener 
                    onClickAway={(isMobile ? handleClose : () => {})} 
                    mouseEvent={false}
                  >
                    <div 
                      id={`submenupoints-${index}`}
                      className={`ml-dropdown${Boolean(anchorEl && anchorEl[index]) ? ` ml-dropdown--active` : ``}`}
                      onMouseLeave={handleClose}
                    >
                      <ul className='ml-menu__sublist'>
                        {menupoint.children?.map((subMenupoint, subIndex) =>
                          <li 
                            key={subIndex}
                            onClick={handleClose} 
                            className='ml-menu__subitem'
                          >
                            <MlMenuLink {...subMenupoint} />
                          </li>
                        )}
                      </ul>
                    </div>
                  </ClickAwayListener>
                </div>
              :
                <MlMenuLink {...menupoint} />
              }
            </li>
          )}
          {isMobile && 
            <li key={`x`} className='ml-menu__item'>
              {menuItems.filter(m => m.children).map((menupoint, index) =>
                <ul key={index} className='ml-menu__sublist'>
                  {menupoint.children?.map((subMenupoint, subIndex) =>
                    <li 
                      key={subIndex}
                      onClick={handleClose} 
                      className='ml-menu__subitem'
                    >
                      <MlMenuLink {...subMenupoint} />
                    </li>
                  )}
                </ul>
              )}
            </li>
          }
        </ul>
      </div>
    </Fragment>
  );
}

export default MlMenu;
