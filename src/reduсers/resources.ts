interface Itypes {
  type: string;
  data: any;
}

export default (state = [], { type, data }: Itypes) => {
  switch (type) {
    case "FETCH_DATA_SUCCESS":
      return [...state, ...data];

    default:
      return state;
  }
};
