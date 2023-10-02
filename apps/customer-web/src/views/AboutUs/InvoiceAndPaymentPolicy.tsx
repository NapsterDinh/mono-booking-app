import { Box, Link, Text } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import Layout from './components/Layout';

const InvoiceAndPaymentPolicy = () => {
  return (
    <Layout>
      <Text
        bold
        as="h1"
        fontSize="28px"
        mb="1rem"
      >
        CHÍNH SÁCH THANH TOÁN
      </Text>

      <Text mb="0.25rem">
        Quý khách có thể thanh toán cho <b>nhapthuoc.com</b> bằng các hình thức sau:
      </Text>

      <Text
        bold
        mb="0.5rem"
        fontSize="20px"
      >
        1. Thanh toán sau khi nhận hàng (COD)
      </Text>
      <Text mb="0.5rem">
        - Áp dụng: hình thức giao hàng siêu tốc hoặc giao hàng tiêu chuẩn với đơn hàng nhỏ hơn hoặc bằng 30 triệu VNĐ.
      </Text>

      <Text
        bold
        mb="0.5rem"
        fontSize="20px"
      >
        2. Thanh toán trước
      </Text>
      <Text mb="0.5rem">- Áp dụng đối với mọi hình thức giao hàng và giá trị đơn hàng.</Text>
      <Text mb="0.5rem">
        - Loại thanh toán: thanh toán online qua cổng thanh toán điện tử (thẻ nội địa, thẻ quốc tế, ví điện tử…) hoặc
        chuyển khoản ngân hàng theo thông tin chuyển khoản như sau:
      </Text>
      <Row
        style={{ marginBottom: '1rem' }}
        gutter={[4, 4]}
      >
        <Col
          lg={{ span: 10 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopLeftRadius="4px"
            borderBottomLeftRadius="4px"
            height="100%"
          >
            <Text>Tên ngân hàng</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 14 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopRightRadius="4px"
            borderBottomRightRadius="4px"
            height="100%"
          >
            <Text bold>Ngân hàng TMCP Công Thương Việt Nam (VIETINBANK)</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 10 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopLeftRadius="4px"
            borderBottomLeftRadius="4px"
            height="100%"
          >
            <Text>Chi nhánh</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 14 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopRightRadius="4px"
            borderBottomRightRadius="4px"
            height="100%"
          >
            <Text bold>CN1 - TP. HỒ CHÍ MINH - PGD TÂN ĐỊNH</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 10 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopLeftRadius="4px"
            borderBottomLeftRadius="4px"
            height="100%"
          >
            <Text>Chủ tài khoản</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 14 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopRightRadius="4px"
            borderBottomRightRadius="4px"
            height="100%"
          >
            <Text bold>CONG TY TNHH DQH VN</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 10 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopLeftRadius="4px"
            borderBottomLeftRadius="4px"
            height="100%"
          >
            <Text>Số tài khoản</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 14 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopRightRadius="4px"
            borderBottomRightRadius="4px"
            height="100%"
          >
            <Text bold>113002931684</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 10 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopLeftRadius="4px"
            borderBottomLeftRadius="4px"
            height="100%"
          >
            <Text>Nội dung</Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 14 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="backgroundGrey2"
            borderTopRightRadius="4px"
            borderBottomRightRadius="4px"
            height="100%"
          >
            <Text bold>Mã đơn hàng</Text>
          </Box>
        </Col>
      </Row>

      <Text mb="0.5rem">
        <b>Đặc biệt:</b> Khách hàng sẽ được hưởng ưu đãi chiết khấu thêm: 0.5% trên giá trị tổng đơn hàng ngay khi thanh
        toán.
      </Text>

      <Text
        as="h2"
        fontSize="28px"
        bold
        mb="1rem"
        textAlign="center"
      >
        XUẤT HÓA ĐƠN ĐIỆN TỬ
      </Text>

      <Text
        bold
        mb="0.5rem"
        fontSize="20px"
      >
        Quy trình xuất hóa đơn điện tử
      </Text>
      <Text mb="0.5rem">- Hóa đơn sẽ được xuất ngay khi hoàn tất xử lý đơn hàng cho Khách hàng</Text>
      <Text mb="0.5rem">
        - Hóa đơn điện tử được gửi qua email Khách hàng hoặc tra cứu thông tin xuất hoá đơn tại
        <Link
          href="https://tracuuhoadon.fpt.com.vn"
          external
          display="inline-block"
        >
          https://tracuuhoadon.fpt.com.vn
        </Link>{' '}
        (để tra cứu, khách hàng vui lòng nhập MST và mã tra cứu hóa đơn có trong phiếu xuất kho khi nhận hàng hoặc qua
        Email khách hàng nhận được)
      </Text>
      <Text mb="0.5rem">
        - <b>nhapthuoc.com</b> cam kết đảm bảo quyền lợi và sự hài lòng của khách hàng. Trong quá trình kinh doanh, để
        đáp ứng nhu cầu của khách hàng, chính sách cập nhật thông tin xuất hóa đơn như sau:
      </Text>

      <Text
        bold
        mb="0.5rem"
        fontSize="20px"
      >
        1. Thông tin hóa đơn
      </Text>
      <Text mb="0.5rem">
        <b>nhapthuoc.com</b> cung cấp thông tin chính xác và đầy đủ trong hóa đơn xuất ra cho khách hàng. Trường hợp
        nhầm/sai thông tin, cần thay đổi thông tin trong hóa đơn, quý khách hàng có thể liên hệ tổng đài 1800 6001 để
        được hỗ trợ.
      </Text>

      <Text
        bold
        mb="0.5rem"
        fontSize="20px"
      >
        2. Cập nhật thông tin khách hàng
      </Text>
      <Text mb="0.5rem">
        Để đảm bảo tính chính xác và đầy đủ của thông tin trong hóa đơn, <b>nhapthuoc.com</b> khuyến khích khách hàng
        cập nhật thông tin cá nhân đầy đủ và chính xác trong hồ sơ cá nhân của mình trên app hoặc website của{' '}
        <b>nhapthuoc.com</b>
      </Text>

      <Text
        bold
        mb="0.5rem"
        fontSize="20px"
      >
        3. Thời gian cập nhật thông tin hóa đơn
      </Text>
      <Text mb="0.5rem">
        Thời gian cập nhật thông tin hóa đơn phụ thuộc vào thời gian nhận được yêu cầu chỉnh sửa thông tin từ khách
        hàng. <b>nhapthuoc.com</b> cam kết cập nhật thông tin hóa đơn trong thời gian sớm nhất có thể.
      </Text>
      <Text mb="0.5rem">
        Nếu có bất kỳ câu hỏi hoặc yêu cầu nào liên quan đến thông tin xuất hóa đơn, vui lòng liên hệ 1800 6001 để được
        hỗ trợ.
      </Text>
    </Layout>
  );
};

export default InvoiceAndPaymentPolicy;
