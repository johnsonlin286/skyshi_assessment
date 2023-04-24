function Backdrop({ elmRef, className }) {
  return (
    <div
      ref={elmRef}
      className={`backdrop fade fixed w-full h-full top-0 left-0 bg-[#000]/50 z-10 ${
        className || ""
      }`}
    />
  );
}

export default Backdrop;
