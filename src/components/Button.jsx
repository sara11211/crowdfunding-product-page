const Button = ({
  text,
  px = "px-11",
  py = "py-4",
  size = "text-base",
  bg = "bg-light-cyan hover:bg-dark-cyan",
}) => {
  return (
    <button
      className={`${py} ${size} font-medium tracking-wide text-white rounded-full ${px} ${bg}`}
    >
      {text}
    </button>
  );
};

export default Button;
