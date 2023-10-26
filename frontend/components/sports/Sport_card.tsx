import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type SportsCardProps = {
  name: string;
  img: string;
  linkUrl: string;
}

const Sport_card = ({ name, img, linkUrl }:SportsCardProps) => {
  return (
    <Card className="max-w-[410px] mb-6 skew-y-3">
      <CardHeader className="flex gap-3">
        <Image
          alt="Loading..."
          height={40}
          src="/daksha_logo.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-bold">{name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Image
          width={300}
          height={300}
            alt="Loading..."
            className="z-0 w-full h-80 object-cover"
            src={img}
          />
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
      <Link className="font-sans text-purple-500" href={linkUrl}>
          Participate now...  👥
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Sport_card;
