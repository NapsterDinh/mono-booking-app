import { parse } from 'cookie';
import { NextApiRequest } from 'next';

function parseCookies(req: NextApiRequest) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) {
    return req.cookies;
  }

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || '');
}

export default function authSession({ cookie: cookieOpts }) {
  return async (req, res, next) => {
    const cookies = parseCookies(req);

    req.session = {};

    if (cookies['access_token'] && cookies['refresh_token']) {
      req.session = {
        passport: {
          user: {
            access_token: cookies['access_token'],
            refresh_token: cookies['refresh_token'],
          },
        },
      };
    }

    // We are proxying res.end to commit the session cookie
    const oldEnd = res.end;
    res.end = async function resEndProxy(...args) {
      if (res.finished || res.writableEnded || res.headersSent) {
        return;
      }

      if (cookieOpts.maxAge) {
        req.session.maxAge = cookieOpts.maxAge;
      }

      oldEnd.apply(this, args);
    };

    next();
  };
}
