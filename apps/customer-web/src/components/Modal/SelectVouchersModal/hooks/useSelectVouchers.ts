import { checkSecurityVoucher } from '@customer-web/request-providers/voucher';
import { useAppDispatch } from '@customer-web/state';
import { useSessionId } from '@customer-web/state/cache/hooks';
import { updateVouchers } from '@customer-web/state/cart/actions';
import { useCartVouchers, useSelectedCartItems } from '@customer-web/state/cart/hooks';
import { useUserId, useUserMobilePhone } from '@customer-web/state/user/hooks';
import { CheckboxProps, notification } from 'antd';
import isNil from 'lodash/isNil';
import map from 'lodash/map';
import { useEffect, useMemo, useState } from 'react';

const useSelectVoucher = () => {
  const cartItems = useSelectedCartItems();
  const cartVouchers = useCartVouchers();
  const mobilePhone = useUserMobilePhone();
  const sessionId = useSessionId();
  const userId = useUserId();
  const [vouchers, setVouchers] = useState<NhapThuocResponse.Voucher.DetailVoucher[]>(cartVouchers || []);
  const [seriesVouchers, setSeriesVouchers] = useState<string[]>([]);
  const [selectedSeriesVouchers, setSelectedSeriesVouchers] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const [checking, setChecking] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const allSeriesVouchers = useMemo(() => {
    return [...seriesVouchers, ...(vouchers?.map((v) => v.seriesCode.toUpperCase()) || [])];
  }, [seriesVouchers, vouchers]);

  const itemCodes = useMemo(() => {
    if (!cartItems?.length) {
      return [];
    }

    return cartItems?.map((item) => item?.productInfo?.itemCode);
  }, [cartItems]);

  const toggleSelectVoucher = (seriesCode, event: Parameters<CheckboxProps['onChange']>[0]) => {
    const { checked } = event.target;

    if (checked) {
      const index = selectedSeriesVouchers.findIndex((selectedSeriesCode) => selectedSeriesCode === seriesCode);

      if (index !== -1) {
        return;
      }

      setSelectedSeriesVouchers([seriesCode, ...selectedSeriesVouchers]);
    } else {
      const index = selectedSeriesVouchers.findIndex((selectedSeriesCode) => selectedSeriesCode === seriesCode);

      if (index === -1) {
        return;
      }

      setSelectedSeriesVouchers([
        ...selectedSeriesVouchers.slice(0, index),
        ...selectedSeriesVouchers.slice(index + 1),
      ]);
    }
  };

  const apply = async (seriesCode?: string, onSuccess?: () => void) => {
    if (!seriesCode) {
      return;
    }

    if (allSeriesVouchers.includes(seriesCode)) {
      notification.error({
        message: 'Mã giảm giá đang được sử dụng',
      });

      return;
    }

    setChecking(true);

    try {
      const payload = {
        vouchers: [
          {
            seriesCode,
            phone: mobilePhone,
            itemCode: itemCodes,
          },
        ],
        groupVouchers: vouchers.map((voucher) => ({
          seriesCode: voucher.seriesCode,
          shopCode: '',
          phone: mobilePhone,
          itemCode: itemCodes,
        })),
      };

      const result = await checkSecurityVoucher(payload);

      if (result?.length > 0) {
        const filteredVouchers = result?.filter((item) => item.isValidated && !isNil(item.detail));
        const newVouchers = map(filteredVouchers, 'detail');
        const codes = map(filteredVouchers, 'code');

        setVouchers([...newVouchers, ...vouchers]);
        setSeriesVouchers((prev) => prev.concat(codes));
        setSelectedSeriesVouchers([...selectedSeriesVouchers, seriesCode]);

        onSuccess && onSuccess();
      } else {
        notification.success({
          message: 'Không tìm thấy thông tin voucher!',
        });
      }
    } catch (error) {
      if (error?.message) {
        notification.error({
          message: error?.message,
        });
      }
    } finally {
      setChecking(false);
    }
  };

  const submit = async (shipmentPrice?: number, onSuccess?: () => void) => {
    const voucherDetails = vouchers?.filter((voucher) => selectedSeriesVouchers.includes(voucher?.seriesCode));

    if (!mobilePhone) {
      return;
    }

    if (!voucherDetails?.length && !cartVouchers?.length) {
      notification.error({
        message: 'Bạn chưa chọn mã giảm giá',
      });

      return;
    }

    const payloadAddVoucher = {
      shipmentPrice,
      sessionId,
      customerId: userId,
      phoneNumber: mobilePhone,
      voucherDetails,
    };

    try {
      setSubmitting(true);
      const response = await dispatch(updateVouchers(payloadAddVoucher)).unwrap();

      onSuccess && onSuccess();

      notification.success({
        message: 'Áp dụng mã giảm giá thành công',
      });

      setVouchers(response?.vouchers);
      setSeriesVouchers(map(response?.vouchers, 'seriesCode'));
      setSelectedSeriesVouchers(map(response?.vouchers, 'seriesCode'));
    } catch (error) {
      if (error?.message) {
        notification.error({
          message: error?.message,
        });
      } else {
        notification.error({
          message: 'Áp dụng mã giảm giá thất bại',
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    setVouchers(cartVouchers);
    setSeriesVouchers(map(cartVouchers, 'seriesCode'));
    setSelectedSeriesVouchers(map(cartVouchers, 'seriesCode'));
  }, [cartVouchers]);

  return {
    checking,
    submitting,
    vouchers,
    selectedSeriesVouchers,
    toggleSelectVoucher,
    apply,
    submit,
  };
};

export default useSelectVoucher;
