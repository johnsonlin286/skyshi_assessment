import Link from "next/link";
import moment from "moment/moment";

import Image from "next/image";
import IconButton from "./IconButton";
import { deleteActivity } from "@/api/activity";

function ActivityItem({ id, title, date, className, onDelete }) {
  return (
    <div
      data-cy="activity-item"
      className={`h-[235px] bg-white rounded-xl shadow-card ${className || ""}`}
    >
      <Link
        href={`/#${id}`}
        className="w-full h-full flex flex-col justify-between py-6 px-7"
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="w-full flex justify-between items-center">
          <p className="text-sm text-gray800">
            {moment(date).format("D MMMM YYYY")}
          </p>
          <IconButton onClick={onDelete}>
            <Image
              src={"/image/icon-trash.svg"}
              alt="icon-trash"
              width={24}
              height={24}
            />
          </IconButton>
        </div>
      </Link>
    </div>
  );
}

export default ActivityItem;
