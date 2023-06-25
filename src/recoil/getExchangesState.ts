import { selectorFamily } from "recoil";
import { getAllExchanges } from "../api/exchanges";

const getExchangesState = selectorFamily({
  key: "exchangesState",
  get:
    ({
      page,
      filter,
    }: {
      page: number;
      filter: "기본" | "오름차순" | "내림차순";
    }) =>
    async () => {
      const data = await getAllExchanges(page);

      if (filter === "오름차순") {
        return {
          data: data.data.sort(
            (a, b) => a.trade_volume_24h_btc - b.trade_volume_24h_btc
          ),
          totalPage: data.totalPage,
        };
      }

      if (filter === "내림차순") {
        return {
          data: data.data.sort(
            (a, b) => b.trade_volume_24h_btc - a.trade_volume_24h_btc
          ),
          totalPage: data.totalPage,
        };
      }
      return data;
    },
});
export default getExchangesState;
