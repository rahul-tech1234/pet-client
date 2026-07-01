import {Button, Card, CloseButton} from "@heroui/react";
import Image from "next/image";
import {CircleDollar} from '@gravity-ui/icons';
import {TrashBin} from '@gravity-ui/icons';
import {PencilToSquare} from '@gravity-ui/icons';
import {Calendar} from '@gravity-ui/icons';
export function ListingCard({data}) {
   const {peckDate,price,Name,image,description}=data;
    //console.log(data)
    const date=new Date(peckDate).toLocaleDateString('en-GB')

  return (
    <Card className="w-full gap-9 items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
          alt={Name}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={image}
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-xl font-bold">{Name}</Card.Title>
          <Card.Description className="text-muted">
           {description}
          </Card.Description>
          
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            
                <span className=" font-medium  text-green-500 "><CircleDollar className="inline-block mr-3" />{price}</span>
                <hr className=" w-px h-5 bg-gray-500"/>
           
            <span className="text-xs text-green-500"><Calendar className="inline-block mr-3"/>{date}</span>
          </div>
        
          <div>
            <Button><PencilToSquare></PencilToSquare>Edit</Button>
          <Button>Show More </Button>
          <Button variant={'danger'} className="rounded-md"> <TrashBin  />Delete </Button>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
}