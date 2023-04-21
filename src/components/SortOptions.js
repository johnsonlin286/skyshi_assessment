import Image from "next/image";

const SORT_OPTIONS = [
  {
    id: "s1",
    icon: "/image/icon-sort-newest.svg",
    label: "Terbaru",
  },
  {
    id: "s2",
    icon: "/image/icon-sort-oldest.svg",
    label: "Terlama",
  },
  {
    id: "s3",
    icon: "/image/icon-sort-asc.svg",
    label: "A-Z",
  },
  {
    id: "s4",
    icon: "/image/icon-sort-dsc.svg",
    label: "Z-A",
  },
  {
    id: "s5",
    icon: "/image/icon-sort-unfin.svg",
    label: "Belum Selesai",
  },
];

function SortOptions({ className }) {
  return (
    <div className={`sort-options ${className || ""}`}>
      <button className="w-[54px] h-[54px] flex justify-center items-center border border-gray500 rounded-full">
        <Image
          src={"/image/icon-sort.svg"}
          alt="icon-sort"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default SortOptions;
