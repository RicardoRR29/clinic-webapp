import "./style.scss";
import logo from "../../assets/logo_advice.png";
export function Header() {
  return (
    <div className="header shadow d-flex justify-content-between align-items-center py-1 ps-5 pe-4">
      <img src={logo} className="logo" />
      <div>photo</div>
    </div>
  );
}
