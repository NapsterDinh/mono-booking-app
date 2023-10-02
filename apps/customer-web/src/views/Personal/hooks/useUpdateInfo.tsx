import { BUSINESS_TYPE_MAP_CONTRACTS, BusinessContractTypeValidationEntries } from '@customer-web/constants/contract';
import { useUpdateCustomerMutation } from '@customer-web/hooks/mutations';
import { useAppDispatch } from '@customer-web/state';
import { fetchCustomerAddressesByCustomerId } from '@customer-web/state/customer/actions';
import { fetchUserInfo } from '@customer-web/state/user/actions';
import { useUserState } from '@customer-web/state/user/hooks';
import { FormInstance, notification } from 'antd';
import isEmpty from 'lodash/isEmpty';

const useUpdateInfo = ({
  contracts,
  form,
  needOpenConfirmModal,
}: {
  contracts: (typeof BUSINESS_TYPE_MAP_CONTRACTS)[keyof typeof BUSINESS_TYPE_MAP_CONTRACTS];
  form: FormInstance<any>;
  needOpenConfirmModal: () => boolean;
}) => {
  const dispatch = useAppDispatch();
  const user = useUserState();
  const { mutateAsync: updateCustomer, isLoading: isUpdating } = useUpdateCustomerMutation(user.id, {
    onError: (error) => {
      if (error?.message) {
        notification.error({
          message: error?.message,
        });
      } else {
        notification.error({
          message: 'Cập nhật hồ sơ kinh doanh thất bại',
        });
      }
    },
  });

  const validateContracts = (contractsInput?: NhapThuocResponse.Customers.Contract[]) => {
    let isValid = true;

    if (!contractsInput || !contractsInput.length) {
      return false;
    }

    const fields = [];
    let hasContract = false;
    const filledContract = [];

    contractsInput.forEach((contract, index) => {
      const filled = Object.keys(contract).some((key) => !isEmpty(contract[key]));

      form.setFields(
        ['contractNumber', 'issueDate', 'issueBy', 'contractFiles'].map((fieldName) => ({
          name: ['contract', index, fieldName],
          errors: [],
        })),
      );

      if (filled) {
        hasContract = true;
      }

      // only validate touched contract
      if (!filled) {
        return;
      }

      if (!contract.contractNumber) {
        isValid = false;

        fields.push({
          name: ['contract', index, 'contractNumber'],
          errors: ['Vui lòng nhập số giấy phép.'],
        });
      }

      if (!contract.issueDate) {
        isValid = false;

        fields.push({
          name: ['contract', index, 'issueDate'],
          errors: ['Vui lòng chọn ngày cấp.'],
        });
      }

      if (!contract.issueBy) {
        isValid = false;

        fields.push({
          name: ['contract', index, 'issueBy'],
          errors: ['Vui lòng nhập nơi cấp.'],
        });
      }

      if (!(contract.contractFiles?.length > 0)) {
        isValid = false;

        fields.push({
          name: ['contract', index, 'contractFiles'],
          errors: ['Vui lòng tải lên giấy chứng nhận.'],
        });
      }

      if (fields.length === 0) {
        filledContract.push(contracts[index].value);
      }

      form.setFields(fields);
    });

    if (!hasContract) {
      notification.error({
        message: 'Bạn phải điền ít nhất 1 loại giấy tờ',
      });

      return false;
    }

    if (fields.length) {
      form.scrollToField(fields[0].name);

      return false;
    }

    //need at lease 1 contract which submitted exist in requiredArr
    const businessTypeRequiredArr =
      BusinessContractTypeValidationEntries[form.getFieldValue(['profile', 'businessType'])]?.requiredArr;
    if (!filledContract.some((contractType) => businessTypeRequiredArr?.includes(contractType))) {
      if (businessTypeRequiredArr?.length === 1) {
        notification.error({
          message: `Vui lòng nhập đầy đủ thông tin hồ sơ để tiếp tục`,
        });
      } else {
        notification.error({
          message: `Vui lòng nhập đầy đủ thông tin 1 trong ${businessTypeRequiredArr?.length} bộ hồ sơ để tiếp tục`,
        });
      }

      return false;
    }

    return isValid;
  };

  const confirm = (fieldsValue: any) => {
    const validContracts = validateContracts(fieldsValue.contract);

    if (!validContracts) {
      return;
    }

    if (needOpenConfirmModal()) {
      return;
    }
    submit(fieldsValue);
  };

  const submit = async (fieldsValue: any) => {
    const contractsPayload = fieldsValue.contract
      .map((contract, index) => {
        return {
          ...contract,
          contractDocType: contracts[index].value,
        };
      })
      .filter((contract) => contract.contractFiles?.length > 0)
      .map((contract) => ({
        ...contract,
        contractFiles: contract.contractFiles
          .filter((file) => file?.response?.data?.[0]?.key)
          .map((file) => ({
            id: file?.id,
            fileName: file?.response?.data?.[0]?.key,
          })),
      }));

    const payload = {
      ...fieldsValue,
      contract: contractsPayload,
      profile: {
        ...fieldsValue.profile,
        gender: user?.profile?.gender,
        representer: user?.profile?.representer,
      },
    };

    if (fieldsValue?.requested_export_e_invoice) {
      payload.invoice = {
        ...fieldsValue.invoice,
        invoiceName: fieldsValue.profile.fullName,
      };
    }

    await updateCustomer(payload);
    await Promise.all([dispatch(fetchUserInfo()), dispatch(fetchCustomerAddressesByCustomerId(user.id!))]);

    notification.success({
      message: 'Cập nhật hồ sơ kinh doanh thành công',
    });
  };

  return {
    submit,
    confirm,
    isUpdating,
  };
};

export default useUpdateInfo;
