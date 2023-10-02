import { StepsProps } from 'antd';
import { FC } from 'react';
import { StyledSteps } from './styles';

const Steps: FC<StepsProps> = (props) => {
  return <StyledSteps {...props} />;
};

export default Steps;
