const Skeleton = () => {
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
          {arr.map((_, i) => (
            <tr key={i} className="animate-pulse">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                  <div className="h-8 w-80 rounded-md bg-gray-300" />
                </div>
              </td>
              <td className="p-4">
                <div className="h-8 w-32 rounded-md bg-gray-300" />
              </td>
              <td className="p-4">
                <div className="h-8 w-32 rounded-md bg-gray-300" />
              </td>
              <td className="p-4">
                <div className="h-8 w-32 rounded-md bg-gray-300" />
              </td>
              <td className="p-4">
                <div className="h-8 w-36 rounded-md bg-gray-300" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Skeleton;

const arr = Array.from({ length: 50 });
