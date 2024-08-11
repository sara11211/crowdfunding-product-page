const Menu = () => {
  return (
    <div className="absolute top-[15%] w-[85%] max-w-[500px] bg-white rounded-md border mx-auto">
        <ul className="flex flex-col items-start p-6 font-medium">
          <li className="hover:text-dark-gray">
            <a href="#">About</a>
          </li>
          <div className="line" />
          <li className="hover:text-dark-gray">
            <a href="#">Discover</a>
          </li>
          <div className="line" />
          <li className="hover:text-dark-gray">
            <a href="#">Get Started</a>
          </li>
        </ul>
      </div>
  );
};

export default Menu;
