import { Breadcrumb as BaseBreadcrumb } from 'antd';
import { StyledBreadcrumb } from './styles';
import type { BreadcrumbProps } from './types';

const Breadcrumb = (props: BreadcrumbProps) => {
  return <StyledBreadcrumb {...props} />;
};

Breadcrumb.Item = BaseBreadcrumb.Item;

export default Breadcrumb;
