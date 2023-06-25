import { useState } from "react";

type UseModal = () => [boolean, string, (id?: string) => void];

const useModal: UseModal = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  const handleClickToggle = (id?: string) => {
    setToggle((prev) => !prev);

    if (id) {
      setValue(id);
    }
  };

  return [toggle, value, handleClickToggle];
};
export default useModal;
