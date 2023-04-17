import Backdrop from "./Backdrop";

function Alert({ children }) {
  return (
    <>
      <Backdrop />
      <div className="alert bg-white rounded-xl shadow-card w-[490px] py-[19px] px-[30px]">
        {children}
      </div>
    </>
  );
}

export default Alert;
