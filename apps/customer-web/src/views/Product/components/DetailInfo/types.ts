import type { AtomBoxProps } from '@tsu-org/ui';

export interface InfoSectionProps extends AtomBoxProps {
  product?: NhapThuocResponse.SearchService.ProductSearchDetail;
  content?: string;
}
