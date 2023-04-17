import { Icon } from "@iconify/react";
import addIcon from "@iconify/icons-material-symbols/add";

import Button from "./Button";

function AddButton({ name, onClick }) {
  return (
    <div data-cy={name}>
      <Button onClick={onClick}>
        <Icon icon={addIcon} width={24} height={24} className="mr-[6px]" />
        Tambah
      </Button>
    </div>
  );
}

export default AddButton;
