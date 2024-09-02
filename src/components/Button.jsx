const Button = ({
  text,
  px = "max-md:px-6 px-11",
  py = "py-4",
  size = "base",
  bg = "bg-light-cyan hover:bg-dark-cyan",
  onClick,
  disabled
}) => {
  return (
    <button
      className={`${py} ${size} font-medium tracking-wide text-white rounded-full ${px} ${bg}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
