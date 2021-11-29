import { useSelector, RootStateOrAny } from "react-redux";
import { Table } from "react-bootstrap";
function History() {
  const { data } = useSelector((state: RootStateOrAny) => state.apiData);
  return (
    <Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th>Date</th>
          <th>High ($)</th>
          <th>Low ($)</th>
          <th>Open ($)</th>
          <th>Close ($)</th>
        </tr>
      </thead>
      <tbody>
        {data
          .sort((a: any, b: any) => (a["Date"] > b["Date"] ? -1 : 1))
          .map((item: any, i: number) => {
            return (
              <tr key={i}>
                <td>{item["Date"].slice(0, item["Date"].length - 3)}</td>
                <td>{item["High"]}</td>
                <td>{item["Low"]}</td>
                <td>{item["Open"]}</td>
                <td>{item["Close"]}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default History;
