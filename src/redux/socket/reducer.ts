import { SOCKET_FAILURE, UPDATE_DATA } from "./types";

interface DefaultState {
  price: number;
  change: number;
  percentChange: any;
  updateDate: any;
}

const initialState: DefaultState = {
  price: 0,
  change: 0,
  percentChange: 0,
  updateDate: Date.now(),
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...action.payload,
      };
    case SOCKET_FAILURE:
      return {
        socket: "",
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
