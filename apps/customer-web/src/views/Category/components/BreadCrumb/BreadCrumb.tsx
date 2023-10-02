import { AtomBox, AtomBoxProps } from '@tsu-org/ui';
import Link from 'next/link';
import { StyleBreadCrumb } from './style';

interface IProps extends AtomBoxProps {
  items: any[];
}

function BreadCrumb({ items, ...rest }: IProps) {
  return (
    <AtomBox
      padding={'0p375rem'}
      {...rest}
    >
      <StyleBreadCrumb
        items={[
          {
            title: (
              <Link
                key="/"
                href="/"
              >
                Trang chủ
              </Link>
            ),
          },
          ...(items || []).map((category, index) => {
            return {
              title:
                index === items.length - 1 ? (
                  category.name
                ) : (
                  <Link
                    key={category.name}
                    href={`/${category.fullPathSlug}`}
                  >
                    {category.name}
                  </Link>
                ),
            };
          }),
        ]}
      />
    </AtomBox>
  );
}

export default BreadCrumb;
