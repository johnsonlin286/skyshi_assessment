function Backdrop({ name, elmRef, className }) {
  return (
    <div
      data-cy={name}
      ref={elmRef}
      className={`backdrop fade fixed w-full h-full top-0 left-0 bg-[#000]/50 ${
        className || ""
      }`}
    />
  );
}

export default Backdrop;
