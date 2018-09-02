interface Itypes {
  type: string;
  payload: number;
}

export default (state = {}, { type, payload }: Itypes) => {
  switch (type) {
    case "1":
      return payload;

    default:
      return state;
  }
};
