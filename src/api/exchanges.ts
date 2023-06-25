import { IExchange, ITicker } from "../types/exchanges";
import instance from "./instance";

export const getAllExchanges = async (page: number) => {
  const res = await instance.get(`/exchanges?page=${page}`);
  const data: IExchange[] = res.data;
  const perPage = res.headers["per-page"];
  const total = res.headers.total;
  const totalPage = Math.ceil(total / perPage);

  return { data, totalPage };
};

export const getExchange = async (id: string) => {
  const res = await instance.get(`/exchanges/${id}`);
  const data: ITicker = res.data;
  const perPage = res.headers["per-page"];
  const total = res.headers.total;
  const totalPage = Math.ceil(total / perPage);

  return { data, totalPage };
};
