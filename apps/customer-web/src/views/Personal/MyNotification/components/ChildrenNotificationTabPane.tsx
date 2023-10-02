import styled from '@emotion/styled';
import ChildrenNotification from '@customer-web/components/Layout/Header/components/BottomHeader/NotificationBell/ChildrenNotification';
import { NotificationTemplate } from '@customer-web/enums/Notification';
import {
  useCountEachTemplateNotification,
  useReadAllNotification,
  useReadNotification,
} from '@customer-web/state/notification/hooks';
import { Box, Button, Image, Row } from '@tsu-org/ui-kit';
import { DoubleTickIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import { Notification, NotificationItem } from 'apps/nhapthuoc-estore/src/types/models/notification';
import { isNil, reduce } from 'lodash';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { MAX_ORDERS_PER_FETCH, PAGE_SIZE_OPTIONS } from '../../MyOrder/constants';
import { NotiFilters } from '../type';
import EmptyNotificationList from './EmptynotificationList';
import GenerateTypeNotification from './GenerateTypeNotification';
import LoadingNotificationList from './LoadingNotificationList';

const StyledTable = styled(Table)`
  &.ant-table-wrapper {
    .ant-table {
      background-color: transparent;

      .ant-table-footer {
        background-color: transparent;
      }
      tr.ant-table-row {
        .ant-table-cell {
          background-color: transparent;
          border-bottom: none;
          padding: 0;
        }
      }

      tr.ant-table-row:hover > td {
        background-color: transparent;
      }
    }

    .ant-table-pagination.ant-pagination {
      gap: 8px;
      align-items: center;
      margin: 16px auto;

      .ant-pagination-item {
        padding: 6px 12px;
        width: 40px;
        height: 40px;

        font-weight: 500;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .ant-pagination-item-active,
      .ant-pagination-item:not(.ant-pagination-item-active):hover {
        background: linear-gradient(180deg, #ffe5c3 0%, #ffe4c3 100%);
        border: none;
      }
    }
  }
`;

interface IProps {
  tabCode: NotificationTemplate;
  notiData: Notification;
  filters?: NotiFilters;
  isLoading?: boolean;
  onChangeFilters?: TableProps<Notification>['onChange'];
}

const ChildrenNotificationTabPane: FC<IProps> = (props) => {
  const { filters, notiData, isLoading, tabCode, onChangeFilters } = props;

  const { handleReadNotification } = useReadNotification();
  const { handleReadAllNotification } = useReadAllNotification();
  const { countNotificationByTemplate, loadingCountAll } = useCountEachTemplateNotification();
  const router = useRouter();

  const countOfEachTemplate = useMemo(() => {
    return filters?.tabCode
      ? countNotificationByTemplate[filters?.tabCode]
      : reduce(
          Object.keys(countNotificationByTemplate),
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
  }, [countNotificationByTemplate, filters?.tabCode]);

  const onReadNotification = (noti: NotificationItem) => {
    if (!noti.isRead) {
      handleReadNotification({ id: noti?.id, tabCode: filters?.tabCode });
    }

    router.push(noti.link);
  };

  const onReadAllNotification = () => {
    handleReadAllNotification({ tabCode: filters?.tabCode });
  };

  const getStatusType = (noti: NotificationItem) => {
    try {
      const { type } = JSON.parse(noti.extraProperties?.payload);
      return type;
    } catch (error) {
      return null;
    }
  };

  const columns: ColumnsType<NotificationItem> = useMemo(() => {
    return [
      {
        title: '',
        dataIndex: 'name',
        render: (_, noti) => {
          return (
            <Row
              bg="white"
              borderBottom="1"
              borderBottomColor="cardBorder"
              padding="3"
              cursor="pointer"
              flexShrink={0}
              onClick={onReadNotification.bind(this, noti)}
            >
              <GenerateTypeNotification
                status={getStatusType(noti)}
                isReadable={noti?.isRead}
                type={noti?.templateType}
              />
              <ChildrenNotification notification={noti} />
            </Row>
          );
        },
      },
    ];
  }, [notiData?.items]);

  const locale = {
    emptyText: <EmptyNotificationList />,
  };

  if (isLoading) {
    return <LoadingNotificationList />;
  }

  return (
    <Box>
      {notiData.items?.length > 0 && (
        <Row
          justifyContent="flex-end"
          background="white"
          paddingX="3"
          paddingY="2"
        >
          <Button
            type="link"
            textAlign="end"
            fontSize="14px"
            fontWeight={500}
            disabled={!countOfEachTemplate?.unRead && filters?.tabCode === tabCode}
            ml="2"
            loading={loadingCountAll}
            onClick={onReadAllNotification}
            style={
              !countOfEachTemplate?.unRead && filters?.tabCode === tabCode
                ? { backgroundColor: 'transparent' }
                : undefined
            }
          >
            {countOfEachTemplate?.unRead <= 0 ? (
              <DoubleTickIcon />
            ) : (
              <Image
                src="/images/double-tick.svg"
                alt="double-tick"
              />
            )}
            Đọc tất cả {countOfEachTemplate?.unRead > 0 && `(${countOfEachTemplate?.unRead})`}
          </Button>
        </Row>
      )}

      <StyledTable
        columns={columns}
        dataSource={notiData?.items ?? []}
        size="middle"
        pagination={{
          position: ['bottomCenter'],
          total: notiData?.totalCount,
          current: Number(filters?.pageNumber) ?? 1,
          pageSize: Number(filters?.pageSize ?? MAX_ORDERS_PER_FETCH),
          pageSizeOptions: PAGE_SIZE_OPTIONS,
          hideOnSinglePage: true,
        }}
        locale={locale}
        showHeader={false}
        onChange={onChangeFilters}
        rowKey="id"
      />
    </Box>
  );
};

export default ChildrenNotificationTabPane;
