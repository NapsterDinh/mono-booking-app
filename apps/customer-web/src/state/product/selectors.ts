import { createSelector } from '@reduxjs/toolkit';
import type { AppState } from '..';

export const recentlyWatchedSelector = () =>
  createSelector(
    (state: AppState) => state.product,
    (product) => product.recentlyWatched,
  );
