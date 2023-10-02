import styled from '@emotion/styled';

const Table = styled.table`
  margin: 10px;
  width: 100%;
  text-align: center;
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
`;

type TExampleTableProps = {
  colorName: string;
};

export function ExampleTable(props: TExampleTableProps) {
  return (
    <Table>
      <tr>
        <th>className</th>
        <th>Example</th>
      </tr>
      <tr>
        <td>bg-{props.colorName}</td>
        <td>{`<p className="bg-${props.colorName}"></p>`}</td>
      </tr>
    </Table>
  );
}
