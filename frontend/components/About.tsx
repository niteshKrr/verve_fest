import React from "react";
import Navbaar from "./layout/Navbaar";
import styles from "../app/styles/Body.module.css";

const About = () => {
  return (
    <>
      <Navbaar />
      <div className={styles.form}>
        <div className="text-center text-white py-16 font-bold text-4xl underline">
          About us 🥳
        </div>
        <div className="px-12 pt-4">
          <div>
            <div className="text-lg text-white">
              👉 <span className="font-bold">VERVE :-</span> A Cultural & Sports
              fest of Lnjpit Chapra.
            </div>
            <div className="pt-3 text-lg text-white">
              👉 Once a humble initiative as a first edition
              <span className="font-bold underline"> VERVE</span> will be the
              most interesting event organized by Daksha, the student Community
              of Lnjpit Chapra.
            </div>
            <div className="pt-3 text-lg text-white">
              👉 It is an endeavour to ensure that no talents goes unnoticed .
              Through verve, we provide you a platform not only for display your
              skills but also for learn & develop your qualities.
            </div>
            <div className="pt-3 text-lg text-white">
              👉 Knit together are virtue of team spirit, undying determination
              & zeap... Verve is an embodiment of you all.
            </div>
            <div className="text-white font-bold pt-3 text-lg">
              👉 " Let's participate & sweat to glory together "
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
