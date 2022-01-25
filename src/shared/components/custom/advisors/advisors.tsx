import React, { ReactElement } from 'react';
import Image from 'next/image';

import Translation from '../../../data/translation';
import IconLinkedin from '../../../../assets/svg/social/linkedin.svg';
import AdvisorDarius from '../../../../../public/assets/image/advisor/darius.png';
import AdvisorBen from '../../../../../public/assets/image/advisor/ben.png';
import AdvisorDylan from '../../../../../public/assets/image/advisor/dylan.png';
import AdvisorJoel from '../../../../../public/assets/image/advisor/joel.png';
import AdvisorLester from '../../../../../public/assets/image/advisor/lester.png';
import { animSlideOut, animSlideUp } from '../../../config/anim';

export type MlAdvisorsProps = { }

export type MlAdvisorItem = {
  image: StaticImageData;
  name: string;
  position: string;
  link: string;
}

const advisorsList: MlAdvisorItem[] = [
  {
    image: AdvisorDarius,
    name: `Darius Askaripour`,
    position: `Managing Partner Varys Capital`,
    link: `https://www.linkedin.com/in/dariusaskaripour/`,
  },
  {
    image: AdvisorBen,
    name: `Ben Lakoff`,
    position: `Co-Founder Carged Particles`,
    link: `https://www.linkedin.com/in/benlakoff/`,
  },
  {
    image: AdvisorDylan,
    name: `Dylan Dewdney`,
    position: `CEO Kylin Network`,
    link: `https://www.linkedin.com/in/dylan-dewdney/`,
  },
  {
    image: AdvisorJoel,
    name: `Joel Kovshoff`,
    position: `CMO Anrkey X`,
    link: `https://www.linkedin.com/in/joelkovshoff/`,
  },
  {
    image: AdvisorLester,
    name: `Lester Lim`,
    position: `Founder X21 Digital`,
    link: `https://www.linkedin.com/in/lesterlim15/`,
  },
];

function MlAdvisors({ 
  ...props 
}: MlAdvisorsProps): ReactElement {
  return (
    <div className='ml-section ml-advisors' data-aos='fade-in'>
      <div className='ml-section__wrap ml-advisors__content'>
        <h2 className='ml-section__title ml-advisors__title' {...animSlideOut()}>
          {Translation.en.section.advisors.title}
        </h2>
        <ul className='ml-advisors__list'>
          {advisorsList.map((advisor, index) => 
            <li key={index} className='ml-advisors__item'>
              <div className='ml-card ml-member ml-member--advisors' {...animSlideUp()}>
                <i className='ml-member__image'>
                  <Image
                    src={advisor.image} 
                    alt={advisor.name} 
                    layout='fill' 
                    loading='lazy' 
                    placeholder='blur'
                  />
                </i>
                <h3 className='ml-member__name ml-typo--highlight'>
                  {advisor.name}
                </h3>
                <p className='ml-member__position'>
                  {advisor.position}
                </p>
                {(advisor.link && advisor.link !== ``) &&
                  <a 
                    className='ml-member__link' 
                    href={advisor.link} 
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

export default MlAdvisors;
