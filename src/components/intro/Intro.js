import IntroBack from "../../assets/images/Group.png";

export const Intro = () => {
  return (
    <div className="pt-[80px] h-[400px] bg-gradient-to-t from-[#ffffff] to-[#76e6ff]">
      <img className="w-screen h-[120px]" src={IntroBack} alt="IntroBack" />
      <p font>Welcome to Skyskills...</p>
      <p>Manage information, rule the world!</p>
    </div>
  );
};
