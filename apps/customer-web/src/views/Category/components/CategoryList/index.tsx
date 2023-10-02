import { useMatchBreakpoints } from '@tsu-org/ui-kit';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { FC } from 'react';

export interface CategoryListProps {
  category: NhapThuocResponse.Categories.CategoryChildren | undefined;
  subCatesProductCountMap?: Record<string, number>;
}

const CategoryList: FC<CategoryListProps> = (props) => {
  const { isDesktop } = useMatchBreakpoints();

  return isDesktop ? <Desktop {...props} /> : <Mobile {...props} />;
};

export default CategoryList;
