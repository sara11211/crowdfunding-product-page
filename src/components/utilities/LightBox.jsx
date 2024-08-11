const LightBox = ({ children, z = "z-10"}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${z}`}
    >
      {children}
    </div>
  );
};

export default LightBox;
