import { Header } from "../header/Header";
import { Intro } from "../intro/Intro";
import { OurProject } from "../ourProject/OurProject";
import { OurServices } from "../ourServices/OurServices";
import { OurTeams } from "../ourTeams/OurTeams";
import { Technologies } from "../technologies/Technologies";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Intro />
      <OurProject />
      <OurServices />
      <Technologies />
      <OurTeams />
      <h1 className="pt-[100px]">Welcome to our Animations!</h1>
    </>
  );
};
