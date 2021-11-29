import React, { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { getChartData } from "../../redux/api/actions";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Chart() {
  const dispatch = useDispatch();
  const { data, time, freq } = useSelector(
    (state: RootStateOrAny) => state.apiData
  );

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getChartData(time, freq));
    }
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <Area dataKey="Volume" stroke="#2451B7" fill="url(#color)" />
        <XAxis
          dataKey="Date"
          axisLine={true}
          tickLine={true}
          tickFormatter={(number) => {
            return String(number).slice(5, 10);
          }}
        />
        <YAxis
          dataKey="Volume"
          axisLine={true}
          tickLine={true}
          tickCount={5}
          tickSize={3}
          orientation={"right"}
          tickMargin={4}
          tickFormatter={(number) => `$${number / 1000}`}
        />
        <Tooltip />
        <CartesianGrid opacity={0.3} vertical={false} horizontal={true} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
