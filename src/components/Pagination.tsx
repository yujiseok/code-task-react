interface PaginationProps {
  totalPage: number;
  pageArr: unknown[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ totalPage, pageArr, page, setPage }: PaginationProps) => {
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

  return (
    <div className="my-8 flex gap-2">
      <button disabled={page === 1} onClick={handleClickNextBtn}>
        prev
      </button>

      {pageArr.map((_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}

      <button disabled={page === totalPage} onClick={handleClickPrevBtn}>
        next
      </button>
    </div>
  );
};
export default Pagination;
