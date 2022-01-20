import React, { ReactElement } from 'react';

import Translation from '../../../data/translation';
import { animSlideOut, animSlideUp } from '../../../config/anim';
import { WebFlowPostProps } from '../../../model/post';

export type MlBlogSelectorProps = {
  category: WebFlowPostProps;
  categoryList: WebFlowPostProps[];
  changeCategory: (slug: string) => void;
}

function MlBlogSelector({ category, categoryList, changeCategory }: MlBlogSelectorProps): ReactElement {
  return (
    <div className='ml-section ml-blog-selector' data-aos='fade-in'>
      <div className='ml-section__wrap ml-blog-selector__content'>
        <h1 className='ml-blog-selector__title' {...animSlideOut()}>
          {Translation.en.blog.title}
        </h1>
        <p className='ml-blog-selector__description'>
          {Translation.en.blog.description}
        </p>
        <ul className='ml-blog-selector__category-list' {...animSlideUp()}>
          {categoryList.map((item, index) => 
            <li 
              key={index} 
              onClick={() => changeCategory(item.slug)}
              className={`
                ml-blog__category 
                ml-blog__category--${item.slug} 
                ml-blog-selector__category
                ${category.slug !== item.slug ? ` ml-blog-selector__category--inactive` : ``}
              `}
            >
              {item.name}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MlBlogSelector;
