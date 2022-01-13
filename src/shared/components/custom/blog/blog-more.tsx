import { ButtonBase } from '@mui/material';
import React, { ReactElement } from 'react';

import Translation from '../../../../assets/data/translation';

export type MlBlogMoreProps = {
  loaded: number;
  total: number;
  loadMorePosts: () => void;
}

function MlBlogMore({ loaded, total, loadMorePosts }: MlBlogMoreProps): ReactElement {
  return (
    <div className='ml-section ml-blog-more' data-aos='fade-in'>
      <div className='ml-section__wrap ml-blog-more__content'>
        {(loaded < total) &&
          <ButtonBase className='ml-blog-more__button' onClick={() => loadMorePosts()}>
            {Translation.en.blog.loadMore}
          </ButtonBase>
        }
      </div>
    </div>
  );
}

export default MlBlogMore;
