import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <div className="d-flex h-100">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
