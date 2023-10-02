import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import getThemeValue from '@tsu-org/ui-kit/util/getThemeValue';
import { Badge } from 'antd';
import { RibbonProps } from 'antd/lib/badge/Ribbon';
import type { FC, PropsWithChildren } from 'react';

interface ThemedProps extends RibbonProps {
  theme: Theme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const getDisplay = ({ text }: ThemedProps) => {
  return text ? 'block' : 'none';
};

const StyledRibbonCard = styled(Badge.Ribbon)`
  top: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${getColor};
  &::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 0;
    overflow: hidden;
    clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 1000%);
    height: 100%;
    width: 10px;
    background-color: ${getColor};
  }
  .ant-image {
    top: -1px;
  }
  .ant-ribbon-corner {
    color: ${getColor};
    display: ${getDisplay};
  }
`;

type RibbonCard = PropsWithChildren & RibbonProps;

const RibbonCard: FC<RibbonCard> = (props) => {
  const { children } = props;

  return <StyledRibbonCard {...props}>{children}</StyledRibbonCard>;
};

export default RibbonCard;
