import React from "react";
import Image from "next/image";

function Facilities({ icon, desc }) {
  return (
    <li>
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          width="50"
          height="50"
          alt="icon"
          className="w-6 h-6"
        />
        <p>{desc}</p>
      </div>
    </li>
  );
}

export default Facilities;
