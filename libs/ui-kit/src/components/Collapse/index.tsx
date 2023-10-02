import React from 'react';
import { CollapseStyled } from './styled';
import { CollapseProps } from 'antd';
import { Collapse as CollapseAntd } from 'antd';
const { Panel } = CollapseAntd;

export const Collapse = (props: CollapseProps) => {
  return (
    <CollapseStyled
      {...props}
      className={`${props.className ? props.className : ''} estore-collapse`}
      expandIconPosition="end"
    >
      {props.children}
    </CollapseStyled>
  );
};
Collapse.Panel = Panel;
export default Collapse;
