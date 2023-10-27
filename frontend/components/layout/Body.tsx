"use client";
import React from "react";
import Link from "next/link";
import styles from "../../app/styles/Body.module.css";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@nextui-org/react";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className="grid place-items-center pt-40">
        <div className="text-3xl text-white font-serif sm:text-4xl md:text-5xl lg:text-6xl font-extrabold underline">
          VERVE FEST
        </div>
        <div
          className="text-xl sm:text-4xl text-center font-mono text-white pt-10 mx-6"
          style={{ height: "150px" }}
        >
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "40px",
              display: "block",
            }}
            sequence={[
              "Where... 🤔",
              2000,
              `Creativity Meets Celebration!\nYour Event, Your Story!\nTalents Converge, Passions Thrive!`,
              2000,
            ]}
            // wrapper="span"
            // speed={50}
            // style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="pt-28">
          <Button color="default" variant="bordered">
            <Link href="/all_events" className="font-bold mx-2 text-white">
              Register now... 🤜🤛
            </Link>
          </Button>
        </div>
        <div className="pt-8 text-white underline">Registration deadline 30 oct 11:59 pm</div>
      </div>
    </div>
  );
};

export default Body;
