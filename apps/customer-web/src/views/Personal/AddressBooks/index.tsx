import ConfirmDeleteAddressModal from '@customer-web/components/Modal/ConfirmDeleteAddressModal';
import EditAddressModal from '@customer-web/components/Modal/EditAddressModal';
import useOpenCloseModal from '@customer-web/hooks/useOpenCloseModal';
import { useUserAddresses } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Button, Column, Row, RowBetween, RowFixed, Tag, Text } from '@tsu-org/ui-kit';
import { AddCircleFilledIcon, LocationOnFilledIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useState } from 'react';
import { Layout } from '../components/Layout';
import Empty from './components/Empty';

const AddressBooks = () => {
  const [selectedAddress, setSelectedAddress] = useState<NhapThuocResponse.Customers.Address>();
  const addresses = useUserAddresses();
  const {
    isOpen: isOpenEditAddressModal,
    openModal: openEditAddressModal,
    closeModal: closeEditAddressModal,
  } = useOpenCloseModal();
  const {
    isOpen: isOpenConfirmDeleteModal,
    openModal: openConfirmDeleteModal,
    closeModal: closeConfirmDeleteModal,
  } = useOpenCloseModal();

  const handleAddNewAddressButtonClicked = () => {
    openEditAddressModal();
  };

  const handleCancelEditAddress = () => {
    setSelectedAddress(undefined);
    closeEditAddressModal();
  };

  const handleEditButtonClicked = (address: NhapThuocResponse.Customers.Address) => {
    setSelectedAddress(address);
    openEditAddressModal();
  };

  const handleDeleteButtonClicked = (address: NhapThuocResponse.Customers.Address) => {
    setSelectedAddress(address);
    openConfirmDeleteModal();
  };

  const handleCancelDeleteAddress = () => {
    setSelectedAddress(undefined);
    closeConfirmDeleteModal();
  };

  return (
    <Layout>
      <EditAddressModal
        address={selectedAddress}
        open={isOpenEditAddressModal}
        isFirstAddress={addresses?.length < 1}
        onCancel={handleCancelEditAddress}
        onOk={handleCancelEditAddress}
      />
      <ConfirmDeleteAddressModal
        address={selectedAddress}
        open={isOpenConfirmDeleteModal}
        onCancel={handleCancelDeleteAddress}
      />
      <Text
        bold
        mb="2rem"
      >
        Sổ địa chỉ nhận hàng
      </Text>
      {addresses?.length > 0 ? (
        <AtomBox
          border="1"
          borderRadius="12px"
          bgc="white"
        >
          {addresses.map((address) => (
            <Row
              key={address.id}
              alignItems="flex-start"
              gap="3"
              px="3"
              py="0p75rem"
              borderBottom="1"
            >
              <RowBetween
                flexGrow={1}
                alignItems="flex-start"
              >
                <Column gap="2">
                  <Row gap="2">
                    <Text
                      bold
                      fontWeight="1.125rem"
                      small
                    >
                      {address.name}
                    </Text>
                    <Text color="#C1C8D1">|</Text>
                    <Text
                      color="textSecondary"
                      small
                    >
                      {address.mobilePhone}
                    </Text>
                    {address.isPrimary && <Tag variant="primary">Mặc định</Tag>}
                  </Row>

                  <Row gap="2">
                    <LocationOnFilledIcon color="textTertiary" />
                    <Text
                      color="textTertiary"
                      small
                    >
                      {[address.address, address.wardName, address.districtName, address.provinceName].join(', ')}
                    </Text>
                  </Row>
                </Column>
                <RowFixed gap="0p75rem">
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
                  {!address.isPrimary && (
                    <>
                      <Text
                        color="#C1C8D1"
                        small
                      >
                        |
                      </Text>

                      <Button
                        type="link"
                        onClick={handleDeleteButtonClicked.bind(this, address)}
                      >
                        <Text
                          color="textSecondary"
                          fontWeight="500"
                          small
                        >
                          Xóa
                        </Text>
                      </Button>
                    </>
                  )}
                </RowFixed>
              </RowBetween>
            </Row>
          ))}

          <Row
            px="3"
            py="0p75rem"
          >
            <Button
              type="link"
              onClick={handleAddNewAddressButtonClicked}
            >
              <AddCircleFilledIcon
                width="32"
                height="32"
              />
              <Text small>Thêm địa chỉ mới</Text>
            </Button>
          </Row>
        </AtomBox>
      ) : (
        <Empty onAddNewAddress={handleAddNewAddressButtonClicked} />
      )}
    </Layout>
  );
};

export default AddressBooks;
