import {Badge, Button, Card, Chip} from "@heroui/react";
import Image from "next/image";
import {CircleDollar} from '@gravity-ui/icons';
import { DeleteAltert } from "./DeleteAlert";
import { EditModal } from "./EditModal";
import { RequestModal } from "./RequestModal";
export function ListingCard({data}) {
   const {petName,fee,gender,image,description}=data;
    console.log(data)


  return (
    <Card className="w-full gap-5 flex flex-col">
      <div className="relative bg-amber-500">
        <Image
          alt={petName}
          className="w-full object-cover h-[40vh] rounded-md "
          loading="lazy"
          src={image}
          width={150}
          height={150}
        />
         <Chip color='success'>{gender}</Chip>
      </div>
     
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <div className="flex justify-between items-center gap-5">
            <Card.Title className="pr-8 text-xl font-bold">{petName}</Card.Title>
          <span className=" font-medium  text-xl "><CircleDollar className="inline-block" />{fee}</span>
          </div>
          <Card.Description className="text-muted">
           {description}
          </Card.Description>
          
        </Card.Header>
        <Card.Footer className="">
        <div className='space-y-3'> 
              <div className="flex justify-between items-center gap-5">
            
                <span className=" font-medium  text-green-500 "><CircleDollar className="inline-block mr-3" />{fee}</span>
                <hr className=" w-px h-5 bg-gray-500"/>
           
            <span className="text-xs text-green-500 font-medium">{gender}</span>
          </div>
        
          <div className="grid grid-cols-2 justify-between items-center gap-5">
            <EditModal data={data}></EditModal>
          <Button className='rounded-md bg-linear-to-tr from-purple-500 to-blue-500'>Show More </Button>
          <DeleteAltert data={data}></DeleteAltert>
           <RequestModal data={data}></RequestModal>
          </div>
        </div>
        </Card.Footer>
      </div>
    </Card>
  );
}