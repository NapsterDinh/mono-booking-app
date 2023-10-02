import styled from '@emotion/styled';

type TDemoColorProps = {
  colorName: string;
  colorClassName?: string;
  demoClassName: string;
};

export const ColorsContainer = styled.div`
  display: flex;
  gap: 10;
  text-align: center;
`;

export function DemoColor(props: TDemoColorProps) {
  return (
    <div style={{ margin: 8 }}>
      <div
        className={props.demoClassName}
        style={{
          marginInline: 'auto',
          marginBottom: 8,
          height: 80,
          width: 80,
          borderRadius: '50%',
          display: 'block',
        }}
      />
      {props.colorName.length > 0 && (
        <div
          style={{
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '19px',
            color: '#2F3A4C',
            whiteSpace: 'nowrap',
          }}
        >
          {props.colorName}
        </div>
      )}
      <div
        style={{
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '17px',
          color: '#6F7A90',
          whiteSpace: 'nowrap',
        }}
      >
        {props.colorClassName}
      </div>
    </div>
  );
}

export default DemoColor;
