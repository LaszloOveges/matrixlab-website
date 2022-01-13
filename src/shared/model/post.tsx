export interface WebFlowResponseProps {
  count: number,
  items: WebFlowPostProps[],
  limit: number,
  offset: number,
  total: number,
}

export interface WebFlowPostProps {
  '_id': string;
  'author': string;
  'category': string;
  'category-item'?: WebFlowPostProps;
  'color': string;
  'created-by': string;
  'created-on': string;
  'featured': boolean;
  'main-image': {
    'fileId': string, 
    'url': string, 
    'alt': string,
  }
  'name': string;
  'post-body': string;
  'post-summary': string;
  'publish-date': string;
  'published-by': string;
  'published-on': string;
  'slug': string;
  'thumbnail-image': {
    'fileId': string, 
    'url': string, 
    'alt': string,
  }
  'updated-by': string;
  'updated-on': string;
}
