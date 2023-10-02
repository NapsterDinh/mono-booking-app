import EditAddressModal from '@customer-web/components/Modal/EditAddressModal';
import useOpenCloseModal from '@customer-web/hooks/useOpenCloseModal';
import { useUserAddresses } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Button, Column, Row, RowBetween, RowFixed, Tag, Text } from '@tsu-org/ui-kit';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  LocationOnBrandIcon,
  LocationOnFilledIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import { Form, Radio } from 'antd';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const MAX_DISPLAY = 3;

const Address = () => {
  const [selectedAddress, setSelectedAddress] = useState<NhapThuocResponse.Customers.Address>();
  const userAddresses = useUserAddresses();
  const { isOpen, openModal, closeModal } = useOpenCloseModal();
  const [isViewMore, setIsViewMore] = useState(false);
  const hasViewMore = userAddresses?.length > MAX_DISPLAY;
  const displayAddresses = useMemo(() => {
    return isViewMore ? userAddresses : userAddresses.slice(0, MAX_DISPLAY);
  }, [isViewMore, userAddresses]);

  const handleEditButtonClicked = (address: NhapThuocResponse.Customers.Address) => {
    setSelectedAddress(address);
    openModal();
  };

  const handleCancel = () => {
    setSelectedAddress(undefined);
    closeModal();
  };

  const handleViewMore = () => {
    setIsViewMore(true);
  };

  const handleViewLess = () => {
    setIsViewMore(false);
  };

  return (
    <AtomBox mb="0p75rem">
      <EditAddressModal
        address={selectedAddress}
        open={isOpen}
        onCancel={handleCancel}
        onOk={handleCancel}
      />
      <RowBetween
        alignItems="flex-start"
        mb="3"
      >
        <RowFixed
          gap="3"
          alignItems="flex-start"
        >
          <AtomBox>
            <LocationOnBrandIcon />
          </AtomBox>

          <Text fontWeight="500">Địa chỉ người nhận</Text>
        </RowFixed>

        <RowFixed gap="4">
          <Link href="/ca-nhan/so-dia-chi-nhan-hang">
            <Button type="white_primary">Quản lý sổ địa chỉ</Button>
          </Link>
        </RowFixed>
      </RowBetween>

      <Form.Item
        className={sprinkles({
          mb: '0',
        })}
        name="address_id"
      >
        <Radio.Group
          className={sprinkles({
            width: '100%',
          })}
        >
          <AtomBox
            border="1"
            borderRadius="12px"
          >
            {displayAddresses.map((address, index) => (
              <Row
                key={address.id}
                alignItems="flex-start"
                gap="3"
                px="3"
                py="0p75rem"
                borderBottom={index === displayAddresses.length - 1 ? undefined : '1'}
              >
                <Radio value={address.id} />

                <RowBetween
                  flexGrow={1}
                  alignItems="flex-start"
                >
                  <Column gap="2">
                    <Row gap="2">
                      <Text
                        bold
                        fontWeight="1.125rem"
                      >
                        {address.name}
                      </Text>
                      {address.isPrimary && <Tag variant="primary">Mặc định</Tag>}
                    </Row>

                    <Row gap="2">
                      <LocationOnFilledIcon color="textTertiary" />
                      <Text color="textTertiary">
                        {[address.address, address.wardName, address.districtName, address.provinceName].join(', ')}
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    type="link"
                    onClick={handleEditButtonClicked.bind(this, address)}
                  >
                    <Text
                      color="textLink"
                      fontWeight="500"
                      small
                    >
                      Sửa
                    </Text>
                  </Button>
                </RowBetween>
              </Row>
            ))}

            {hasViewMore && (
              <Row
                justifyContent="center"
                py="0p75rem"
                borderTop="1"
              >
                {isViewMore ? (
                  <Button
                    type="link"
                    onClick={handleViewLess}
                  >
                    <ChevronDoubleUpIcon
                      color="textLink"
                      width="20"
                      height="20"
                    />
                    Thu gọn
                  </Button>
                ) : (
                  <Button
                    type="link"
                    onClick={handleViewMore}
                  >
                    <ChevronDoubleDownIcon
                      color="textLink"
                      width="20"
                      height="20"
                    />
                    Xem thêm {userAddresses?.length - displayAddresses?.length} địa chỉ
                  </Button>
                )}
              </Row>
            )}
          </AtomBox>
        </Radio.Group>
      </Form.Item>
    </AtomBox>
  );
};

export default Address;
