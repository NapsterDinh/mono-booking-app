import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Divider, Flex, Row, Text } from '@tsu-org/ui-kit';
import {
  BoxReturnGradientOrangeIcon,
  InvoiceGradientOrangeIcon,
  ShieldGradientOrangeIcon,
  TruckGradientOrangeIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC, Fragment } from 'react';

interface PoliciesProps extends AtomBoxProps {}

const policies = [
  {
    icon: <ShieldGradientOrangeIcon />,
    title: 'Thuốc chính hãng',
    description: 'hơn 20,000 sản phẩm',
  },
  {
    icon: <TruckGradientOrangeIcon />,
    title: 'Miễn phí vận chuyển',
    description: 'áp dụng đơn giao tiêu chuẩn từ 1.500.000đ',
  },
  {
    icon: <InvoiceGradientOrangeIcon />,
    title: 'Cấp hoá đơn VAT 100%',
    description: 'cho tất cả đơn hàng',
  },
  {
    icon: <BoxReturnGradientOrangeIcon />,
    title: 'Đổi trả trong 30 ngày',
    description: 'kể từ ngày mua hàng',
  },
];

const Policies: FC<PoliciesProps> = (props) => {
  return (
    <AtomBox {...props}>
      <Flex
        backgroundColor="white"
        border="1px solid"
        borderColor="divider"
        borderRadius="small"
        flexWrap={{
          _: 'wrap',
          xl: 'nowrap',
        }}
        justifyContent={{
          _: 'space-around',
          xl: 'space-between',
        }}
        rowGap="4"
        px="3"
        py="3"
      >
        {policies.map((policy, index) => (
          <Fragment key={index}>
            <Row
              gap="3"
              key={index}
              flexDirection={{
                xs: 'column',
                xl: 'row',
              }}
              justifyContent={{
                xs: 'center',
                xl: 'flex-start',
              }}
              width={{
                xs: '1of2',
                xl: 'fit',
              }}
            >
              {policy.icon}

              <div>
                <Text
                  textAlign={{
                    _: 'center',
                    xl: 'left',
                  }}
                  fontWeight="500"
                >
                  {policy.title}
                </Text>
                <Text
                  textAlign={{
                    _: 'center',
                    xl: 'left',
                  }}
                  color="textSecondary"
                  fontSize="13px"
                >
                  {policy.description}
                </Text>
              </div>
            </Row>

            {index < policies.length - 1 && (
              <Divider
                borderColor="#F79009"
                display={{
                  xl: 'block',
                  _: 'none',
                }}
                height="42px"
                type="vertical"
              />
            )}
          </Fragment>
        ))}
      </Flex>
    </AtomBox>
  );
};

export default Policies;
