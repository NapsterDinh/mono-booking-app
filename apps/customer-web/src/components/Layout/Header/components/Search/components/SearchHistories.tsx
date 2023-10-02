import { useAppDispatch } from '@customer-web/state';
import { deleteSearchHistories, deleteSearchHistory } from '@customer-web/state/cache/actions';
import { useSearchHistories } from '@customer-web/state/cache/hooks';
import { Button, ButtonProps, Column, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { CloseIcon, HistoryOutlinedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import NextLink from 'next/link';
import { FC } from 'react';

const SearchHistories: FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
  const searchHistories = useSearchHistories();
  const dispatch = useAppDispatch();

  const handleDeleteSearchHistories = (event: Parameters<ButtonProps['onClick']>[0]) => {
    dispatch(deleteSearchHistories());

    event.stopPropagation();
  };

  const handleDeleteSearchHistory = (keyword: string, event: Parameters<ButtonProps['onClick']>[0]) => {
    dispatch(deleteSearchHistory(keyword));

    event.stopPropagation();
  };

  return (
    searchHistories?.length > 0 && (
      <>
        <RowBetween mb="3">
          <Text fontWeight="500">Lịch sử tìm kiếm</Text>

          <Button
            type="link"
            onClick={handleDeleteSearchHistories}
          >
            Xóa tất cả
          </Button>
        </RowBetween>

        <Column
          gap="2"
          mb="3"
        >
          {searchHistories.map((keyword) => (
            <RowBetween
              key={keyword}
              flexWrap="nowrap"
            >
              <RowFixed
                gap="0p75rem"
                flexWrap="nowrap"
              >
                <HistoryOutlinedIcon
                  color="textDisabled"
                  width="18"
                  height="18"
                />
                <Text
                  color="textLink"
                  ellipsis
                >
                  <NextLink
                    href={`/tim-kiem?s=${encodeURIComponent(keyword)}`}
                    onClick={onNavigate}
                  >
                    {keyword}
                  </NextLink>
                </Text>
              </RowFixed>

              <Button
                type="link"
                onClick={handleDeleteSearchHistory.bind(this, keyword)}
              >
                <CloseIcon
                  color="textSecondary"
                  width="14"
                  height="14"
                />
              </Button>
            </RowBetween>
          ))}
        </Column>
      </>
    )
  );
};

export default SearchHistories;
