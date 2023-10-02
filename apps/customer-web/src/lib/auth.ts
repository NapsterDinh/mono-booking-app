import Iron from '@hapi/iron';

export async function createLoginSession(session: any, secret: string) {
  const createdAt = Date.now();
  const obj = { ...session, createdAt };
  const token = await Iron.seal(obj, secret, Iron.defaults);

  return token;
}

export async function getLoginSession(token, secret) {
  try {
    const session = await Iron.unseal(token, secret, Iron.defaults);
    const expiresAt = session.createdAt + session.maxAge * 1000;

    // Validate the expiration date of the session
    if (session.maxAge && Date.now() > expiresAt) {
      throw new Error('Session expired');
    }

    return session;
  } catch (error) {
    return '';
  }
}
