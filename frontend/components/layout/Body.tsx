"use client";
import React from "react";
import Link from "next/link";
import styles from "../../app/styles/Body.module.css";
import { TypeAnimation } from "react-type-animation";
import {Button} from "@nextui-org/react";

const Body = () => {
  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <div className="text-center">
            <div
              className="text-3xl font-serif sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black underline"
            >
              VERVE FEST
            </div>
            <div
              className="text-xl sm:text-4xl font-mono text-white mt-8"
              //   style={{ height: "100px" }}
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
                  `Unleash Your Inner Athlete!\nExploring Culture, Celebrating Diversity!\nDiscover Worlds Between the Pages!`,
                  2000,
                ]}
                // wrapper="span"
                // speed={50}
                // style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
        </div>
        <div>
          <Button color="default" variant="bordered">
            <Link href="/all_events" className="font-bold mx-2">
              Participate_now... 🤜🤛
            </Link>
          </Button> 
        </div>
    </div>
  );
};

export default Body;
