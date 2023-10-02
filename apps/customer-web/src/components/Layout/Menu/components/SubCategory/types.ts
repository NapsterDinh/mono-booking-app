export interface SubCategoryProps {
  category: MenuAutoCate;
}

export interface AsideProps {
  activeCategoryIndex?: number;
  level2Categories?: MenuAutoCate[];
  onMouseEnter?: (index: number) => void;
}

export interface RightSubCategoryProps {
  index: number;
  category: MenuCateChildren;
}

export interface BestSellerListProps {
  products?: NhapThuocResponse.SearchService.ProductBasic[];
}
