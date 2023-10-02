import styled from '@emotion/styled';
import { Box, Button, Flex, Image, Text } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import clsx from 'clsx';
import type { FC } from 'react';

const ThumbnailItem = styled(Box)``;

const ThumbnailList = styled(Row)`
  ${ThumbnailItem} {
    &.active {
      border-color: #1250dc;
    }
    &.is-view-more {
      .ant-image {
        filter: blur(1px);
        -webkit-filter: blur(1px);
      }
    }
  }
`;

const DisplayMoreOverLay = styled(Flex)`
  align-items: center;
  background-color: rgb(2, 11, 39, 0.3);
  border-radius: 8px;
  bottom: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  left: 0;
  padding: 0 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
`;

interface ThumbnailsProps {
  activeIndex: number;
  thumbnails?: string[];
  onSelectThumbnail?: (index: number) => void;
}

const MAX_DISPLAY_THUMBNAIL = 4;
const Thumbnails: FC<ThumbnailsProps> = ({ activeIndex = 0, thumbnails, onSelectThumbnail }) => {
  return (
    <ThumbnailList gutter={[11, 11]}>
      {thumbnails?.slice(0, MAX_DISPLAY_THUMBNAIL).map((thumbnail, index) => (
        <Col
          span={6}
          key={thumbnail}
        >
          <Button
            aspectRatio="1/1"
            width="100%"
            type="link"
            onClick={onSelectThumbnail && onSelectThumbnail.bind(this, index)}
          >
            <ThumbnailItem
              className={clsx({
                active: index === activeIndex,
                'is-view-more': index === 3,
              })}
              backgroundColor="white"
              border="1px solid #E4E8ED"
              borderRadius="8px"
              p="0.75rem"
              position="relative"
              width="100%"
              height="100%"
            >
              <Image
                aspectRatio="1/1"
                alt=""
                src={thumbnail}
                showLoading
                cdnWidth={70}
                cdnHeight={70}
                width="100%"
                height="100%"
              />

              {index === 3 && thumbnails?.length > 4 && (
                <DisplayMoreOverLay>
                  <Text
                    color="white"
                    small
                    textAlign="center"
                    whiteSpace="pre-wrap"
                  >
                    Xem thêm {thumbnails?.length - MAX_DISPLAY_THUMBNAIL} ảnh
                  </Text>
                </DisplayMoreOverLay>
              )}
            </ThumbnailItem>
          </Button>
        </Col>
      ))}
    </ThumbnailList>
  );
};

export default Thumbnails;
