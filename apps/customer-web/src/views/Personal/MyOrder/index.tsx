import styled from '@emotion/styled';
import { OrderHistoriesTabCode } from '@customer-web/enums/Order';
import { useUrlState } from '@customer-web/hooks';
import { useMyOrdersQuery } from '@customer-web/hooks/queries';
import { Box } from '@tsu-org/ui-kit';
import { TablePaginationConfig, Tabs } from 'antd';
import isNil from 'lodash/isNil';
import { useMemo } from 'react';
import { Layout } from '../components/Layout';
import ChildrenTabPane from './components/ChildrenTabPane';
import { MAX_ORDERS_PER_FETCH } from './constants';
import { Filters } from './types';

const ORDER_TAB_LABELS = {
  [OrderHistoriesTabCode.ALL]: 'Tất cả',
  [OrderHistoriesTabCode.CONFIRM]: 'Chưa hoàn tất',
  [OrderHistoriesTabCode.CANCELLED]: 'Đã huỷ',
  [OrderHistoriesTabCode.RETURN]: 'Trả hàng',
  [OrderHistoriesTabCode.DONE]: 'Hoàn tất',
};

const StyledTab = styled(Tabs)`
  .ant-tabs-tab {
    text-align: center;
    padding: 0.5rem 2.35rem;
    margin: 0 !important;
  }
  .ant-tabs-nav {
    background-color: white;
    margin-bottom: 0;
  }
`;

const MyOrder = () => {
  const [filters, setFilters] = useUrlState<Filters>();
  const myOrdersPayload = useMemo(() => {
    return {
      ...filters,
      tabCode: filters.type ?? OrderHistoriesTabCode.ALL,
      skipCount: filters?.page ? (filters.page - 1) * MAX_ORDERS_PER_FETCH : 0,
      maxResultCount: MAX_ORDERS_PER_FETCH,
    };
  }, [filters]);
  const { data: ordersData, isFetching } = useMyOrdersQuery(myOrdersPayload);

  const onChange = (tab: OrderHistoriesTabCode) => {
    setFilters({
      ...filters,
      type: tab,
      page: 1,
    });
  };

  const handleChangeFilters = (pagination: TablePaginationConfig) => {
    setFilters({
      ...filters,
      page: pagination.current,
    });
  };

  const itemsTabPane = Object.keys(OrderHistoriesTabCode).map((key) => ({
    key: OrderHistoriesTabCode[key],
    label: `${ORDER_TAB_LABELS[OrderHistoriesTabCode[key]]}${
      !isNil(ordersData?.totalCount) && Number(ordersData?.tabCode) === Number(OrderHistoriesTabCode[key])
        ? ` (${ordersData?.totalCount})`
        : ''
    }`,
    children: (
      <ChildrenTabPane
        tabCode={OrderHistoriesTabCode[key]}
        ordersData={ordersData}
        filters={filters}
        isFetching={isFetching}
        onChangeFilters={handleChangeFilters}
      />
    ),
  }));

  return (
    <Layout>
      <Box borderRadius="12px">
        <StyledTab
          activeKey={filters?.type || '0'}
          items={itemsTabPane}
          onChange={onChange}
        />
      </Box>
    </Layout>
  );
};

export default MyOrder;
