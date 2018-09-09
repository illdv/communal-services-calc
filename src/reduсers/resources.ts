import { Iresurses } from "../types";
interface IAction {
  type: string;
  data: Iresurses[];
}

export default (state = [], { type, data }: IAction) => {
  switch (type) {
    case "FETCH_DATA_SUCCESS":
      return [...state, ...data];

    default:
      return state;
  }
};
