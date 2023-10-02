import { Text } from '@tsu-org/ui-kit';
import map from 'lodash/map';
import type { FC } from 'react';
import CategoryDropdown from './components/CategoryDropdown';
import { ParentCategoryItem, StyledMenu } from './styles';
import type { MenuProps } from './types';

const Menu: FC<MenuProps> = (props) => {
  const { categories } = props;

  return (
    <StyledMenu
      className="nav-menu"
      display={['none', null, null, 'flex']}
      justifyContent="center"
      position="relative"
    >
      {map(categories, (category) =>
        category.children ? (
          <CategoryDropdown
            key={category.name}
            category={category}
          />
        ) : (
          <ParentCategoryItem
            key={category.name}
            href={category.fullPathSlug || '/'}
          >
            <Text fontWeight="500">{category.name}</Text>
          </ParentCategoryItem>
        ),
      )}
    </StyledMenu>
  );
};

export default Menu;
