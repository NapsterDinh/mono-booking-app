import Search from '@customer-web/views/Search';
import { useRouter } from 'next/router';

const SearchPage = () => {
  const { query } = useRouter();

  return <Search key={query.s as string} />;
};

export default SearchPage;
