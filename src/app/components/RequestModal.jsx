//"use client";

import {Heart} from '@gravity-ui/icons';
import {Button, Chip, Modal} from "@heroui/react";
//import { useState } from 'react';
import toast from 'react-hot-toast';
export async function RequestModal ({data}) {
  const   {description,status,petName,userId}=data;
  console.log(petName,'pet')
  
    const res=await fetch(`http://localhost:5000/adaption/${userId}`);
    const getData=await res.json();
   
  
  //console.log(getData,'getData')
    //console.log(data,'request Modal');
    
    //const [stat,setStat]=useState(status);
    //console.log(stat)
    const handleAccept=()=>{
     
       
        toast.success('Accept this request');
    };
    const handleReject=()=>{
       
        toast.warning('Reject this request');
    }
    
    
  return (
    <Modal>
      <Modal.Trigger className="group flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xs select-none hover:bg-surface-secondary">
        
<Button variant="outline" className='rounded-md'>Request</Button>
      </Modal.Trigger>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px] relative">
          
            <Chip  className={`absolute top-3 right-3`}>{status}</Chip>
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Heart className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Request {petName}</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
               {description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              
               
                <Button slot="close" className='rounded-md' variant="secondary">
                Rehect
              </Button>
              <Button slot="close" className='rounded-md bg-linear-to-tr from-purple-500 to-blue-500' >Accept</Button>
                
          
              
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}