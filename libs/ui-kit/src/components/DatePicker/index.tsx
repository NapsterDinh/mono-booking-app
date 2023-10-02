import { DatePickerProps } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import locale from 'antd/es/date-picker/locale/vi_VN';
import 'dayjs/locale/vi';
import { DatePickerStyled, GlobalStyle, RangePickerStyled, StyleWrapperPanelDatePicker } from './styled';

export const DatePicker = (props: DatePickerProps) => {
  const panelRender = (panelNode: any) => <StyleWrapperPanelDatePicker>{panelNode}</StyleWrapperPanelDatePicker>;
  return (
    <DatePickerStyled
      className={`${props.className ? props.className : ''} estore-date-pickter`}
      panelRender={panelRender}
      {...props}
      locale={locale}
    />
  );
};
export const RangePicker = (props: RangePickerProps) => {
  const panelRender = (panelNode: any) => <StyleWrapperPanelDatePicker>{panelNode}</StyleWrapperPanelDatePicker>;
  return (
    <>
      <GlobalStyle />
      <RangePickerStyled
        className={`${props.className ? props.className : ''} estore-date-pickter`}
        panelRender={panelRender}
        {...props}
        locale={locale}
      />
    </>
  );
};
DatePicker.RangePicker = RangePicker;
export default DatePicker;
