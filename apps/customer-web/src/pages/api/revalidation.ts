import { serverGlobalConfig } from '@customer-web/configs/env';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug as string;
  const secret = req.headers.secret as string;

  // Validate secret.
  if (secret !== serverGlobalConfig.REVALIDATION_SECRET_KEY) {
    return res.status(401).json({ message: `Invalid secret.` });
  }

  // Validate slug.
  if (!slug) {
    return res.status(400).json({ message: 'Invalid slug.' });
  }

  try {
    await res.revalidate(slug);

    return res.json({ message: `Revalidate ${slug} page successfully!` });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ message: 'Error revalidating', detail: error });
  }
}
