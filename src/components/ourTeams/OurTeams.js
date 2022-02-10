import React from "react";
import Person1 from "../../assets/images/person1.png";
import Person2 from "../../assets/images/person2.png";
import Person3 from "../../assets/images/person3.png";
import Person4 from "../../assets/images/person4.png";
import Person5 from "../../assets/images/person5.png";
import Person6 from "../../assets/images/person6.png";
import Image1 from "../../assets/images/Vector03.png";

export const OurTeams = () => {
  const itemClass = "w-[250px] mx-20 my-16 hover:cursor-pointer";
  return (
    <div className="flex flex-col p-20 items-center relative">
      <img
        className="absolute top-0 w-screen h-[100px]"
        src={Image1}
        alt="IntroBack"
      />
      <p className="absolute top-8 left-8 font-bold text-3xl text-blue-700">
        Our Teams
      </p>
      <div className="flex">
        <div className={itemClass}>
          <img src={Person1} alt="person1" />
          <p>Person1</p>
        </div>
        <div className={itemClass}>
          <img src={Person2} alt="person2" />
          <p>Person2</p>
        </div>
        <div className={itemClass}>
          <img src={Person3} alt="person3" />
          <p>Person3</p>
        </div>
      </div>
      <div className="flex">
        <div className={itemClass}>
          <img src={Person4} alt="person4" />
          <p>Person4</p>
        </div>
        <div className={itemClass}>
          <img src={Person5} alt="person5" />
          <p>Person5</p>
        </div>
        <div className={itemClass}>
          <img src={Person6} alt="person6" />
          <p>Person6</p>
        </div>
      </div>
    </div>
  );
};
