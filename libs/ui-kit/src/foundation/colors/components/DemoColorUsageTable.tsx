import styled from '@emotion/styled';
import { ExampleTable } from './ExampleTable';

export type TColorUsageRow = {
  token: string;
  roleDescription: string;
  value: {
    colorName: string;
    demoClassName: string;
  };
};

type TDemoColorUsageTableProps = {
  data: TColorUsageRow[];
};

const ColorUsageRow = styled.div`
  padding: 8px 20px;
  min-width: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;

  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;

  & + & {
    border-top: 1px solid lightgray;
  }

  & > * {
    padding: 4px;
  }

  // token
  & > :nth-child(1) {
    flex: 40% 1 0;
    align-self: flex-start;
  }

  // role description
  & > :nth-child(2) {
    flex: 35% 0 1;
    align-self: flex-start;
  }

  & > :nth-child(3) {
    flex: 15% 0 0;
    text-align: center;
  }
  & > :nth-child(4) {
    flex: 10% 0 0;
    text-align: center;
  }
`;

const ColorUsageHeaderContainer = styled(ColorUsageRow)`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #65697e;
`;

const AliasTokenBadge = styled.div`
  width: fit-content;
  padding: 12px;
  background-color: #e4e8ed;
  border-radius: 4px;
`;

const ColorCircle = styled.div`
  margin: auto;
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

function DemoColorUsageTable(props: TDemoColorUsageTableProps) {
  return (
    <div>
      <ColorUsageHeaderContainer>
        <div>Token</div>
        <div>Role Description</div>
        <div>Postfix</div>
        <div>Color</div>
      </ColorUsageHeaderContainer>
      {props.data.map((alias) => (
        <ColorUsageRow>
          <div>
            <AliasTokenBadge>{alias.token}</AliasTokenBadge>
          </div>
          <div>{alias.roleDescription}</div>
          <div>
            <div>{alias.value.colorName}</div>
            {/* <div>{alias.value.colorHex}</div> */}
          </div>
          <div>
            <ColorCircle className={alias.value.demoClassName} />
          </div>
        </ColorUsageRow>
      ))}
    </div>
  );
}

type TDemoColorUsageSectionProps = {
  title: string;
  data: TColorUsageRow[];
};

const ColorUsageSectionTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #000000;
`;

export function DemoColorUsageSection(props: TDemoColorUsageSectionProps) {
  return (
    <section>
      <ColorUsageSectionTitle>{props.title}</ColorUsageSectionTitle>
      <main>
        <ExampleTable colorName={props.data[0].value.colorName} />
        <DemoColorUsageTable data={props.data} />
      </main>
    </section>
  );
}
