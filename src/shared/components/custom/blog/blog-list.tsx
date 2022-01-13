import React, { ReactElement } from 'react';

import { animSlideUp } from '../../../config/anim';
import { WebFlowPostProps } from '../../../model/post';
import MlBlogCard from './blog-card';

export type MlBlogListProps = {
  blogPosts: WebFlowPostProps[],
}

function MlBlogList({ blogPosts }: MlBlogListProps): ReactElement {
  return (
    <div className='ml-section ml-blog-list' data-aos='fade-in'>
      <div className='ml-section__wrap ml-blog-list__content'>
        <ul className='ml-blog-list__group'>
          {blogPosts.map((post: any, index: number) => 
            <li key={index} className='ml-blog-list__item' {...animSlideUp()}>
              <MlBlogCard {...{blogPost: post}} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MlBlogList;
