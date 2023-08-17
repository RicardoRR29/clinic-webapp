import "./style.scss";

import { RiHome2Fill } from "react-icons/ri";
import { BsCalendarEventFill, BsListStars } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar shadow h-100 py-5 p-2 d-flex flex-column gap-3">
      <NavLink to="/" className="btn" activeClassName>
        <RiHome2Fill className="home" />
      </NavLink>
      <NavLink to="schedule" className="btn" activeClassName>
        <BsCalendarEventFill className="calendar-icon" />
      </NavLink>
      <NavLink to="schedule-list" className="btn" activeClassName>
        <BsListStars className="list" />
      </NavLink>
    </div>
  );
}
