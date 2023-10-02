import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import passport from '../../lib/passport';
import auth from '../../middlewares/auth';

const handler = nextConnect<
  NextApiRequest & {
    user?: any;
  },
  NextApiResponse
>();

handler.use(auth).post(passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

export default handler;
