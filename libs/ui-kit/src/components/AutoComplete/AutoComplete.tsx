import { AutoComplete as BaseAutoComplete } from 'antd';
import { StyledAutoComplete } from './styles';

const AutoComplete = (props: any) => {
  return <StyledAutoComplete {...props} />;
};

AutoComplete.Option = BaseAutoComplete.Option;

export default AutoComplete;
