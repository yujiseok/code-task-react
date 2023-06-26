import { IExchange } from "../../types/exchanges";

interface TbodyProps {
  exchanges: IExchange[];
  handleClickModal: (id?: string | undefined) => void;
}

const Tbody = ({ exchanges, handleClickModal }: TbodyProps) => {
  return (
    <tbody className="bg-white">
      {exchanges.map((exchange) => (
        <tr
          onClick={() => handleClickModal(exchange.id)}
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
              <div>{exchange.name}</div>
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
  );
};
export default Tbody;
