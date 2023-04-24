function Button({ color, disabled, onClick, children, className }) {
  return (
    <button
      className={`btn ${
        color === "secondary"
          ? "btn-secondary"
          : color === "danger"
          ? "btn-danger"
          : "btn-primary"
      } ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
