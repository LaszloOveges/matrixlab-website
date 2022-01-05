import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

const apiKey = process.env.ACTIVE_CAMPAIGN_API_KEY || ``;
const apiUrl = `https://matrixswap.api-us1.com/api/3/contacts`;
const apiContent = `application/json`;

const subscribeHandler = nc()
  .use(cors())
  .post(async (
    req: NextApiRequest, 
    res: NextApiResponse,
  ) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Api-Token': apiKey,
        'Content-Type': apiContent,
      },
      body: JSON.stringify(req.body),
    });
    res.json(response);
  });

export default subscribeHandler;
