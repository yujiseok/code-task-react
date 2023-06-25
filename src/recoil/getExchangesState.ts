import { selectorFamily } from "recoil";
import { getAllExchanges } from "../api/exchanges";

const getExchangesState = selectorFamily({
  key: "exchangesState",
  get:
    ({ page, filter }: { page: number; filter: FilterState }) =>
    async () => {
      const data = await getAllExchanges(page, filter);

      return data;
    },
});
export default getExchangesState;
