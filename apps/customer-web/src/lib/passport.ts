import { login } from '@customer-web/request-providers/customer';
import passport from 'passport';
import LocalStrategy from 'passport-local';

passport.serializeUser(function (user: NhapThuocResponse.Customers.Auth, done) {
  // serialize the user into session
  done(null, {
    access_token: user?.ssoData?.access_token,
    refresh_token: user?.ssoData?.refresh_token,
  });
});

passport.deserializeUser(function (_, user, done) {
  done(null, user);
});

passport.use(
  new LocalStrategy({ passReqToCallback: true }, async (_, username, password, done) => {
    try {
      const response = await login({
        userName: username,
        password,
      });

      done(null, response);
    } catch (error) {
      console.log('error', error);
      done(null, null);
    }
  }),
);

export default passport;
