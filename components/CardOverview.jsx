import React from "react";
import Image from "next/image";

function CardOverview({ icon, desc }) {
  return (
    <div className="flex-1 min-w-[150px] self-stretch space-y-6 p-4 border-2 border-gray-200 rounded-md duration-200 hover:shadow-lg">
      <Image
        src={icon}
        alt="icon"
        width="30"
        height="30"
        className="bg-slate-100 p-2 w-10 rounded-full"
      />
      <p>{desc}</p>
    </div>
  );
}

export default CardOverview;
