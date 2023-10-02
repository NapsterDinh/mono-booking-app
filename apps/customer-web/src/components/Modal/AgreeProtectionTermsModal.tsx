import { useAgreeProtectionTermsMutation } from '@customer-web/hooks/mutations';
import { useAppDispatch } from '@customer-web/state';
import { successAgreeProtectionTerms } from '@customer-web/state/user/actions';
import { Button, Link, Row, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import { type FC } from 'react';

const AgreeProtectionTermsModal: FC<
  ModalProps & {
    onOk?: () => void;
    onCancel?: () => void;
  }
> = (props) => {
  const dispatch = useAppDispatch();
  const { mutateAsync, isLoading } = useAgreeProtectionTermsMutation();

  const handleOk = async () => {
    try {
      await mutateAsync();
      dispatch(successAgreeProtectionTerms());
      props.onOk && props.onOk();
    } catch (error) {
      // TODO: use error code when backend fixed
      if (error?.message === 'Bạn đã đồng ý với điều khoản về bảo vệ dữ liệu cá nhân') {
        dispatch(successAgreeProtectionTerms());
        props.onOk && props.onOk();
      }
    }
  };

  const handleCancel = () => {
    if (isLoading) {
      return;
    }

    props.onCancel && props.onCancel();
  };

  return (
    <Modal
      centered
      footer={null}
      width={800}
      {...props}
    >
      <Text
        fontSize="24px"
        bold
        mb="1rem"
        textAlign="center"
      >
        nhapthuoc.com áp dụng quy định mới về bảo vệ dữ liệu
      </Text>

      <Text
        color="textSecondary"
        mb="1rem"
      >
        <b>nhapthuoc.com</b> xin thông báo về việc Quy chế hoạt động của website <b>nhapthuoc.com</b> đã được cập nhật
        để tuân thủ theo Nghị định 13/2023/NĐ-CP của Chính Phủ về Bảo vệ dữ liệu cá nhân, có hiệu lực thi hành kể từ
        ngày 01/07/2023.
        <br />
        Theo đó <b>nhapthuoc.com</b> được quyền thu thập và xử lý dữ liệu cá nhân của Quý khách theo mục đích, phạm vi
        và các quy định được cập nhật tại Chính sách bảo vệ dữ liệu và quyền riêng tư. Vui lòng xem nội dung Chính sách
        bảo vệ dữ liệu và quyền riêng tư sau khi cập nhật{' '}
        <Link
          bold
          display="inline-block"
          href="/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"
          external
        >
          tại đây
        </Link>
        .
        <br />
        <b>nhapthuoc.com</b> kính mong Quý khách thấu hiểu rằng, hoạt động xử lý dữ liệu cá nhân là quan trọng và cần
        thiết để <b>nhapthuoc.com</b> đem lại dịch vụ và trải nghiệm tốt nhất cho Quý khách khi mua hàng.{' '}
        <b>nhapthuoc.com</b> đảm bảo những nội dung được cập nhật tại Chính sách tuân thủ đúng quy định về bảo vệ dữ
        liệu cá nhân theo Nghị định 13/2023/NĐ-CP và luôn nhằm mục đích bảo vệ quyền của Quý khách đối với những thông
        tin đã cung cấp trên hệ thống <b>nhapthuoc.com</b>.
      </Text>

      <Row gap="3">
        <Button
          scale="xl"
          width="50%"
          loading={isLoading}
          onClick={handleOk}
        >
          Tôi đồng ý
        </Button>
        <Button
          type="secondary"
          scale="xl"
          width="50%"
          onClick={handleCancel}
        >
          Tôi không đồng ý
        </Button>
      </Row>
    </Modal>
  );
};

export default AgreeProtectionTermsModal;
