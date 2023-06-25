import { useState } from "react";
import { useRecoilValue } from "recoil";
import Pagination from "./components/Pagination";
import getExchangesState from "./recoil/getExchangesState";

const App = () => {
  const [page, setPage] = useState(1);
  const { data: exchanges, totalPage } = useRecoilValue(
    getExchangesState(page)
  );

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
            <th className="border-b border-slate-200 p-4">거래량</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {exchanges.map((exchange) => (
            <tr
              key={exchange.id}
              className="cursor-pointer transition-colors hover:bg-slate-100"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      exchange.image === "missing_small.png"
                        ? "https://catalystcci.com/wp-content/uploads/gray-image-placeholder.png"
                        : exchange.image
                    }
                    width={32}
                    height={32}
                    alt={exchange.name}
                    className="rounded-full border border-slate-50 shadow-lg"
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
      />
    </section>
  );
};
export default App;
