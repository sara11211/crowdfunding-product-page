const ProgressBar = ({ currentValue = 50000, maxValue = 100000 }) => {
  
  const progressPercentage = (currentValue / maxValue) * 100;
  
  return (
    <div className="w-full h-3 bg-gray-100 rounded-md">
      <div
        className="h-3 rounded-md bg-light-cyan"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
