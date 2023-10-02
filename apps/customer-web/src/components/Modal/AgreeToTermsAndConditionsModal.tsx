import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import { Button, Row, Text } from '@tsu-org/ui-kit';
import type { FC } from 'react';

const AgreeToTermsAndConditionsModal: FC<ModalProps> = (props) => {
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
        nhapthuoc.com
      </Text>

      <Text
        color="textSecondary"
        mb="1rem"
        textAlign="center"
      >
        Trang TMĐT này được thiết lập để bán hàng cho công ty, tổ chức, nhà thuốc, quầy thuốc, phòng khám, cơ sở y tế đã
        được cấp quyền theo quy định của pháp luật về thương mại dược phẩm, vật tư y tế, các sản phẩm khác và có người
        phụ trách về chuyên môn. Người mua hàng là người có đủ năng lực và khả năng chuyên môn trong việc xác định đặc
        tính sản phẩm khi quyết định giao dịch. Chúng tôi không chịu trách nhiệm về bất kỳ hậu quả nào cho việc người
        mua thuốc dựa trên các thông tin trên để thương mại/ sử dụng thuốc cho tiêu dùng cá nhân. Trân trọng!
      </Text>

      <Row gap="3">
        <Button
          scale="lg"
          width="50%"
          onClick={props.onOk}
        >
          Tôi đồng ý
        </Button>
        <Button
          type="secondary"
          scale="lg"
          width="50%"
          onClick={props.onCancel}
        >
          Tôi không đồng ý
        </Button>
      </Row>
    </Modal>
  );
};

export default AgreeToTermsAndConditionsModal;
