import Image from "next/image";
import { overviewCardData, facilitiesData, roomTypeData } from "@/constant";
import { RoomType, CardOverview, FacilitiesList } from "@/components";

export default function Home() {
  const cardOverview = overviewCardData.map((data, index) => {
    return <CardOverview key={index} icon={data.icon} desc={data.desc} />;
  });

  const cardFacilities = facilitiesData.map((data, index) => {
    return <FacilitiesList key={index} icon={data.icon} desc={data.desc} />;
  });

  const roomType = roomTypeData.map((data, index) => {
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
  return (
    <main className="max-w-[1020px] mx-auto md:mt-4 px-6">
      <section className="">
        <div className="flex flex-col gap-5 md:flex-col-reverse">
          <Image
            src={"/kost.jpg"}
            priority
            width="600"
            height="600"
            alt="Wijaya Kusuma Kost Premier"
            className="h-[350px] w-full object-cover"
          />
          <div className="space-y-1">
            <h1 className="font-bold text-2xl">Kost Wijaya Kusuma Premier</h1>
            <p className="max-w-[520px]">
              Jl. Karyawiguna No.1000, Babatan, Tegalgondo, Kec. Karang Ploso,
              Kabupaten Malang, Jawa Timur
            </p>
          </div>
        </div>
        <div className="h-[2px] bg-gray-800 rounded-full mt-20 "></div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <p className="tracking-wide">
          Berlokasi dibelakang kampus III UMM. Kost Wijaya Kusuma Premier
          menawarkan kemudahan akses bagi penghuni kosnya karena hanya
          memerlukan waktu 2 menit berjalan kaki untuk mencapai kampus, dan juga
          dikelilingi oleh pusat makanan dan belanja. Hal ini memudahkan para
          penghuni untuk bermobilitas sehari-hari, bahkan hanya dengan berjalan
          kaki.
        </p>
        <div className="flex mt-4 gap-2 overflow-x-scroll p-4">
          {cardOverview}
        </div>
        <div className="h-[2px] bg-gray-800 rounded-full mt-20"></div>
      </section>

      <section className="mt-4 sm:flex sm:flex-wrap sm:gap-x-12">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Rating</h2>
          <div className="flex flex-1 gap-3">
            <div className="bg-black p-4 rounded-lg flex justify-center items-center">
              <p className="text-white font-extrabold text-5xl">9.5</p>
            </div>
            <div>
              <p className="font-bold mb-1">Sangat Bagus</p>
              <p className="leading-5">
                Berdasarkan 100 review terverifikasi penghuni kost.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-gray-800 rounded-full mt-20 sm:hidden"></div>
        <div className="mt-4 sm:mt-0 sm:flex-1">
          <h2 className="text-xl font-bold mb-4">Fasilitas</h2>
          <ul className="flex flex-col justify-center space-y-5">
            {cardFacilities}
          </ul>
        </div>
        <div className="h-[2px] bg-gray-800 rounded-full mt-20 sm:w-full"></div>
      </section>

      <section className="mt-4">
        <div>
          <h2 className="text-xl font-bold mb-4">Tipe Kamar</h2>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            {roomType}
          </div>
          <div className="h-[2px] bg-gray-800 rounded-full mt-20"></div>
        </div>
      </section>
    </main>
  );
}
