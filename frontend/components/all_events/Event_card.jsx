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
  Image,
} from "@nextui-org/react";
// import Image from "next/image";

const Event_card = () => {

  return (
    <Card className="max-w-[400px] shadow-md bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
          <CardHeader className="my-0">
              <p className="text-md font-bold">Sports </p>
          </CardHeader>
          <CardBody>
            <div>
              <Image
                alt="Loading..."
                className="z-0 w-full h-full object-cover"
                src="/pic.jpg"
              />
            </div>
          </CardBody>
          {/* <CardFooter>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-300 text-white shadow-lg"
            >
              Submit your response --- ❤️
            </Button>
          </CardFooter> */}
        </Card>
  );
};

export default Event_card;
