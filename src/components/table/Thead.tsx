interface TheadProps {
  filter: FilterState;
  handleChangeFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Thead = ({ filter, handleChangeFilter }: TheadProps) => {
  return (
    <thead className="text-left">
      <tr>
        {THEAD_ARR.map((head) => (
          <th key={head.content} className="border-b border-slate-200 p-4">
            {head.content}
          </th>
        ))}

        <th className="border-b border-slate-200 p-4">
          <div className="flex items-center gap-4">
            거래량
            <select
              className="p-2 outline-none"
              defaultValue={filter}
              onChange={handleChangeFilter}
            >
              {OPT_ARR.map((opt) => (
                <option key={opt.content} value={opt.value}>
                  {opt.content}
                </option>
              ))}
            </select>
          </div>
        </th>
      </tr>
    </thead>
  );
};
export default Thead;

const THEAD_ARR = [
  {
    content: "거래소",
  },
  {
    content: "설립연도",
  },
  {
    content: "신뢰도",
  },
  {
    content: "신뢰도 순위",
  },
];

const OPT_ARR = [
  {
    value: "기본",
    content: "기본",
  },
  {
    value: "오름차순",
    content: "오름차순 ▲",
  },
  {
    value: "내림차순",
    content: "내림차순 ▼",
  },
];
