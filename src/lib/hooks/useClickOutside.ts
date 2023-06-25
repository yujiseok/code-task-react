import { useEffect } from "react";

type UseClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: VoidFunction
) => void;

const useClickOutside: UseClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handler]);
};
export default useClickOutside;
