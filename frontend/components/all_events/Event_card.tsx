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
  Drivelink: string;
};

const Event_card = ({
  EventName,
  EventImg,
  UrlLink,
  linkcolor,
  Drivelink,
}: AllEventsProps) => {
  return (
    <Card className="max-w-[410px] mb-6 skew-y-3">
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
        <div className="pl-8 text-right">
          <div className={linkcolor}>
            <a target="_blank" href={Drivelink}>
              Download Rule_book... 📝
            </a>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Event_card;
