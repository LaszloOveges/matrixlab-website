import React, { ReactElement } from 'react';

import { ExternalRoutes } from '../../../pages/routes';
import Translation from '../../../data/translation';
import SocialTelegram from '../../../../assets/svg/social/telegram.svg';
import SocialTwitter from '../../../../assets/svg/social/twitter.svg';
import SocialDiscord from '../../../../assets/svg/social/discord.svg';
import SocialGithub from '../../../../assets/svg/social/github.svg';
import SocialMedium from '../../../../assets/svg/social/medium.svg';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type MlCommunityProps = { }

export type MlCommunityItem = {
  icon: ReactElement;
  name: string;
  description: string;
  link: string;
}

const communityList: MlCommunityItem[] = [
  {
    icon: <SocialTelegram />,
    name: Translation.en.section.social.telegram.title,
    description: Translation.en.section.social.telegram.description,
    link: ExternalRoutes.Social.Telegram,
  },
  {
    icon: <SocialTwitter />,
    name: Translation.en.section.social.twitter.title,
    description: Translation.en.section.social.twitter.description,
    link: ExternalRoutes.Social.Twitter,
  },
  {
    icon: <SocialDiscord />,
    name: Translation.en.section.social.discord.title,
    description: Translation.en.section.social.discord.description,
    link: ExternalRoutes.Social.Discord,
  },
  {
    icon: <SocialGithub />,
    name: Translation.en.section.social.github.title,
    description: Translation.en.section.social.github.description,
    link: ExternalRoutes.Social.Github,
  },
  {
    icon: <SocialMedium />,
    name: Translation.en.section.social.medium.title,
    description: Translation.en.section.social.medium.description,
    link: ExternalRoutes.Social.Medium,
  },
];

function MlCommunity({ 
  ...props 
}: MlCommunityProps): ReactElement {
  return (
    <div className='ml-section ml-community' data-aos='fade-in'>
      <div className='ml-section__wrap ml-community__content'>
        <h2 className='ml-section__title ml-community__title' {...animSlideOut()}>
          {Translation.en.section.community.title}
        </h2>
        <ul className='ml-community__list'>
          {communityList.map((communityItem, index) => 
            <li key={index} className='ml-community__item' {...animSlideUp()}>
              <a href={communityItem.link} target='_blank' rel='noopener noreferrer' className='ml-card ml-community__card'>
                <i className={`ml-icon ml-community__item__icon ml-community__item__icon--${communityItem.name.toLowerCase()}`} {...animSlideOut()}>
                  <span className='ml-community__item__icon__gradient-border'></span>
                  {communityItem.icon}
                </i>
                <h3 className='ml-community__item__title ml-typo--highlight'>
                  {communityItem.name}
                </h3>
                <p className='ml-community__item__description'>
                  {communityItem.description}
                </p>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MlCommunity;
