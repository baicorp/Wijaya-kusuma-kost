import React from "react";
import { listNavAdmin } from "@/constant";
import { ListNavAdmin } from "@/components";

function AdminNavbar() {
  const navList = listNavAdmin.map((data, index) => {
    return (
      <ListNavAdmin
        key={index}
        icon={data.icon}
        href={data.href}
        tooltip={data.tooltip}
      />
    );
  });

  return (
    <nav className="w-14 p-2 flex justify-center bg-[#1f1f23] border-r-[1px] border-gray-800">
      <ul>{navList}</ul>
    </nav>
  );
}

export default AdminNavbar;
