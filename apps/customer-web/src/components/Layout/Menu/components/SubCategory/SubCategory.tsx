import { Row } from '@tsu-org/ui-kit';
import type { FC } from 'react';
import { useState } from 'react';
import Aside from './Aside';
import RightSubCategory from './RightSubCategory';
import { StyledSubCategory } from './styles';
import type { SubCategoryProps } from './types';

const SubCategory: FC<SubCategoryProps> = ({ category }) => {
  const [activeLevel2CategoryIndex, setActiveLevel2CategoryIndex] = useState(0);
  const activeLevel2Category = category?.children?.[activeLevel2CategoryIndex];

  const handleMouseEnter = (index: number) => {
    setActiveLevel2CategoryIndex(index);
  };

  return (
    <StyledSubCategory>
      <Row alignItems="start">
        <Aside
          activeCategoryIndex={activeLevel2CategoryIndex}
          level2Categories={category?.children}
          onMouseEnter={handleMouseEnter}
        />
        <RightSubCategory
          index={activeLevel2CategoryIndex}
          category={activeLevel2Category}
        />
      </Row>
    </StyledSubCategory>
  );
};

export default SubCategory;
