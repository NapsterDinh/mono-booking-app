import { DEFAULT_EMPTY_PLACEHOLDER } from '@customer-web/constants';
import { USER_STATUS_LABELS, UserStatus } from '@customer-web/enums/User';
import { ModalType } from '@customer-web/enums/index';
import { useModal } from '@customer-web/state/global/hooks';
import { useUserState, useUserStatus } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, ColumnCenter, Divider, RowBetween, Tag, TagVariant, Text } from '@tsu-org/ui-kit';
import { DefaultAvatarBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useState } from 'react';
import { Layout } from '../components/Layout';
import EditView from './components/EditView';

const USER_STATUS_TAG_VARIANTS = {
  [UserStatus.OPEN]: 'primary',
  [UserStatus.PENDING]: 'warning',
  [UserStatus.APPROVED]: 'success',
  [UserStatus.REJECTED]: 'error',
};

const PersonalInfo = () => {
  const user = useUserState();
  const [isEditing, setIsEditing] = useState(false);
  const userStatus = useUserStatus();
  const { openModal } = useModal();

  const handleEditButtonClicked = () => {
    setIsEditing(true);
  };

  const handleSuccessUpdate = () => {
    setIsEditing(false);
  };

  return (
    <Layout>
      <Box
        backgroundColor="white"
        borderRadius="12px"
      >
        <AtomBox
          px="0p75rem"
          py="3"
          borderBottom="1"
        >
          <Text bold>Thông tin cá nhân</Text>
        </AtomBox>

        <ColumnCenter p="3">
          <AtomBox mb="3">
            <DefaultAvatarBrandIcon width="90" />
          </AtomBox>

          <AtomBox mb="1">
            <Button type="link">Thay đổi ảnh đại diện</Button>
          </AtomBox>

          <Text
            textAlign="center"
            color="textTertiary"
            small
            mb="1rem"
          >
            Dung lượng file tối đa 1 MB
            <br />
            Định dạng:.JPEG, .PNG
          </Text>

          {isEditing ? (
            <EditView onSuccessUpdate={handleSuccessUpdate} />
          ) : (
            <Box
              width={{
                _: '100%',
                lg: '440px',
              }}
            >
              <RowBetween>
                <Text
                  small
                  color="textSecondary"
                >
                  Trạng thái tài khoản
                </Text>
                <Text
                  small
                  fontWeight="500"
                >
                  <Tag
                    p="4px 8px"
                    variant={USER_STATUS_TAG_VARIANTS[userStatus] as TagVariant}
                  >
                    {USER_STATUS_LABELS[userStatus]}
                  </Tag>
                </Text>
              </RowBetween>

              <Divider my="3" />

              <RowBetween>
                <Text
                  small
                  color="textSecondary"
                >
                  Họ và tên
                </Text>
                <Text
                  small
                  fontWeight="500"
                >
                  {user?.profile?.representer || DEFAULT_EMPTY_PLACEHOLDER}
                </Text>
              </RowBetween>

              <Divider my="3" />

              <RowBetween>
                <Text
                  small
                  color="textSecondary"
                >
                  Số điện thoại
                </Text>
                <Text
                  small
                  fontWeight="500"
                >
                  {user?.profile?.mobilePhone}
                </Text>
              </RowBetween>

              <Divider my="3" />

              <RowBetween>
                <Text
                  small
                  color="textSecondary"
                >
                  Danh xưng
                </Text>
                <Text
                  small
                  fontWeight="500"
                >
                  {user?.profile?.genderName}
                </Text>
              </RowBetween>

              <Divider my="3" />

              <RowBetween>
                <Text
                  small
                  color="textSecondary"
                >
                  Mật khẩu
                </Text>
                <Button
                  type="link"
                  onClick={openModal.bind(this, ModalType.CHANGE_PASSWORD, undefined)}
                >
                  Thay đổi mật khẩu
                </Button>
              </RowBetween>
            </Box>
          )}

          {isEditing ? null : (
            <Button
              type="secondary"
              width="280px"
              scale="xl"
              mt="2rem"
              onClick={handleEditButtonClicked}
            >
              Chỉnh sửa thông tin
            </Button>
          )}
        </ColumnCenter>
      </Box>
    </Layout>
  );
};

export default PersonalInfo;
