import React from "react";
import Image from "next/image";
import { roomTypeData } from "@/constant";

export function generateMetadata({ params }) {
  return { title: params.tipe.replaceAll("%20", " ") };
}

function TipeKamarId({ params }) {
  const tipe = roomTypeData.filter((data) => {
    return data.type === params.tipe.replaceAll("%20", " ");
  });

  return (
    <div>
      <pre>{JSON.stringify(JSON.parse(JSON.stringify(tipe[0])), null, 2)}</pre>
    </div>
  );
}

export default TipeKamarId;
