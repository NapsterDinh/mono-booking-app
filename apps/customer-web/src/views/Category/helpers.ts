export const getBreadcrumbItems = (category: NhapThuocResponse.Categories.CategoryChildren) => {
  const items: {
    fullPathSlug: string;
    name: string;
  }[] = [];

  if (category?.fullPathSlug) {
    items.push({
      fullPathSlug: category.fullPathSlug,
      name: category.name,
    });
  }

  if (category?.parent?.fullPathSlug) {
    items.unshift({
      fullPathSlug: category.parent.fullPathSlug,
      name: category.parent.name,
    });
  }

  if (category?.root?.fullPathSlug) {
    items.unshift({
      fullPathSlug: category.root.fullPathSlug,
      name: category.root.name,
    });
  }

  return items;
};
