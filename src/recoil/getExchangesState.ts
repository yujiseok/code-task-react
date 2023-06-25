import { selectorFamily } from "recoil";
import { getAllExchanges } from "../api/exchanges";

const getExchangesState = selectorFamily({
  key: "exchangesState",
  get: (page: number) => async () => {
    const data = await getAllExchanges(page);

    return data;
  },
});
export default getExchangesState;
