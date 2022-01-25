import React, { ReactElement } from 'react';
import Image from 'next/image'

import Translation from '../../../data/translation';
import PartnerPolygon from '../../../../../public/assets/image/partner/polygon.png';
import PartnerCardstarter from '../../../../../public/assets/image/partner/cardstarter.png';
import PartnerKylin from '../../../../../public/assets/image/partner/kylin.png';
import PartnerErgoDex from '../../../../../public/assets/image/partner/ergodex.png';
import PartnerCharli3 from '../../../../../public/assets/image/partner/charli3.png';
import PartnerEmurgo from '../../../../../public/assets/image/partner/emurgo.png';
import PartnerMeld from '../../../../../public/assets/image/partner/meld.png';
import PartnerDfyn from '../../../../../public/assets/image/partner/dfyn.png';
import PartnerGeroWallet from '../../../../../public/assets/image/partner/gero-wallet.png';
import PartnerSupraOracles from '../../../../../public/assets/image/partner/supra-oracles.png';
import PartnerGelatoNetwork from '../../../../../public/assets/image/partner/gelato-network.png';
import PartnerOccamFi from '../../../../../public/assets/image/partner/occamfi.png';
import PartnerNetvrk from '../../../../../public/assets/image/partner/netvrk.png';
import PartnerCardWallet from '../../../../../public/assets/image/partner/card-wallet.png';
import PartnerMeowSwap from '../../../../../public/assets/image/partner/meowswap.png';
import { animSlideOut, animFadeIn } from '../../../config/anim';

export type MlPartnersProps = { }

export type MlPartnerItem = {
  index?: number;
  logo: StaticImageData;
  name: string;
  logoSize?: `small` | `medium` | `large`;
}

const partnerList: MlPartnerItem[] = [
  {
    logo: PartnerPolygon,
    name: `Polygon`,
  },
  {
    logo: PartnerCardstarter,
    name: `Cardstarter`,
  },
  {
    logo: PartnerKylin,
    name: `Kylin`,
  },
  {
    logo: PartnerErgoDex,
    name: `ErgoDEX`,
  },
  {
    logo: PartnerCharli3,
    name: `Charlie3`,
    logoSize: `large`,
  },
  {
    logo: PartnerEmurgo,
    name: `Emurgo`,
    logoSize: `large`,
  },
  {
    logo: PartnerMeld,
    name: `Meld`,
    logoSize: `large`,
  },
  {
    logo: PartnerDfyn,
    name: `Dfyn`,
    logoSize: `large`,
  },
  {
    logo: PartnerGeroWallet,
    name: `Gero Wallet`,
    logoSize: `large`,
  },
  {
    logo: PartnerSupraOracles,
    name: `Supra Oracles`,
    logoSize: `medium`,
  },
  {
    logo: PartnerGelatoNetwork,
    name: `Gelato Network`,
    logoSize: `medium`,
  },
  {
    logo: PartnerOccamFi,
    name: `Occam Finance`,
    logoSize: `small`,
  },
  {
    logo: PartnerNetvrk,
    name: `Netvrk`,
  },
  {
    logo: PartnerCardWallet,
    name: `Card Wallet`,
  },
  {
    logo: PartnerMeowSwap,
    name: `MeowSwap`,
  },
];

const MlPartner = ({index = 0, ...item}: MlPartnerItem) => {
  return (
    <li className='ml-partners__item' {...animFadeIn()}>
      <i className={`
          ml-image ml-partners__item__logo
          ${item.logoSize ? ` ml-partners__item__logo--${item.logoSize}` : ``}
        `}>
          <Image 
            src={item.logo} 
            alt={item.name} 
            layout='fill' 
            loading='eager' 
          />
      </i>
    </li>
  )
};

function MlPartners({ 
  ...props 
}: MlPartnersProps): ReactElement {
  return (
    <div className='ml-section ml-partners' data-aos='fade-in'>
      <div className='ml-section__wrap ml-partners__content'>
        <h2 className='ml-section__title ml-partners__title' {...animSlideOut()}>
          {Translation.en.section.partners.title}
        </h2>
        <ul className='ml-partners__list'>
          {partnerList.map((partnerItem, index) => 
            <MlPartner key={index} index={index} {...partnerItem} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default MlPartners;
