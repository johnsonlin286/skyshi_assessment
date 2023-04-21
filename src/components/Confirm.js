function Confirm({ name, elmRef, children, className }) {
  return (
    <div
      data-cy={name}
      ref={elmRef}
      className={`confirm fade fixed flex flex-col justify-between items-center bg-white rounded-xl shadow-card w-[490px] h-[355px] pt-[50px] px-[60px] pb-[40px] mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default Confirm;
