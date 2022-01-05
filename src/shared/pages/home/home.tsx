import React from 'react'
import type { NextPage } from 'next'

import MlFrame from '../../components/layout/frame/frame'
import MlApps from '../../components/custom/apps/apps'
import MlIntro from '../../components/custom/intro/intro'
import MlFeatures from '../../components/custom/features/features'
import MlVision from '../../components/custom/vision/vision'
import MlPartners from '../../components/custom/partners/partners'
import MlCommunity from '../../components/custom/community/community'

export const Home: NextPage = () => {
  return (
    <MlFrame>
      <MlIntro></MlIntro>
      <MlApps></MlApps>
      <MlFeatures></MlFeatures>
      <MlVision></MlVision>
      <MlPartners></MlPartners>
      <MlCommunity></MlCommunity>
    </MlFrame>
  )
}
