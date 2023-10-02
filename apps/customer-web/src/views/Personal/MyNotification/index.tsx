import styled from '@emotion/styled';
import { NotificationTemplate } from '@customer-web/enums/Notification';
import { useUrlState } from '@customer-web/hooks';
import {
  useCountEachTemplateNotification,
  useListNotifications,
  useLoadingNotifications,
} from '@customer-web/state/notification/hooks';
import { Row, Text } from '@tsu-org/ui-kit';
import { Badge, TablePaginationConfig, Tabs } from 'antd';
import { useMemo } from 'react';
import { Layout } from '../components/Layout';
import ChildrenNotificationTabPane from './components/ChildrenNotificationTabPane';
import { reduce } from 'lodash';
import EmptyNotificationList from './components/EmptynotificationList';
import { PAGE_OPTIONS } from './constants';
import { NotiFilters } from './type';

const StyledTab = styled(Tabs)`
  background-color: white;
  border-radius: 12px 12px 0px 0px;
  .ant-tabs-tab {
    text-align: center;
    padding: 0.5rem 2.35rem;
    margin: 0 !important;
    justify-content: center;
    width: 100%;
  }
  .ant-tabs-nav {
    background-color: white;
    margin-bottom: 0;
  }
  .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-around;
  }
  .ant-tabs-ink-bar .ant-tabs-ink-bar-animated {
    left: 40%;
    width: 226px !important;
  }
`;

const NOTI_TAB_LABELS = {
  [NotificationTemplate.ALL]: 'Tất cả',
  [NotificationTemplate.OTHER]: 'Tài khoản',
  [NotificationTemplate.PROMOTION]: 'Khuyến mại',
  [NotificationTemplate.ORDER]: 'Đơn hàng',
};

const MyNotification = () => {
  const [filters, setFilters] = useUrlState<NotiFilters>({
    pageNumber: PAGE_OPTIONS.PAGE_NUMBER,
    pageSize: PAGE_OPTIONS.PAGE_SIZE,
    templateIds: [],
    tabCode: '',
  });

  const myNotificationsPayload = useMemo(() => {
    return {
      pageNumber: Number(filters?.pageNumber) || PAGE_OPTIONS.PAGE_NUMBER,
      pageSize: Number(filters?.pageSize) || PAGE_OPTIONS.PAGE_SIZE,
      templateIds: !filters.tabCode ? [] : [filters?.tabCode],
    };
  }, [filters]);

  const notifications = useListNotifications(myNotificationsPayload);

  const { countNotificationByTemplate } = useCountEachTemplateNotification();

  const countAll = useMemo(() => {
    return Object.keys(countNotificationByTemplate).reduce(
      (prev, cur) => {
        prev.read += countNotificationByTemplate[cur]?.read ?? 0;
        prev.unRead += countNotificationByTemplate[cur]?.unRead ?? 0;

        return prev;
      },
      {
        read: 0,
        unRead: 0,
      },
    );
  }, [countNotificationByTemplate]);

  const loading = useLoadingNotifications();

  const onChange = (tab: NotificationTemplate) => {
    setFilters({
      ...filters,
      templateIds: [tab],
      tabCode: tab,
      pageNumber: PAGE_OPTIONS.PAGE_NUMBER,
      pageSize: PAGE_OPTIONS.PAGE_SIZE,
    });
  };

  const handleChangeFilters = (pagination: TablePaginationConfig) => {
    setFilters({
      ...filters,
      pageNumber: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const itemsTabPane = Object.keys(NotificationTemplate).map((key) => {
    const unRead = NotificationTemplate[key]
      ? countNotificationByTemplate[NotificationTemplate[key]]?.unRead ?? 0
      : countAll.unRead;

    return {
      key: NotificationTemplate[key],
      label: (
        <Row>
          {NOTI_TAB_LABELS[NotificationTemplate[key]]}
          {unRead > 0 && (
            <Badge
              style={{ marginLeft: '4px', fontSize: '12px' }}
              count={unRead > 99 ? '99+' : unRead}
              showZero={false}
              color="#F79009"
            />
          )}
        </Row>
      ),
      children: (
        <ChildrenNotificationTabPane
          key={NotificationTemplate[key]}
          tabCode={NotificationTemplate[key]}
          notiData={notifications}
          filters={filters}
          onChangeFilters={handleChangeFilters}
          isLoading={loading}
        />
      ),
    };
  });

  if (!loading && !notifications?.totalCount && filters?.tabCode === NotificationTemplate.ALL) {
    return (
      <Layout>
        <EmptyNotificationList />
      </Layout>
    );
  }

  return (
    <Layout>
      <Text
        bold
        fontSize="16px"
        mb="2"
      >
        Thông báo
      </Text>
      <StyledTab
        activeKey={filters?.tabCode}
        items={itemsTabPane}
        onChange={onChange}
      />
    </Layout>
  );
};

export default MyNotification;
