import { selectorFamily } from "recoil";
import { getExchange } from "../api/exchanges";

const getExchangeState = selectorFamily({
  key: "exchangesState",
  get: (id: string) => async () => {
    const data = await getExchange(id);

    return data;
  },
});
export default getExchangeState;
