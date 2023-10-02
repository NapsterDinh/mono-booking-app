import { createSelector } from '@reduxjs/toolkit';
import isNil from 'lodash/isNil';
import type { AppState } from '..';
import { DeliveryMethod } from '@customer-web/enums/DeliveryMethod';

export const cartItemsSelector = () =>
  createSelector(
    (state: AppState) => state.cart,
    (cart) => cart.items || [],
  );

export const selectedCartItemsSelector = () =>
  createSelector(cartItemsSelector(), (items) => {
    return items.filter((item) => item.isSelected);
  });

export const totalUniqueCartItemsSelector = () =>
  createSelector(cartItemsSelector(), (items) => {
    const total = items.length;

    return total;
  });

export const totalUniqueSelectedCartItemsSelector = () =>
  createSelector(selectedCartItemsSelector(), (items) => {
    const total = items.length;

    return total;
  });

export const cartItemSelector = (sku?: string) =>
  createSelector(cartItemsSelector(), (items) => {
    if (!sku) {
      return;
    }

    const item = items?.find((item) => (item.productInfo?.itemCode || item.productInfo?.sku) === sku);

    return item;
  });

export const isSelectAllCartItems = () =>
  createSelector(cartItemsSelector(), (items) => {
    return items?.every((item) => item.isSelected);
  });

export const hasColdProduct = () =>
  createSelector(selectedCartItemsSelector(), (items) => {
    return items?.some((item) => item.productInfo?.isColdStorage);
  });

export const hasRestrictProduct = () =>
  createSelector(selectedCartItemsSelector(), (items) => {
    return items?.some(
      (item) =>
        item.policy?.isDisable ||
        (!isNil(item.policy?.quantityMax) && !isNil(item.quantity) && Number(item.policy.quantityMax) < item.quantity),
    );
  });

export const shipmentPrice = () =>
  createSelector(
    hasColdProduct(),
    (state: AppState) => state.cart?.information?.calculatorPriceInfo?.principalAmount ?? 0,
    (state: AppState) => state.cart?.deliveryMethod,
    (hasColdProduct, principalAmount, deliveryMethod) => {
      if (!deliveryMethod) {
        return 0;
      }

      if (hasColdProduct) {
        if (deliveryMethod === DeliveryMethod.EXPRESS && principalAmount <= 10_000_000) {
          return 30000;
        }

        return 0;
      }

      if (deliveryMethod === DeliveryMethod.EXPRESS && principalAmount <= 10_000_000) {
        return 30000;
      }

      if (deliveryMethod === DeliveryMethod.STANDARD && principalAmount < 1_500_000) {
        return 20000;
      }

      return 0;
    },
  );
