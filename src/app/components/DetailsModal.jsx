"use client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
export function DetailsModal({pet}) {
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
                                placeholder="Enter yOour name"
                                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                     <label className="block mb-2 font-medium">User Email</label>
                                <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                    <label className="block mb-2 font-medium"></label>                
                    <input type="date" name="peckDate" id="" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                    <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              rows={5}
              name="description"
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
          <Button className='rounded-sm bg-linear-to-tr from-purple-500 to-blue-500 w-full'>Adopt</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}