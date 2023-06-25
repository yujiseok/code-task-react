import { AnimatePresence } from "framer-motion";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import Pagination from "./components/Pagination";
import PairModal from "./components/PairModal";
import useModal from "./lib/hooks/useModal";
import usePagination from "./lib/hooks/usePagination";
import getExchangesState from "./recoil/getExchangesState";
const App = () => {
  const { page, setPage, handleClickNextBtn, handleClickPrevBtn } =
    usePagination(1);
  const [filter, setFilter] = useState<FilterState>("기본");
  const [toggle, id, handleClickToggle] = useModal();
  const { data: exchanges, totalPage } = useRecoilValue(
    getExchangesState({ page, filter })
  );
  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilter(e.target.value as FilterState);

  const pageArr = Array.from({ length: totalPage }).fill(1);
  return (
    <section className="w-full max-w-7xl px-6">
      <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-md border bg-white shadow-md">
        <thead className="text-left">
          <tr>
            <th className="border-b border-slate-200 p-4">거래소</th>
            <th className="border-b border-slate-200 p-4">설립연도</th>
            <th className="border-b border-slate-200 p-4">신뢰도</th>
            <th className="border-b border-slate-200 p-4">신뢰도 순위</th>
            <th className="border-b border-slate-200 p-4">
              <div className="flex items-center gap-4">
                거래량
                <select
                  className="p-2 outline-none"
                  defaultValue={filter}
                  onChange={handleChangeFilter}
                >
                  <option value="기본">기본</option>
                  <option value="오름차순">오름차순 ▲</option>
                  <option value="내림차순">내림차순 ▼</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {exchanges.map((exchange) => (
            <tr
              onClick={() => handleClickToggle(exchange.id)}
              key={exchange.id}
              className="cursor-pointer transition-colors hover:bg-code-horizon-blue/10"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      exchange.image === "missing_small.png"
                        ? "https://catalystcci.com/wp-content/uploads/gray-image-placeholder.png"
                        : exchange.image
                    }
                    alt={exchange.name}
                    className="h-8 w-8 rounded-full border border-slate-50 shadow-lg"
                  />
                  <div>
                    <a
                      href={exchange.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exchange.name}
                    </a>
                  </div>
                </div>
              </td>
              <td className="p-4">
                {exchange.year_established ? (
                  exchange.year_established
                ) : (
                  <span className="text-slate-400">-</span>
                )}
              </td>
              <td className="p-4">{exchange.trust_score}</td>
              <td className="p-4">{exchange.trust_score_rank}</td>
              <td className="p-4">{exchange.trade_volume_24h_btc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPage={totalPage}
        pageArr={pageArr}
        page={page}
        setPage={setPage}
        handleClickNextBtn={handleClickNextBtn}
        handleClickPrevBtn={handleClickPrevBtn}
      />

      <Suspense fallback={<div>loading...</div>}>
        <AnimatePresence>
          {toggle ? (
            <PairModal handleClickToggle={handleClickToggle} id={id} />
          ) : null}
        </AnimatePresence>
      </Suspense>
    </section>
  );
};
export default App;
