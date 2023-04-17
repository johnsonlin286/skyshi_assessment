function Button({ color, disabled, onClick, children }) {
  return (
    <button
      className={`btn ${
        color === "secondary"
          ? "btn-secondary"
          : color === "danger"
          ? "btn-danger"
          : "btn-primary"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
