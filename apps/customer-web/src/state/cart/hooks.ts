import {
  addItemToCartPayload,
  addListItemCartPayload,
  getAdjustCartPayload,
  getCartPayload,
  removeItemCartPayload,
  unSelectedItemCartPayload,
} from '@customer-web/services/carts/CartBusinessService';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { AppState } from '..';
import { useAppDispatch } from '..';
import { useNeedMergeCart, useSessionId } from '../cache/hooks';
import { useIsLoadingUser, useUserId } from '../user/hooks';
import {
  addItem as addItemAction,
  adjustItem as adjustItemAction,
  fetchCartData,
  mergeCart,
  removeItem as removeItemAction,
  selectItems as selectItemsAction,
  unselectItems as unselectItemsAction,
} from './actions';
import {
  cartItemSelector,
  hasColdProduct,
  hasRestrictProduct,
  isSelectAllCartItems,
  selectedCartItemsSelector,
  shipmentPrice,
  totalUniqueCartItemsSelector,
  totalUniqueSelectedCartItemsSelector,
} from './selectors';

export function useCartState() {
  return useSelector<AppState, AppState['cart']>((state) => state.cart);
}

export function useCartItems() {
  return useSelector<AppState, AppState['cart']['items']>((state) => state.cart?.items);
}

export function useEstimatedPrice() {
  return useSelector<AppState, AppState['cart']['information']['calculatorPriceInfo']['estimatedPrice']>(
    (state) => state.cart?.information?.calculatorPriceInfo?.estimatedPrice ?? 0,
  );
}

export function usePrincipalAmount() {
  return useSelector<AppState, AppState['cart']['information']['calculatorPriceInfo']['principalAmount']>(
    (state) => state.cart?.information?.calculatorPriceInfo?.principalAmount ?? 0,
  );
}

export function useShipmentPrice() {
  return useSelector(shipmentPrice());
}

export function useDeliveryMethod() {
  return useSelector<AppState, AppState['cart']['deliveryMethod']>((state) => state.cart?.deliveryMethod);
}

export function useDeliveryAddress() {
  return useSelector<AppState, AppState['cart']['deliveryAddress']>((state) => state.cart?.deliveryAddress);
}

export function useCartVouchers() {
  return useSelector<AppState, AppState['cart']['information']['vouchers']>(
    (state) => state.cart?.information?.vouchers,
  );
}

export function useSelectedCartItems() {
  return useSelector(selectedCartItemsSelector());
}

export function useIsSelectAllCartItems() {
  return useSelector(isSelectAllCartItems());
}

export function useHasColdProduct() {
  return useSelector(hasColdProduct());
}

export function useCartItemBySku(sku?: string) {
  return useSelector(cartItemSelector(sku));
}

export function useTotalUniqueCartItems() {
  return useSelector(totalUniqueCartItemsSelector());
}

export function useTotalUniqueSelectedCartItems() {
  return useSelector(totalUniqueSelectedCartItemsSelector());
}

export function useCartActions() {
  const sessionId = useSessionId();
  const dispatch = useAppDispatch();
  const cartState = useCartState();

  const addItem = useCallback(
    (product: NhapThuocResponse.SearchService.ProductBasic, quantity: number) => {
      if (!sessionId) {
        return;
      }

      const payload = addItemToCartPayload({
        sessionId,
        product,
        quantity,
      });

      return dispatch(addItemAction(payload));
    },
    [sessionId, dispatch],
  );

  const removeItems = useCallback(
    (products: NhapThuocResponse.Carts.ListCart[]) => {
      if (!sessionId) {
        return;
      }

      const payload = removeItemCartPayload(sessionId, products);

      dispatch(removeItemAction(payload));
    },
    [sessionId, dispatch],
  );

  const removeItem = useCallback(
    (product: NhapThuocResponse.Carts.ListCart) => {
      return removeItems([product]);
    },
    [removeItems],
  );

  const adjustItem = useCallback(
    (product: NhapThuocResponse.SearchService.ProductBasic, quantity?: number) => {
      if (!sessionId) {
        return;
      }

      if (!quantity) {
        const item = cartState.items?.find((cartItem) => cartItem.productInfo.itemCode === product.sku);

        if (item) {
          removeItem(item);
        }

        return;
      }

      const item = cartState.items?.find((cartItem) => cartItem.productInfo.itemCode === product.sku);

      if (item) {
        const payload = getAdjustCartPayload({
          sessionId,
          product: item,
          quantity,
          inventory: product?.price?.inventory,
        });

        return dispatch(adjustItemAction({ params: payload, itemId: item.id || '' }));
      } else {
        return addItem(product, quantity);
      }
    },
    [addItem, cartState.items, dispatch, removeItem, sessionId],
  );

  const selectItems = useCallback(
    (products: NhapThuocResponse.Carts.ListCart[]) => {
      if (!sessionId) {
        return;
      }

      const payload = addListItemCartPayload(sessionId, products);
      dispatch(selectItemsAction(payload));
    },
    [dispatch, sessionId],
  );

  const unselectItems = useCallback(
    (products: NhapThuocResponse.Carts.ListCart[]) => {
      if (!sessionId) {
        return;
      }

      const payload = unSelectedItemCartPayload(sessionId, products);
      dispatch(unselectItemsAction(payload));
    },
    [dispatch, sessionId],
  );

  const removeAllCartItems = useCallback(() => {
    const payload = removeItemCartPayload(sessionId, cartState.items);

    dispatch(removeItemAction(payload));
  }, [cartState.items, dispatch, sessionId]);

  return {
    addItem,
    removeItem,
    removeItems,
    adjustItem,
    selectItems,
    unselectItems,
    removeAllCartItems,
  };
}

export function usePollCartInfo() {
  const sessionId = useSessionId();
  const dispatch = useAppDispatch();
  const userId = useUserId();
  const needMergeCart = useNeedMergeCart();
  const isLoading = useIsLoadingUser();
  const shipmentPrice = useShipmentPrice();

  useEffect(() => {
    if (isLoading || !sessionId || !userId) {
      return;
    }

    const payload = getCartPayload(sessionId, shipmentPrice);

    if (needMergeCart) {
      dispatch(mergeCart(payload));
    } else {
      dispatch(fetchCartData(payload));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shipmentPrice, sessionId, dispatch, userId, isLoading]);
}

export function useHasRestrictProduct() {
  return useSelector(hasRestrictProduct());
}
