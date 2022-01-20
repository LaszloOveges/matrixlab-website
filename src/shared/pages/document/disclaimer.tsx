import React from 'react'
import type { NextPage } from 'next'
import Iframe from 'react-iframe'

import MlFrame from '../../components/layout/frame/frame'

const DOC_URL = `https://app.termly.io/document/disclaimer/ad57d307-5729-415e-ab56-dc6f20dc2270`

export const Disclaimer: NextPage = () => {  
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
