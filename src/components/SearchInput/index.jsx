import "./style.scss";
import { BiSearch } from "react-icons/bi";
export function SearchInput() {
  return (
    <div className="search-input w-100">
      <input placeholder="Busca" className="w-100 p-2 pe-4" type="text" />
      <BiSearch className="icon" />
    </div>
  );
}
