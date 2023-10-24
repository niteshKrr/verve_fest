import React from "react";
import Event_card from "@/components/all_events/Event_card";

const page = () => {
  return (
    <div className="container mx-auto ">
      <div className="text-center text-5xl my-10 font-bold">Our Events</div>
      <div className=" grid grid-cols-3 place-items-center">
        <div>
          <Event_card />
        </div>
        <div>
          <Event_card />
        </div>
        <div>
          <Event_card />
        </div>
      </div>
    </div>
  );
};

export default page;
