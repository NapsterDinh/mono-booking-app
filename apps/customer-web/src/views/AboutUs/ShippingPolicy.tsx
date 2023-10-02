import styled from '@emotion/styled';
import { isEven } from '@customer-web/helpers/Number';
import { Box, Text } from '@tsu-org/ui-kit';
import { Table } from 'antd';
import Layout from './components/Layout';

const ShippingTable = styled(Table)`
  &.ant-table-wrapper {
    .ant-table-tbody {
      .ant-table-row {
        td {
          vertical-align: middle;
        }

        &:hover {
          td {
            background-color: transparent;
          }
        }
      }
    }
  }
`;

const ShippingPolicy = () => {
  return (
    <Layout>
      <Text
        bold
        as="h1"
        fontSize="28px"
        mb="1rem"
      >
        CHÍNH SÁCH GIAO HÀNG
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
            I. Giao hàng
          </Text>

          <Text mb="0.5rem">
            <b>nhapthuoc.com</b> có 2 loại hình giao hàng là loại hình giao hàng siêu tốc và loại hình giao hàng tiêu
            chuẩn
          </Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            1. Giao hàng siêu tốc
          </Text>
          <Text mb="0.5rem">- Hồ Chí Minh (trừ Huyện Cần Giờ)</Text>
          <Text mb="0.5rem">- Bình Dương (bao gồm: Dĩ An, Thuận An, Thủ Dầu Một, Bến Cát, Tân Uyên)</Text>
          <Text mb="0.5rem">- Đồng Nai (bao gồm: Biên Hoà, Long Thành, Nhơn Trạch, Định Quán)</Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            2. Giao hàng tiêu chuẩn
          </Text>
          <Text mb="0.5rem">Áp dụng toàn quốc</Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            3. Thời gian giao hàng dự kiến
          </Text>
          <Text mb="0.5rem">Thời gian giao hàng dự kiến phụ thuộc vào loại hình giao hàng như sau:</Text>

          <ShippingTable
            columns={[
              {
                align: 'center',
                title: 'Thời gian đặt hàng',
                key: 'place-order-time',
                dataIndex: 'placeOrderTime',
                onCell: (_, index) => {
                  if (isEven(index)) {
                    return {
                      rowSpan: 2,
                    };
                  }

                  return {
                    rowSpan: 0,
                  };
                },
              },
              {
                align: 'center',
                title: 'Loại hình',
                key: 'type',
                dataIndex: 'type',
              },
              {
                align: 'center',
                title: 'Thời gian giao hàng (*)',
                key: 'shipping-time',
                dataIndex: 'shippingTime',
              },
            ]}
            dataSource={[
              {
                placeOrderTime: '0h - trước 8h',
                type: 'Siêu tốc',
                shippingTime: 'Đơn hàng dự kiến giao trước 12h cùng ngày',
              },
              {
                placeOrderTime: '0h - trước 8h',
                type: 'Tiêu chuẩn',
                shippingTime: 'Đơn hàng giao tiêu chuẩn dự kiến trong 1-3 ngày',
              },
              {
                placeOrderTime: '8h - 14h',
                type: 'Siêu tốc',
                shippingTime: 'Đơn hàng dự kiến giao trong vòng 4 giờ',
              },
              {
                placeOrderTime: '8h - 14h',
                type: 'Tiêu chuẩn',
                shippingTime: 'Đơn hàng giao tiêu chuẩn dự kiến trong 1-3 ngày',
              },
              {
                placeOrderTime: 'Sau 14h - 0h',
                type: 'Siêu tốc',
                shippingTime: 'Đơn hàng dự kiến giao trước 12h ngày kế tiếp',
              },
              {
                placeOrderTime: 'Sau 14h - 0h',
                type: 'Tiêu chuẩn',
                shippingTime: 'Đơn hàng giao tiêu chuẩn dự kiến trong 1-3 ngày',
              },
            ]}
            pagination={false}
          />

          <Text
            as="i"
            display="block"
            mt="0.25rem"
          >
            (*)Không bao gồm các ngày nghỉ Lễ, Tết
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
            II. Phí giao hàng
          </Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            1. Giao hàng siêu tốc
          </Text>
          <Text mb="0.5rem">- Phí: 30,000 VNĐ (đối với đơn hàng nhỏ hơn hoặc bằng 10 triệu VNĐ)</Text>
          <Text mb="0.5rem">- Không áp dụng đối với các đơn hàng lớn hơn 10 triệu VNĐ</Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            2. Giao hàng tiêu chuẩn
          </Text>
          <Text mb="0.5rem">- Phí: 20,000 VNĐ (đối với đơn hàng nhỏ hơn 1.5 triệu VNĐ)</Text>
          <Text mb="0.5rem">- Miễn phí (đối với đơn hàng từ 1.5 triệu VNĐ)</Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            *Lưu ý:
          </Text>
          <Text mb="0.5rem">- Khi đơn hàng có chứa hàng lạnh thì chỉ áp dụng giao hàng siêu tốc;</Text>
          <Text mb="0.5rem">
            - Trong trường hợp khu vực của Khách hàng không có hình thức giao hàng siêu tốc hoặc đơn hàng lớn hơn 10
            triệu VNĐ cần hỗ trợ giao siêu tốc vui lòng liên hệ tổng đài 1800 6001 để được hỗ trợ thêm
          </Text>
          <Text mb="0.5rem">
            - Trong trường hợp thời gian giao hàng thực tế có thể chậm hơn dự kiến do các nguyên nhân khách quan: dịch
            bệnh, thời tiết xấu,... mong quý khách hàng kiên nhẫn và thông cảm.
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
            III. Thông tin giao hàng
          </Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            1. Tôi có được thông báo trước khi giao hàng không?
          </Text>
          <Text mb="0.5rem">
            - Đối tác vận chuyển của <b>nhapthuoc.com</b> sẽ liên hệ với quý khách trước khi giao hàng.
          </Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            2. Tôi có thể hẹn thời gian giao hàng được không?
          </Text>
          <Text mb="0.5rem">
            - Được. Quý khách vui lòng liên hệ tổng đài 1800 6001 của <b>nhapthuoc.com</b> để được hỗ trợ tốt nhất.
          </Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            3. Nếu giao hàng không thành công, nhapthuoc.com có thông báo cho tôi biết không?
          </Text>
          <Text mb="0.5rem">
            - Trong trường hợp đơn hàng chưa được giao thành công đến quý khách lần thứ nhất, <b>nhapthuoc.com</b> sẽ
            liên hệ với quý khách để sắp xếp lại lịch giao hàng.
          </Text>
          <Text mb="0.5rem">
            - Trường hợp <b>nhapthuoc.com</b> không thể kết nối được với quý khách hoặc đơn vị vận chuyển không thể giao
            hàng thành công đến quý khách đơn hàng sẽ được hủy bởi hệ thống. Nếu đơn hàng đã được thanh toán, quý khách
            sẽ nhận được thông báo đơn hàng bị hủy và thông tin hướng dẫn nhận tiền hoàn trả.
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
            IV. Chính sách kiểm hàng đối với khách hàng:
          </Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            A. Định nghĩa.
          </Text>
          <Text mb="0.5rem">
            Kiểm tra hàng hóa là thực hiện các công việc kiểm tra danh mục các sản phẩm trong phiếu xuất kho bên trong
            kiện hàng và kiểm tra ngoại quan kiện hàng nhận được từ nhà vận chuyển
          </Text>

          <Text
            bold
            mb="0.5rem"
            fontSize="20px"
          >
            B. Quy định.
          </Text>
          <Text
            bold
            mb="0.5rem"
          >
            1. Thời gian kiểm tra hàng hóa.
          </Text>
          <Text mb="0.5rem">
            nhapthuoc.com chấp nhận cho khách hàng đồng kiểm ngoại quan kiện hàng với nhân viên giao hàng tại thời điểm
            nhận hàng.
          </Text>
          <Text mb="0.5rem">
            Sau khi nhận hàng, quý khách vui lòng quay video lúc mở kiện hàng để đối chiếu khi cần thiết để xác thực
            trong trường hợp có sự cố.
          </Text>

          <Text
            bold
            mb="0.5rem"
          >
            2. Phạm vi kiểm tra hàng hóa.
          </Text>
          <Text mb="0.5rem">
            Khách hàng được kiểm tra các sản phẩm thực nhận, đối chiếu, so sánh các sản phẩm nhận được với sản phẩm đã
            đặt trên đơn sau khi nhân viên nhapthuoc.com xác nhận đơn hàng theo các tiêu chí: mã sản phẩm, màu ánh sáng,
            kích thước, thông số chi tiết, …
          </Text>
          <Text mb="0.5rem">
            Tuyệt đối không được bóc, mở sản phẩm bên trong bao bì để thử, sử dụng trong quá trình kiểm hàng.
          </Text>

          <Text
            bold
            mb="0.5rem"
          >
            3. Các bước xử lý khi hàng hóa nhận được không phải là đơn đặt hàng.
          </Text>
          <Text mb="0.5rem">
            Khi khách hàng đồng kiểm, sản phẩm nhận được không phải là sản phẩm khách hàng đặt trên đơn hàng. Xin vui
            lòng liên hệ với hotline 1800 6001 hoặc email callcenter@nhapthuoc.com để được gặp bộ phận chăm sóc khách
            hàng xác nhận lại đơn hàng.
          </Text>
          <Text mb="0.5rem">
            Trường hợp nhapthuoc.com đóng sai đơn hàng theo yêu cầu của khách, khách có thể không nhận hàng, không thanh
            toán. Trong trường hợp đơn hàng đã thanh toán, khách hàng có thể yêu cầu đổi lại đúng đơn hàng đã đặt,
            nhapthuoc.com sẽ giao hàng lại cho quý khách hàng trong thời gian sớm nhất.
          </Text>
          <Text mb="0.5rem">
            Trường hợp nhapthuoc.com đóng hàng đúng theo đơn hàng, nhưng khách hàng thay đổi theo yêu cầu, khách hàng có
            thể yêu cầu đổi trả và áp dụng chính sách đổi trả hàng hóa. Trường hợp này khách hàng sẽ thanh toán chi phí
            giao hàng phát sinh (nếu có).
          </Text>

          <Text
            bold
            mb="0.5rem"
          >
            4. Các kênh thông tin tiếp nhận khiếu nại của khách hàng.
          </Text>
          <Text mb="0.5rem">
            Khách hàng có thể gửi email tới địa chỉ callcenter@nhapthuoc.com hoặc gọi điện tới Hotline 1800 6001.
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
          V. Phân định trách nhiệm của thương nhân, tổ chức cung ứng dịch vụ logistic về cung cấp chứng từ hàng hóa
          trong quá trình giao nhận
        </Text>

        <Text mb="0.5rem">
          Bên vận chuyển được hiểu là các đơn vị vận chuyển trung gian hợp tác với nhapthuoc.com vận chuyển hành hóa tới
          khách hàng như: Viettel post, DHL, GHN, GHYK, J&T, Vietnam post, chành xe…
        </Text>

        <Text
          bold
          mb="0.5rem"
        >
          Nghĩa vụ của bên vận chuyển
        </Text>
        <Text mb="0.5rem">– Bảo đảm vận chuyển đầy đủ hàng hoá, an toàn đến địa điểm đã định, theo đúng thời hạn.</Text>
        <Text mb="0.5rem">– Giao hàng hoá cho người có quyền nhận kiểm tra ngoại quan kiện hàng hóa.</Text>
        <Text mb="0.5rem">– Các chi phí liên quan đến việc chuyên chở hàng hoá thanh toán theo thỏa thuận.</Text>
        <Text mb="0.5rem">
          – Bồi thường thiệt hại cho bên thuê vận chuyển trong trường hợp bên vận chuyển để mất, hư hỏng hàng hoá, trừ
          trường hợp có thỏa thuận khác hoặc pháp luật có quy định khác.
        </Text>

        <Text
          bold
          mb="0.5rem"
        >
          Quyền của bên vận chuyển
        </Text>
        <Text mb="0.5rem">
          – Kiểm tra sự xác thực của hàng hoá, của vận đơn hoặc chứng từ vận chuyển tương đương khác.
        </Text>
        <Text mb="0.5rem">– Từ chối vận chuyển hàng hoá không đúng với loại tài sản đã thỏa thuận trong hợp đồng.</Text>
        <Text mb="0.5rem">– Yêu cầu bên thuê vận chuyển thanh toán đủ cước phí vận chuyển đúng thời hạn.</Text>
        <Text mb="0.5rem">– Từ chối vận chuyển hàng hoá cấm giao dịch, hàng hoá có tính chất nguy hiểm, độc hại.</Text>

        <Text
          bold
          mb="0.5rem"
        >
          Nghĩa vụ của bên thuê vận chuyển
        </Text>
        <Text mb="0.5rem">
          – Trả đủ tiền cước phí vận chuyển cho bên vận chuyển theo đúng thời hạn, phương thức đã thỏa thuận.
        </Text>
        <Text mb="0.5rem">
          – Cung cấp thông tin cần thiết liên quan đến hàng hoá vận chuyển để bảo đảm an toàn cho hàng hoá vận chuyển.
        </Text>

        <Text
          bold
          mb="0.5rem"
        >
          Quyền của bên thuê vận chuyển
        </Text>
        <Text mb="0.5rem">
          – Yêu cầu bên vận chuyển chuyên chở hàng hoá đến đúng địa điểm, thời điểm đã thỏa thuận.
        </Text>
        <Text mb="0.5rem">– Trực tiếp hoặc chỉ định người thứ ba nhận lại hàng hoá đã thuê vận chuyển.</Text>

        <Text
          bold
          mb="0.5rem"
        >
          Trách nhiệm bồi thường thiệt hại
        </Text>
        <Text mb="0.5rem">
          – Bên vận chuyển phải bồi thường thiệt hại cho bên thuê vận chuyển nếu để hàng hoá bị mất hoặc hư hỏng.
        </Text>
        <Text mb="0.5rem">
          – Bên thuê vận chuyển phải bồi thường thiệt hại cho bên vận chuyển và người thứ ba về thiệt hại do hàng hoá
          vận chuyển có tính chất nguy hiểm, độc hại mà không có biện pháp đóng gói, bảo đảm an toàn trong quá trình vận
          chuyển.
        </Text>
        <Text mb="0.5rem">
          – Trường hợp bất khả kháng dẫn đến hàng hoá vận chuyển bị mất, hư hỏng hoặc bị hủy hoại trong quá trình vận
          chuyển thì bên vận chuyển không phải chịu trách nhiệm bồi thường thiệt hại, trừ trường hợp có thỏa thuận khác
          hoặc pháp luật có quy định khác.
        </Text>
      </Box>
    </Layout>
  );
};

export default ShippingPolicy;
