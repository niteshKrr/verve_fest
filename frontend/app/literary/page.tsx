import React from "react";
import Literary_card from "@/components/literary/Literary_card";
import Navbaar from "@/components/layout/Navbaar";
import styles from "../../app/styles/Body.module.css";

const page = () => {
  return (
    <>
      <Navbaar />
      <div className={styles.body}>
        <div className="container mx-auto ">
          <div className="text-center text-white text-5xl py-16 font-bold underline font-mono">
            Literary Events
          </div>
          <div className="grid px-4 gap-x-6 place-items-center gap-y-10 sm:grid-cols-3">
            <div>
              <Literary_card
                name="Crossword"
                img="/literary/Crossword/2.jpg"
                linkUrl="/literary/crossword"
              />
            </div>
            <div>
              <Literary_card
                name="Debate"
                img="/literary/Debate/1.jpg"
                linkUrl="/literary/debate"
              />
            </div>
            <div>
              <Literary_card
                name="Essay"
                img="/literary/Essay/1.jpg"
                linkUrl="/literary/essay"
              />
            </div>
            <div>
              <Literary_card
                name="Group_discussion"
                img="/literary/GD/4.jpg"
                linkUrl="/literary/group_discussion"
              />
            </div>
            <div>
              <Literary_card
                name="Poetry"
                img="/literary/Poetry/3.jpg"
                linkUrl="/literary/poetry"
              />
            </div>
            <div>
              <Literary_card
                name="Quiz"
                img="/literary/Quiz/2.jpg"
                linkUrl="/literary/quiz"
              />
            </div>
            <div>
              <Literary_card
                name="Speech"
                img="/literary/Speech/2.jpg"
                linkUrl="/literary/speech"
              />
            </div>
            <div>
              <Literary_card
                name="Vedic_maths"
                img="/literary/Vedic_maths/3.jpg"
                linkUrl="/literary/vedic_maths"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
