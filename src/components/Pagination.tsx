interface PaginationProps {
  totalPage: number;
  pageArr: unknown[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleClickNextBtn: VoidFunction;
  handleClickPrevBtn: VoidFunction;
}

const Pagination = ({
  totalPage,
  pageArr,
  page,
  setPage,
  handleClickNextBtn,
  handleClickPrevBtn,
}: PaginationProps) => {
  return (
    <div className="my-8 flex justify-center gap-2">
      <button
        disabled={page === 1}
        onClick={handleClickNextBtn}
        className="disabled:pointer-events-none disabled:opacity-50"
      >
        prev
      </button>

      {pageArr.map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`${
            page === i + 1 ? "bg-code-horizon-blue text-white" : ""
          } rounded-md px-3 py-2 `}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPage}
        onClick={handleClickPrevBtn}
        className="disabled:pointer-events-none disabled:opacity-50"
      >
        next
      </button>
    </div>
  );
};
export default Pagination;
