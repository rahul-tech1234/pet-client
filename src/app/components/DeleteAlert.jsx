"use client";

import {AlertDialog, Button} from "@heroui/react";
import {TrashBin} from '@gravity-ui/icons';
import toast from "react-hot-toast";
export function DeleteAltert({data}) {
 // console.log(data)  
   const {peckDate,fee,petName,image,description,_id}=data;
     const handleDelete=async()=>{
        const res=await fetch(`http://localhost:5000/pet/${_id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        });
        const data=await res.json(); 
        toast.success('Delete This Successfully')
        //console.log(data)
     }
  return (
    <AlertDialog>
      <Button variant={'danger'} className="rounded-md"> <TrashBin  />Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete This Pet ? {petName}</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                {description}
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Adaption
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}