import Image from 'next/image';
import React, { Fragment, ReactElement } from 'react';
import Moment from 'react-moment';

import { animSlideUp } from '../../../config/anim';
import { dateFormat } from '../../../config/datetime';
import { WebFlowResponseProps, WebFlowPostProps } from '../../../model/post';

export type MlBlogContentProps = {
  blogCategories: WebFlowResponseProps;
  blogPost: WebFlowPostProps,
}

function MlBlogContent({ blogCategories, blogPost }: MlBlogContentProps): ReactElement {
  const category = blogCategories.items.find(c => c._id === blogPost.category);
  return (
    <div className='ml-section ml-blog-content' data-aos='fade-in'>
      <div className='ml-section__wrap  ml-blog-content__content'>
        {blogPost &&
          <Fragment>
            <div className='ml-blog-content__header'>
              <h1 className='ml-blog-content__title' {...animSlideUp()}>
                {blogPost.name}
              </h1>
              <p className={`
                ml-blog__category 
                ml-blog__category--${category?.slug} 
                ml-blog-card__category 
                ml-blog-content__category`}>
                {category?.name}
              </p>
              <p className='ml-blog-content__published'>
                <span className='ml-blog-content__author'>
                  {blogPost.author}
                </span>
                <span className='ml-blog-content__date'>
                  <Moment 
                    date={blogPost['publish-date']} 
                    format={dateFormat} 
                  />
                </span>
              </p>
            </div>
            <div className='ml-blog__thumbnail ml-blog-content__image'>
              <Image
                src={blogPost[`main-image`].url} 
                alt={blogPost[`name`]} 
                width={900}
                height={506}
                quality={100}
                layout='responsive' 
              />
            </div>
            <div className='ml-blog-content__text' dangerouslySetInnerHTML={{__html: blogPost[`post-body`]}} />
          </Fragment>
        }
      </div>
    </div>
  );
}

export default MlBlogContent;
