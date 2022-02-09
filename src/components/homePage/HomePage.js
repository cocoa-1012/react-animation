import { Header } from "../header/Header";
import { Intro } from "../intro/Intro";
import { OurProject } from "../ourProject/OurProject";
import { OurServices } from "../ourServices/OurServices";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Intro />
      <OurProject />
      <OurServices />
      <h1 className="pt-[100px]">Welcome to our Animations!</h1>
    </>
  );
};
