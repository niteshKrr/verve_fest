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
      <Card className="max-w-[410px]">
        <CardHeader>
          <p className="text-md font-bold mr-4">{EventName} </p>
        </CardHeader>
        <CardBody>
          <div>
            <Image
              alt="Loading..."
              className="z-0 w-full h-full object-cover"
              src={EventImg}
            />
          </div>
        </CardBody>
        <CardFooter>
        <Link className={linkcolor} showAnchorIcon href={UrlLink}>
            Explore now....
          </Link>
        </CardFooter>
      </Card>
  );
};

export default Event_card;
