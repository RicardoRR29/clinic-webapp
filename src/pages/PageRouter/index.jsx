import { Route, Routes } from "react-router-dom";
import { Layout } from "../../layout";
import { Workspace } from "../Workspace";
import { Schedule } from "../Schedule";
import { ScheduleList } from "../ScheduleList";

export function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Workspace />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="schedule-list" element={<ScheduleList />} />
        <Route path="*" element={<Workspace />} />
      </Route>
    </Routes>
  );
}
