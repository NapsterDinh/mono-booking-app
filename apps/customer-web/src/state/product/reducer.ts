import type { PayloadAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { clearSuggestPromotions, fetchBySlug, fetchRecentlyWatched, fetchSuggestPromotions } from './actions';

export interface ProductState {
  loading: boolean;
  buyLater: NhapThuocResponse.SearchService.ListProduct[];
  recentlyWatched: NhapThuocResponse.SearchService.ListProduct[];
  suggestPromotions: NhapThuocResponse.Promotions.Promotion[];
  product?: NhapThuocResponse.SearchService.ProductSearchDetail;
  content?: NhapThuocResponse.CMS.ProductContent;
}

const initialState: ProductState = {
  loading: false,
  buyLater: [],
  recentlyWatched: [],
  suggestPromotions: [],
};

export default createReducer<ProductState>(initialState, (builder) =>
  builder
    .addCase(fetchBySlug.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchBySlug.fulfilled, (state, { payload }) => {
      state.product = payload.product;
      state.content = payload.content;
      state.loading = false;
    })
    .addCase(fetchBySlug.rejected, (state) => {
      state.loading = false;
    })
    .addCase(
      fetchRecentlyWatched.fulfilled.type,
      (state, action: PayloadAction<NhapThuocResponse.SearchService.ListProduct[]>) => {
        state.recentlyWatched = action.payload;
      },
    )
    .addCase(fetchSuggestPromotions.fulfilled, (state, { payload }) => {
      const onlinePromotions = payload?.flatMap((promotion) => {
        return promotion.promotions.filter((promotion) => promotion.isShowOnline);
      });

      state.suggestPromotions = onlinePromotions;
    })
    .addCase(fetchSuggestPromotions.rejected, (state) => {
      state.suggestPromotions = [];
    })
    .addCase(clearSuggestPromotions, (state) => {
      state.suggestPromotions = [];
    }),
);
