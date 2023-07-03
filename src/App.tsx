import { AnimatePresence } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Pagination from "./components/Pagination";
import PairModal from "./components/PairModal";
import Table from "./components/table/Table";
import useModal from "./lib/hooks/useModal";
import usePagination from "./lib/hooks/usePagination";
import getExchangesState from "./recoil/getExchangesState";

const App = () => {
  const [filter, setFilter] = useState<FilterState>("기본");
  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilter(e.target.value as FilterState);
  const { page, setPage, handleClickNextBtn, handleClickPrevBtn } =
    usePagination();
  const [toggle, id, handleClickModal] = useModal();
  const { data: exchanges, totalPage } = useRecoilValue(
    getExchangesState({ page, filter })
  );

  const pageArr = Array.from({ length: totalPage }).fill(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [exchanges]);

  return (
    <section className="w-full max-w-7xl px-6">
      <Table
        filter={filter}
        handleChangeFilter={handleChangeFilter}
        exchanges={exchanges}
        handleClickModal={handleClickModal}
      />
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
            <PairModal handleClickModal={handleClickModal} id={id} />
          ) : null}
        </AnimatePresence>
      </Suspense>
    </section>
  );
};
export default App;
