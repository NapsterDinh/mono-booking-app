import { LoadingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useAppDispatch } from '@customer-web/state';
import { addSearchHistory } from '@customer-web/state/cache/actions';
import { Box, Button, ButtonProps, Input, useMatchBreakpoints } from '@tsu-org/ui-kit';
import { DismissCircleIcon, SearchIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useClickAway, useIsomorphicLayoutEffect } from 'ahooks';
import { Spin } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import useSearch from '../hooks/useSearch';

const OverlayMenu = dynamic(() => import('@customer-web/components/Layout/OverlayMenu'), {
  ssr: false,
});
const Result = dynamic(() => import('./Result'), {
  ssr: false,
});

const StyledInput = styled(Input)`
  &.ant-input-affix-wrapper {
    border-radius: 35px;
    border: 1px solid #e8b356;
    color: #de683f;
    font-size: 1rem;
    height: 36px;
    padding: 0.375rem 0.375rem 0.375rem 1rem;

    ${({ theme }) => theme.mediaQueries.lg} {
      height: 56px;
    }

    .ant-input-clear-icon {
      display: flex;
    }

    &:not(.ant-input-affix-wrapper-disabled):hover {
      border-color: ${({ theme }) => theme.colors.textFocus};
      box-shadow: none;
    }

    input {
      &::placeholder {
        color: #657384;
        font-size: 1rem;
      }
    }
  }
`;

const SearchInput: FC<{ device?: 'mobile' | 'desktop' }> = ({ device }) => {
  const {
    focused,
    keyword,
    debouncedKeyword,
    isLoading,
    data,
    setKeyword,
    handleFocus,
    handleBlur,
    handleChange,
    search,
  } = useSearch();
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const { isDesktop } = useMatchBreakpoints();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useClickAway(() => {
    if (isDesktop && device === 'desktop') {
      handleBlur();
    }
  }, [inputRef, resultRef]);

  useIsomorphicLayoutEffect(() => {
    search(debouncedKeyword);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKeyword]);

  const handleNavigate = () => {
    setKeyword('');
    handleBlur();
  };

  const handlePressEnter = () => {
    dispatch(addSearchHistory(keyword));

    router.push(`/tim-kiem?s=${encodeURIComponent(keyword)}`);

    handleNavigate();

    inputRef?.current?.querySelector('.ant-input')?.blur();
  };

  const handleClickSearch = (event: Parameters<ButtonProps['onClick']>[0]) => {
    event.stopPropagation();
    handlePressEnter();
  };

  return (
    <Box
      width="100%"
      position={{
        lg: 'relative',
      }}
      className="search-input"
    >
      <div ref={inputRef}>
        <StyledInput
          allowClear={{
            clearIcon: (
              <DismissCircleIcon
                color="textTertiary"
                width="20"
                height="20"
              />
            ),
          }}
          placeholder="Tìm tên thuốc, nhà cung cấp, bệnh lý..."
          suffix={
            <Button
              shape="circle"
              width={{
                _: '28px',
                lg: '40px',
              }}
              minWidth="28px"
              height={{ _: '28px', lg: '40px' }}
              type={focused ? 'primary' : 'secondary'}
              onClick={handleClickSearch}
            >
              {isLoading ? (
                <Spin indicator={<LoadingOutlined />} />
              ) : (
                <SearchIcon
                  color="inherit"
                  aria-label="search-icon"
                />
              )}
            </Button>
          }
          value={keyword}
          onFocus={handleFocus}
          onChange={handleChange}
          onPressEnter={handlePressEnter}
        />
      </div>

      <div ref={resultRef}>
        <Result
          display={focused ? 'block' : 'none'}
          isFetching={isLoading}
          result={data}
          keyword={debouncedKeyword}
          onNavigate={handleNavigate}
        />
      </div>

      {focused && (
        <OverlayMenu
          isRolling
          show={focused}
        />
      )}
    </Box>
  );
};

export default SearchInput;
