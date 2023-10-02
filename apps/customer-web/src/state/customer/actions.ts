import * as customerService from '@customer-web/request-providers/customer';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCustomerById = createAsyncThunk('customer/fetchCustomerById', async (id: string) => {
  const response = await customerService.fetchCustomerById(id);

  return response;
});

export const fetchCustomerAddressesByCustomerId = createAsyncThunk(
  'customer/fetchCustomerAddresses',
  async (id: string) => {
    const response = await customerService.fetchCustomerAddressByCustomerId(id);

    return response;
  },
);
