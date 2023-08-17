import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function Layout() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
