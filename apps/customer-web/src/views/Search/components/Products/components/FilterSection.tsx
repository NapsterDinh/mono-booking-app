import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { UserStatus } from '@customer-web/enums/User';
import { useIsInBlacklist, useUserId, useUserStatus } from '@customer-web/state/user/hooks';
import { Filter } from '@customer-web/views/Search/types';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Column, Flex, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Checkbox, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { FC, SyntheticEvent } from 'react';
import { useMemo, useState } from 'react';

interface FilterProps extends AtomBoxProps {
  filter: Filter;
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

const StyledCheckbox = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    margin-inline-start: 0;
  }
`;

const StyledInput = styled(Input)`
  &.ant-input-affix-wrapper {
    border-radius: 35px;
    font-size: 1rem;

    input {
      &::placeholder {
        color: ${({ theme }) => theme.colors.textTertiary};
        font-size: 1rem;
      }
    }
  }
`;

const DISPLAY_VALUE_STEP = 5;

const FilterValuesColumn = styled(Column)`
  transition: height 0.9s ease-in-out;
`;

const FilterSection: FC<FilterProps> = ({
  filter,
  productsByCategorySlugPayload,
  onSelectFilterValue,
  onToggleSelectAll,
  ...rest
}) => {
  const [maxDisplayValue, setMaxDisplayValue] = useState(DISPLAY_VALUE_STEP);
  const userId = useUserId();
  const isInBlacklist = useIsInBlacklist();
  const userStatus = useUserStatus();
  const [filteredValues, setFilteredValues] = useState(
    !userId || userStatus !== UserStatus.APPROVED || isInBlacklist
      ? filter.values?.filter((value) => !value.toLowerCase().includes('thuốc'))
      : filter.values,
  );
  const displayValues = useMemo(() => {
    return filteredValues.slice(0, maxDisplayValue);
  }, [filteredValues, maxDisplayValue]);
  const hasMore = displayValues.length < filteredValues.length;

  const handleSearch = (event: SyntheticEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;
    let filteredValues: string[] = [];
    filteredValues =
      !userId || userStatus !== UserStatus.APPROVED || isInBlacklist
        ? filter.values?.filter((value) => !value.toLowerCase().includes('thuốc'))
        : filter.values;

    if (text) {
      filteredValues = filteredValues.filter((value) => value.trim().toLowerCase().includes(text.trim().toLowerCase()));

      setFilteredValues(filteredValues);
    } else {
      setFilteredValues(filteredValues);
    }
  };

  const viewMore = () => {
    setMaxDisplayValue((maxDisplayValue) => maxDisplayValue + DISPLAY_VALUE_STEP);
  };

  const collapse = () => {
    setMaxDisplayValue(DISPLAY_VALUE_STEP);
  };

  return (
    <AtomBox
      p="3"
      {...rest}
    >
      <Text
        bold
        mb="3"
      >
        {filter.webName}
      </Text>
      <AtomBox mb="3">
        <StyledInput
          placeholder="Tìm theo tên"
          prefix={<SearchOutlined />}
          onChange={handleSearch}
        />
      </AtomBox>

      <FilterValuesColumn
        gap="0p75rem"
        mb="0p625rem"
      >
        <Checkbox
          checked={!productsByCategorySlugPayload?.[filter.code]?.length}
          onChange={onToggleSelectAll?.bind(this, filter.code)}
        >
          Tất cả
        </Checkbox>
        {displayValues.map((value) => (
          <StyledCheckbox
            key={value}
            checked={productsByCategorySlugPayload?.[filter.code]?.includes(value)}
            onChange={onSelectFilterValue?.bind(this, {
              code: filter.code,
              value: value,
            })}
          >
            {value}
          </StyledCheckbox>
        ))}
      </FilterValuesColumn>

      {hasMore && (
        <Box
          position="relative"
          left="-1px"
        >
          <Button
            type="link"
            onClick={viewMore}
          >
            <Flex>
              <ChevronDoubleDownIcon mr="0.25rem" />
              <Text
                small
                fontWeight="500"
              >
                Xem thêm
              </Text>
            </Flex>
          </Button>
        </Box>
      )}

      {!hasMore && displayValues.length > DISPLAY_VALUE_STEP && (
        <Box
          position="relative"
          left="-1px"
        >
          <Button
            type="link"
            onClick={collapse}
          >
            <Flex>
              <ChevronDoubleDownIcon
                mr="0.25rem"
                style={{ transform: 'rotate(180deg)' }}
              />
              <Text
                small
                fontWeight="500"
              >
                Thu gọn
              </Text>
            </Flex>
          </Button>
        </Box>
      )}
    </AtomBox>
  );
};

export default FilterSection;
