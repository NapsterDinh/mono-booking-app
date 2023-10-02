import { LoadingOutlined } from '@ant-design/icons';
import { Flex } from '@tsu-org/ui-kit';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      flexGrow="1"
      minHeight="300px"
    >
      <Spin indicator={<LoadingOutlined />} />
    </Flex>
  );
};

export default Loading;
