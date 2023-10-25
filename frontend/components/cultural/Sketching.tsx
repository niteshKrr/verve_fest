"use client"
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
import Swal from 'sweetalert2';

const Sketching = () => {

  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [roll, setRoll] = useState("");
  const [batch, setBatch] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !branch || !roll || !batch || !phone) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are necessary.',
        confirmButtonColor: '#D6465B',
      });
      return;
    }

    axios
      .post(`http://127.0.0.1:8000/cultural/sketching`, {
        name,
        branch,
        roll,
        batch,
        phone,
      })
      .then(() => {
        Swal.fire({
          title: 'Done',
          text: 'Your request has been successfully submitted',
          icon: 'success',
          confirmButtonColor: '#D6465B',
        });
        setName("");
        setBranch("");
        setRoll("");
        setBatch("");
        setPhone("");
      })
      .catch((e) => {
        Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'an error occurred',
					confirmButtonColor: '#D6465B',
				});
      });
  };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
      <Card className="sm:w-96">
        <CardHeader className="flex gap-4 my-3">
          <Image
            alt="form logo"
            height={40}
            src="/daksha_logo.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md font-bold">Register for Sketching </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div>
            <Input value={name} onChange={(e) => setName(e.target.value)} type="text" variant="underlined" label="name" />
          </div>
          <div className="mt-4">
          <Input value={branch} onChange={(e) => setBranch(e.target.value)} type="text" variant="underlined" label="branch" />
          </div>
          <div className="mt-4">
          <Input value={roll} onChange={(e) => setRoll(e.target.value)} type="text" variant="underlined" label="reg_no./roll_no." />
          </div>
          <div className="mt-4">
          <Input value={batch} onChange={(e) => setBatch(e.target.value)} type="text" variant="underlined" label="batch e.g -> 2k20 / 2k21 / 2k22 / 2k23" />
          </div>
          <div className="mt-4">
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" variant="underlined" label="phone_no.[whatsapp_no.]" />
          </div>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter>
            <div className="justify-items-end mb-3">
          <Button
          onClick={handleSubmit}
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Submit your response --- ❤️
          </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Sketching;
