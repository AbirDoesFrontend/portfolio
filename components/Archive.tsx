import React from "react";
import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Notworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard 
            title="ADF Media"
            des="A Youtube Clone using RapidAPI"
            listItem={["ReactJs" , "TailwindCss" , "RapidAPI"]}
            link="https://adf-media-react-application.netlify.app/"
        />
        <ArchiveCard 
            title="Gym Web App"
            des="A Gym website with various exercises and functionality to search specific exercise"
            listItem={["ReactJs" , "TailwindCss" , "RapidAPI"]}
            link="https://gym-web-react.netlify.app/"
        />
        <ArchiveCard 
            title="Doge Dice"
            des="DogeDice - Let's see who is the Dice King | A Dice Game Developed With The Power Of Vanilla JavaScript"
            listItem={["HTML" , "CSS" , "JavaScript"]}
            link="https://abirdoesfrontend.github.io/DogeDice---Let-s-see-who-is-the-Dice-King/"
        />
      </div>
    </div>
  );
};

export default Archive;
