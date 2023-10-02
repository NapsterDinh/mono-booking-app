import { getCustomMeta } from '@customer-web/constants/meta';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const PageMeta: React.FC<
  React.PropsWithChildren<{
    pageTitle?: string;
    pageDescription?: string;
    openGraph?: any;
  }>
> = ({ pageTitle, pageDescription, openGraph }) => {
  const { pathname } = useRouter();

  const pageMeta = getCustomMeta(pathname);
  const title = pageTitle || pageMeta?.title || 'nhapthuoc.com';
  const description = pageDescription || pageMeta?.description;
  const formattedOpenGraph = {
    ...(openGraph || {
      images: [
        {
          url: pageMeta?.image || 'https://nhapthuoc.com/favicon.ico',
          alt: title || 'nhapthuoc.com',
          type: pageMeta?.image ? 'image/jpeg' : undefined,
        },
      ],
    }),
  };

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={formattedOpenGraph}
    />
  );
};

export default PageMeta;
