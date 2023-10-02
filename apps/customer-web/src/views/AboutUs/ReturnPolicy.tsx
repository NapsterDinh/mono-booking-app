import { Box, Text } from '@tsu-org/ui-kit';
import Layout from './components/Layout';

const ReturnPolicy = () => {
  return (
    <Layout>
      <Text
        bold
        as="h1"
        fontSize="28px"
        mb="1rem"
      >
        CHÍNH SÁCH ĐỔI TRẢ
      </Text>

      <Box
        as="ol"
        listStyleType="none"
      >
        <Box
          as="li"
          mb="2rem"
        >
          <Text
            bold
            as="h2"
            fontSize="24px"
            mb="0.5rem"
          >
            I. Quy định chung trả hàng
          </Text>

          <Text mb="0.5rem">
            - Khách hàng có thể gửi yêu cầu trả hàng <b>trong vòng 07 ngày</b> kể từ lúc đơn hàng được giao hàng thành
            công.
          </Text>
          <Text mb="0.5rem">
            - Đối với các sản phẩm trả hàng liên quan đến chất lượng thì thời hạn gửi yêu cầu trả{' '}
            <b>trong vòng 30 ngày</b> kể từ lúc đơn hàng được giao hàng thành công.
          </Text>
          <Text mb="0.5rem">- Đối với các sản phẩm đông lạnh không áp dụng chính sách đổi trả.</Text>
          <Text mb="0.5rem">- Khách hàng được trả 1 phần đơn hàng hoặc toàn bộ đơn hàng.</Text>
        </Box>

        <Box
          as="li"
          mb="2rem"
        >
          <Text
            bold
            as="h2"
            fontSize="24px"
            mb="0.5rem"
          >
            II. Điều kiện trả hàng
          </Text>

          <Text mb="0.5rem">
            - Hàng được hoàn trả phải đảm bảo tình trạng như khi nhận hàng, còn mới 100% chưa qua sử dụng, còn nguyên
            nhãn mác, nguyên seal, nguyên hộp có quà tặng kèm theo (nếu có).
          </Text>
          <Text mb="0.5rem">
            - <b>nhapthuoc.com</b> không đổi hàng đã qua sử dụng hoặc bao bì sản phẩm đã bị rách, viết, xóa…
          </Text>
          <Text mb="0.5rem">
            - Để bảo đảm được hỗ trợ tốt nhất trong trường hợp giao sai/ thiếu hàng, vui lòng quay video khi mở thùng và
            gửi yêu cầu <b>trong vòng 24 tiếng</b> từ lúc nhận hàng để được xử lý, Khách hàng cần cung cấp hình ảnh hoặc
            video thể hiện rõ tình trạng sản phẩm nhận được.
          </Text>
          <Text mb="0.5rem">
            - <b>nhapthuoc.com</b> có thể yêu cầu bổ sung bằng chứng nếu: bằng chứng Khách hàng cung cấp bị mờ, nhòe,
            không thể hiện được tình trạng sản phẩm nhận được.
          </Text>
        </Box>

        <Box
          as="li"
          mb="2rem"
        >
          <Text
            bold
            as="h2"
            fontSize="24px"
            mb="0.5rem"
          >
            III. Phí trả hàng
          </Text>

          <Text mb="0.5rem">
            - Không tốn phí trả hàng trong trường hợp lỗi từ nhà sản xuất, <b>nhapthuoc.com</b> hoặc đơn vị vận chuyển,
            hàng nhận được bị thiếu/sai/bể vỡ/khác mô tả/đã qua sử dụng…
          </Text>
          <Text mb="0.5rem">
            - Trong trường hợp Khách hàng trả hàng do đặt nhầm, <b>nhapthuoc.com</b> sẽ tính phí là 30,000 VNĐ và được
            trừ vào tiền hoàn lại.
          </Text>
          <Text
            mb="0.5rem"
            as="i"
          >
            (Trong trường hợp Khách hàng đặt nhầm: khối lượng của sản phẩm trả về lớn hơn 05 kg hoặc là hàng cồng kềnh,
            nhapthuoc.com sẽ thu thêm phí dựa vào chi phí bên nhà vận chuyển báo và các mã giảm giá đi kèm sẽ được hệ
            thống tự động tính lại dựa theo giá trị thực nhận sau khi yêu cầu hoàn trả hàng).
          </Text>
        </Box>

        <Box
          as="li"
          mb="2rem"
        >
          <Text
            bold
            as="h2"
            fontSize="24px"
            mb="0.5rem"
          >
            IV. Quy trình trả hàng & cách thức hoàn tiền
          </Text>

          <Text mb="0.5rem">
            - Bước 1: Khách hàng yêu cầu trả hàng trên tài khoản hoặc liên hệ hotline 1800 6001 để yêu cầu việc trả
            hàng, <b>nhapthuoc.com</b> sẽ hướng dẫn Khách hàng về các thủ tục đổi, trả sản phẩm.
          </Text>
          <Text mb="0.5rem">
            - Bước 2: Nếu bằng chứng cung cấp phù hợp, đại diện bán hàng của <b>nhapthuoc.com</b> sẽ đến kiểm tra tình
            trạng hàng hóa thực tế.
          </Text>
          <Text mb="0.5rem">
            - Bước 3: Đơn vị vận chuyển sẽ đến thu hồi hàng hóa và chuyển về <b>nhapthuoc.com</b>.
          </Text>
          <Text mb="0.5rem">
            - Bước 4: <b>nhapthuoc.com</b> nhận và kiểm tra sản phẩm.
          </Text>
          <Text mb="0.5rem">
            - Bước 5: Hệ thống gửi tin nhắn xác nhận hoàn tiền kèm đường link nhập thông tin số tài khoản và tên người
            thụ hưởng (số điện thoại nhận tin nhắn mặc định là số điện thoại mua hàng). Áp dụng đối với các khách hàng
            đã hoàn tất thanh toán đơn hàng bằng chuyển khoản.
          </Text>
          <Text mb="0.5rem">
            - Bước 6: Khách hàng nhận tiền hoàn lại trong vòng 3 ngày làm việc (không kể thứ bảy, chủ nhật và các ngày
            Lễ, Tết) từ khi đơn hàng hoàn trả được tiếp nhận thành công bởi <b>nhapthuoc.com</b>.
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default ReturnPolicy;
