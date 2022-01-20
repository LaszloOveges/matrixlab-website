import React from 'react'
import type { NextPage } from 'next'
import Iframe from 'react-iframe'

import MlFrame from '../../components/layout/frame/frame'

const DOC_URL = `https://app.termly.io/document/terms-of-use-for-website/e26f9f56-fb85-4863-9992-775f786cc633`

export const TermsOfUse: NextPage = () => {  
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
