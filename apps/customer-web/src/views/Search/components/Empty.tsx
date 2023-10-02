import { AtomBox, AtomBoxProps } from '@tsu-org/ui';
import { Column, ColumnCenter, Text } from '@tsu-org/ui-kit';
import { SearchEmptyIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC } from 'react';

interface EmptyProps extends AtomBoxProps {
  keyword: string;
}

const Empty: FC<EmptyProps> = ({ keyword, ...rest }) => {
  return (
    <ColumnCenter
      gap="3"
      {...rest}
    >
      <SearchEmptyIcon />
      <Text
        bold
        color="textSecondary"
        fontWeight="1.125rem"
        mb="0.25rem"
      >
        Ôi! Không tìm thấy kết quả với từ khoá “
        <Text
          as="span"
          bold
        >
          {keyword}
        </Text>
        ”
      </Text>
      <Text color="textTertiary">Hãy thử lại bằng cách:</Text>

      <AtomBox
        bgc="white"
        borderRadius="12px"
        p="3"
        pl="4"
      >
        <Column
          display="flex"
          as="ul"
          gap="3"
          listStyleType="disc"
        >
          <li>Kiểm tra lỗi chính tả với từ khoá đã nhập</li>
          <li>Thử lại bằng từ khoá khác</li>
          <li>Thử lại bằng những từ khoá tổng quát hơn</li>
          <li>Thử lại bằng những từ khoá ngắn gọn hơn</li>
        </Column>
      </AtomBox>
    </ColumnCenter>
  );
};

export default Empty;
