import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

type CulturalCardProps = {
  name: string;
  img: string;
  linkUrl: string;
}

const Cultural_card = ({ name, img, linkUrl }:CulturalCardProps) => {
  return (
    <Card className="max-w-[410px] mb-4">
      <CardHeader className="flex gap-3">
        <Image
          alt="card logo"
          height={40}
          radius="sm"
          src="/daksha_logo.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-bold">{name}</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Image
            alt="Loading..."
            className="z-0 w-full h-80 object-cover"
            src={img}
          />
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link showAnchorIcon href={linkUrl}>
          Participate now !
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Cultural_card;
