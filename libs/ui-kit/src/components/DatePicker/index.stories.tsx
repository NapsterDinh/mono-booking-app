import type { ComponentStory } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './index';
const { RangePicker } = DatePicker;

export default {
  component: DatePicker,
  title: 'Components/DatePicker',
};

const TemplateBasic: ComponentStory<typeof DatePicker> = (args) => {
  const dateFormat = 'DD-MM-YYYY';
  return (
    <div>
      <div>Basic</div>
      <DatePicker
        {...args}
        format={dateFormat}
      />
    </div>
  );
};

export const Basic = TemplateBasic.bind({});
Basic.args = {
  onChange: (value, dateString) => console.log(value, dateString),
  inputReadOnly: true,
  allowClear: true,
  placeholder: 'Chọn ngày',
  size: 'middle',
};

const TemplateRange: ComponentStory<typeof RangePicker> = (args) => {
  const [searchDate, setSearchDate] = useState([]);
  return (
    <div>
      <div>RangePicker</div>
      <RangePicker
        {...args}
        onChange={(e: any) => setSearchDate(e)}
        value={[searchDate?.[0], searchDate?.[1]]}
      />
    </div>
  );
};

export const Range = TemplateRange.bind({});
Range.args = {
  style: { textTransform: 'none' },
  allowClear: true,
  inputReadOnly: true,
  placeholder: ['Từ ngày', 'Đến ngày'],
  format: 'DD-MM-YYYY',
  size: 'middle',
};
