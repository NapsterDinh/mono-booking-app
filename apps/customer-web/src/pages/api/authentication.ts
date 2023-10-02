import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import auth from '../../middlewares/auth';

const handler = nextConnect<
  NextApiRequest & {
    user?: any;
  },
  NextApiResponse
>();

handler
  .use(auth)
  .use((req, res, next) => {
    // This middleware to check if user is authenticated before continuing
    if (!req.user) {
      res.status(401).send('unauthenticated');
    } else {
      next();
    }
  })
  .get((req, res) => {
    // You do not generally want to return the whole user object
    // because it may contain sensitive field such as !!password!! Only return what needed
    res.json(req.user);
  });

export default handler;
