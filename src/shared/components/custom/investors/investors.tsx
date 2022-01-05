import React, { ReactElement } from 'react';
import Image from 'next/image'

import Translation from '../../../../assets/data/translation';
import InvestorSkyvision from '../../../../../public/assets/image/investor/skyvision-capital.png';
import Investor4sv from '../../../../../public/assets/image/investor/4sv.png';
import InvestorA195 from '../../../../../public/assets/image/investor/a195-capital.png';
import InvestorVarys from '../../../../../public/assets/image/investor/varys-capital.png';
import InvestorGbv from '../../../../../public/assets/image/investor/gbv.png';
import InvestorBanter from '../../../../../public/assets/image/investor/banter-capital.png';
import InvestorPetrock from '../../../../../public/assets/image/investor/petrock-capital.png';
import InvestorX21 from '../../../../../public/assets/image/investor/x21.png';
import InvestorAlphabit from '../../../../../public/assets/image/investor/alphabit.png';
import { animSlideOut, animFadeIn } from '../../../config/anim';

export type MlInvestorsProps = { }

export type MlInvestorItem = {
  logo: StaticImageData;
  name: string;
  logoSize?: `small` | `medium` | `large`;
}

const investorsList: MlInvestorItem[] = [
  {
    logo: InvestorSkyvision,
    name: `Skyvision Capital`,
  },
  {
    logo: Investor4sv,
    name: `4SV`,
  },
  {
    logo: InvestorA195,
    name: `A195 Capital`,
  },
  {
    logo: InvestorVarys,
    name: `Varys Capital`,
  },
  {
    logo: InvestorGbv,
    name: `GBV`,
  },
  {
    logo: InvestorBanter,
    name: `Banter Capital`,
  },
  {
    logo: InvestorPetrock,
    name: `Petrock Capital`,
    logoSize: `large`,
  },
  {
    logo: InvestorX21,
    name: `X21`,
    logoSize: `small`,
  },
  {
    logo: InvestorAlphabit,
    name: `Alphabit`,
    logoSize: `small`,
  },
];

const MlInvestor = (item: MlInvestorItem) => {
  return (
    <li className='ml-investors__item' {...animFadeIn()}>
      <i className={`
          ml-image ml-investors__item__logo
          ${item.logoSize ? ` ml-investors__item__logo--${item.logoSize}` : ``}
        `}>
          <Image 
            src={item.logo} 
            alt={item.name} 
            layout='fill' 
            loading='lazy' 
            placeholder='blur' 
          />
      </i>
    </li>
  )
};

function MlInvestors({ 
  ...props 
}: MlInvestorsProps): ReactElement {
  return (
    <div className='ml-section ml-investors' data-aos='fade-in'>
      <div className='ml-section__wrap ml-investors__content'>
        <h2 className='ml-section__title ml-investors__title' {...animSlideOut()}>
          {Translation.en.section.investors.title}
        </h2>
        <ul className='ml-investors__list'>
          {investorsList.map((investor, index) => 
            <MlInvestor key={index} {...investor} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default MlInvestors;
