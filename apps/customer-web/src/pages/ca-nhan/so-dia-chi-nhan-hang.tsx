import AddressBooks from '@customer-web/views/Personal/AddressBooks';
import AuthProvider from '../../providers/AuthProvider';

const AddressBooksPage = (props) => {
  return (
    <AuthProvider>
      <AddressBooks {...props} />
    </AuthProvider>
  );
};

export default AddressBooksPage;
