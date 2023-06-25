import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import getExchangeState from "../recoil/getExchangeState";
import ModalPortal from "./ModalPortal";

const PairModal = ({
  handleClickToggle,
  id,
}: {
  handleClickToggle: VoidFunction;
  id: string;
}) => {
  const exchange = useRecoilValue(getExchangeState(id));

  return (
    <ModalPortal>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        className="fixed left-0 top-0 z-20 grid h-full w-full place-items-center bg-code-black/40"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="min-w-[760px] rounded-md bg-white px-6 py-4 shadow-xl"
        >
          <div className="flex justify-end">
            <button onClick={handleClickToggle} className="text-3xl">
              ×
            </button>
          </div>

          <div className="mb-6 mt-2 flex items-center justify-center gap-3">
            <img
              src={exchange.image}
              alt={exchange.name}
              className="h-10 w-10 rounded-full border border-slate-50 shadow-lg"
            />
            <div className="flex items-center justify-center gap-2 text-2xl font-semibold">
              <h3>
                <a
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  {exchange.name}
                </a>
              </h3>
              <div className="text-sm text-slate-400">{exchange.country}</div>
            </div>
          </div>
          <div className="grid h-[600px] grid-cols-2 gap-4 overflow-y-auto px-6 py-4">
            {exchange.tickers.map((ticker, i) => (
              <table
                key={i}
                className="border border-slate-200 text-center shadow-md transition-transform hover:scale-105"
              >
                <thead className="bg-code-horizon-blue text-lg font-semibold text-gray-50">
                  <tr>
                    <th className="border border-slate-200 p-2">base</th>
                    <th className="border border-slate-200 p-2">target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-2">
                      {ticker.base}
                    </td>
                    <td className="border border-slate-200 p-2">
                      {ticker.target}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </ModalPortal>
  );
};
export default PairModal;

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeOut", duration: 0.25 } },
  exit: { opacity: 0, transition: { ease: "easeIn", duration: 0.35 } },
};
