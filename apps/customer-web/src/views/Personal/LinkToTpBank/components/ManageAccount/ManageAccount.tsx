import { useMatchBreakpoints } from '@tsu-org/ui-kit';
import { RefundInfoAccountInfo } from 'apps/nhapthuoc-estore/src/types/api/response/customer';
import { FC } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

export interface ManageAccountProps {
  onNewRegister: () => void;
  onSeeDetail: () => void;
  details: RefundInfoAccountInfo;
}

const ManageAccount: FC<ManageAccountProps> = (props) => {
  const { isDesktop } = useMatchBreakpoints();
  return isDesktop ? <Desktop {...props} /> : <Mobile {...props} />;
};

export default ManageAccount;
