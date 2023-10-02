import { useAppDispatch } from '@customer-web/state';
import { setIsCorrectSearch, toggleCorrectSearch } from '@customer-web/state/global/actions';
import { useIsCorrectSearch } from '@customer-web/state/global/hooks';
import { Filter } from '@customer-web/views/Search/types';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Button, Divider, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import { FilterIcon, QuestionCircleFilled } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Checkbox, Drawer, Tooltip } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { FC, Fragment, useEffect, useState } from 'react';
import FilterSection from './FilterSection';

interface FiltersProps extends AtomBoxProps {
  filters: Filter[];
  productsByCategorySlugPayload?: NhapThuocPayload.SearchService.SearchDetail;
  categorySortAttributeCodes?: string[];
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
  onToggleSelectAll?: (code: string, isSelect: boolean) => void;
  onClearFilter?: () => void;
  onSetFilter?: (filters: NhapThuocPayload.SearchService.SearchDetail) => void;
}

const FiltersMobile: FC<FiltersProps> = ({
  filters,
  productsByCategorySlugPayload,
  categorySortAttributeCodes,
  onSelectFilterValue,
  onToggleSelectAll,
  onClearFilter,
  onSetFilter,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [internalProductsByCategorySlugPayload, setInternalProductsByCategorySlugPayload] =
    useState<NhapThuocPayload.SearchService.SearchDetail>(productsByCategorySlugPayload);
  const isCorrectSearch = useIsCorrectSearch();
  const [internalIsCorrectSearch, setInternalIsCorrectSearch] = useState(isCorrectSearch);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setOpen(false);
    setInternalProductsByCategorySlugPayload(productsByCategorySlugPayload);
  };

  const handleClearFilter = () => {
    onClearFilter && onClearFilter();
    setOpen(false);
  };

  const handleSelectFilterValue = ({ code, value }: { code: string; value: string }) => {
    setInternalProductsByCategorySlugPayload((prev) => {
      let values = (prev[code] || []).slice() as string[];
      const isSelect = !values.includes(value);
      const index = values.findIndex((item) => item === value);
      const selected = index !== -1;

      // if selected filter value already exist
      if (selected && isSelect) {
        return prev;
      }

      // Unselect filter value case
      if (selected && !isSelect) {
        values = values.filter((item) => item !== value);
      } else if (!selected && isSelect) {
        values.push(value);
      }

      const newPayload = {
        ...prev,
        skipCount: 0,
        [code]: values,
      };

      return newPayload;
    });
  };

  const handleToggleSelectAllFilterValue = (code: string, isSelect: boolean) => {
    setInternalProductsByCategorySlugPayload((prev) => {
      const isExistCode = categorySortAttributeCodes?.findIndex((item) => item === code) !== -1;

      // if already select all
      if (!isExistCode || !isSelect) {
        return prev;
      }

      const newPayload = {
        ...prev,
        [code]: [],
      };

      return newPayload;
    });
  };

  const handleApply = () => {
    dispatch(setIsCorrectSearch(internalIsCorrectSearch));

    onSetFilter &&
      onSetFilter({
        ...internalProductsByCategorySlugPayload,
        isCorrect: internalIsCorrectSearch,
      });

    setOpen(false);
  };

  const handleToggleCorrectSearch = () => {
    setInternalIsCorrectSearch((prev) => !prev);
  };

  useEffect(() => {
    setInternalProductsByCategorySlugPayload(productsByCategorySlugPayload);
  }, [productsByCategorySlugPayload]);

  return (
    <AtomBox
      px="1p25rem"
      py="0p75rem"
      {...rest}
    >
      <Button
        type="link"
        onClick={setOpen.bind(this, true)}
      >
        <RowFixed gap="2">
          <FilterIcon color="textLink" />
          <Text
            color="textLink"
            fontWeight="500"
          >
            Lọc
          </Text>
        </RowFixed>
      </Button>

      <Drawer
        open={open}
        title="Bộ lọc nâng cao"
        onClose={handleClose}
        placement="bottom"
        height="100svh"
      >
        <Row
          gap="2"
          py="2"
        >
          <Checkbox
            checked={internalIsCorrectSearch}
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

        {filters?.map((filter, index) => (
          <Fragment key={filter?.id}>
            <FilterSection
              filter={filter}
              productsByCategorySlugPayload={internalProductsByCategorySlugPayload}
              onSelectFilterValue={handleSelectFilterValue}
              onToggleSelectAll={handleToggleSelectAllFilterValue}
            />

            {index !== filters?.length - 1 && <Divider my="0.75rem" />}
          </Fragment>
        ))}

        <Row
          gap="0p75rem"
          mt="3"
        >
          <Button
            width="50%"
            scale="xl"
            onClick={handleApply}
          >
            Áp dụng
          </Button>

          <Button
            type="secondary"
            width="50%"
            scale="xl"
            onClick={handleClearFilter}
          >
            Thiết lập lại
          </Button>
        </Row>
      </Drawer>
    </AtomBox>
  );
};

export default FiltersMobile;
