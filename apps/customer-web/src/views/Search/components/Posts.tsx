import { AtomBox, AtomBoxProps } from '@tsu-org/ui';
import { Box, Button, Column, Flex, Image, Row, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { AlarmBrandIcon, ChevronDoubleDownIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';

interface PostsProps extends AtomBoxProps {
  totalCount?: number;
  posts?: NhapThuocResponse.SearchService.PostItem[];
  hasMore?: boolean;
  onViewMore?: () => void;
}

const Posts: FC<PostsProps> = ({ posts, hasMore, totalCount, onViewMore, ...rest }) => {
  if (!posts?.length) {
    return;
  }

  return (
    <AtomBox
      bgc="white"
      borderRadius="12px"
      px={{
        xs: '3',
      }}
      py="3"
      {...rest}
    >
      <Column
        gap="3"
        mb="3"
      >
        {posts.map((post) => (
          <RowBetween
            flexDirection={{
              lg: 'row',
              xs: 'column',
            }}
            key={post.id}
            alignItems="flex-start"
            flexWrap="nowrap"
            gap="3"
          >
            <Column>
              <Link href={`/${post.slug}`}>
                <Text
                  bold
                  color="textLink"
                  small
                >
                  {post.name}
                </Text>
              </Link>

              <Flex
                gap="2"
                alignItems="flex-start"
              >
                <RowFixed
                  gap="2"
                  flexWrap="nowrap"
                  flexShrink={0}
                >
                  <AlarmBrandIcon />
                  <Text
                    small
                    as="span"
                  >
                    {dayjs(post.createdDate).format('L')}
                  </Text>
                </RowFixed>

                {post.shortDescription && (
                  <>
                    -{' '}
                    <Text
                      fontWeight="500"
                      small
                      lineClamp={2}
                    >
                      {post.shortDescription}
                    </Text>
                  </>
                )}
              </Flex>
            </Column>

            <Box
              width="132px"
              flexShrink="0"
            >
              <Image
                aspectRatio="1/1"
                alt=""
                dimension={1}
                src={post.image}
              />
            </Box>
          </RowBetween>
        ))}
      </Column>

      {hasMore && (
        <Row justifyContent="center">
          <Button
            type="link"
            onClick={onViewMore}
          >
            <Flex>
              <ChevronDoubleDownIcon mr="0.25rem" />
              <Text
                small
                fontWeight="500"
              >
                Xem thêm {totalCount - posts.length} bài viết
              </Text>
            </Flex>
          </Button>
        </Row>
      )}
    </AtomBox>
  );
};

export default Posts;
