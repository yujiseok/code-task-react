import { IExchange } from "../../types/exchanges";
import Tbody from "./Tbody";
import Thead from "./Thead";

interface TableProps {
  filter: FilterState;
  handleChangeFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  exchanges: IExchange[];
  handleClickModal: (id?: string | undefined) => void;
}

const Table = ({
  filter,
  handleChangeFilter,
  exchanges,
  handleClickModal,
}: TableProps) => {
  return (
    <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-md border bg-white shadow-md">
      <Thead filter={filter} handleChangeFilter={handleChangeFilter} />
      <Tbody exchanges={exchanges} handleClickModal={handleClickModal} />
    </table>
  );
};
export default Table;
