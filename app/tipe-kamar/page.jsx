import React from "react";
import Image from "next/image";
import { roomTypeData } from "@/constant";
import { RoomType } from "@/components";

export const metadata = {
  title: "Tipe Kamar",
};

function TipeKamar() {
  const listRoom = roomTypeData.map((data, index) => {
    return (
      <RoomType
        key={index}
        image={data.image}
        type={data.type}
        facilities={data.facilities}
        price={data.price}
      />
    );
  });

  return <>{listRoom}</>;
}

export default TipeKamar;
