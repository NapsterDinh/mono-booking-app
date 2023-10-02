import { DownloadOutlined } from '@ant-design/icons';
import capitalize from 'lodash/capitalize';
import { FC, PropsWithChildren } from 'react';
import { Box, Flex } from '../Box';
import Button from './index';
import { ButtonProps, scales, types } from './types';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    gap: {
      control: false,
    },
    shape: { options: ['default', 'circle', 'round'], control: { type: 'radio' } },
  },
};

export const Default: FC<PropsWithChildren> = () => {
  return (
    <Box mb="2rem">
      {Object.values(types).map((type) => {
        return (
          <Box
            key={type}
            mb="2rem"
          >
            {Object.values(scales).map((scale) => {
              return (
                <Button
                  key={scale}
                  type={type}
                  scale={scale}
                  mr="0.5rem"
                >
                  {`${capitalize(type)} ${scale.toUpperCase()}`}
                </Button>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export const Control = (props: ButtonProps) => {
  return <Button {...props} />;
};

Control.args = {
  children: 'Button',
  borderRadius: '',
  width: '',
  height: '',
  shape: 'circle',
  loading: false,
  disabled: false,
};

export const Variants: React.FC<React.PropsWithChildren> = () => {
  return (
    <Box width="640px">
      <Box mb="2rem">
        <Button width="100%">Full size</Button>
      </Box>
      <Flex
        mb="2rem"
        gap="1rem"
      >
        <Button
          loading
          icon={<DownloadOutlined />}
        >
          Approving
        </Button>

        <Button disabled>Button disabled</Button>
      </Flex>
      <Flex
        mb="2rem"
        gap="1rem"
      >
        <Button icon={<DownloadOutlined />} />
        <Button
          disabled
          icon={<DownloadOutlined />}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined />}
        />
        <Button
          disabled
          shape="circle"
          icon={<DownloadOutlined />}
        />
        <Button
          shape="round"
          icon={<DownloadOutlined />}
        />
        <Button
          disabled
          shape="round"
          icon={<DownloadOutlined />}
        />
      </Flex>
    </Box>
  );
};
