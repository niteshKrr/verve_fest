import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type AllEventsProps = {
  EventName: string;
  EventImg: string;
  UrlLink: string;
  linkcolor: string;
};

const Event_card = ({
  EventName,
  EventImg,
  UrlLink,
  linkcolor,
}: AllEventsProps) => {
  return (
    <Card className="max-w-[410px] mb-4">
      <CardHeader>
        <p className="text-md font-bold mr-4">{EventName} </p>
      </CardHeader>
      <CardBody>
        <div>
          <Image
            width={300}
            height={300}
            alt="Loading..."
            className="z-0 w-full h-full object-cover"
            src={EventImg}
          />
        </div>
      </CardBody>
      <CardFooter>
        <Link className={linkcolor} href={UrlLink}>
          Explore now.... 🥳
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Event_card;
