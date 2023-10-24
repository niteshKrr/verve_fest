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

const Badminton = () => {
  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
      <Card className="w-96">
        <CardHeader className="flex gap-4 my-3">
          <Image
            alt="form logo"
            height={40}
            src="/daksha_logo.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Register for Badminton </p>
            {/* <p className="text-small text-default-500">nextui.org</p> */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div>
            <Input type="email" variant="underlined" label="Email" />
          </div>
          <div className="mt-4">
          <Input type="email" variant="underlined" label="Email" />
          </div>
          <div className="mt-4">
          <Input type="email" variant="underlined" label="Email" />
          </div>
          <div className="mt-4">
          <Input type="email" variant="underlined" label="Email" />
          </div>
          <div className="mt-4">
          <Input type="email" variant="underlined" label="Email" />
          </div>
          <div className="mt-4">
          <Input type="email" variant="underlined" label="Email" />
          </div>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter>
            <div className="justify-items-end mb-3">
          <Button
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

export default Badminton;
