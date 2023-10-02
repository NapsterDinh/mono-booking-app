import { verifyResetPasswordKey } from '@customer-web/request-providers/customer';
import RestorePassword from '@customer-web/views/RestorePassword';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let isValidKey = false;

  try {
    const key: any = context.query.key;
    await verifyResetPasswordKey(key);

    isValidKey = true;
  } catch (error) {}

  return {
    props: {
      isValidKey,
      layout: false,
    },
  };
}

const RestorePasswordPage = (props) => {
  return <RestorePassword {...props} />;
};

export default RestorePasswordPage;
