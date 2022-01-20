import React, { ReactElement } from 'react';

import Translation from '../../../data/translation';
import { animSlideUp } from '../../../config/anim';
import { WebFlowResponseProps, WebFlowPostProps } from '../../../model/post';
import MlBlogCard from './blog-card';

export type MlBlogRecommendedProps = {
  blogCategories: WebFlowResponseProps;
  recommendedPosts: WebFlowPostProps[],
}

function MlBlogRecommended({ blogCategories, recommendedPosts }: MlBlogRecommendedProps): ReactElement {
  return (
    <div className='ml-section ml-blog-recommended' data-aos='fade-in'>
      <div className='ml-section__wrap ml-blog-recommended__content'>
        <h2 className='ml-blog-recommended__title' {...animSlideUp()}>
          {Translation.en.blog.recommendedPosts}
        </h2>
        {recommendedPosts &&
          <ul className='ml-blog-recommended__list' {...animSlideUp()}>
            {recommendedPosts.map((post, index) => {
              post[`category-item`] = blogCategories.items.find(c => c._id === post.category);
              return (
                <li key={index} className='ml-blog-recommended__item'>
                  <MlBlogCard {...{blogPost: post}} />
                </li>
                )
            })}
          </ul>
        }
      </div>
    </div>
  );
}

export default MlBlogRecommended;
