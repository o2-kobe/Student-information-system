import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-screen gap-12 ">
      <div>
        <Sidebar />
      </div>
      <main className="mt-16">
        <Outlet />
      </main>
    </div>
  );
};
export default AppLayout;
