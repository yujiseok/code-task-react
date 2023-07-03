import { useState } from "react";

type UsePagination = () => {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleClickNextBtn: VoidFunction;
  handleClickPrevBtn: VoidFunction;
};

const usePagination: UsePagination = () => {
  const [page, setPage] = useState(1);

  const handleClickPrevBtn = () => {
    setPage(page - 1);
  };
  const handleClickNextBtn = () => {
    setPage(page + 1);
  };

  return { page, setPage, handleClickNextBtn, handleClickPrevBtn };
};
export default usePagination;
