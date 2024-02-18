import { Outlet } from "react-router-dom";

const MainLaout = () => {
  return (
    <div>
      <header className="px-10 w-full py-3 border">
        <h2 className="text-blue-500">Bootcamp</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLaout;
