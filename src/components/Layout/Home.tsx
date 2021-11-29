import Header from "../UI/Header";
import Chart from "../UI/Chart";
import Tabs from "../UI/Tabs";
import History from "../UI/History";
import { changeView, getChartData } from "../../redux/api/actions";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { view } = useSelector((state: RootStateOrAny) => state.apiData);
  const changeViewState = (view: string) => {
    dispatch(changeView(view));
  };
  const chartData = (arr: any[]) => {
    return dispatch(getChartData(arr[0], arr[1]));
  };
  return (
    <div>
      <Header />
      <Tabs
        onClick={changeViewState}
        tabs={[
          { id: "chart", label: "Chart" },
          { id: "table", label: "History" },
        ]}
        name="view-model"
        onChange={changeViewState}
      />
      <Tabs
        tabs={[
          { id: "minute 1", label: "1 minute" },
          { id: "minute 5", label: "5 minute" },
          { id: "hour 1", label: "1 hour" },
          { id: "day 7", label: "1 week" },
        ]}
        name="time-tabs"
        onChange={chartData}
      />
      {view === "chart" ? <Chart /> : <History />}
    </div>
  );
}

export default Home;
