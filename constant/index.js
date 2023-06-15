const overviewCardData = [
  { icon: "/pin.svg", desc: "Dekat Kampus" },
  { icon: "/food.svg", desc: "Banyak Penjual Makan" },
  { icon: "/market.svg", desc: "Dekat Indomaret" },
];

const facilitiesData = [
  { icon: "/wifi.svg", desc: "Wifi" },
  { icon: "/bike.svg", desc: "Tempat parkir luas" },
  { icon: "/kitchen.svg", desc: "Dapur umum" },
  { icon: "/bathroom.svg", desc: "Kamar mandi umum" },
  { icon: "/cctv.svg", desc: "CCTV 24h" },
];

const roomTypeData = [
  {
    image: "/bedroom.jpg",
    type: "Kamar Tipe A",
    facilities: ["K.M dalam", "5x5M", "AC", "TV"],
    price: "2.500.000",
  },
  {
    image: "/bedroom.jpg",
    type: "Kamar Tipe B",
    facilities: ["K.M dalam", "4x3M", "TV"],
    price: "1.800.000",
  },
  {
    image: "/bedroom.jpg",
    type: "Kamar Tipe C",
    facilities: ["K.M dalam", "3x3M"],
    price: "1.250.000",
  },
];

const listNavAdmin = [
  { icon: "/members.svg", href: "/admin/members", tooltip: "Members" },
  { icon: "/room.svg", href: "/admin/room-type", tooltip: "Room" },
  { icon: "/complain.svg", href: "/admin/aduan", tooltip: "Aduan" },
];

const tableRowMembers = [
  {
    name: "Brian",
    phone_number: "08923423434",
    room_number: "10",
    start_date: "01/23/2023",
    end_date: "02/23/2023",
  },
  {
    name: "Angel",
    phone_number: "08967423434",
    room_number: "06",
    start_date: "02/13/2023",
    end_date: "04/01/2023",
  },
  {
    name: "Gabriel",
    phone_number: "0809523434",
    room_number: "12",
    start_date: "01/01/2023",
    end_date: "10/03/2023",
  },
  {
    name: "Santos",
    phone_number: "08921232431",
    room_number: "01",
    start_date: "04/20/2023",
    end_date: "12/12/2023",
  },
  {
    name: "Jacob",
    phone_number: "08923423241",
    room_number: "02",
    start_date: "02/15/2023",
    end_date: "11/13/2023",
  },
];

export {
  overviewCardData,
  facilitiesData,
  roomTypeData,
  listNavAdmin,
  tableRowMembers,
};
