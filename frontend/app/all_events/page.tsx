import React from "react";
import Event_card from "@/components/all_events/Event_card";
import Navbaar from "@/components/layout/Navbaar";
import styles from "../../app/styles/Body.module.css";

const page = () => {
  return (
    <>
      <Navbaar />
      <div className={styles.body}>
        <div className="container mx-auto ">
          <div className="text-center text-white text-5xl py-16 font-bold underline font-mono">
            Our Events
          </div>
          <div className="grid px-4 gap-x-6 place-items-center gap-y-10 sm:grid-cols-3">
            <div>
              <Event_card
                EventName="Sports"
                EventImg="/sports.jpg"
                UrlLink="/sports"
                linkcolor="text-purple-500"
                Drivelink="https://drive.google.com/file/d/1Xrpp2cndJWGK9X2WkJpXcn_Cjb3fcY_-/view?usp=drivesdk"
              />
            </div>
            <div>
              <Event_card
                EventName="Literary"
                EventImg="/literary.jpg"
                UrlLink="/literary"
                linkcolor="text-green-500"
                Drivelink="https://drive.google.com/file/d/1Yt3pMGek0Z1JtP4o21aKMM0Va_LDIUDQ/view?usp=drivesdk"
              />
            </div>
            <div>
              <Event_card
                EventName="Art & Cultural"
                EventImg="/cultural.jpg"
                UrlLink="/cultural"
                linkcolor="text-red-500"
                Drivelink="https://drive.google.com/file/d/1XZYElBTWDnRZdQr4Duge5aY7wP0Ysl4l/view?usp=drivesdk"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
