import nextConnect from 'next-connect';
import passport from '../lib/passport';
import authSession from '../lib/session';

const auth = nextConnect()
  .use(
    authSession({
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      },
    }),
  )
  .use(passport.initialize())
  .use(passport.session());

export default auth;
