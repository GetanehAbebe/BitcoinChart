import React, { useEffect } from "react";
import { updateData } from "../../redux/socket/actions";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const dispatch = useDispatch();
  const { price, change, percentChange, updateDate } = useSelector(
    (state: RootStateOrAny) => state.socket
  );

  const color = percentChange >= 1 ? "color-green" : "color-red";
  useEffect(() => {
    const socket = new WebSocket(
      "wss://wstest.fxempire.com?token=btctothemoon"
    );
    socket.onopen = () =>
      socket.send(
        JSON.stringify({
          type: "SUBSCRIBE",
          instruments: ["cc-btc-usd-cccagg"],
        })
      );
    socket.onmessage = (e) => {
      dispatch(updateData(e.data));
    };
  }, []);
  return (
    <div className="header">
      <div className="header--left">
        <div className="title">
          <img src="btc.png" alt="bitcoin" />
          <h1>Bitcoin</h1>
        </div>
        <p className="date">As of: {updateDate} UTC</p>
      </div>
      <div className="header--right">
        <div className="count">
          {percentChange >= 1 ? (
            <IoMdArrowDropup className={`change-sign ${color}`} />
          ) : (
            <IoMdArrowDropdown className={`change-sign ${color}`} />
          )}
          <h3 className="currnet-count">${price}</h3>
        </div>
        <div className="changes">
          <p className={color}>
            {change > 0 ? "+" : null}
            {change}
          </p>
          <p className={color}>
            ({percentChange > 1 ? "+" : null}
            {percentChange}%)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
