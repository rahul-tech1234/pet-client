"use client";

import {Heart} from '@gravity-ui/icons';
import {Button, Chip, Modal} from "@heroui/react";
import { useState } from 'react';
import toast from 'react-hot-toast';
export function RequestModal({data}) {
    //console.log(data);
    const   {description,status}=data;
    const [stat,setStat]=useState(status);
    console.log(stat)
    const handleAccept=()=>{
        setStat('avalable');
        status(stat);
        toast.success('Accept this request');
    };
    const handleReject=()=>{
        setStat('reject');
        status(stat);
        toast.warning('Reject this request');
    }
    
    
  return (
    <Modal>
      <Modal.Trigger className="group flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xs select-none hover:bg-surface-secondary">
<Button variant="outline" className='rounded-md'>Request </Button>
      </Modal.Trigger>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px] relative">
          
            <Chip  className={`absolute top-3 right-3 ${stat == 'pending' ? 'text-warning': stat=='avalable' ?'text-success': 'text-danger'}`}>{status}</Chip>
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Heart className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Request</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
               {description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              {
                stat =='pending' && <>
                <Button onClick={handleReject} slot="close" className='rounded-md' variant="secondary">
                Rehect
              </Button>
              <Button slot="close" className='rounded-md bg-linear-to-tr from-purple-500 to-blue-500' onClick={handleAccept}>Accept</Button>
                </>
              }
              
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}