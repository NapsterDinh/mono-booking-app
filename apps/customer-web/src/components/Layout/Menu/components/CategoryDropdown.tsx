import { Link, Text } from '@tsu-org/ui-kit';
import { DownOutlinedIcon, UpOrangeGradientIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Dropdown } from 'antd';
import map from 'lodash/map';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import { ParentCategoryItem } from '../styles';
import type { CategoryDropdownProps } from '../types';
import { overlayStyles } from './CategoryDropdown.css';

const SubCategory = dynamic(() => import('./SubCategory/SubCategory'), {
  ssr: false,
});

const CategoryDropdown: FC<CategoryDropdownProps> = ({ category }) => {
  return (
    <Dropdown
      menu={{
        items: map(category.children, (item) => ({
          key: item.name,
          label: <Link href={item.fullPathSlug || '/'}>{item.name}</Link>,
        })),
      }}
      dropdownRender={() => <SubCategory category={category as MenuAutoCate} />}
      getPopupContainer={() => document.querySelector('.nav-menu')!}
      overlayClassName={overlayStyles}
    >
      <div>
        <ParentCategoryItem
          color="textPrimary"
          href={category.fullPathSlug || '/'}
        >
          <Text
            mr="0.5rem"
            fontWeight="500"
          >
            {category.name}
          </Text>
          <UpOrangeGradientIcon className="up-icon" />
          <DownOutlinedIcon className="down-icon" />
        </ParentCategoryItem>
      </div>
    </Dropdown>
  );
};

export default CategoryDropdown;
