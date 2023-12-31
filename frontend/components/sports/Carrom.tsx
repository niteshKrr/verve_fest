"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "../../app/styles/Body.module.css";

const Carrom = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [branch, setBranch] = useState("");
  const [roll, setRoll] = useState("");
  const [batch, setBatch] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !des || !branch || !roll || !batch || !phone) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are necessary.",
        confirmButtonColor: "#D6465B",
      });
      return;
    }
    setLoading(true);

    axios
      .post(`www.backend.verve.dakshalnjpit.in/sports/carrom`, {
        name,
        des,
        branch,
        roll,
        batch,
        phone,
      })
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: "Done",
          text: "Your request has been successfully submitted",
          icon: "success",
          confirmButtonColor: "#D6465B",
        });
        setName("");
        setBranch("");
        setRoll("");
        setBatch("");
        setPhone("");
        setDes("");
      })
      .catch((e) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registration closed",
          confirmButtonColor: "#D6465B",
        });
      });
  };

  return (
    <div className={styles.form}>
      <div className="grid place-items-center h-screen">
        <Card className="sm:w-96">
          <CardHeader className="flex gap-4 my-3">
            <Image
              alt="form logo"
              height={40}
              src="/daksha_logo.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md font-bold">Register for Carrom </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                variant="underlined"
                label="name"
              />
            </div>
            <div className="mt-4">
              <Input
                value={des}
                onChange={(e) => setDes(e.target.value)}
                type="text"
                variant="underlined"
                label="solo/duo, if duo then team_name & team_mate name"
              />
            </div>
            <div className="mt-4">
              <Input
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                type="text"
                variant="underlined"
                label="branch"
              />
            </div>
            <div className="mt-4">
              <Input
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                type="text"
                variant="underlined"
                label="reg_no./roll_no."
              />
            </div>
            <div className="mt-4">
              <Input
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                type="text"
                variant="underlined"
                label="batch e.g -> 2k20 / 2k21 / 2k22 / 2k23"
              />
            </div>
            <div className="mt-4">
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                variant="underlined"
                label="phone_no.[whatsapp_no.]"
              />
            </div>
          </CardBody>
          {/* <Divider /> */}
          <CardFooter>
            <div className="justify-items-end mb-3">
              {loading === false ? (
                <Button
                  onClick={handleSubmit}
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                >
                  Submit your response --- ❤️
                </Button>
              ) : (
                <Button
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                >
                  Please wait... <div className="loader"></div>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Carrom;
