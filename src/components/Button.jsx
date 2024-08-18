const Button = ({
  text,
  px = "px-11",
  py = "py-4",
  size = "text-base",
  bg = "bg-light-cyan hover:bg-dark-cyan",
  onClick
}) => {
  return (
    <button
      className={`${py} ${size} font-medium tracking-wide text-white rounded-full ${px} ${bg}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
