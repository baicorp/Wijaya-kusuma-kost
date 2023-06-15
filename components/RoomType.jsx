import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RoomType({ image, type, facilities, price }) {
  const listFacilities = facilities.map((data, index) => {
    return <li key={index}>{data}</li>;
  });

  return (
    <div className="flex-1 overflow-hidden border-[1px] rounded-lg border-gray-400">
      <Image
        src={image}
        width="100"
        height="100"
        alt="bedroom"
        className="aspect-video w-full object-cover"
      />
      <div className="p-4 space-y-4">
        <p className="font-semibold">{type}</p>
        <ul className="flex flex-wrap ml-3 text-gray-600 text-xs list-disc items-center gap-x-4">
          {listFacilities}
        </ul>
        <p className="font-extrabold text-slate-800 text-lg">
          {price}
          <span className="text-sm text-gray-600 font-normal">/bulan</span>
        </p>
        <Link href={`/tipe-kamar/${type}`}>
          <button className="mt-auto w-full bg-black text-white font-bold p-3 rounded-lg">
            Lihat
          </button>
        </Link>
      </div>
    </div>
  );
}
