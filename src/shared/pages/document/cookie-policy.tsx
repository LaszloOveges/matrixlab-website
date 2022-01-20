import React from 'react'
import type { NextPage } from 'next'
import Iframe from 'react-iframe'

import MlFrame from '../../components/layout/frame/frame'

const DOC_URL = `https://app.termly.io/document/cookie-policy/49ebac18-ecdb-4b0e-bad2-ead74a2b8820`

export const CookiePolicy: NextPage = () => {  
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
