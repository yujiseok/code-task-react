import { atom, selector } from "recoil";
import { getAllExchanges } from "../api/exchanges";
export const pageState = atom({
  key: "pageState",
  default: 1,
});

const getExchangesState = selector({
  key: "exchangesState",
  get: async ({ get }) => {
    const page = get(pageState);
    const data = await getAllExchanges(page);

    return data;
  },
});
export default getExchangesState;
