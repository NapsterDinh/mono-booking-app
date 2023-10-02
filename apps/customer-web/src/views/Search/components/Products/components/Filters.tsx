import { useAppDispatch } from '@customer-web/state';
import { toggleCorrectSearch } from '@customer-web/state/global/actions';
import { useIsCorrectSearch } from '@customer-web/state/global/hooks';
import { Filter } from '@customer-web/views/Search/types';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Row, Text } from '@tsu-org/ui-kit';
import { FilterIcon, QuestionCircleFilled } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Checkbox, Tooltip } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { FC } from 'react';
import { Fragment } from 'react';
import FilterSection from './FilterSection';

interface FiltersProps extends AtomBoxProps {
  filters: Filter[];
  productsByCategorySlugPayload?: NhapThuocPayload.SearchService.ListProductByCategorySlug;
  onSelectFilterValue?: (
    {
      code,
      value,
    }: {
      code: string;
      value: string;
    },
    event: CheckboxChangeEvent,
  ) => void;
  onToggleSelectAll?: (code: string, event: CheckboxChangeEvent) => void;
}

const Filters: FC<FiltersProps> = ({
  filters,
  productsByCategorySlugPayload,
  onSelectFilterValue,
  onToggleSelectAll,
  ...rest
}) => {
  const isCorrectSearch = useIsCorrectSearch();
  const dispatch = useAppDispatch();

  const handleToggleCorrectSearch = () => {
    dispatch(toggleCorrectSearch());
  };

  return (
    <AtomBox
      as="aside"
      {...rest}
    >
      <AtomBox
        bg="white"
        borderRadius="12px"
      >
        <AtomBox
          px="1p25rem"
          py="0p75rem"
          borderBottom="1"
        >
          <Row gap="2">
            <FilterIcon />
            <Text bold>Bộ lọc nâng cao</Text>
          </Row>
        </AtomBox>

        <Box
          maxHeight="41rem"
          overflow="auto"
        >
          <AtomBox
            p="3"
            borderBottom="1"
          >
            <Row
              gap="2"
              py="2"
            >
              <Checkbox
                checked={isCorrectSearch}
                onClick={handleToggleCorrectSearch}
              />
              <Text>Tìm với từ khóa chính xác</Text>
              <Tooltip title="Khi lựa chọn “Tìm kiếm với từ khóa chính xác”, bạn sẽ chỉ nhận được những kết quả có từ khóa đúng hoàn toàn.">
                <QuestionCircleFilled
                  color="textTertiary"
                  width="16px"
                  height="16px"
                />
              </Tooltip>
            </Row>
          </AtomBox>

          {filters.map((filter, index) => (
            <Fragment key={filter.id}>
              <FilterSection
                filter={filter}
                productsByCategorySlugPayload={productsByCategorySlugPayload}
                onSelectFilterValue={onSelectFilterValue}
                onToggleSelectAll={onToggleSelectAll}
              />
              {index !== filters.length - 1 && (
                <Box
                  height="1px"
                  backgroundColor="cardBorder"
                  mx="1rem"
                />
              )}
            </Fragment>
          ))}
        </Box>
      </AtomBox>
    </AtomBox>
  );
};

export default Filters;
