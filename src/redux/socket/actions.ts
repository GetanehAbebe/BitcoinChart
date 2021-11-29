import { UPDATE_DATA } from "./types";

export const updateData = (data: any) => {
  const newData = JSON.parse(data);
  const formatDate = String(
    new Date(newData["cc-btc-usd-cccagg"]["lastUpdate"])
  )
    .slice(4, 21)
    .split("");
  formatDate[6] = ",";
  const obj = {
    price: Number(newData["cc-btc-usd-cccagg"]["last"]).toFixed(2),
    change: Number(newData["cc-btc-usd-cccagg"]["change"]).toFixed(2),
    percentChange: Number(
      newData["cc-btc-usd-cccagg"]["percentChange"]
    ).toFixed(2),
    updateDate: formatDate.join(""),
  };

  return {
    type: UPDATE_DATA,
    payload: obj,
  };
};
