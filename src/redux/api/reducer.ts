import { CHART_UPDATE, VIEW_UPDATE } from "./types";

interface DefaultState {
  data: any[];
  view: string;
  time: string;
  freq: number;
}

const initialState: DefaultState = {
  data: [],
  view: "chart",
  time: "day",
  freq: 7,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHART_UPDATE:
      return {
        ...state,
        data: action.payload.data,
      };
    case VIEW_UPDATE:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
