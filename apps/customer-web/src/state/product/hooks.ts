import { CartConfig } from '@customer-web/configs/cart';
import useFormattedSlug from '@customer-web/views/Product/hooks/useFormattedSlug';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { AppState } from '..';
import { useAppDispatch } from '..';
import { useRecentlyWatchedSkus } from '../cache/hooks';
import { clearSuggestPromotions, fetchBySlug, fetchRecentlyWatched, fetchSuggestPromotions } from './actions';

export function useProductState() {
  return useSelector<AppState, AppState['product']>((state) => state.product);
}

export function useProduct() {
  return useSelector<AppState, AppState['product']['product']>((state) => state.product.product);
}

export function useProductContent() {
  return useSelector<AppState, AppState['product']['content']>((state) => state.product.content);
}

export function useLoading() {
  return useSelector<AppState, AppState['product']['loading']>((state) => state.product.loading);
}

export function useSuggestPromotions() {
  return useSelector<AppState, AppState['product']['suggestPromotions']>((state) => state.product.suggestPromotions);
}

export function useRecentlyWatched() {
  return useSelector<AppState, AppState['product']['recentlyWatched']>((state) => state.product.recentlyWatched);
}

export function usePollRecentlyWatched() {
  const recentlyWatchedSkus = useRecentlyWatchedSkus();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (recentlyWatchedSkus?.length) {
      dispatch(fetchRecentlyWatched(recentlyWatchedSkus.slice(0, 10)));
    }
  }, [recentlyWatchedSkus, dispatch]);
}

export function usePollSuggestPromotions(
  sku?: string,
  price?: NhapThuocResponse.SearchService.Price,
  quantity?: number,
) {
  const dispatch = useAppDispatch();
  const payload = useMemo(
    () => ({
      unitCode: price?.measureUnitCode,
      price: price?.price,
      itemCode: sku,
      quantity,
      categoryCode: '',
      shopCode: CartConfig.DefaultShopCodeGenerate,
    }),
    [sku, price, quantity],
  );

  useEffect(() => {
    if (sku && price) {
      dispatch(fetchSuggestPromotions(payload));
    } else {
      dispatch(clearSuggestPromotions());
    }
  }, [dispatch, payload, price, sku]);
}

export function usePollProduct() {
  const formattedSlug = useFormattedSlug();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formattedSlug) {
      dispatch(fetchBySlug(formattedSlug));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formattedSlug]);
}
