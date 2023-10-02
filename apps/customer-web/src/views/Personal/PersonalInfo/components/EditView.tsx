import { getErrorElement } from '@customer-web/helpers/Form';
import { useGendersQuery } from '@customer-web/hooks/queries';
import { useAppDispatch } from '@customer-web/state';
import { updateUserInfo } from '@customer-web/state/user/actions';
import { useUserState } from '@customer-web/state/user/hooks';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Input, Select } from '@tsu-org/ui-kit';
import { Form, notification } from 'antd';
import { FC, useState } from 'react';

const EditView: FC<{ onSuccessUpdate?: () => void }> = ({ onSuccessUpdate }) => {
  const [form] = Form.useForm();
  const user = useUserState();
  const { data: genders } = useGendersQuery();
  const dispatch = useAppDispatch();
  const [updating, setUpdating] = useState(false);

  const handleFinish = async (values: any) => {
    setUpdating(true);

    try {
      await dispatch(
        updateUserInfo({
          customerId: user.id,
          profile: {
            ...user?.profile,
            ...values?.profile,
          },
        }),
      ).unwrap();

      notification.success({
        message: 'Cập nhật thông tin thành công',
      });

      onSuccessUpdate && onSuccessUpdate();
    } catch (error) {
      notification.error({
        message: 'Cập nhật thông tin thất bại',
      });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{
        ...user,
      }}
      onFinish={handleFinish}
    >
      <Box width="440px">
        <Form.Item
          name={['profile', 'representer']}
          label="Họ và tên"
          className={sprinkles({
            mb: '3',
          })}
          rules={[{ required: true, message: getErrorElement('Vui lòng nhập họ và tên') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className={sprinkles({
            mb: '3',
          })}
          name={['profile', 'gender']}
          rules={[{ required: true, message: getErrorElement('Vui lòng chọn Danh xưng') }]}
          label="Danh xưng"
        >
          <Select
            options={genders?.items?.map((gender) => ({
              value: Number(gender.sourceId),
              label: gender.sourceName,
            }))}
            scale="md"
          />
        </Form.Item>

        <Button
          type="secondary"
          width="280px"
          scale="xl"
          mt="2rem"
          mx="auto"
          display="block"
          htmlType="submit"
          loading={updating}
        >
          Cập nhật thông tin
        </Button>
      </Box>
    </Form>
  );
};

export default EditView;
