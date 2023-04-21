import { useContext, useEffect, useRef, useState } from "react";

import { AlertContext } from "@/context/alertContext";
import Backdrop from "./Backdrop";

function Alert({ children }) {
  const { visible, visibleToggle } = useContext(AlertContext);
  const backdropElm = useRef(null);
  const alertElm = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && backdropElm.current) {
      backdropElm.current.addEventListener("click", dismissAlert);
    }
  }, [isVisible, backdropElm]);

  const dismissAlert = () => {
    if (backdropElm.current && alertElm.current) {
      alertElm.current.classList.add("out");
      backdropElm.current.classList.add("out");
      backdropElm.current.addEventListener("animationend", () => {
        setIsVisible(false);
        visibleToggle();
      });
    }
  };

  useEffect(() => {
    if (visible) {
      setIsVisible(true);
    } else {
      dismissAlert();
    }
  }, [visible, setIsVisible, dismissAlert]);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <Backdrop elmRef={backdropElm} />
      <div
        data-cy="modal-information"
        ref={alertElm}
        className="alert fade fixed flex items-center bg-white rounded-xl shadow-card w-[490px] py-[19px] px-[30px]"
      >
        {children}
      </div>
    </>
  );
}

export default Alert;
