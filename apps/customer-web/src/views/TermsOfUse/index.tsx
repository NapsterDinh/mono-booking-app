import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Box, Column, Image, Link, Text } from '@tsu-org/ui-kit';
import { Fragment } from 'react';

const sections = [
  {
    title: 'I. Nguyên tắc chung',
    descriptions: [
      'Chào mừng bạn đến với Website thương mại điện tử (TMĐT) nhapthuoc.com do Công ty TNHH DQH VN thực hiện hoạt động và vận hành. Đối tượng phục vụ là công ty, tổ chức, nhà thuốc, quầy thuốc, phòng khám, cơ sở y tế đã được cấp quyền theo quy định của pháp luật về thương mại dược phẩm, vật tư y tế, các sản phẩm khác để phục vụ cho mục đích chuyên môn và thương mại tới người tiêu dùng. Khi thực hiện giao dịch, các đơn vị này cần có người chuyên môn theo đúng quy định của pháp luật và bảo đảm vận hành và sử dụng các sản phẩm đúng theo quy định pháp luật hiện hành.',
      'Sản phẩm được kinh doanh tại https://nhapthuoc.com/ phải đáp ứng đầy đủ các quy định của pháp luật, không bán hàng nhái, hàng không rõ nguồn gốc, hàng xách tay.',
      'Hoạt động mua bán tại https://nhapthuoc.com/ phải được thực hiện công khai, minh bạch, đảm bảo quyền lợi của khách hàng.',
      'BẰNG VIỆC SỬ DỤNG DỊCH VỤ HAY TẠO TÀI KHOẢN TẠI nhapthuoc.com, NGƯỜI SỬ DỤNG ĐÃ CHẤP NHẬN VÀ ĐỒNG Ý VỚI NHỮNG ĐIỀU KHOẢN DỊCH VỤ VÀ CHÍNH SÁCH BỔ SUNG ĐƯỢC QUY ĐỊNH TẠI VĂN BẢN NÀY.',
    ],
  },
  {
    title: 'II. Quy định chung',
    descriptions: [
      'Tên Miền website Thương mại Điện tử:',
      <Fragment key={1}>
        Website thương mại điện tử{' '}
        <Link
          external
          display="inline-block"
          href="/"
        >
          https://nhapthuoc.com/
        </Link>{' '}
        do Công ty TNHH DQH VN phát triển với tên miền giao dịch là:{' '}
        <Link
          external
          display="inline-block"
          href="/"
        >
          https://nhapthuoc.com/
        </Link>{' '}
        sau đây gọi tắt là: “nhapthuoc.com”.
      </Fragment>,
      'Định nghĩa chung:',
      'Người bán là Công ty TNHH DQH VN.',
      'Người mua là công ty, tổ chức, nhà thuốc, quầy thuốc, phòng khám, cơ sở y tế đã được cấp quyền theo quy định của pháp luật về thương mại dược phẩm, vật tư y tế và các sản phẩm khác. Người mua có quyền đăng ký tài khoản để thực hiện giao dịch.',
      'Thành viên là bao gồm cả người mua và người tham khảo thông tin, thảo luận tại website.',
      'Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành của Việt Nam. Thành viên khi tham gia website TMĐT nhapthuoc.com phải tự tìm hiểu trách nhiệm pháp lý của mình đối với luật pháp hiện hành của Việt Nam và cam kết thực hiện đúng những nội dung trong Quy chế này.',
    ],
  },
  {
    title: 'III. Quy trình giao dịch',
    descriptions: [
      <Text
        key={0}
        bold
      >
        Dành cho người mua hàng tại website TMĐT nhapthuoc.com sau khi đã tạo tài khoản
      </Text>,
      <Text key={1}>
        <b>Bước 1:</b> Tìm kiếm và chọn sản phẩm cần mua
      </Text>,
      <Text key={2}>
        <b>Bước 2:</b> Xem thông tin chi tiết sản phẩm đó
      </Text>,
      'Với các sản phẩm được phép giao dịch Online: Quý khách đồng ý muốn đặt hàng, quý khách chọn số lượng cần mua sau đó ấn vào nút “Chọn mua” và tới giỏ hàng điền thông tin mua hàng. Với các sản phẩm chỉ được phép tham khảo: Quý khách chọn “Chat với tư vấn viên” để được hỗ trợ.',
      <Text key={3}>
        <b>Bước 3:</b> Quý khách kiểm tra lại các thông tin mua hàng theo mẫu:
      </Text>,
      'Họ tên; Số điện thoại; Email',
      'Chọn địa chỉ nhận hàng',
      'Chọn phương thức giao hành “siêu tốc” hoặc “tiêu chuẩn”',
      <Text key={4}>
        Chọn phương thức thanh toán: Trả tiền mặt khi nhận hàng hoặc thanh toán online qua Thẻ thanh toán quốc tế{' '}
        <b>Visa, Master, JCB…</b>
      </Text>,
      <Text key={5}>
        <b>Bước 4:</b> Sau khi đã nhập đầy đủ thông tin, quý khách click “Hoàn tất” để đặt hàng
      </Text>,
      <Text key={6}>
        <b>Bước 5:</b> Sau khi nhận đơn hàng của đơn vị mua, nhapthuoc.com sẽ dùng hotline 1800 6001 để liên lạc với
        khách hàng qua thông tin số điện thoại quý khách hàng cung để xác thực thông tin đơn hàng.
      </Text>,
      <Text key={7}>
        <b>Bước 6:</b> nhapthuoc.com giao hàng tận nơi cho khách hàng qua đội ngũ giao hàng của công ty hoặc đơn vị vận
        chuyển thứ 3.
      </Text>,
      <Text
        key={8}
        bold
      >
        Dành cho bên bán hàng là nhapthuoc.com
      </Text>,
      'Niêm yết nội dung gồm: hình ảnh sản phẩm chụp thực tế hoặc hình ảnh do hãng sản xuất cung cấp, bài viết giới thiệu, thông tin chi tiết sản phẩm.',
      'Nhập liệu bằng công cụ quản lý riêng dành cho nhân viên nhapthuoc.com.',
      'Định dạng hình ảnh sử dụng trên website: jpg, png.',
      <Text
        key={9}
        bold
      >
        Quy trình giao nhận vận chuyển
      </Text>,
      'nhapthuoc.com thực hiện giao hàng trên toàn quốc. Khi nhận đơn hàng từ đơn vị mua và sau khi đã xác nhận thông tin mua hàng qua điện thoại, nhapthuoc.com sẽ tiến hành giao hàng theo yêu cầu của quý khách hàng.',
      'Giao hàng tận nơi trên toàn bộ 63 tỉnh thành áp dụng với các hàng hóa được mua bán online. Ngoại trừ các SP kiểm soát đặc biệt hoặc hàng cần cấp bảo quản lạnh.',
      'Miễn phí giao hàng với hóa đơn từ 1.500.000 đồng trở lên nếu giao trong cùng tỉnh/thành phố với kho/hub gần nhất.',
      'Với đơn hàng giao liên tỉnh/thành phố hoặc đơn hàng dưới 1.500.000 đồng, nhân viên nhapthuoc.com sẽ tư vấn chi tiết về cách thức giao nhận thuận tiện nhất. Chi phí vận chuyển, thời gian vận chuyển sẽ được cung cấp đến khách hàng khi nhân viên nhapthuoc.com gọi điện tư vấn cho khách hàng.',
      <Text key={10}>
        Với những đơn hàng phát sinh giao dịch từ 30 triệu đồng trở lên, Quý khách vui lòng thanh toán giá trị đơn hàng
        trực tiếp vào tài khoản công ty chỉ định khi nhân viên xác nhận đơn hàng. Tất cả các đơn hàng có giá trị &gt;30
        triệu, quý khách chỉ cần kiểm tra, xác nhận và nhận hàng. Không có phát sinh thanh toán nào cho nhân viên giao
        hàng.
        <br />
        Tham khảo thêm chi tiết tại:{' '}
        <Link
          display="inline-block"
          fontStyle="italic"
          href="/chinh-sach-giao-hang"
          external
          textDecoration="underline"
          hoverDecoration="underline"
        >
          Chính sách giao hàng
        </Link>
      </Text>,
      <Text
        key={11}
        bold
      >
        Quy trình đổi trả sản phẩm
      </Text>,
      <Text key={12}>
        Khách hàng có thể gửi yêu cầu trả hàng <b>trong vòng 07 ngày</b> kể từ lúc đơn hàng được giao hàng thành công.
      </Text>,
      <Text key={13}>
        Đối với các sản phẩm trả hàng liên quan đến chất lượng thì thời hạn gửi yêu cầu trả <b>trong vòng 30 ngày</b> kể
        từ lúc đơn hàng được giao hàng thành công.
      </Text>,
      'Đối với các sản phẩm đông lạnh không áp dụng chính sách đổi trả.',
      'Khách hàng được trả 1 phần đơn hàng hoặc toàn bộ đơn hàng.',
      <Text key={14}>
        Tham khảo thêm chi tiết tại:{' '}
        <Link
          display="inline-block"
          external
          fontStyle="italic"
          href="/chinh-sach-doi-tra"
          textDecoration="underline"
          hoverDecoration="underline"
        >
          Chính sách đổi trả hàng
        </Link>
      </Text>,
      <Text
        key={15}
        bold
      >
        Đối với giao dịch của nhapthuoc.com
      </Text>,
      'nhapthuoc.com tiếp nhận Khiếu nại Khách hàng qua các kênh sau:',
      <Box
        key={2}
        ml="1rem"
      >
        <Text mb="1rem">&bull; Tại fanpage facebook, website liên hệ, bình luận khách hàng</Text>
        <Text mb="1rem">&bull; Qua tổng đài giải quyết khiếu nại: 1800 6001- nhánh số 2</Text>
        <Text mb="1rem">&bull; Zalo: Nhập Thuốc - nhapthuoccom</Text>
        <Text mb="1rem">
          &bull; Email:{' '}
          <Link
            display="inline-block"
            href="mailto:callcenter@nhapthuoc.com"
          >
            callcenter@nhapthuoc.com
          </Link>
        </Text>
        <Text mb="1rem">&bull; Trực tiếp với các Trình Dược Viên khu vực, đại diện Công ty.</Text>
        <Text>
          &bull; Trụ sở chính của công ty tại số 15 Nguyễn Lương Bằng, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh
        </Text>
      </Box>,
    ],
  },
  {
    title: 'IV. Quy trình thanh toán',
    descriptions: [
      'Dành cho người mua hàng tại website TMĐT nhapthuoc.com',
      'Người mua và bên bán có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:',
      <Text
        key={0}
        bold
      >
        Cách 1: Thanh toán sau (COD – giao hàng và thu tiền tận nơi)
      </Text>,
      <Text key={1}>
        <b>Bước 1:</b> Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin
      </Text>,
      <Text key={2}>
        <b>Bước 2:</b> Người mua xác thực đơn hàng (điện thoại, tin nhắn, email)
      </Text>,
      <Text key={3}>
        <b>Bước 3:</b> Người bán xác nhận thông tin Người mua
      </Text>,
      <Text key={4}>
        <b>Bước 4:</b> Người bán chuyển hàng
      </Text>,
      <Text key={5}>
        <b>Bước 5:</b> Người mua nhận hàng và thanh toán cho nhân viên/đơn vị giao hàng.
      </Text>,
      <Text
        key={6}
        bold
      >
        Cách 2: Thanh toán online
      </Text>,
      <Text key={7}>
        <b>Bước 1:</b> Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin
      </Text>,
      <Text key={2}>
        <b>Bước 2:</b> Người mua xác thực đơn hàng (điện thoại, tin nhắn, email)
      </Text>,
      <Text key={3}>
        <b>Bước 3:</b> Người mua thanh toán bằng thẻ ATM nội địa hoặc thẻ tín dụng
      </Text>,
      <Text key={4}>
        <b>Bước 4:</b> Người bán chuyển hàng
      </Text>,
      <Text key={5}>
        Tham khảo thêm chi tiết tại:{' '}
        <Link
          display="inline-block"
          external
          fontStyle="italic"
          href="/chinh-sach-thanh-toan"
          textDecoration="underline"
          hoverDecoration="underline"
        >
          Chính sách thanh toán và hóa đơn
        </Link>
      </Text>,
    ],
  },
  {
    title: 'V. Đảm bảo an toàn giao dịch',
    descriptions: [
      'Người mua nên cung cấp thông tin đầy đủ và chính xác (tên, địa chỉ, số điện thoại, email) khi tham gia mua hàng của nhapthuoc.com để nhapthuoc.com có thể liên hệ nhanh lại với người mua trong trường hợp xảy ra lỗi hoặc xác nhận thông tin.',
      'Khi thanh toán trực tuyến bằng thẻ ATM nội địa, Visa, Master người mua nên tự mình thực hiện và không được để lộ thông tin thẻ. nhapthuoc.com  không lưu trữ thông tin thẻ của người mua sau khi thanh toán, mà thông qua hệ thống của ngân hàng liên kết nên tuyệt đối bảo mật thông tin thẻ cho khách hàng.',
      'Trong trường hợp lỗi xảy ra trong quá trình thanh toán trực tuyến, Công ty TNHH DQH VN (nhapthuoc.com) sẽ là đơn vị giải quyết cho khách hàng trong thời gian sớm nhất kể từ khi tiếp nhận thông tin từ người thực hiện giao dịch.',
    ],
  },
  {
    title: 'VI. Bảo vệ thông tin cá nhân khách hàng',
    descriptions: [
      'nhapthuoc.com cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn. Bạn vui lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy cập:',
      <Text
        key={0}
        bold
      >
        1. Mục đích
      </Text>,
      'nhapthuoc.com chỉ thu thập thông tin liên lạc cần thiết để xác nhận thông tin và thực hiện giao dịch giữa nhapthuoc.com với khách hàng mà không lấy thêm thông tin gì khác. Thông tin của khách hàng sẽ chỉ được lưu lại khi khách hàng tạo tài khoản và xác nhận thông tin về cơ sở kinh doanh. nhapthuoc.com thu thập và sử dụng thông tin cá nhân của khách hàng với mục đích phù hợp và hoàn toàn tuân thủ theo pháp luật. nhapthuoc.com cam kết không chia sẻ hay sử dụng thông tin cá nhân của khách hàng cho một bên thứ 3 nào khác với mục đích lợi nhuận. Thông tin của khách hàng sẽ chỉ được sử dụng trong nội bộ nhapthuoc.com. Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với khách hàng dưới các hình thức như: điện thoại, gửi thư điện tử, gửi tin nhắn… Khách hàng cũng có thể nhận được thư định kỳ cung cấp thông tin sản phẩm, dịch vụ mới, thông tin về các chương trình khuyến mãi.',
      <Text
        key={1}
        bold
      >
        2. Phạm vi sử dụng thông tin
      </Text>,
      'Những thông tin trên chỉ được sử dụng cho những mục đích sau đây:',
      <Box
        key={2}
        ml="1rem"
      >
        <Text mb="1rem">&bull; Giao hàng cho các đơn hàng được đặt mua trên tại nhapthuoc.com</Text>
        <Text mb="1rem">&bull; Thông báo giao hàng và hỗ trợ khách hàng</Text>
        <Text mb="1rem">&bull; Cung cấp thông tin sản phẩm</Text>
        <Text mb="1rem">&bull; Xử lý đơn đặt hàng và cung cấp dịch vụ của chúng tôi theo yêu cầu của khách hàng</Text>
        <Text>&bull; Chia sẻ cho dịch vụ chuyển phát nhanh để giao hàng</Text>
      </Box>,
      'Ngoài ra, chúng tôi sẽ sử dụng thông tin của khách hàng trong việc quản lý tài khoản, giao dịch tài chính, kiểm tra dữ liệu để cải thiện tính năng của nhapthuoc.com nhằm mang đến cho khách hàng những trải nghiệm tốt nhất khi mua hàng tại nhapthuoc.com.',
      'nhapthuoc.com cam kết không chia sẻ hay sử dụng thông tin cá nhân của khách hàng cho một bên thứ 3 nào khác với mục đích lợi nhuận. Thông tin của khách hàng sẽ chỉ được sử dụng trong nội bộ nhapthuoc.com. Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với khách hàng dưới các hình thức như: điện thoại, gửi thư điện tử, gửi tin nhắn… Khách hàng cũng có thể nhận được thư định kỳ cung cấp thông tin sản phẩm, dịch vụ mới, thông tin về các chương trình khuyến mãi.',
      <Text
        key={3}
        bold
      >
        3. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân của khách hàng
      </Text>,
      'Khách hàng đồng ý rằng, trong trường hợp cần thiết, các cơ quan/ tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân của mình, bao gồm:',
      <Box
        key={4}
        ml="1rem"
      >
        <Text mb="1rem">&bull; Ban quản trị, nhân viên Công ty TNHH DQH VN</Text>
        <Text mb="1rem">&bull; Bên thứ ba có dịch vụ tích hợp với nhapthuoc.com</Text>
        <Text mb="1rem">&bull; Đơn vị vận chuyển liên kết với Công ty TNHH DQH VN để giao hàng cho khách hàng</Text>
        <Text mb="1rem">&bull; Cố vấn tài chính, pháp lý và Công ty kiểm toán</Text>
        <Text mb="1rem">&bull; Bên khiếu nại chứng minh được hành vi vi phạm của khách hàng</Text>
        <Text>&bull; Theo yêu cầu của cơ quan nhà nước có thẩm quyền</Text>
      </Box>,
      <Text
        key={5}
        bold
      >
        4. Thời gian lưu trữ thông tin
      </Text>,
      'Thông tin của khách hàng sẽ được giữ đúng trong thời hạn pháp luật quy định hoặc chỉ sử dụng cho mục đích mà thông tin đó được thu thập.',
      <Text
        key={6}
        bold
      >
        5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
      </Text>,
      <Box
        key={7}
        ml="1rem"
      >
        <Text mb="1rem">&bull; Đơn vị: Công ty TNHH DQH VN</Text>
        <Text mb="1rem">&bull; Người đại diện pháp lý: Ông Huỳnh Quang Long</Text>
        <Text mb="1rem">&bull; Địa chỉ văn phòng: 15 Nguyễn Lương Bằng, Quận 7, Tp.HCM</Text>
        <Text mb="1rem">&bull; Số điện thoại: (028) 730 66 999</Text>
        <Text>
          &bull; Email:{' '}
          <Link
            display="inline-block"
            href="mailto:sales@nhapthuoc.com"
          >
            sales@nhapthuoc.com
          </Link>
        </Text>
      </Box>,
      <Text
        key={8}
        bold
      >
        6. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình
      </Text>,
      'Bất cứ thời điểm nào khách hàng cũng có thể truy cập và chỉnh sửa những thông tin cá nhân của mình theo các bước hướng dẫn thích hợp mà chúng tôi cung cấp.',
      <Text
        key={9}
        bold
      >
        7. Cam kết bảo vệ thông tin cá nhân khách hàng
      </Text>,
      'nhapthuoc.com luôn đảm bảo rằng mọi thông tin cá nhân của khách hàng sẽ được lưu giữ an toàn. Ngoại trừ các trường hợp về việc sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông tin cá nhân khách hàng ra ngoài vì mục đích thương mại. Chúng tôi có thể tiết lộ hoặc cung cấp thông tin cá nhân của khách hàng trong các trường hợp thật sự cần thiết như sau:',
      <Box
        key={10}
        ml="1rem"
      >
        <Text mb="1rem">&bull; Khi có yêu cầu của cơ quan pháp luật</Text>
        <Text mb="1rem">
          &bull; Trong trường hợp mà điều đó giúp chúng tôi bảo vệ quyền lợi chính đáng của mình trước pháp luật
        </Text>
        <Text>&bull; Tình huống khẩn cấp và cần thiết để bảo đảm quyền an toàn cá nhân của các thành viên khác</Text>
      </Box>,
      <Text
        key={11}
        bold
      >
        8. Thay đổi chính sách bảo mật
      </Text>,
      'nhapthuoc.com có quyền thay đổi và chỉnh sửa chính sách bảo mật này vào bất kỳ lúc nào. Chúng tôi sẽ cập nhật những thay đổi tại nhapthuoc.com. Nếu khách hàng có khiếu nại hay đóng góp về chính sách của chúng tôi, xin vui lòng liên hệ với chúng tôi qua hai hình thức sau:',
      <Box
        key={12}
        ml="1rem"
      >
        <Text mb="1rem">&bull; Hotline miễn phí: 1800 6001</Text>
        <Text>
          &bull; Email:{' '}
          <Link
            display="inline-block"
            href="mailto:callcenter@nhapthuoc.com"
          >
            callcenter@nhapthuoc.com
          </Link>
        </Text>
      </Box>,
      'Ban quản trị cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là trong vòng 24 giờ làm việc kể từ thời điểm nhận được khiếu nại.',
    ],
  },
  {
    title: 'VII. Quản lý thông tin xấu',
    descriptions: [
      <Text
        key={0}
        bold
      >
        Quy định thành viên
      </Text>,
      'Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu của mình. Thành viên có trách nhiệm thông báo kịp thời cho website TMĐT nhapthuoc.com về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.',
      'Thành viên không được thay đổi, chỉnh sửa, gán ghép, copy, truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do website TMĐT nhapthuoc.com cung cấp cho một bên thứ ba nếu không được sự đồng ý của website TMĐT nhapthuoc.com trong bản Quy chế này.',
      'Thành viên không được hành động gây mất uy tín của website TMĐT nhapthuoc.com dưới mọi hình thức như gây mất đoàn kết giữa các thành viên bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin không có lợi cho uy tín của website TMĐT nhapthuoc.com.',
    ],
  },
  {
    title: 'VIII. Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật',
    descriptions: [
      'Website TMĐT nhapthuoc.com cam kết nỗ lực đảm bảo sự an toàn và ổn định của toàn bộ hệ thống kỹ thuật. Tuy nhiên, trong trường hợp xảy ra sự cố do lỗi của nhapthuoc.com, nhapthuoc.com sẽ ngay lập tức áp dụng các biện pháp để đảm bảo quyền lợi cho người mua hàng.',
      'Khi thực hiện các giao dịch trên website, bắt buộc các thành viên phải thực hiện đúng theo các quy trình hướng dẫn.',
      'Ban quản lý website TMĐT nhapthuoc.com cam kết cung cấp chất lượng dịch vụ tốt nhất cho các thành viên tham gia giao dịch. Trường hợp phát sinh lỗi kỹ thuật, lỗi phần mềm hoặc các lỗi khách quan khác dẫn đến thành viên không thể tham gia giao dịch được thì các thành viên thông báo cho Ban quản lý website TMĐT qua địa chỉ email callcenter@nhapthuoc.com hoặc qua điện thoại 1800 6001 (từ 8:00 – 22:00 hằng ngày) chúng tôi sẽ khắc phục lỗi trong thời gian sớm nhất, tạo điều kiện cho các thành viên tham gia website TMĐT nhapthuoc.com.',
      'Tuy nhiên, Ban quản lý website TMĐT nhapthuoc.com sẽ không chịu trách nhiệm giải quyết trong trường hợp thông báo của các thành viên không đến được Ban quản lý, phát sinh từ lỗi kỹ thuật, lỗi đường truyền, phần mềm hoặc các lỗi khác không do Ban quản lý gây ra.',
    ],
  },
  {
    title: 'IX. Quyền và nghĩa vụ của Ban quản lý website TMĐT nhapthuoc.com',
    descriptions: [
      <Text
        key={0}
        bold
      >
        1. Quyền của Ban quản lý nhapthuoc.com
      </Text>,
      'Website TMĐT nhapthuoc.com sẽ tiến hành cung cấp các dịch vụ, sản phẩm cho khách hàng sau khi đã hoàn thành các thủ tục và các điều kiện bắt buộc mà nhapthuoc.com nêu ra. nhapthuoc.com sẽ tiến hành xây dựng các chính sách dịch vụ trên trang web. Các chính sách này sẽ được công bố trên nhapthuoc.com.',
      'Trong trường hợp có cơ sở để chứng minh thành viên cung cấp thông tin cho nhapthuoc.com không chính xác, sai lệch, không đầy đủ hoặc có dấu hiệu vi phạm pháp luật hay thuần phong mỹ tục Việt Nam thì trang giao dịch điện tử nhapthuoc.com có quyền từ chối, tạm ngừng hoặc chấm dứt quyền sử dụng dịch vụ của thành viên.',
      'Website TMĐT nhapthuoc.com có thể chấm dứt quyền thành viên và quyền sử dụng một hoặc tất cả các dịch vụ của thành viên trong trường hợp thành viên vi phạm các Quy chế của Website TMĐT nhapthuoc.com, hoặc có những hành vi ảnh hưởng đến hoạt động kinh doanh trên Website TMĐT nhapthuoc.com.',
      'Website TMĐT nhapthuoc.com có thể chấm dứt ngay quyền sử dụng dịch vụ và quyền thành viên của thành viên nếu Website TMĐT nhapthuoc.com phát hiện thành viên tiếp tục hoạt động có thể gây cho Website TMĐT nhapthuoc.com trách nhiệm pháp lý, có những hoạt động lừa đảo, giả mạo, gây rối loạn thị trường, gây mất đoàn kết đối với các thành viên khác của Website TMĐT nhapthuoc.com, hoạt động vi phạm pháp luật hiện hành của Việt Nam.',
      'Trong trường hợp chấm dứt quyền thành viên và quyền sử dụng dịch vụ thì tất cả các chứng nhận, các quyền của thành viên được cấp sẽ mặc nhiên hết giá trị và bị chấm dứt.',
      'Website TMĐT nhapthuoc.com giữ bản quyền sử dụng dịch vụ và các nội dung trên Website TMĐT nhapthuoc.com theo các quy định pháp luật về bảo hộ sở hữu trí tuệ tại Việt Nam. Tất cả các biểu tượng, nội dung theo các ngôn ngữ khác nhau đều thuộc quyền sở hữu của Website TMĐT nhapthuoc.com. Nghiêm cấm mọi hành vi sao chép, sử dụng và phổ biến bất hợp pháp các quyền sở hữu trên.',
      'Website TMĐT nhapthuoc.com giữ quyền được thay đổi bảng, biểu giá dịch vụ và phương thức thanh toán trong thời gian cung cấp dịch vụ cho thành viên theo nhu cầu và điều kiện khả năng của Website TMĐT nhapthuoc.com.',
      <Text
        key={1}
        bold
      >
        2. Nghĩa vụ của Ban quản lý nhapthuoc.com
      </Text>,
      'Website TMĐT nhapthuoc.com chịu trách nhiệm xây dựng dịch vụ bao gồm một số công việc chính như: nghiên cứu, thiết kế, mua sắm các thiết bị phần cứng và phần mềm, kết nối Internet, xây dựng chính sách phục vụ cho hoạt động Website TMĐT nhapthuoc.com trong điều kiện và phạm vi cho phép.',
      'Website TMĐT nhapthuoc.com sẽ tiến hành triển khai và hợp tác với các đối tác trong việc xây dựng hệ thống các dịch vụ, các công cụ tiện ích phục vụ cho việc giao dịch của các thành viên tham gia và người sử dụng trên Website TMĐT nhapthuoc.com.',
      'Website TMĐT nhapthuoc.com chịu trách nhiệm xây dựng, bổ sung hệ thống các kiến thức, thông tin về: nghiệp vụ ngoại thương, thương mại điện tử, hệ thống văn bản pháp luật thương mại trong nước và quốc tế, thị trường nước ngoài, cũng như các tin tức có liên quan đến hoạt động của Website TMĐT nhapthuoc.com.',
      'Website TMĐT nhapthuoc.com sẽ tiến hành các hoạt động xúc tiến, quảng bá Website TMĐT nhapthuoc.com ra thị trường nước ngoài trong phạm vi và điều kiện cho phép, góp phần mở rộng, kết nối đáp ứng các nhu cầu tìm kiếm bạn hàng và phát triển thị trường nước ngoài của các thành viên tham gia Website TMĐT nhapthuoc.com.',
      'Website TMĐT nhapthuoc.com sẽ cố gắng đến mức cao nhất trong phạm vi và điều kiện có thể để duy trì hoạt động bình thường của Website TMĐT nhapthuoc.com và khắc phục các sự cố như: sự cố kỹ thuật về máy móc, lỗi phần mềm, hệ thống đường truyền internet, nhân sự, các biến động xã hội, thiên tai, mất điện, các quyết định của cơ quan nhà nước hay một tổ chức liên quan thứ ba. Tuy nhiên nếu những sự cố trên xảy ra nằm ngoài khả năng kiểm soát, là những trường hợp bất khả kháng mà gây thiệt hại cho thành viên thì Website TMĐT nhapthuoc.com không phải chịu trách nhiệm liên đới.',
      'Website TMĐT nhapthuoc.com phải có trách nhiệm:',
      'Xây dựng và thực hiện cơ chế để đảm bảo việc đăng thông tin trên Website TMĐT nhapthuoc.com được thực hiện chính xác.',
      'Không đăng tải những thông tin bán hàng hóa, dịch vụ thuộc danh mục hàng hóa, dịch vụ cấm kinh doanh theo quy định của pháp luật và hàng hóa hạn chế kinh doanh theo quy định tại Thông tư 47/2014/TT-BCT.',
    ],
  },
  {
    title: 'X. Quyền và trách nhiệm thành viên tham gia website TMĐT nhapthuoc.com',
    descriptions: [
      <Text
        key={0}
        bold
      >
        1. Quyền của Thành viên Website TMĐT nhapthuoc.com
      </Text>,
      'Khi đăng ký trở thành thành viên của nhapthuoc.com và được nhapthuoc.com đồng ý, thành viên sẽ được tham gia thảo luận, đánh giá sản phẩm, mua hàng tại nhapthuoc.com.',
      'Thành viên có quyền đóng góp ý kiến cho Website TMĐT nhapthuoc.com trong quá trình hoạt động. Các kiến nghị được gửi trực tiếp bằng thư, fax hoặc email đến cho Website TMĐT nhapthuoc.com.',
      <Text
        key={1}
        bold
      >
        2. Nghĩa vụ của Ban quản lý nhapthuoc.com
      </Text>,
      'Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ và mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình.',
      'Thành viên cam kết những thông tin cung cấp cho Website TMĐT nhapthuoc.com và những thông tin đang tải lên Website TMĐT nhapthuoc.com là chính xác.',
      'Thành viên cam kết không được thay đổi, chỉnh sửa, sao chép, truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do Website TMĐT nhapthuoc.com cung cấp cho một bên thứ ba nếu không được sự đồng ý của Website TMĐT nhapthuoc.com trong Quy định này.',
      'Thành viên không được hành động gây mất uy tín của Website TMĐT nhapthuoc.com dưới mọi hình thức như gây mất đoàn kết giữa các thành viên bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin không có lợi cho uy tín của Website TMĐT nhapthuoc.com.',
    ],
  },
  {
    title: 'XI. Điều khoản áp dụng',
    descriptions: [
      'Mọi tranh chấp phát sinh giữa Website TMĐT nhapthuoc.com và thành viên sẽ được giải quyết trên cơ sở thương lượng. Trường hợp không đạt được thỏa thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa án nhân dân có thẩm quyền tại Thành phố Hồ Chí Minh để giải quyết.',
      'Quy chế của Website TMĐT nhapthuoc.com chính thức có hiệu lực thi hành kể từ ngày ký Quyết định ban hành kèm theo Quy chế này. Website TMĐT nhapthuoc.com có quyền và có thể thay đổi Quy chế này bằng cách thông báo lên Website TMĐT nhapthuoc.com cho các thành viên biết. Quy chế sửa đổi có hiệu lực kể từ ngày Quyết định về việc sửa đổi Quy chế có hiệu lực. Việc thành viên tiếp tục sử dụng dịch vụ sau khi Quy chế sửa đổi được công bố và thực thi đồng nghĩa với việc họ đã chấp nhận Quy chế sửa đổi này.',
    ],
  },
];

const Descriptions = styled.ul`
  list-style-type: none;

  li {
    font-size: 16px;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const TermsOfUse = () => {
  return (
    <Box
      width={['100%', null, null, null, null, '65vw']}
      mx="auto"
      my={['0', null, null, null, null, '2rem']}
    >
      <AtomBox
        bgc="white"
        pt={['1p5rem', null, null, null, '6']}
        borderRadius="12px"
        position="relative"
      >
        <AtomBox
          px="5"
          pb="6"
        >
          <Text
            as="h3"
            fontSize={['1.25rem', null, null, null, null, '1.75rem']}
            bold
            mb={['1rem', null, null, null, null, '2rem']}
            textAlign="center"
          >
            ĐIỀU KHOẢN SỬ DỤNG
          </Text>

          <Column gap="3">
            {sections.map((section, index) => (
              <div key={index}>
                <Text
                  fontSize={['1.125rem', null, null, null, null, '1.25rem']}
                  mb="0.75rem"
                  bold
                >
                  {section.title}
                </Text>

                <Descriptions>
                  {section.descriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </Descriptions>
              </div>
            ))}

            <Text>
              TÔI ĐÃ ĐỌC CÁC ĐIỀU KHOẢN DỊCH VỤ NÀY VÀ ĐỒNG Ý VỚI TẤT CẢ CÁC ĐIỀU KHOẢN NHƯ TRÊN CŨNG NHƯ BẤT KỲ ĐIỀU
              KHOẢN NÀO ĐƯỢC CHỈNH SỬA SAU NÀY. BẰNG CÁCH BẤM NÚT “ĐĂNG KÝ” HOẶC “TẠO TÀI KHOẢN” KHI ĐĂNG KÝ SỬ DỤNG
              TRANG TMĐT, TÔI HIỂU RẰNG TÔI ĐANG TẠO CHỮ KÝ ĐIỆN TỬ MÀ TÔI HIỂU RẰNG NÓ CÓ GIÁ TRỊ VÀ HIỆU LỰC TƯƠNG TỰ
              NHƯ CHỮ KÝ TÔI KÝ BẰNG TAY.
            </Text>
          </Column>
        </AtomBox>

        <Box>
          <Image
            alt=""
            src="/images/terms-of-use-cover-background.svg"
            width="100%"
          />
        </Box>
      </AtomBox>
    </Box>
  );
};

export default TermsOfUse;
