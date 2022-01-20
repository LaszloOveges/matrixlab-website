import React from 'react'
import type { NextPage } from 'next'
import Iframe from 'react-iframe'

import MlFrame from '../../components/layout/frame/frame'

const DOC_URL = `https://app.termly.io/document/privacy-policy/2bd3de57-eb9a-42a1-b7e8-b25910a12ef1`

export const PrivacyPolicy: NextPage = () => {  
  return (
    <MlFrame>
      <div className='ml-section ml-document'>
        <div className='ml-section__wrap ml-document__content'>
          <Iframe 
            url={DOC_URL}
          />
        </div>
      </div>
    </MlFrame>
  )
}
