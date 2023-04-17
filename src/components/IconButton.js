function IconButton({ elmRef, onClick, children }) {
  return (
    <button ref={elmRef} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;
