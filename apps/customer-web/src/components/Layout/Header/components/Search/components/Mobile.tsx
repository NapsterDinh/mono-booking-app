import { useAppDispatch } from '@customer-web/state';
import { setFocusedSearchInput } from '@customer-web/state/global/actions';
import { AtomBox } from '@tsu-org/ui';
import { Button } from '@tsu-org/ui-kit';
import { SearchIcon } from '@tsu-org/ui-kit/components/Svg/Icons';

const Mobile = () => {
  const dispatch = useAppDispatch();

  const handleFocus = () => {
    dispatch(setFocusedSearchInput(true));
  };

  return (
    <AtomBox
      display={{
        xs: 'flex',
        lg: 'none',
      }}
    >
      <Button
        aria-label="header-search-btn"
        type="link"
      >
        <SearchIcon
          color="white"
          onClick={handleFocus}
        />
      </Button>
    </AtomBox>
  );
};

export default Mobile;
