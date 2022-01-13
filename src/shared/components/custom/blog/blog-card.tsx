import { Link } from '@mui/material';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import Moment from 'react-moment';

import { dateFormat } from '../../../config/datetime';
import { WebFlowPostProps } from '../../../model/post';
import { Routes } from '../../../pages/routes';

export type MlBlogCardProps = {
  blogPost: WebFlowPostProps;
}

function MlBlogCard({ blogPost }: MlBlogCardProps): ReactElement {
  return (
    <Link className='ml-blog-card' href={Routes.Menu.BlogArticle(blogPost[`slug`])}>
      <div className='ml-blog__thumbnail ml-blog-card__thumbnail'>
        <Image
          src={blogPost[`main-image`].url} 
          alt={blogPost[`name`]} 
          layout='responsive'
          width={550}
          height={303}
        />
      </div>
      <div className='ml-blog-card__info'>
        <p className={`ml-blog__category ml-blog__category--${blogPost[`category-item`]?.slug} ml-blog-card__category`}>
          {blogPost[`category-item`]?.name}
        </p>
        <p className='ml-blog-card__published'>
          <span className='ml-blog-card__author'>
            {blogPost.author}
          </span>
          <span className='ml-blog-card__date'>
            <Moment 
              date={blogPost['publish-date']} 
              format={dateFormat} 
            />
          </span>
        </p>
      </div>
      <h3 className='ml-blog-card__title'>
        {blogPost.name}
      </h3>
      <div 
        className='ml-blog-card__text' 
        dangerouslySetInnerHTML={{__html: blogPost[`post-summary`]}} 
      />
    </Link>
  );
}

export default MlBlogCard;
