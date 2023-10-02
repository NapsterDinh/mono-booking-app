import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <g id="Frame">
        <g id="Group">
          <path
            id="Vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.85938 10.8105C1.75937 10.8105 0.859375 9.81055 0.859375 8.58833V8.03277C0.859375 7.69944 1.10938 7.47721 1.35938 7.3661C1.95938 7.14388 2.35938 6.53277 2.35938 5.81055C2.35938 5.08833 1.95938 4.47721 1.35938 4.25499C1.10938 4.14388 0.859375 3.92166 0.859375 3.58832V3.03277C0.859375 1.81055 1.75937 0.810547 2.85938 0.810547H8.85938C9.95938 0.810547 10.8594 1.81055 10.8594 3.03277V3.58832C10.8594 3.92166 10.6094 4.14388 10.3594 4.25499C9.75937 4.47721 9.35938 5.08833 9.35938 5.81055C9.35938 6.53277 9.75937 7.14388 10.3594 7.3661C10.6094 7.47721 10.8594 7.69944 10.8594 8.03277V8.58833C10.8594 9.81055 9.95938 10.8105 8.85938 10.8105H2.85938ZM4.35938 4.69944C4.65937 4.69944 4.85938 4.47721 4.85938 4.14388C4.85938 3.81055 4.65937 3.58832 4.35938 3.58832C4.05938 3.58832 3.85938 3.81055 3.85938 4.14388C3.85938 4.47721 4.05938 4.69944 4.35938 4.69944ZM7.85938 7.47721C7.85938 7.81055 7.65938 8.03277 7.35938 8.03277C7.05937 8.03277 6.85938 7.81055 6.85938 7.47721C6.85938 7.14388 7.05937 6.92166 7.35938 6.92166C7.65938 6.92166 7.85938 7.14388 7.85938 7.47721ZM7.60938 4.42166C7.75938 4.25499 7.75938 3.97721 7.60938 3.81055C7.45937 3.64388 7.20937 3.64388 7.05937 3.81055L4.05937 7.14388C3.90937 7.31055 3.90937 7.58833 4.05937 7.75499C4.20937 7.92166 4.45937 7.92166 4.60938 7.75499L7.60938 4.42166Z"
            fill="white"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
