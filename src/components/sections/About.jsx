import Button from "../Button";
import data from "../../data/data";

const About = () => {
  return (
    <div className="flex flex-col items-start gap-6 text-left card">
      <h2 className="text-lg font-bold">About this project</h2>
      <p className="text-sm leading-6 text-dark-gray">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-sm leading-6 text-dark-gray">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <ul className="flex flex-col gap-6">
        {data.map((item) => (
          <li
            key={item.name}
            className={`small-card ${item.numberLeft === 0 ? "opacity-50" : ""}`}
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="font-medium text-light-cyan">{`Pledge $${item.price} or more`}</p>
            </div>
            <p className="text-sm leading-6 text-dark-gray">
              {item.description}
            </p>
            <p className="flex items-center gap-3 text-dark-gray">
              <span className="text-3xl font-bold text-black">
                {item.numberLeft}
              </span>
              left
            </p>
            <Button
              text="Select Reward"
              px="px-8"
              py="py-3.5"
              size="text-sm"
              bg={item.numberLeft === 0 ? "bg-dark-gray" : "bg-light-cyan hover:bg-dark-cyan"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;