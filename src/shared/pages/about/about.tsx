import React from 'react'
import type { NextPage } from 'next'

import MlFrame from '../../components/layout/frame/frame'
import MlAbout from '../../components/custom/about/about'
import MlRoadmap from '../../components/custom/roadmap/roadmap'
import MlTeam from '../../components/custom/team/team'
import MlAdvisors from '../../components/custom/advisors/advisors'
import MlInvestors from '../../components/custom/investors/investors'

export const About: NextPage = () => {
  return (
    <MlFrame>
      <MlAbout></MlAbout>
      <MlRoadmap></MlRoadmap>
      <MlTeam></MlTeam>
      <MlAdvisors></MlAdvisors>
      <MlInvestors></MlInvestors>
    </MlFrame>
  )
}
