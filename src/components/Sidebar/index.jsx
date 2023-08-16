import "./style.scss";

import { RiHome2Fill } from "react-icons/ri";
import { BsCalendarEventFill, BsListStars } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar shadow-sm h-100 py-5 p-2 d-flex flex-column gap-3">
      <Link to="/" className="btn">
        <RiHome2Fill className="home" />
      </Link>
      <Link to="schedule" className="btn">
        <BsCalendarEventFill className="calendar" />
      </Link>
      <Link to="schedule-list" className="btn">
        <BsListStars className="list" />
      </Link>
    </div>
  );
}
