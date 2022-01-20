import React, { ReactElement } from 'react';
import Image from 'next/image';

import Translation from '../../../data/translation';
import IconLinkedin from '../../../../assets/svg/social/linkedin.svg';
import TeamJoseph from '../../../../../public/assets/image/team/joseph.png';
import TeamRyan from '../../../../../public/assets/image/team/ryan.png';
import TeamYash from '../../../../../public/assets/image/team/yash.jpeg';
import TeamKeith from '../../../../../public/assets/image/team/keith.jpg';
import TeamVermont from '../../../../../public/assets/image/team/vermont.jpeg';
import TeamLaszlo from '../../../../../public/assets/image/team/laszlo.jpeg';
import TeamDanny from '../../../../../public/assets/image/team/danny.jpeg';
import TeamGlenn from '../../../../../public/assets/image/team/glenn.png';
import TeamIra from '../../../../../public/assets/image/team/ira.png';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type MlTeamProps = { }

export type MlAdvisorItem = {
  image: StaticImageData;
  name: string;
  position: string;
  link: string;
}

const teamList: MlAdvisorItem[] = [
  {
    image: TeamJoseph,
    name: `Joseph Liu`,
    position: `Code Contributor`,
    link: `https://www.linkedin.com/in/joe-liu/`,
  },
  {
    image: TeamRyan,
    name: `Ryan Jun`,
    position: `Code Contributor`,
    link: `https://www.linkedin.com/in/ryan-jun-b64573205/`,
  },
  {
    image: TeamYash,
    name: `Yash Mehta`,
    position: `Code Contributor`,
    link: `https://www.linkedin.com/in/yash2709`,
  },
  {
    image: TeamKeith,
    name: `Keith Lee`,
    position: `Code Contributor`,
    link: ``,
  },
  {
    image: TeamVermont,
    name: `Vermont Paguiligan`,
    position: `Code Contributor`,
    link: ``,
  },
  {
    image: TeamLaszlo,
    name: `Laszlo Oveges`,
    position: `Code Contributor`,
    link: `https://www.linkedin.com/in/laszlo-oveges/`,
  },
  {
    image: TeamDanny,
    name: `Danny Chan`,
    position: `Contributor`,
    link: `https://www.linkedin.com/in/dchannn/`,
  },
  {
    image: TeamGlenn,
    name: `Glenn Bona`,
    position: `Content Contributor`,
    link: `https://www.linkedin.com/in/glennbona`,
  },
  {
    image: TeamIra,
    name: `Ira Masechko`,
    position: `Designer`,
    link: ``,
  },
];

function MlTeam({ 
  ...props 
}: MlTeamProps): ReactElement {
  return (
    <div className='ml-section ml-team' data-aos='fade-in'>
      <div className='ml-section__wrap ml-team__content'>
        <h2 className='ml-section__title ml-team__title' {...animSlideOut()}>
          {Translation.en.section.team.title}
        </h2>
        <ul className='ml-team__list'>
          {teamList.map((member, index) => 
            <li key={index} className='ml-team__item'>
              <div className='ml-card ml-member ml-member--team' {...animSlideUp()}>
                <i className='ml-member__image'>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout='fill' 
                    loading='lazy' 
                    placeholder='blur' 
                  />
                </i>
                <h3 className='ml-member__name ml-typo--highlight'>
                  {member.name}
                </h3>
                <p className='ml-member__position'>
                  {member.position}
                </p>
                {(member.link && member.link !== ``) &&
                  <a 
                    className='ml-member__link' 
                    href={member.link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <IconLinkedin />
                  </a>
                }
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MlTeam;
