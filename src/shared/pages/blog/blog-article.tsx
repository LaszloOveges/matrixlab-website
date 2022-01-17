import React from 'react'
import type { NextPage } from 'next'

import MlFrame from '../../components/layout/frame/frame'
import MlBlogContent from '../../components/custom/blog/blog-content'
import MlBlogShare from '../../components/custom/blog/blog-share'
import MlBlogRecommended from '../../components/custom/blog/blog-recommended'
import { fetchBlog, fetchBlogCategories } from '../../lib/blog'
import { WebFlowResponseProps, WebFlowPostProps } from '../../model/post'

export type BlogArticlePathProps = {
  params: {
    slug: string;
  }
}

export type BlogArticleProps = {
  blogCategories: WebFlowResponseProps;
  blogPost: WebFlowPostProps;
  recommendedPosts: WebFlowPostProps[];
}

export const BlogArticle: NextPage<BlogArticleProps> = ({blogCategories, blogPost, recommendedPosts}) => {
  return (
    <MlFrame>
      <div className='ml-blog'>
        <MlBlogContent {...{blogCategories, blogPost}} />
        <MlBlogShare {...{blogPost}} />
        <MlBlogRecommended {...{blogCategories, recommendedPosts}} />
      </div>
    </MlFrame>
  )
}

export async function getStaticPaths() {
  const blogPosts = JSON.parse(await fetchBlog());

  return {
    paths: blogPosts?.items.map((posts: WebFlowPostProps) => ({
      params: {
        slug: posts.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: BlogArticlePathProps) {
  const blogCategories = JSON.parse(await fetchBlogCategories());
  const blogPosts = JSON.parse(await fetchBlog());
  const blogPost = blogPosts?.items.find((b: WebFlowPostProps) => b.slug === params.slug);
  const recommendedPostCount = 3;
  const recommendedPosts = blogPosts.items
    .slice(0,(recommendedPostCount+1))
    .filter((b: WebFlowPostProps) => b.slug !== blogPost.slug)
    .slice(0,recommendedPostCount); 
  return {
    props: { 
      blogCategories: blogCategories,
      blogPost: blogPost,
      recommendedPosts: recommendedPosts,
    },
    revalidate: 60 * 10,
  };
}