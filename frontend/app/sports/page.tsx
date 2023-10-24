import React from "react";
import Sport_card from "@/components/sports/Sport_card";

const page = () => {
  return (
    <div className="container mx-auto ">
        <div className="text-center text-5xl my-10 font-bold">Sports Events</div>
    <div className="grid grid-cols-4 gap-4">
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
      <div>
        <Sport_card />
      </div>
    </div>
    </div>
  );
};

export default page;
