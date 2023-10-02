import { AtomBox } from '@tsu-org/ui';
import { Flex } from '@tsu-org/ui-kit';
import SearchInput from './SearchInput';

const Desktop = () => {
  return (
    <AtomBox
      display={{
        lg: 'flex',
        xs: 'none',
      }}
      flexGrow={1}
    >
      <Flex
        width="680px"
        flexGrow="1"
      >
        <SearchInput device="desktop" />
      </Flex>
    </AtomBox>
  );
};

export default Desktop;
