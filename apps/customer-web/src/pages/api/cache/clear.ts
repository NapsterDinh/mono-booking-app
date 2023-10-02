import { MasterLayoutDataService } from '@customer-web/services/master-layout-data/MasterLayoutDataService';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const masterLayoutDataService = new MasterLayoutDataService();

  await masterLayoutDataService.clearMasterLayoutCachedData();

  return res.status(200).json({
    message: 'ok',
  });
}
