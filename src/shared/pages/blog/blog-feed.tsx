import React, { useEffect, useState } from 'react'
import type { NextPage, GetStaticProps } from 'next'

import MlFrame from '../../components/layout/frame/frame'
import MlBlogList from '../../components/custom/blog/blog-list'
import { WebFlowResponseProps, WebFlowPostProps } from '../../model/post';
import { fetchBlog, fetchBlogCategories } from '../../lib/blog';
import Translation from '../../data/translation';
import MlBlogSelector from '../../components/custom/blog/blog-selector';
import MlBlogMore from '../../components/custom/blog/blog-more';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

export type BlogFeedProps = {
  blogCategories: WebFlowResponseProps;
  blogPosts: WebFlowResponseProps;
}

export const BlogFeed: NextPage<BlogFeedProps> = ({blogCategories, blogPosts}) => {

  const allPostCategory = {
    name: Translation.en.blog.allPosts,
    slug: `all`,
    _id: `0`,
  } as WebFlowPostProps;
  const categoryList = [allPostCategory, ...blogCategories.items];
  const [ total, setTotal ] = useState(0);
  const [ loaded, setLoaded ] = useState(0);
  const [ category, setCategory ] = useState<WebFlowPostProps>(allPostCategory);
  const [ posts, setPosts ] = useState<WebFlowPostProps[]>([]);
  const [ page, setPage ] = useState(DEFAULT_PAGE);
  const [ pageSize, setPageSize ] = useState(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    loadPosts();
  }, [page, category]);
  
  const changeCategory = (slug: string) => {
    if (category?.slug !== slug) {
      const selectedCategory = categoryList.find(c => c.slug === slug) || allPostCategory;
      setCategory(selectedCategory);
      setPosts([]);
      setPage(DEFAULT_PAGE);
    }
  }

  const loadMorePosts = (postPage: number = page + 1) => {
    if (loaded < total) setPage(postPage);
  }

  const loadPosts = async () => {
    const loadedPosts = await getPosts();
    setTotal(loadedPosts.total);
    setLoaded(loadedPosts.offset + loadedPosts.limit);
    setPosts(addCategoryItems(loadedPosts.items));
  }

  const getPosts = (): WebFlowResponseProps => {
    let basePosts = JSON.parse(JSON.stringify(blogPosts));
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (category && category.slug !== allPostCategory.slug) {
      basePosts.items = basePosts.items
        .filter((p: WebFlowPostProps) => p.category === category._id)
    }
    const selectedPostsItems = basePosts.items.slice(startIndex, endIndex);
    const updatedPosts = {
      items: [...posts, ...selectedPostsItems],
      limit: pageSize,
      offset: startIndex,
      total: basePosts.items.length,
    };
    const completePosts = Object.assign(basePosts, updatedPosts);
    return completePosts;
  }

  const addCategoryItems = (postList: WebFlowPostProps[]): WebFlowPostProps[] => {
    return postList.map((p) => {
      p[`category-item`] = blogCategories.items.find(c => c._id === p.category);
      return p;
    });
  }

  return (
    <MlFrame>
      <div className='ml-blog'>
        <MlBlogSelector {...{category, categoryList, changeCategory}} />
        <MlBlogList {...{blogPosts: posts}} />
        <MlBlogMore {...{loaded, total, loadMorePosts}} />
      </div>
    </MlFrame>
  )
}

export const getStaticProps: GetStaticProps<BlogFeedProps> = async () => {
  const blogCategories = JSON.parse(await fetchBlogCategories());
  const blogPosts = JSON.parse(await fetchBlog());
  return {
    props: {
      blogCategories,
      blogPosts,
    },
    revalidate: 60 * 10,
  };
};
