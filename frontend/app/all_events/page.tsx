import React from "react";
import Event_card from "@/components/all_events/Event_card";
import Navbaar from "@/components/layout/Navbaar";

const page = () => {
  return (
    <div>
      <Navbaar/>
      <div className="container mx-auto ">
        <div className="text-center text-5xl my-16 font-bold underline font-mono">
          Our Events
        </div>
        <div className="grid px-4 gap-x-6 place-items-center gap-y-10 sm:grid-cols-3">
          <div>
            <Event_card
              EventName="Sports"
              EventImg="/sports.jpg"
              UrlLink="/sports"
              linkcolor="text-purple-500"
            />
          </div>
          <div>
            <Event_card
              EventName="Literary"
              EventImg="/literary.jpg"
              UrlLink="/literary"
              linkcolor="text-green-500"
            />
          </div>
          <div>
            <Event_card
              EventName="Cultural"
              EventImg="/cultural.jpg"
              UrlLink="/cultural"
              linkcolor="text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
