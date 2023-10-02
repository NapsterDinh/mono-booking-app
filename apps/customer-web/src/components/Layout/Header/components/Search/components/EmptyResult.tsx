import styled from '@emotion/styled';
import { Box, Row, Text } from '@tsu-org/ui-kit';
import { SearchIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC } from 'react';

const Hints = styled(Box)`
  li {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 0.875rem;

    &::marker {
      color: ${({ theme }) => theme.colors.textTertiary};
    }

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

const EmptyResult: FC<{ keyword?: string }> = ({ keyword }) => {
  if (!keyword) {
    return null;
  }

  return (
    <>
      <Row
        gap="2"
        mb="3"
      >
        <SearchIcon color="textTertiary" />
        <Text>
          Không tìm thấy kết quả với từ khóa <b>“{keyword}”</b>
        </Text>
      </Row>
      <Hints
        as="ul"
        ml="26px"
      >
        <li>Kiểm tra lỗi chính tả với từ khoá đã nhập</li>
        <li>Thử lại bằng từ khoá khác</li>
        <li>Thử lại bằng những từ khoá tổng quát hơn</li>
        <li>Thử lại bằng những từ khoá ngắn gọn hơn</li>
      </Hints>
    </>
  );
};

export default EmptyResult;
