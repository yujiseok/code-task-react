import { IExchange, ITicker } from "../types/exchanges";
import instance from "./instance";

export const getAllExchanges = async (page: number, filter: FilterState) => {
  const res = await instance.get(`/exchanges?page=${page}`);
  const data: IExchange[] = res.data;
  const perPage = res.headers["per-page"];
  const total = res.headers.total;
  const totalPage = Math.ceil(total / perPage);

  let sortedData = data;
  if (filter === "오름차순") {
    sortedData = data.sort(
      (a, b) => a.trade_volume_24h_btc - b.trade_volume_24h_btc
    );
  } else if (filter === "내림차순") {
    sortedData = data.sort(
      (a, b) => b.trade_volume_24h_btc - a.trade_volume_24h_btc
    );
  }

  return {
    data: sortedData,
    totalPage,
  };
};

export const getExchange = async (id: string) => {
  const res = await instance.get(`/exchanges/${id}`);
  const data: ITicker = res.data;

  return data;
};
