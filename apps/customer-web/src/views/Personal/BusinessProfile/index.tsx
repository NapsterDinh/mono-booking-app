import { FileFilled } from '@ant-design/icons';
import styled from '@emotion/styled';
import WarningChangeBusinessTypeModal from '@customer-web/components/Modal/WarningChangeBusinessTypeModal';
import { BusinessType } from '@customer-web/constants/business';
import { BUSINESS_TYPE_MAP_CONTRACTS } from '@customer-web/constants/contract';
import { UserStatus } from '@customer-web/enums/User';
import { getErrorElement } from '@customer-web/helpers/Form';
import { formatVNPhoneNumber } from '@customer-web/helpers/String';
import { useBusinessTypesQuery } from '@customer-web/hooks/queries';
import useOpenCloseModal from '@customer-web/hooks/useOpenCloseModal';
import { uploadImg } from '@customer-web/request-providers/s3';
import { useAppDispatch } from '@customer-web/state';
import { registerUploadDocImg } from '@customer-web/state/user/actions';
import { useDocumentUpload, useUserState, useUserStatus } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Input, Select, Text } from '@tsu-org/ui-kit';
import { CameraAddIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Col, Collapse, DatePicker, Form, Row, Space, Upload } from 'antd';
import { RcFile } from 'antd/es/upload';
import dayjs from 'dayjs';
import { omit } from 'lodash';
import { Fragment, useEffect, useMemo } from 'react';
import useUpdateInfo from '../hooks/useUpdateInfo';
import BusinessPremises from './components/BusinessPremises';
import EInvoice from './components/EInvoice';
import { CollapseStyled } from './styled';

const { Panel } = Collapse;

const Dragger = styled(Upload.Dragger)`
  display: block;

  .ant-upload.ant-upload-drag {
    background-color: ${({ theme }) => theme.colors.backgroundBlue};
    border-color: ${({ theme }) => theme.colors.textLink};
  }
`;

const acceptContractFileExtensions = ['.png', '.jpeg', '.jpg', '.pdf', '.doc', '.docx'];

const BusinessProfile = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const { data: businessTypes } = useBusinessTypesQuery();
  const fileUploadedLinkList = useDocumentUpload();

  const businessType = Form.useWatch(['profile', 'businessType'], form) as BusinessType;
  const contracts = BUSINESS_TYPE_MAP_CONTRACTS[businessType];
  const user = useUserState();
  const userStatus = useUserStatus();
  const customerContracts = user?.includeAttributes?.contracts;
  const customerInvoices = user?.includeAttributes?.invoices;
  const primaryInvoice = useMemo(() => {
    return customerInvoices?.find((invoice) => invoice.isPrimary);
  }, [customerInvoices]);
  const {
    isOpen: isOpenWarningModal,
    openModal: openWarningModal,
    closeModal: closeWarningModal,
  } = useOpenCloseModal();

  const {
    submit: updateCustomerInfo,
    isUpdating,
    confirm,
  } = useUpdateInfo({
    contracts,
    form,
    needOpenConfirmModal: () => {
      if (
        userStatus === UserStatus.APPROVED &&
        form.getFieldValue(['profile', 'businessType']) !== user?.profile?.businessType
      ) {
        openWarningModal();
        return true;
      }
      return false;
    },
  });

  const handleFinish = async (fieldsValue: any) => {
    confirm(fieldsValue);
  };

  const handleConfirmModal = () => {
    closeWarningModal();
    updateCustomerInfo(form.getFieldsValue());
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    const listFile = e?.fileList;
    const newFileWithResponse = { ...e?.file, response: { data: fileUploadedLinkList } };

    const indexOfLatestFile = listFile?.indexOf(e?.file);

    if (indexOfLatestFile !== -1) listFile[indexOfLatestFile] = newFileWithResponse;

    return listFile;
  };

  const handleRemove = (contractType: string) => {
    form.setFieldValue([contractType, 'file'], undefined);
  };

  const handleEditContract = (index: number, name: string) => {
    const contract = form.getFieldValue(['contract', index]);
    const filled = Object.keys(contract).some((key) => contract[key]);

    if (filled) {
      form.setFields([
        {
          name: ['contract', index, name],
          errors: [],
        },
      ]);
    } else {
      form.setFields(
        ['contractNumber', 'issueDate', 'issueBy', 'contractFiles'].map((fieldName) => ({
          name: ['contract', index, fieldName],
          errors: [],
        })),
      );
    }
  };

  const beforeUpload = async (file: RcFile) => {
    const isValidExtension = acceptContractFileExtensions.some((extension) => file.name.endsWith(extension));
    const isLt300M = file.size / 1024 / 1024 < 300;

    try {
      if (isValidExtension && isLt300M) {
        await dispatch(registerUploadDocImg(file.name));
      }
    } catch (error) {
      console.warn({ error });
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      contract: contracts?.map((contract) => {
        const customerContract = customerContracts.find((customerContract) => {
          return customerContract.contractDocType === contract.value;
        });

        return omit(
          {
            ...customerContract,
            issueDate: customerContract?.issueDate ? dayjs(customerContract.issueDate) : customerContract?.issueDate,
            contractFiles:
              customerContract?.contractFiles?.map((file) => ({
                name: file.fileName,
                status: 'done',
                response: {
                  data: [
                    {
                      key: file.fileName,
                    },
                  ],
                },
              })) || [],
          },
          ['id'],
        );
      }),
    });
  }, [contracts, customerContracts, form]);

  useEffect(() => {
    form.setFieldsValue({
      requested_export_e_invoice: false,
      profile: {
        businessType: user?.profile?.businessType,
        fullName: user?.profile?.fullName,
        provinceCode: user?.profile?.provinceCode,
        districtCode: user?.profile?.districtCode,
        wardCode: user?.profile?.wardCode,
        customerAddress: user?.profile?.customerAddress,
        taxNumber: user?.profile?.taxNumber,
      },
      invoice: {
        ...primaryInvoice,
        buyerName: primaryInvoice?.buyerName || user?.profile?.representer,
        invoiceName: primaryInvoice?.invoiceName || user?.profile?.fullName,
        taxNumber: primaryInvoice?.taxNumber || user?.profile?.taxNumber,
        phoneNumber: formatVNPhoneNumber(primaryInvoice?.phoneNumber || user?.profile?.mobilePhone),
        email: primaryInvoice?.email || user?.profile?.email,
        provinceCode: primaryInvoice?.provinceCode || user?.profile?.provinceCode,
        districtCode: primaryInvoice?.districtCode || user?.profile?.districtCode,
        wardCode: primaryInvoice?.wardCode || user?.profile?.wardCode,
        customerAddress: primaryInvoice?.customerAddress || user?.profile?.customerAddress,
      },
    });
  }, [form, primaryInvoice, user?.profile]);

  return (
    <>
      <WarningChangeBusinessTypeModal
        open={isOpenWarningModal}
        onCancel={closeWarningModal}
        onSubmitForm={handleConfirmModal}
      />
      <Box
        backgroundColor={'white'}
        margin={{
          xl: '1rem auto',
          lg: '1.25rem auto',
        }}
        width={{
          xl: '900px',
        }}
        p={'1.25rem'}
        borderRadius={'12px'}
      >
        <AtomBox textAlign={'center'}>
          <Text
            as="h2"
            bold
            fontSize={'1.75rem'}
          >
            {userStatus === UserStatus.APPROVED ? 'Hồ sơ kinh doanh' : 'Cập nhật hồ sơ kinh doanh'}
          </Text>
          <Text
            as="span"
            fontSize={'0.875rem'}
          >
            Tài khoản của quý khách chỉ được kích hoạt
            <br />
            khi cung cấp đầy đủ các thông tin và giấy phép được yêu cầu bên dưới.
          </Text>
        </AtomBox>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFinish}
          scrollToFirstError
          initialValues={{
            isCreatePrimaryAddress: true,
          }}
        >
          {/* Hình thức kinh doanh */}
          <Box>
            <Text
              as="h3"
              bold
              fontSize={'1.125rem'}
              paddingTop={'1.5rem'}
            >
              Hình thức kinh doanh
            </Text>
            <Form.Item
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn hình thức kinh doanh.') }]}
              name={['profile', 'businessType']}
              label={'Chọn hình thức kinh doanh'}
              className={sprinkles({ mb: '0' })}
            >
              <Select
                options={businessTypes?.items?.map((item) => ({
                  value: Number(item.sourceId),
                  label: item.sourceName,
                }))}
              />
            </Form.Item>
          </Box>

          {/* Thông tin cơ sở kinh doanh */}
          <Box mt="1rem">
            <BusinessPremises form={form} />

            <Space
              className={sprinkles({ width: '100%', paddingTop: '1p5rem' })}
              direction="vertical"
              size={'middle'}
            >
              {contracts?.map((contract, index) => (
                <Fragment key={index}>
                  <CollapseStyled
                    size="small"
                    expandIconPosition="end"
                    defaultActiveKey="1"
                    collapsible="icon"
                  >
                    <Panel
                      header={
                        <AtomBox alignItems={'center'}>
                          <FileFilled />
                          <Text
                            ml="0.5rem"
                            as="span"
                            color={'textSecondary'}
                            fontSize={'1rem'}
                            fontWeight={'600'}
                          >
                            {contract.label}
                          </Text>
                        </AtomBox>
                      }
                      key="1"
                    >
                      <Row gutter={[16, 16]}>
                        <Col
                          md={{ span: 12 }}
                          span={24}
                        >
                          <Form.Item
                            name={['contract', index, 'contractNumber']}
                            label="Số giấy phép"
                            className={sprinkles({ mb: '0' })}
                          >
                            <Input
                              allowClear
                              onChange={handleEditContract.bind(this, index, 'contractNumber')}
                            />
                          </Form.Item>
                        </Col>
                        <Col
                          md={{ span: 12 }}
                          span={24}
                        >
                          <Form.Item
                            name={['contract', index, 'issueDate']}
                            label="Ngày cấp"
                            className={sprinkles({ mb: '0' })}
                          >
                            <DatePicker
                              className={sprinkles({ width: '100%', height: '3rem' })}
                              disabledDate={(current) => current.isAfter(dayjs())}
                              picker={'date'}
                              size="large"
                              format="DD/MM/YYYY"
                              onChange={handleEditContract.bind(this, index, 'issueDate')}
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            name={['contract', index, 'issueBy']}
                            label="Nơi cấp"
                            className={sprinkles({ mb: '0' })}
                          >
                            <Input
                              allowClear
                              onChange={handleEditContract.bind(this, index, 'issueBy')}
                            />
                          </Form.Item>
                        </Col>
                        <Col
                          span={24}
                          id={['contract', index, 'contractFiles'].join('_')}
                        >
                          <Form.Item>
                            <Form.Item
                              name={['contract', index, 'contractFiles']}
                              valuePropName="fileList"
                              getValueFromEvent={normFile}
                              noStyle
                              className={sprinkles({ mb: '0' })}
                              rules={[
                                {
                                  validator: async (rule, value: RcFile[]) => {
                                    value?.forEach((file) => {
                                      const isValidExtension = acceptContractFileExtensions.some((extension) =>
                                        file.name.endsWith(extension),
                                      );

                                      if (!isValidExtension) {
                                        throw new Error('File không đúng định dạng');
                                      }

                                      if (file.size && file.size > 0) {
                                        const isLt300M = file.size / 1024 / 1024 < 300;

                                        if (!isLt300M) {
                                          throw new Error('File phải nhỏ hơn 300MB');
                                        }
                                      }
                                    });
                                  },
                                },
                              ]}
                            >
                              <Dragger
                                action={fileUploadedLinkList?.[0]?.preSignedUrl}
                                accept={acceptContractFileExtensions.join(',')}
                                multiple
                                onRemove={handleRemove.bind(this, contract.label)}
                                onChange={handleEditContract.bind(this, index, 'contractFiles')}
                                beforeUpload={beforeUpload}
                                customRequest={(options) => {
                                  const config = {
                                    file: options.file,
                                    link: options.action,
                                    key: fileUploadedLinkList?.[0]?.key,
                                    onSuccess: options.onSuccess,
                                  };
                                  uploadImg(config);
                                }}
                              >
                                <CameraAddIcon
                                  color="textSecondary"
                                  width="40"
                                  height="39"
                                />
                                <Text
                                  bold
                                  small
                                >
                                  Kéo thả ảnh giấy chứng nhận của bạn tại đây.
                                </Text>
                                <Text
                                  color="textSecondary"
                                  small
                                  fontWeight="500"
                                >
                                  Định dạng PNG, JPEG, JPG, PDF,DOCX, DOC dung lượng dưới 300MB
                                </Text>

                                <Text
                                  color="textTertiary"
                                  small
                                  my="1rem"
                                >
                                  hoặc
                                </Text>

                                <Text
                                  color="textLink"
                                  small
                                  fontWeight="500"
                                >
                                  Chọn ảnh từ máy tính
                                </Text>
                              </Dragger>
                            </Form.Item>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Panel>
                  </CollapseStyled>
                </Fragment>
              ))}
            </Space>
          </Box>

          {/* Thông tin xuất hóa đơn */}
          <EInvoice form={form} />

          <Button
            mt="1.125rem"
            htmlType="submit"
            width="100%"
            scale="xl"
            loading={isUpdating}
          >
            Lưu
          </Button>
        </Form>
      </Box>
    </>
  );
};

export default BusinessProfile;
