import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import cheveronLeft from "@iconify/icons-zondicons/cheveron-left";

function Heading({ canGoBack, leftContent, rightContent }) {
  const router = useRouter();

  const backBtnHandler = () => {
    router.back();
  };

  return (
    <div className="heading flex justify-between items-center py-12">
      <div className="flex">
        {canGoBack && (
          <button
            data-cy="todo-back-button"
            onClick={backBtnHandler}
            className="w-[36px] h-[36px] mr-5"
          >
            <Icon icon={cheveronLeft} width={36} height={36} />
          </button>
        )}
        {leftContent}
      </div>
      <div className="">{rightContent}</div>
    </div>
  );
}

export default Heading;
