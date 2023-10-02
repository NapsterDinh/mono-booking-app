import { useMemoizedFn, useUpdate } from 'ahooks';
import { useRouter } from 'next/router';
import type { ParseOptions, StringifyOptions } from 'query-string';
import queryString from 'query-string';
import type * as React from 'react';
import { useMemo, useRef } from 'react';

export interface Options {
  navigateMode?: 'push' | 'replace';
  parseOptions?: ParseOptions;
  stringifyOptions?: StringifyOptions;
}

const baseStringifyConfig: StringifyOptions = {
  skipNull: false,
  skipEmptyString: false,
};

type UrlState = Record<string, any>;

const useUrlState = <S extends UrlState = UrlState>(initialState?: S | (() => S), options?: Options) => {
  type State = Partial<{ [key in keyof S]: any }>;
  const router = useRouter();
  const { navigateMode = 'push', stringifyOptions } = options || {};
  const queryFromUrl = router.query;

  const mergedStringifyOptions = { ...baseStringifyConfig, ...stringifyOptions };

  const update = useUpdate();

  const initialStateRef = useRef(typeof initialState === 'function' ? (initialState as () => S)() : initialState || {});

  const targetQuery: State = useMemo(
    () => ({
      ...initialStateRef.current,
      ...queryFromUrl,
    }),
    [queryFromUrl],
  );

  const setState = (s: React.SetStateAction<State>) => {
    const newQuery = typeof s === 'function' ? s(targetQuery) : s;

    update();
    router[navigateMode]({
      search: queryString.stringify({ ...queryFromUrl, ...newQuery }, mergedStringifyOptions) || '?',
    });
  };

  return [targetQuery, useMemoizedFn(setState)] as const;
};

export default useUrlState;
