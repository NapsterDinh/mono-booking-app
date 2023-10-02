import {
  MasterLayoutDataService,
  TMasterLayoutData,
} from '@customer-web/services/master-layout-data/MasterLayoutDataService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse<TMasterLayoutData>) {
  const MLDService = new MasterLayoutDataService();
  const masterLayoutData = await MLDService.getMasterLayoutCachedData();

  return res.status(200).json(masterLayoutData);
}
