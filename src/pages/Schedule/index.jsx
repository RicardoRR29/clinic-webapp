import { Calendar } from "../../components/Calendar";
import ProfileList from "../../components/ProfileList";

export function Schedule() {
  return (
    <div className="w-100 px-5 py-4">
      <div className="row h-100">
        <div className="col-xl-3 col-lg-4 col-md-5 d-flex flex-column h-100">
          <ProfileList />
          <Calendar />
        </div>
        <div className="col-xl-9 col-lg-8 col-md-7">other</div>
      </div>
    </div>
  );
}
