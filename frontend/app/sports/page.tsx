import React from "react";
import Sport_card from "@/components/sports/Sport_card";
import Navbaar from "@/components/layout/Navbaar";
import styles from "../../app/styles/Body.module.css";

const page = () => {
  return (
    <>
      <Navbaar />
      <div className={styles.body}>
        <div className="container mx-auto ">
          <div className="text-center text-white text-5xl py-16 font-bold underline font-mono">
            Sports Events
          </div>
          <div className="grid px-4 gap-x-6 place-items-center gap-y-10 sm:grid-cols-3">
            <div>
              <Sport_card
                name="Badminton"
                img="/sports/Badminton/2.jpg"
                linkUrl="/sports/badminton"
              />
            </div>
            <div>
              <Sport_card
                name="Volleyball"
                img="/sports/Volleyball/2.jpg"
                linkUrl="/sports/volleyball"
              />
            </div>
            <div>
              <Sport_card
                name="Kho_kho"
                img="/sports/Kho_kho/1.jpg"
                linkUrl="/sports/kho_kho"
              />
            </div>
            <div>
              <Sport_card
                name="Kabaddi"
                img="/sports/Kabaddi/1.png"
                linkUrl="/sports/kabaddi"
              />
            </div>
            <div>
              <Sport_card
                name="Chess"
                img="/sports/Chess/1.jpg"
                linkUrl="/sports/chess"
              />
            </div>
            <div>
              <Sport_card
                name="Carrom"
                img="/sports/Carrom/1.jpg"
                linkUrl="/sports/carrom"
              />
            </div>
            <div>
              <Sport_card
                name="Table_tennis"
                img="/sports/Table_tennis/1.jpg"
                linkUrl="/sports/table_tennis"
              />
            </div>
            <div>
              <Sport_card
                name="Shotput"
                img="/sports/Shotput/1.jpg"
                linkUrl="/sports/shotput"
              />
            </div>
            <div>
              <Sport_card
                name="Athletics [long_jump]"
                img="/sports/Athletics/1.jpg"
                linkUrl="/sports/long_jump"
              />
            </div>
            <div>
              <Sport_card
                name="Tug_of_war"
                img="/sports/Tug_of_war/1.jpg"
                linkUrl="/sports/tug_of_war"
              />
            </div>
            <div>
              <Sport_card
                name="Cricket"
                img="/sports/Cricket/1.jpg"
                linkUrl="/sports/cricket"
              />
            </div>
            <div>
              <Sport_card
                name="Discus_throw"
                img="/sports/Discus_throw/2.jpg"
                linkUrl="/sports/discus_throw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
