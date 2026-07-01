"use client";
import { authClient } from "@/lib/auth-client";
import {Button, DateField, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
export function DetailsModal({pet}) {
  const {data: session}=authClient.useSession();
  const [peckDate,setPeckDate]=useState(null);
  const [description,setDescription]=useState('');
  //console.log(description)
  const user=session?.user;
  //console.log(user)
  const {petName,fee,image,_id}=pet
  const handleAdapt=async()=>{
   
    const AdaptData={
      userId: user?.id,
      image,
      Name:petName,
      price: fee,
      petId: _id,
     peckDate: new Date(peckDate),
     status: 'pending',
     description,
    }
    //console.log(AdaptData)
  
    const res = await fetch(`http://localhost:5000/adaption`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(AdaptData),
    });
    const data = await res.json();
    toast.success('Adapt this pet Successfully');
    //console.log(data);
   
  
    
    
  }
  
  return (
    <Modal>
      
      <Button className='rounded-sm bg-linear-to-tr from-purple-500 to-blue-500 w-full'>Adopt</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>             
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <label className="block mb-2 font-medium">Pet Name</label>
                                <input
                                type="text"
                                name="petName"
                                readOnly
                                defaultValue={pet.petName}
                                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                  </TextField>

<label className="block mb-2 font-medium">User Name</label>
                                <input
                                type="text"
                                name="user"
                                defaultValue={user?.name}
                                readOnly
                                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                     <label className="block mb-2 font-medium">User Email</label>
                                <input
                                type="email"
                                readOnly
                                name="email"
                                defaultValue={user?.email}
                                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                    <DateField onChange={setPeckDate}>
 <label className="block mb-2 font-medium" >Date</label>   
   <DateField.Group>
         <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
       </DateField.Group>

                    {/* <input type="date" name="peckDate" id="" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"/> */}
                    </DateField>
                   

                    <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              rows={5}
              name="description"
              onChange={(e)=>setDescription(e.target.value)}
              placeholder="Write about the pet..."
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 "
            ></textarea>
          </div>
          










                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary" className={"w-full  rounded-md"}>
                Cancel
              </Button>
          <Button onClick={handleAdapt} className='rounded-sm bg-linear-to-tr from-purple-500 to-blue-500 w-full'>Adopt</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}