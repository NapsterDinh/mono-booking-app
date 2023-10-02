import { Box, Text } from '@tsu-org/ui-kit';
import Layout from './components/Layout';

const Introduce = () => {
  return (
    <Layout>
      <Text
        bold
        as="h1"
        fontSize="28px"
        mb="1rem"
      >
        Giới thiệu
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
            I. Về chúng tôi
          </Text>

          <Box
            backgroundColor="backgroundGrey2"
            p="1.5rem"
            boxShadow="rgba(114, 138, 161, 0.3) 6px 6px 0px"
            borderRadius="12px"
          >
            <Text>
              Trực thuộc Công ty TNHH DQH VN, <b>nhapthuoc.com</b> chuyên cung cấp đa dạng các loại thuốc kê đơn, không
              kê đơn, các sản phẩm thực phẩm chức năng, trang thiết bị y tế, dược mỹ phẩm và nhiều sản phẩm chăm sóc sức
              khoẻ, tiêu dùng hàng ngày,.... Với hơn 20,000 sản phẩm, chúng tôi tự tin sẽ có thể đáp ứng được toàn bộ
              nhu cầu hàng hóa mà Khách hàng cần.
            </Text>
          </Box>
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
            II. Sứ mệnh
          </Text>

          <Text>
            <b>nhapthuoc.com</b> mang sứ mệnh phục vụ tốt sức khỏe cộng đồng thông qua việc ứng dụng công nghệ vào hoạt
            động phân phối dược.
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
            III. Giá trị cốt lõi
          </Text>

          <Text mb="0.5rem">
            <b>nhapthuoc.com</b> xây dựng trên triết lý kinh doanh{' '}
            <b>“Vì Khách hàng bằng dịch vụ không giới hạn”, nhapthuoc.com luôn luôn</b> hiểu rõ Khách hàng sẽ gặp những
            khó khăn gì và cần những gì trong quá trình kinh doanh. Đặt Khách hàng là trọng tâm, nhapthuoc.com cung cấp
            cho Khách hàng 08 tiêu chuẩn dịch vụ <b>“5 sao”</b> tiên phong và tốt nhất thị trường.
          </Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            1/ Thuốc đủ - đa dạng
          </Text>

          <Text mb="0.5rem">
            Hơn 20,000 mã sản phẩm gồm: thuốc, thực phẩm chức năng, vật tư y tế, mỹ phẩm, sản phẩm chăm sóc sức khỏe…
          </Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            2/ 100% có hóa đơn VAT
          </Text>

          <Text mb="0.5rem">
            Nhận ngay khi hoàn tất đơn hàng, nói không với hàng kém chất lượng không rõ nguồn gốc.
          </Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            3/ Giá sỉ
          </Text>

          <Text mb="0.5rem">Cho mọi đơn hàng với nhiều chương trình khuyến mãi hấp dẫn.</Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            4/ Thanh toán đa dạng
          </Text>

          <Text mb="0.5rem">- Thanh toán khi nhận hàng (COD);</Text>
          <Text mb="0.5rem">- Chuyển khoản ngân hàng;</Text>
          <Text mb="0.5rem">
            - Đặc biệt là đơn vị duy nhất chấp nhận thanh toán online qua cổng thanh toán điện tử bằng thẻ ghi nợ và thẻ
            tín dụng.
          </Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            5/ Giao nhanh - tận nơi
          </Text>

          <Text mb="0.5rem">Dịch vụ giao hàng siêu tốc chỉ trong vòng 04 giờ.</Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            6/ Miễn phí vận chuyển
          </Text>

          <Text mb="0.5rem">Cho đơn hàng nhỏ chỉ từ 1.5 triệu VNĐ</Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            7/ Thời gian đổi trả lên đến 30 ngày
          </Text>

          <Text mb="0.5rem">Chấp nhận đổi trả 100% đơn hàng</Text>

          <Text
            bold
            fontSize="20px"
            mb="0.5rem"
          >
            8/ Dịch vụ chăm sóc khách hàng
          </Text>

          <Text mb="0.5rem">Từ 8h – 22h tất cả các ngày trong tuần.</Text>
          <Text mb="0.5rem">
            Không dừng lại ở <b>08</b> tiêu chuẩn dịch vụ <b>“5 sao”, nhapthuoc.com</b> vẫn đang cố gắng hoàn thiện từng
            ngày với mục tiêu mang đến nhiều dịch vụ cộng thêm, những trải nghiệm tốt nhất, thoải mái nhất và dễ dàng
            nhất để khi Khách hàng cần nhập thuốc sẽ nghĩ ngay <b>nhapthuoc.com.</b>
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Introduce;
