import Link from "next/link";
import moment from "moment/moment";

import Image from "next/image";
import IconButton from "./IconButton";

function ActivityItem({ id, title, date, className, onDelete }) {
  return (
    <div
      className={`h-[235px] flex flex-col justify-between bg-white rounded-xl shadow-card ${
        className || ""
      }`}
    >
      <Link href={`/detail/${id}`} className="w-full h-full pt-6 px-7">
        <h2 className="text-lg font-bold">{title}</h2>
      </Link>
      <div className="w-full flex justify-between items-center pb-6 px-7">
        <p className="text-sm text-gray800">
          {moment(date).format("D MMMM YYYY")}
        </p>
        <IconButton name="activity-item-delete-button" onClick={onDelete}>
          <Image
            src={"/image/icon-trash.svg"}
            alt="icon-trash"
            width={24}
            height={24}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default ActivityItem;
