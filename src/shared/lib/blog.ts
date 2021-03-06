import { 
  WebFlowPostProps, 
  WebFlowResponseProps,
} from '../model/post';
import WebflowRateLimiter from './rate-limiter';

// WebFlow API limitations:
// - the number of returned items is limited to 100
// - it is not possible to retrieve data by any other params than id or collectionId (no keyword, or referenceId/categoryId)
// - rate limiter is required, because of the inconsistency in the webflow API limit handling

// Other API requests:
// const info = await webflow.info();
// const sites = await webflow.sites();

const Webflow = require('webflow-api');
const COLLECTION_ID = '616f7943db5cbe6aefa4efc8';
const CATEGORIES_ID = '616f7943db5cbe759ba4efc9';
const PAGE_SIZE = 100;

export const fetchBlog = async () => {
  const webflow = new Webflow({ token: process.env.WEBFLOW_API_KEY || `` });
  let currentPage = 1;
  let promises = [];
  let result: WebFlowResponseProps;
  let resultItems: WebFlowPostProps[] = [];
  const initialData: WebFlowResponseProps = await WebflowRateLimiter({
    collectionId: COLLECTION_ID,
    callback: async () => await webflow.items({ collectionId: COLLECTION_ID }, { limit: PAGE_SIZE }),
  });
  result = initialData;
  if (initialData.total > PAGE_SIZE) {
    resultItems = [...resultItems, ...initialData.items];
    while (currentPage < Math.ceil(initialData.total / PAGE_SIZE)) {
      promises.push(
        WebflowRateLimiter({
          collectionId: COLLECTION_ID,
          callback: async () => await webflow.items({ collectionId: COLLECTION_ID }, { limit: PAGE_SIZE, offset: (PAGE_SIZE * currentPage)}),
        })
      );
      currentPage++;
    }
    const data = (await Promise.all(promises)) as WebFlowResponseProps[];
    data.forEach((d) => resultItems = [...resultItems, ...d.items]);
    result.items = resultItems;
  }
  return await JSON.stringify(result);
};

export const fetchBlogCategories = async () => {
  const webflow = new Webflow({ token: process.env.WEBFLOW_API_KEY || `` });
  const categories = await WebflowRateLimiter({
    collectionId: CATEGORIES_ID,
    callback: async () => await webflow.items({ collectionId: CATEGORIES_ID }, { limit: PAGE_SIZE }),
  });
  return await JSON.stringify(categories);
};
