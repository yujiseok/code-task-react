import { useState } from "react";

type UsePagination = (totalPage: number) => {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleClickNextBtn: VoidFunction;
  handleClickPrevBtn: VoidFunction;
};

const usePagination: UsePagination = (totalPage: number) => {
  const [page, setPage] = useState(1);

  const handleClickNextBtn = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const handleClickPrevBtn = () => {
    if (page !== totalPage) {
      setPage(page + 1);
    }
  };

  return { page, setPage, handleClickNextBtn, handleClickPrevBtn };
};
export default usePagination;
