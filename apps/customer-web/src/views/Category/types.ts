export interface CategoryProps {
  category?: NhapThuocResponse.Categories.CategoryChildren;
  breadcrumbItems?: {
    fullPathSlug: string;
    name: string;
  }[];
}
