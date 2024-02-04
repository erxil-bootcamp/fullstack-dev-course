import React from "react";

const MainLaout = ({ children }) => {
  return (
    <div>
      <header className="px-10 w-full py-3 border">
        <h2 className="text-blue-500">Bootcamp</h2>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLaout;
