const LightBox = ({ children, z = "z-10", onClose }) => {
  
  const handleBackgroundClick = (e) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${z}`}
      style={{ overflowY: "auto" }}
      onClick={handleBackgroundClick}
    >
      <div
        onClick={handleContentClick}
        className="flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
};

export default LightBox;
