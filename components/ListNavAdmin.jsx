import React from "react";
import Link from "next/link";
import Image from "next/image";

function ListNavAdmin({ icon, href, tooltip }) {
  return (
    <li className="relative group/item hover:bg-[#2e2e2e] hover:tip rounded-lg flex items-center">
      <button>
        <Link
          href={href}
          className="w-10 h-10 flex justify-center items-center"
        >
          <Image
            src={icon}
            width={30}
            height={30}
            alt={`icon-${tooltip}`}
            className="w-[20px] h-[20px] object-contain"
          />
        </Link>
      </button>
      <p className="invisible absolute left-full bg-black p-1 pl-2 text-slate-200 text-[10px] group-hover/item:visible">
        {tooltip}
      </p>
    </li>
  );
}

export default ListNavAdmin;
