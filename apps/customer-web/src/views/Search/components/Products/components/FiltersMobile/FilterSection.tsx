import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Filter } from '@customer-web/views/Search/types';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Flex, Image, Row, RowBetween, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Input } from 'antd';
import type { FC, SyntheticEvent } from 'react';
import { useMemo, useState } from 'react';

interface FilterProps extends AtomBoxProps {
  filter: Filter;
  productsByCategorySlugPayload?: NhapThuocPayload.SearchService.ListProductByCategorySlug;
  onSelectFilterValue?: ({ code, value }: { code: string; value: string }) => void;
  onToggleSelectAll?: (code: string, isSelect: boolean) => void;
}

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

const StyledButton = styled(Button as any)`
  .ant-image {
    position: absolute;
    right: -2px;
    top: -2px;
  }
`;

const DISPLAY_VALUE_STEP = 5;

const FilterSection: FC<FilterProps> = ({
  filter,
  productsByCategorySlugPayload,
  onSelectFilterValue,
  onToggleSelectAll,
  ...rest
}) => {
  const [maxDisplayValue, setMaxDisplayValue] = useState(DISPLAY_VALUE_STEP);
  const [filteredValues, setFilteredValues] = useState(filter.values);
  const displayValues = useMemo(() => {
    return filteredValues.slice(0, maxDisplayValue);
  }, [filteredValues, maxDisplayValue]);
  const hasMore = displayValues.length < filteredValues.length;

  const handleSearch = (event: SyntheticEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;

    if (text) {
      const filteredValues = filter.values.filter((value) =>
        value.trim().toLowerCase().includes(text.trim().toLowerCase()),
      );

      setFilteredValues(filteredValues);
    } else {
      setFilteredValues(filter.values);
    }
  };

  const viewMore = () => {
    setMaxDisplayValue((maxDisplayValue) => maxDisplayValue + DISPLAY_VALUE_STEP);
  };

  const collapse = () => {
    setMaxDisplayValue(DISPLAY_VALUE_STEP);
  };

  return (
    <AtomBox {...rest}>
      <RowBetween
        gap="2"
        mb="3"
      >
        <Text
          bold
          fontWeight="500"
        >
          {filter.webName} (
          {productsByCategorySlugPayload?.[filter.code]?.length > 0
            ? productsByCategorySlugPayload?.[filter.code]?.length ?? 0
            : filter?.values?.length ?? 0}
          )
        </Text>

        <StyledButton
          type={!productsByCategorySlugPayload?.[filter.code]?.length ? 'white_primary' : 'outlined'}
          onClick={onToggleSelectAll.bind(
            undefined,
            filter.code,
            !!productsByCategorySlugPayload?.[filter.code]?.length,
          )}
        >
          {!productsByCategorySlugPayload?.[filter.code]?.length && (
            <Image
              src="/estore-images/ico-check.svg"
              alt="icon-checked"
            />
          )}{' '}
          Chọn tất cả
        </StyledButton>
      </RowBetween>

      <AtomBox mb="3">
        <StyledInput
          placeholder="Tìm theo tên"
          prefix={<SearchOutlined />}
          onChange={handleSearch}
        />
      </AtomBox>

      <Row
        gap="2"
        flexWrap="wrap"
        mb="2"
      >
        {displayValues.map((value) => (
          <Box
            display="inline-block"
            key={value}
          >
            <StyledButton
              height="2rem"
              px="1rem"
              shape="default"
              type={productsByCategorySlugPayload?.[filter.code]?.includes(value) ? 'white_primary' : 'outlined'}
              onClick={onSelectFilterValue?.bind(this, {
                code: filter.code,
                value: value,
              })}
            >
              {productsByCategorySlugPayload?.[filter.code]?.includes(value) && (
                <Image
                  src="/estore-images/ico-check.svg"
                  alt="icon-checked"
                />
              )}
              {value}
            </StyledButton>
          </Box>
        ))}
      </Row>

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
