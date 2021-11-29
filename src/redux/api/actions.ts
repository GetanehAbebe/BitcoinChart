import { CHART_UPDATE, VIEW_UPDATE } from "./types";
import axios from "axios";
export const getChartData = (time: string, freq: number) => {
  return (dispatch: any) => {
    axios
      .get(
        `https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histo${time}?aggregate=${freq}&e=CCCAGG&fsym=BTC&tsym=usd&limit=30`
      )
      .then((response) => {
        dispatch(setChart(response.data.data, time, freq));
      })
      .catch((e) => {
        console.log(e.message);
      });   
  };
};

export const changeView = (type: string) => {
  return {
    type: VIEW_UPDATE,
    payload: type,
  };
};

const setChart = (data: [], time: string, freq: number) => {
  return {
    type: CHART_UPDATE,
    payload: { data, time, freq },
  };
};
