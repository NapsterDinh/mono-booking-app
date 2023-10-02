import styled from '@emotion/styled';
import { Box, Modal, ModalProps, Text } from '@tsu-org/ui-kit';
import { FC } from 'react';

const StyledModal = styled(Modal)`
  &.ant-modal {
    .ant-modal-content {
      padding: 0;
    }

    .ant-modal-header {
      display: 'flex';
      justify-content: center;
      align-items: center;

      padding: 16px;
    }
  }
`;
const Decree13Modal: FC<ModalProps> = (props) => {
  return (
    <StyledModal
      width="80vw"
      centered
      footer={null}
      {...props}
      title={
        <Text
          fontSize="24px"
          textAlign="center"
          bold
        >
          Chính sách thu thập và xử lý dữ liệu cá nhân
        </Text>
      }
    >
      <Box
        padding={{
          lg: '1rem',
          _: '1rem',
        }}
        zIndex="1"
        maxHeight="70vh"
        overflowY="scroll"
      >
        <Text
          mb="0.5rem"
          small
        >
          Trong Bản Điều kiện Điều khoản về bảo vệ dữ liệu cá nhân này (“Điều kiện Điều khoản”), DQH là Bên Xử lý dữ
          liệu cá nhân.
        </Text>

        <Text
          bold
          mb="20px"
        >
          Điều 1. Giải thích từ ngữ
        </Text>
        <Text
          as="div"
          mb="20px"
          small
        >
          1.1. <b>“DQH”</b> là Công ty TNHH DQH VN.
          <br />
          1.2. <b>“Chủ thể dữ liệu”</b> là cá nhân được dữ liệu cá nhân phản ánh.
          <br />
          1.3. <b>“Khách hàng”</b> là bên tiếp cận, tìm hiểu, đăng ký, sử dụng hoặc có liên quan trong quá trình hoạt
          động, cung cấp các sản phẩm, dịch vụ của DQH. Tại Điều kiện Điều khoản này, Khách hàng có thể là Chủ thể dữ
          liệu cung cấp Dữ liệu cá nhân cho DQH.
          <br />
          1.4. <b>“Dữ liệu cá nhân”</b> là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng
          tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể. Dữ
          liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm.
          <br />
          1.5. <b>“Dữ liệu cá nhân cơ bản”</b> bao gồm:
          <Box ml="1rem">
            a) Họ, chữ đệm và tên khai sinh, tên gọi khác (nếu có);
            <br />
            b) Ngày, tháng, năm sinh; ngày, tháng, năm chết hoặc mất tích;
            <br />
            c) Giới tính;
            <br />
            d) Nơi sinh, nơi đăng ký khai sinh, nơi thường trú, nơi tạm trú, nơi ở hiện tại, quê quán, địa chỉ liên hệ;
            <br />
            e) Quốc tịch;
            <br />
            f) Hình ảnh của cá nhân;
            <br />
            g) Số điện thoại, số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe, số biển số
            xe, số mã số thuế cá nhân, số bảo hiểm xã hội, số thẻ bảo hiểm y tế;
            <br />
            h) Tình trạng hôn nhân;
            <br />
            i) Thông tin về mối quan hệ gia đình (cha mẹ, con cái);
            <br />
            j) Thông tin về tài khoản số của cá nhân; dữ liệu cá nhân phản ánh hoạt động, lịch sử hoạt động trên không
            gian mạng;
            <br />
            k) Các thông tin khác gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể không thuộc
            Dữ liệu cá nhân nhạy cảm.
            <br />
          </Box>
          1.6. <b>“Dữ liệu cá nhân nhạy cảm”</b> là dữ liệu cá nhân gắn liền với quyền riêng tư của cá nhân mà khi bị
          xâm phạm sẽ gây ảnh hưởng trực tiếp tới quyền và lợi ích hợp pháp của cá nhân gồm:
          <Box ml="1rem">
            a) Quan điểm chính trị, quan điểm tôn giáo;
            <br />
            b) Tình trạng sức khỏe và đời tư được ghi trong hồ sơ bệnh án, không bao gồm thông tin về nhóm máu;
            <br />
            c) Thông tin liên quan đến nguồn gốc chủng tộc, nguồn gốc dân tộc;
            <br />
            d) Thông tin về đặc điểm di truyền được thừa hưởng hoặc có được của cá nhân;
            <br />
            e) Thông tin về thuộc tính vật lý, đặc điểm sinh học riêng của cá nhân;
            <br />
            f) Thông tin về đời sống tình dục, xu hướng tình dục của cá nhân;
            <br />
            g) Dữ liệu về tội phạm, hành vi phạm tội được thu thập, lưu trữ bởi các cơ quan thực thi pháp luật;
            <br />
            h) Thông tin khách hàng của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài, tổ chức cung ứng dịch vụ trung
            gian thanh toán, các tổ chức được phép khác, gồm: thông tin định danh khách hàng theo quy định của pháp
            luật, thông tin về tài khoản, thông tin về tiền gửi, thông tin về tài sản gửi, thông tin về giao dịch, thông
            tin về tổ chức, cá nhân là bên bảo đảm tại tổ chức tín dụng, chi nhánh ngân hàng, tổ chức cung ứng dịch vụ
            trung gian thanh toán;
            <br />
            i) Dữ liệu về vị trí của cá nhân được xác định qua dịch vụ định vị;
            <br />
            j) Dữ liệu cá nhân khác được pháp luật quy định là đặc thù và cần có biện pháp bảo mật cần thiết.
          </Box>
          1.7. <b>“Bảo vệ dữ liệu cá nhân”</b> là hoạt động phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi vi phạm liên
          quan đến dữ liệu cá nhân theo quy định của pháp luật.
          <br />
          1.8. <b>“Xử lý dữ liệu cá nhân”</b> là một hoặc nhiều hoạt động tác động tới dữ liệu cá nhân, như: thu thập,
          ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải
          mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có
          liên quan.
          <br />
          1.9. <b>“Bên Kiểm soát dữ liệu cá nhân”</b> là tổ chức, cá nhân quyết định mục đích và phương tiện xử lý dữ
          liệu cá nhân.
          <br />
          1.10. <b>“Bên Xử lý dữ liệu cá nhân”</b> là tổ chức, cá nhân thực hiện việc xử lý dữ liệu thay mặt cho Bên
          Kiểm soát dữ liệu, thông qua một hợp đồng hoặc thỏa thuận với Bên Kiểm soát dữ liệu.
          <br />
          1.11. <b>“Bên Kiểm soát và xử lý dữ liệu cá nhân”</b> là tổ chức, cá nhân đồng thời quyết định mục đích,
          phương tiện và trực tiếp xử lý dữ liệu cá nhân.
          <br />
          1.12. <b>“Bên Thứ ba”</b> là tổ chức, cá nhân ngoài Chủ thể dữ liệu, Bên Kiểm soát dữ liệu cá nhân, Bên Xử lý
          dữ liệu cá nhân, Bên Kiểm soát và xử lý dữ liệu cá nhân được phép xử lý dữ liệu cá nhân.
          <br />
          1.13. <b>“Kênh giao dịch DQH”</b> gồm các kênh giao dịch điện tử (website https://nhapthuoc.com/; zalo; …)
          hoặc các kênh giao dịch khác nhằm cung cấp sản phẩm/ dịch vụ hoặc để phục vụ nhu cầu của DQH và khách hàng.
        </Text>

        <Text
          bold
          mb="20px"
        >
          Điều 2. Tuyên bố và Khẳng định của Chủ thể dữ liệu/Khách hàng
        </Text>
        <Text
          as="div"
          mb="20px"
          small
        >
          2.1. Dữ liệu cá nhân mà Chủ thể dữ liệu/Khách hàng cung cấp cho DQH và/hoặc DQH có được thông qua các hành
          động khác được hiểu bao gồm Dữ liệu cá nhân cơ bản và/hoặc Dữ liệu cá nhân nhạy cảm. Bằng Điều kiện Điều Khoản
          này, Chủ thể dữ liệu/Khách hàng tự nguyện đồng ý toàn bộ và cho phép DQH thực hiện các hành động để Xử lý dữ
          liệu cá nhân của Chủ thể dữ liệu/Khách hàng phù hợp với quy định của pháp luật.
          <br />
          2.2. Bằng việc cung cấp Dữ liệu cá nhân của một bên thứ ba là Chủ thể dữ liệu (bao gồm nhưng không giới hạn
          người phụ thuộc, người có liên quan theo quy định pháp luật, bạn bè, người tham chiếu, bên thụ hưởng, người
          được ủy quyền, đối tác, người liên hệ trong trường hợp khẩn cấp…) cho DQH, Khách hàng cam đoan đã có được sự
          đồng ý của Chủ thể dữ liệu cho việc Xử lý dữ liệu cá nhân theo Điều kiện Điều khoản này, đồng thời xác nhận đã
          thông báo và được sự đồng ý của Chủ thể dữ liệu về việc tuân thủ Điều kiện Điều khoản này.
          <br />
          2.3. Chủ thể dữ liệu/Khách hàng đã đọc, tìm hiểu và nắm được đầy đủ các quyền, nghĩa vụ của Chủ thể dữ liệu
          với tư cách là Chủ thể dữ liệu, loại Dữ liệu cá nhân được xử lý, mục đích xử lý và các tổ chức, cá nhân được
          Xử lý dữ liệu cá nhân. Bằng Điều kiện Điều khoản này, Chủ thể dữ liệu/Khách hàng đồng ý và thừa nhận rằng các
          thông tin nêu tại Điều kiện Điều khoản này có giá trị tương đương với một thông báo của DQH cho Chủ thể dữ
          liệu/Khách hàng trước khi DQH tiến hành Xử lý dữ liệu cá nhân. Theo đó, DQH không cần thực hiện thêm bất kỳ
          biện pháp nào khác nhằm mục đích thông báo việc Xử lý dữ liệu cá nhân cho Chủ thể dữ liệu/Khách hàng.
          <br />
          2.4. Kể từ thời điểm Chủ thể dữ liệu/Khách hàng cung cấp Dữ liệu cá nhân cho DQH và/hoặc DQH có được thông qua
          các hành động khác cho đến khi Chủ thể dữ liệu/Khách hàng không còn bất cứ giao dịch/nghĩa vụ nào khác tại DQH
          hoặc theo quyết định của DQH, tùy sự kiện nào xảy ra sau, DQH được phép Xử lý dữ liệu cá nhân của Chủ thể dữ
          liệu/Khách hàng cho các mục đích sau theo các cách thức DQH thấy cần thiết và không trái quy định của pháp
          luật:
          <Box ml="1rem">
            a) Triển khai, cung ứng các sản phẩm, dịch vụ cho Chủ thể dữ liệu/Khách hàng; xác lập bất cứ giao dịch nào
            giữa DQH với Chủ thể dữ liệu/Khách hàng;
            <br />
            b) Cung cấp, chuyển giao Dữ liệu cá nhân của Chủ thể dữ liệu/Khách hàng cho tổ chức, cá nhân có chức năng ký
            kết hợp đồng với DQH; tổ chức, cá nhân hợp tác với DQH để Triển khai, cung ứng các sản phẩm, dịch vụ cho Chủ
            thể dữ liệu/Khách hàng.
            <br />
            c) Triển khai hoạt động đánh giá, phân tích Dữ liệu cá nhân của Chủ thể dữ liệu/Khách hàng để đánh giá hiệu
            quả kinh doanh, thực hiện hoạt động kiểm toán; tư vấn pháp lý, sử dụng dịch vụ do Bên thứ ba cung cấp,
            marketing/truyền thông.Cung cấp, trao đổi thông tin với cơ quan nhà nước có thẩm quyền, các tổ chức, cá nhân
            khác phù hợp với quy định của pháp luật.
            <br />
            d) Các mục đích khác theo đánh giá của DQH trong từng thời kỳ.
          </Box>
          2.5. Chủ thể dữ liệu/Khách hàng xác nhận đồng ý và cam kết rằng:
          <Box ml="1rem">
            a) Đã được DQH thông báo và đồng ý cho DQH Xử lý dữ liệu cá nhân, trong mọi trường hợp Chủ thể dữ liệu/Khách
            hàng luôn duy trì sự đồng ý này. Mọi hành vi nhằm mục đích rút lại sự đồng ý của Chủ thể dữ liệu/Khách hàng
            (nếu có) sẽ không ảnh hưởng đến tính hợp pháp của việc Xử lý dữ liệu cá nhân đã được Chủ thể dữ liệu/Khách
            hàng đồng ý trước đó. Chủ thể dữ liệu/Khách hàng nhận thức rõ và chịu trách nhiệm trước mọi hậu quả, thiệt
            hại có thể xảy ra/phát sinh từ hành vi rút lại sự đồng ý của mình mà không cần thông báo từ DQH. Trường hợp
            Chủ thể dữ liệu/Khách hàng thực hiện không đúng làm ảnh hưởng đến việc Xử lý dữ liệu cá nhân, DQH được áp
            dụng các biện pháp cần thiết để bảo vệ quyền và lợi ích hợp pháp của DQH phù hợp với quy định của pháp luật
            và/hoặc các cam kết/thỏa thuận của Chủ thể dữ liệu/Khách hàng với DQH.
            <br />
            b) Trong trường hợp Chủ thể dữ liệu/Khách hàng rút lại sự đồng ý, DQH được chủ động liên hệ và yêu cầu Bên
            Kiểm soát dữ liệu/Bên Thứ ba ngừng thực hiện Xử lý dữ liệu cá nhân của Chủ thể dữ liệu/Khách hàng vào bất kỳ
            thời điểm nào mà DQH cho là phù hợp; theo thủ tục, trình tự và khả năng đáp ứng của cơ sở hạ tầng kỹ thuật,
            của DQH và/hoặc Bên Kiểm soát dữ liệu và/hoặc Bên Thứ ba trong từng thời kỳ. Trường hợp việc rút lại sự đồng
            ý không thực hiện được do yếu tố kỹ thuật hoặc khả năng đáp ứng của cơ sở hạ tầng, DQH được miễn trừ mọi
            nghĩa vụ và trách nhiệm liên quan đến yêu cầu rút lại sự đồng ý này của Chủ thể dữ liệu/Khách hàng.
            <br />
            c) Thông báo, cập nhật cho DQH mọi thay đổi liên quan đến Dữ liệu cá nhân của Chủ thể dữ liệu/Khách hàng và
            đồng ý DQH được toàn quyền cập nhật, chỉnh sửa Dữ liệu cá nhân của Chủ thể dữ liệu theo thông báo thay đổi
            mà Chủ thể dữ liệu/Khách hàng đã cung cấp.
            <br />
            d) DQH được quyền từ chối các yêu cầu xem, chỉnh sửa, xóa Dữ liệu cá nhân của Chủ thể dữ liệu/Khách hàng nếu
            xét thấy các yêu cầu nêu trên là không phù hợp.
            <br />
            e) Trường hợp việc xem, chỉnh sửa, xóa Dữ liệu cá nhân không thực hiện được do yếu tố kỹ thuật hoặc khả năng
            đáp ứng của cơ sở hạ tầng, DQH được miễn trừ mọi nghĩa vụ và trách nhiệm liên quan đến yêu cầu xem, chỉnh
            sửa, xóa Dữ liệu cá nhân này của Chủ thể dữ liệu/Khách hàng.
            <br />
            f) Trường hợp việc Chủ thể dữ liệu/Khách hàng rút lại sự đồng ý; yêu cầu xem, chỉnh sửa, xóa Dữ liệu cá nhân
            của Chủ thể dữ liệu/Khách hàng dẫn đến hệ quả các nghĩa vụ mà Chủ thể dữ liệu/Khách hàng phải đáp ứng khi sử
            dụng dịch vụ tại DQH, được quy định cụ thể tại các Hợp đồng/Thỏa thuận/Cam kết/Văn bản đã giao kết không còn
            phù hợp/ảnh hưởng đến quyền lợi DQH theo đánh giá của DQH, Chủ thể dữ liệu/Khách hàng đồng ý việc DQH được
            quyền thông báo cho Chủ thể dữ liệu/Khách hàng và chủ động lựa chọn thực hiện một trong các cách thức sau mà
            Chủ thể dữ liệu/Khách hàng không có bất kỳ phản đối nào:
          </Box>
          <Box ml="2rem">
            (i) Chấm dứt hiệu lực các Hợp đồng/Thỏa Thuận/Cam kết/Văn bản đã giao kết với Chủ thể dữ liệu/Khách hàng mà
            không phải chịu bất cứ trách nhiệm nào kể cả trong trường hợp việc chấm dứt làm phát sinh thiệt hại với Chủ
            thể dữ liệu/Khách hàng;
            <br />
            (ii) Đồng ý thực hiện theo yêu cầu của Chủ thể dữ liệu/Khách hàng;
            <br />
            (iii) Yêu cầu Chủ thể dữ liệu/Khách hàng rút lại yêu cầu. Trường hợp này, nếu Chủ thể dữ liệu/Khách hàng
            không chấp thuận rút lại yêu cầu, DQH tiếp tục được quyền thực hiện theo cách thức quy định tại điểm i) nêu
            trên.
          </Box>
          <Box ml="1rem">
            g) Miễn trừ cho DQH mọi nghĩa vụ và trách nhiệm về các rủi ro có thể xảy ra trong quá trình Xử lý dữ liệu cá
            nhân, bao gồm nhưng không giới hạn thất thoát dữ liệu do lỗi hệ thống, do các nguyên nhân khách quan nằm
            ngoài tầm kiểm soát của DQH.
          </Box>
        </Text>

        <Text
          bold
          mb="20px"
        >
          Điều 3. Tổ Chức Được Xử Lý Dữ Liệu Cá Nhân
        </Text>

        <Text small>
          3.1. Công ty TNHH DQH VN.
          <br />
          3.2. DQH sẽ thực hiện việc chia sẻ hoặc cùng xử lý dữ liệu cá nhân với các tổ chức, cá nhân sau:
        </Text>

        <Box ml="2rem">
          <Text small>
            a) Các nhà thầu, đại lý, đối tác, các nhà cung cấp dịch vụ vận hành của DQH.
            <br />
            b) Các chi nhánh, đơn vị kinh doanh và các cán bộ nhân viên làm việc tại các chi nhánh, đơn vị kinh doanh,
            đại lý của DQH.
            <br />
            c) Các doanh nghiệp kinh doanh viễn thông trong trường hợp Khách hàng vi phạm nghĩa vụ thanh toán cước dịch
            vụ.
            <br />
            d) Các cửa hàng thương mại và nhà bán lẻ liên quan tới việc thực hiện các chương trình khuyến mại của DQH.
            <br />
            e) Các cố vấn chuyên nghiệp của DQH như kiểm toán, luật sư,… theo quy định của pháp luật.
            <br />
            f) Tòa án, các cơ quan nhà nước có thẩm quyền phù hợp với quy định của pháp luật và/hoặc khi được yêu cầu và
            pháp luật cho phép.
          </Text>
        </Box>

        <Text
          small
          mb="20px"
        >
          3.3. DQH cam kết việc chia sẻ hoặc cùng xử lý dữ liệu cá nhân chỉ thực hiện trong trường hợp cần thiết để thực
          hiện các mục đích xử lý được nêu tại Chính sách này hoặc theo quy định của pháp luật. Các tổ chức, cá nhân
          nhận được dữ liệu cá nhân của Khách hàng sẽ phải tuân thủ theo nội dung quy định tại Chính sách này và quy
          định của pháp luật về bảo vệ dữ liệu cá nhân liên quan.
          <br />
          Mặc dù DQH sẽ thực hiện mọi nỗ lực để đảm bảo rằng các thông tin Khách hàng được ẩn danh/mã hóa, nhưng không
          thể loại trừ hoàn toàn rủi ro các dữ liệu này có thể bị tiết lộ trong những trường hợp bất khả kháng.
          <br />
          3.4. Trong trường hợp có sự tham gia của các tổ chức xử lý dữ liệu cá nhân khác được nêu tại Điều này, Khách
          hàng đồng ý DQH sẽ thông báo cho Khách hàng trước khi DQH thực hiện.
        </Text>

        <Text
          bold
          mb="20px"
        >
          Điều 4. Cách Thức Xử Lý Dữ Liệu
        </Text>
        <Text small>
          4.1. DQH áp dụng một hoặc nhiều hoạt động tác động tới dữ liệu cá nhân như: thu thập, ghi, phân tích, xác
          nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia
          sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan.
          <br />
          4.2. Hậu quả, thiệt hại không mong muốn có thể xảy ra:
          <br />
          DQH sử dụng nhiều công nghệ bảo mật thông tin khác nhau nhằm bảo vệ Dữ liệu cá nhân của Khách hàng không bị
          truy lục, sử dụng hoặc chia sẻ ngoài ý muốn. Tuy nhiên, không một dữ liệu nào có thể được bảo mật 100%. Do
          vậy, DQH cam kết sẽ bảo mật một cách tối đa trong khả năng cho phép Dữ liệu cá nhân của Khách hàng. Một số hậu
          quả, thiệt hại không mong muốn có thể xảy ra bao gồm nhưng không giới hạn:
        </Text>
        <Box
          ml="2rem"
          mb="20px"
        >
          <Text small>
            a) Lỗi phần cứng, phần mềm trong quá trình xử lý dữ liệu làm mất dữ liệu của Khách hàng;
            <br />
            b) Lỗ hổng bảo mật nằm ngoài khả năng kiểm soát của DQH, hệ thống có liên quan bị hacker tấn công gây lộ lọt
            dữ liệu; <br />
            c) Khách hàng tự làm lộ lọt dữ liệu cá nhân do: bất cẩn hoặc bị lừa đảo truy cập các website/tải các ứng
            dụng có chứa phần mềm độc hại, vv...
          </Text>
        </Box>

        <Text
          bold
          mb="20px"
        >
          Điều 5. Thông tin liên hệ xử lý dữ liệu cá nhân
        </Text>
        <Text
          mb="20px"
          small
        >
          Trường hợp Khách hàng có bất kỳ câu hỏi nào liên quan đến Chính sách này hoặc các vấn đề liên quan đến quyền
          của chủ thể dữ liệu hoặc xử lý dữ liệu cá nhân của Khách hàng, Khách hàng hàng có thể sử dụng các hình thức
          liên hệ nêu sau:
          <br />
          (1) Gửi thư về Công ty theo địa chỉ: Văn phòng làm việc Công ty TNHH DQH VN; địa chỉ: 15 Nguyễn Lương Bằng,
          phường Tân Phú, Quận 7, TP. HCM
          <br />
          (2) Gửi email về hòm thư điện tử: callcenter@nhapthuoc.com
          <br />
          (3) Hotline: 18006001
        </Text>

        <Text
          bold
          mb="20px"
        >
          Điều 6. Sửa đổi, bổ sung, thay thế Điều kiện Điều khoản
        </Text>
        <Text
          mb="20px"
          small
        >
          6.1. DQH được phép sửa đổi, bổ sung nội dung hoặc thay thế Điều kiện Điều khoản này vào bất cứ thời điểm nào
          DQH cho là phù hợp.
          <br />
          6.2. DQH sẽ thực hiện thông báo các nội dung sửa đổi, bổ sung, thay thế cho Chủ thể dữ liệu/Khách hàng bằng
          một trong các hình thức bao gồm: văn bản, email, thông báo trên phương tiện thông tin đại chúng, thông báo
          trên website chính thức của DQH, niêm yết tại trụ sở các điểm giao dịch của DQH và/hoặc các hình thức khác DQH
          đánh giá là phù hợp.
          <br />
          6.3. Nếu Chủ thể dữ liệu/Khách hàng tiếp tục sử dụng các sản phẩm, dịch vụ, thực hiện, giao kết các giao dịch
          với DQH sau thời điểm DQH thông báo được hiểu là Chủ thể dữ liệu/Khách hàng chấp nhận toàn bộ các sửa đổi, bổ
          sung, thay thế Điều kiện Điều khoản này của DQH.
        </Text>

        <Text
          bold
          mb="20px"
        >
          Điều 7. Giải quyết tranh chấp
        </Text>
        <Text
          mb="20px"
          small
        >
          Nếu có bất kỳ tranh chấp nào phát sinh hoặc liên quan đến việc Xử lý dữ liệu cá nhân thì Chủ thể dữ liệu/Khách
          hàng và DQH trước hết sẽ cùng nhau giải quyết thông qua thương lượng, hòa giải. Trong trường hợp hòa giải
          không thành, các bên có quyền đưa vụ tranh chấp đó ra Tòa án có thẩm quyền ở Việt Nam giải quyết.
        </Text>

        <Text
          bold
          mb="20px"
        >
          Điều 8. Điều khoản thi hành
        </Text>
        <Text
          mb="20px"
          small
        >
          8.1. Khách hàng đã biết rõ và đồng ý bản Chính sách này cũng là Thông báo xử lý dữ liệu cá nhân quy định tại
          Điều 13 Nghị định 13/NĐ-CP/2023 và được sửa đổi, bổ sung trong từng thời kỳ trước khi DQH tiến hành Xử lý dữ
          liệu cá nhân. Theo đó, DQH không cần thực hiện thêm bất kỳ biện pháp nào khác nằm mục đích thông báo việc Xử
          lý dữ liệu cá nhân cho Khách hàng.
          <br />
          8.2. Điều kiện Điều khoản về bảo vệ dữ liệu cá nhân này là một phần đính kèm, không tách rời với các cam kết,
          thỏa thuận của Chủ thể dữ liệu/Khách hàng với DQH và áp dụng đối với mọi Dữ liệu cá nhân, mọi giao dịch của
          Chủ thể dữ liệu/Khách hàng với DQH, thể hiện sự đồng ý toàn bộ của Chủ thể dữ liệu/Khách hàng đối với DQH
          trong việc Xử lý dữ liệu cá nhân của Chủ thể dữ liệu/Khách hàng. Điều kiện Điều khoản về bảo vệ dữ liệu cá
          nhân này sẽ được ưu tiên áp dụng trong trường hợp có bất kỳ mâu thuẫn nào với các thỏa thuận giữa Chủ thể dữ
          liệu/Khách hàng và DQH. Trường hợp có bất kỳ sự phản đối, đưa ra một/một số điều kiện liên quan trong việc cho
          phép Xử lý dữ liệu cá nhân, Chủ thể dữ liệu/Khách hàng sẽ chủ động liên hệ DQH theo các thông tin nêu tại Điều
          5 để được hỗ trợ.
        </Text>
      </Box>
    </StyledModal>
  );
};

export default Decree13Modal;
