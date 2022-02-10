import { Header } from "../../components/header/Header";
import { Intro } from "../../components/intro/Intro";
import { OurProject } from "../../components/ourProject/OurProject";
import { OurServices } from "../../components/ourServices/OurServices";
import { OurTeams } from "../../components/ourTeams/OurTeams";
import { Technologies } from "../../components/technologies/Technologies";

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
