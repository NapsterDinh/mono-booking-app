import { Box, Divider, Image, Input, Select, SelectProps } from '@tsu-org/ui-kit';
import { SearchIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Select as AntdSelect, Space } from 'antd';
import { FC, SyntheticEvent, useEffect, useState } from 'react';

interface BankSelectProps {
  banks?: NhapThuocResponse.Payments.Bank[];
  onChange?: SelectProps['onChange'];
}

const BankSelect: FC<BankSelectProps> = ({ banks, onChange }) => {
  const [keyword, setKeyword] = useState('');
  const [filteredBanks, setFilteredBanks] = useState<NhapThuocResponse.Payments.Bank[]>([]);

  const handleSearch = (event: SyntheticEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };

  const handleDropdownVisibleChange = (visible: boolean) => {
    if (!visible) {
      setKeyword('');
    }
  };

  useEffect(() => {
    if (!keyword) {
      setFilteredBanks(banks || []);

      return;
    }

    const filteredBanks = banks?.filter((bank) =>
      bank.name.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
    );
    setFilteredBanks(filteredBanks);
  }, [banks, keyword]);

  return (
    <Select
      filterOption={(input, option) => {
        return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
      }}
      placeholder="Chọn ngân hàng *"
      scale="lg"
      dropdownRender={(menu) => (
        <div>
          <Input
            scale="sm"
            prefix={
              <SearchIcon
                color="textSecondary"
                width="20"
                height="20"
              />
            }
            placeholder="Nhập tìm ngân hàng"
            value={keyword}
            onChange={handleSearch}
          />

          <Divider my="2" />

          {menu}
        </div>
      )}
      onDropdownVisibleChange={handleDropdownVisibleChange}
      onChange={onChange}
    >
      {filteredBanks.map((bank) => (
        <AntdSelect.Option
          key={bank.code}
          value={bank.name}
          label={bank.name}
        >
          <Space>
            <Box width="50px">
              <Image
                alt=""
                src={bank.image}
              />
            </Box>
            {bank.name}
          </Space>
        </AntdSelect.Option>
      ))}
    </Select>
  );
};

export default BankSelect;
