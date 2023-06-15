import React from "react";
import { AdminNavbar } from "@/components";

function AdminLayout({ children }) {
  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <main className="flex-1 bg-[#19181b]">{children}</main>
      </div>
    </>
  );
}

export default AdminLayout;
