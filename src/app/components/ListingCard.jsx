import {Button, Card} from "@heroui/react";
import Image from "next/image";
import {CircleDollar} from '@gravity-ui/icons';
import {Calendar} from '@gravity-ui/icons';
import { DeleteAltert } from "./DeleteAlert";
import { EditModal } from "./EditModal";
import { RequestModal } from "./RequestModal";
export function ListingCard({data}) {
   const {peckDate,price,Name,image,description}=data;
    //console.log(data)
    const date=new Date(peckDate).toLocaleDateString('en-GB')

  return (
    <Card className="w-full gap-5 flex flex-col">
      <div className="">
        <Image
          alt={Name}
          className="w-full object-cover rounded-md "
          loading="lazy"
          src={image}
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-xl font-bold">{Name}</Card.Title>
          <Card.Description className="text-muted">
           {description}
          </Card.Description>
          
        </Card.Header>
        <Card.Footer className="">
        <div className='space-y-3'> 
              <div className="flex items-center gap-5">
            
                <span className=" font-medium  text-green-500 "><CircleDollar className="inline-block mr-3" />{price}</span>
                <hr className=" w-px h-5 bg-gray-500"/>
           
            <span className="text-xs text-green-500 font-medium"><Calendar className="inline-block mr-3"/>{date}</span>
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