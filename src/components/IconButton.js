function IconButton({ name, onClick, children, className }) {
  return (
    <button data-cy={name} className={`${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;
