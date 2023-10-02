import { useMatchBreakpoints } from '@tsu-org/ui-kit';
import Mobile from './Mobile';
import Desktop from './Desktop';

const ItemRow = (props) => {
  const { isDesktop } = useMatchBreakpoints();

  return isDesktop ? <Desktop {...props} /> : <Mobile {...props} />;
};

export default ItemRow;
