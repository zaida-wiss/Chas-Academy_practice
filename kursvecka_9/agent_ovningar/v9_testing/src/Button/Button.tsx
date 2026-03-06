export function Button ({
  children, disabled = false, onClick
}) {
  return(
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}>{children}
    </button>
  );
}