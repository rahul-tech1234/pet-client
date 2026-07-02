import { GiReceiveMoney } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import {Button, Card, CloseButton} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
export function SingleCard({pet}) {
  const {_id,image,petName,description,fee,location}=pet;
  //console.log(image,'pet')
  return (
    <Card className="w-full flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105">
      <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
  <Image
    src={image}
    alt={petName}
    width={300}
    height={300}
    className="object-cover"
  />
</div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 font-bold">{petName}</Card.Title>
          <Card.Description>
           {description}
          </Card.Description>
          <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col space-y-3">
            <span className="flex items-center gap-2">
              <GiReceiveMoney className=" size-7 text-orange-500" />
              <span className="text-sm font-medium text-foreground "> {fee}</span>
            </span>
            
            <span className="flex items-center gap-3">
              <FaLocationDot className="text-green-500"/>
              <span className="text-xs text-muted"> {location}</span>
            </span>
          </div>
        </Card.Footer>
        <Link href={`/all-pets/${_id}`} className="w-full sm:w-auto">
          <Button className=" bg-linear-to-tr from-purple-500 to-blue-500 w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  );
}
