export type RateLimiterProps = {
  collectionId: string;
  callback: () => void | any;
}

const sleep = async (ms: number) => await new Promise(r => setTimeout(r, ms));
const WebflowRateLimiter = async ({ collectionId, callback }: RateLimiterProps) => {
  const Webflow = require('webflow-api');
  const webflow = new Webflow({ token: process.env.WEBFLOW_API_KEY || `` });
  while (true) {
    const hitIt = async () => {
      const x = await webflow.items(
        { collectionId },
        { limit: 1, offset: 0 }
      );
      return x[`_meta`].rateLimit.remaining;
    };
    try {
      const response = await callback();
      let remainingLimit = response[`_meta`].rateLimit.remaining;
      if (remainingLimit === 0) {
        let hasReset = false;
        while (!hasReset) {
          const result = await hitIt();
          if (result > remainingLimit) {
            hasReset = true;
            return await callback();
          }
        }
      } else {
        return response;
      }
    } catch (e: any) {
      console.warn(e.code || e);
      await sleep(5 * 1000);
      continue;
    }
  }
};

export default WebflowRateLimiter;
