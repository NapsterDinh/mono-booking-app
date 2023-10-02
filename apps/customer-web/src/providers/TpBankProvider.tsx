import { LoadingOutlined } from '@ant-design/icons';
import { useCreditFileListQuery } from '@customer-web/hooks/queries';
import { useUserId } from '@customer-web/state/user/hooks';
import { Flex } from '@tsu-org/ui-kit';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

const TpBankProvider = ({ children }) => {
  const userId = useUserId();
  const { data: credits, isFetching, isError } = useCreditFileListQuery(userId);
  const router = useRouter();

  useLayoutEffect(() => {
    if (isError || (credits && !credits?.canCreateContract && router.pathname === '/ca-nhan/dang-ky-vay-thau-chi')) {
      router.push('/');
    }
  }, [credits, isError, router]);

  if (!credits?.canCreateContract || isFetching) {
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
  }

  return <>{children}</>;
};

export default TpBankProvider;
