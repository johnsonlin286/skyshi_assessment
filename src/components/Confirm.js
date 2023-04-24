function Confirm({ elmRef, children, className }) {
  return (
    <div
      ref={elmRef}
      className={`confirm fade fixed flex flex-col justify-between items-center bg-white rounded-xl shadow-card w-[490px] h-[355px] pt-[50px] px-[60px] pb-[40px] mx-auto z-20 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default Confirm;
