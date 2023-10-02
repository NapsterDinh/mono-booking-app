import { HTTP_STATUS } from '@customer-web/enums/HTTP';
import { createCustomer } from '@customer-web/request-providers/customer';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import auth from '../../middlewares/auth';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(auth).post(async (req, res) => {
  try {
    const response = await createCustomer({
      ...req.body,
      fromSystem: 'Web Nhập Thuốc',
    });

    // @ts-ignore
    req.login(response, (err) => {
      if (err) {
        throw err;
      }

      // Log the signed up user in
      res.status(201).json(response);
    });
  } catch (error) {
    console.log('error', error);

    res.status(error?.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error?.message,
      errors: error?.errors,
      data: error?.data,
    });
  }
});

export default handler;
