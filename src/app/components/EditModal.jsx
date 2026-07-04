"use client";
import { authClient } from '@/lib/auth-client';
import {PencilToSquare} from '@gravity-ui/icons';
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import toast from 'react-hot-toast';

export function EditModal({data}) {
   const {_id}=data;
    //console.log(data)
    const handleUpdatePe=async(e)=>{
        e.preventDefault()
        const formdata=new FormData(e.currentTarget);
        const petData=Object.fromEntries(formdata.entries());
        const {data: tokenData}=authClient.token()
        const res=await fetch(`http://localhost:5000/pet/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type':'application/json',
                authorization:`Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(petData)
        })
        const UpdateData=await res.json()
        toast.success('Update Successfull')
        //console.log(UpdateData)
    }
    
  return (
    <Modal>
      <Button className='rounded-md '><PencilToSquare></PencilToSquare>Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
            
              <Modal.Heading>Edit Adapt</Modal.Heading>
          
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleUpdatePe}>
                          {/* Pet Name */}
                          <div>
                            <label className="block mb-2 font-medium">Pet Name</label>
                            <input
                              type="text"
                              name="petName"
                              placeholder="Enter pet name"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                
                          {/* Species */}
                          <div>
                            <label className="block mb-2 font-medium">Species</label>
                            <select
                              name="species"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                              <option>Dog</option>
                              <option>Cat</option>
                              <option>Bird</option>
                              <option>Rabbit</option>
                              <option>Fish</option>
                              <option>Other</option>
                            </select>
                          </div>
                
                          {/* Breed */}
                          <div>
                            <label className="block mb-2 font-medium">Breed</label>
                            <input
                              type="text"
                              name="breed"
                              placeholder="Golden Retriever"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                
                          {/* Age */}
                          <div>
                            <label className="block mb-2 font-medium">Age</label>
                            <input
                              type="number"
                              name="age"
                              placeholder="2"
                              min={1}
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                
                          {/* Gender */}
                          <div>
                            <label className="block mb-2 font-medium">Gender</label>
                            <select
                              name="gender"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                
                          {/* Image URL */}
                          <div>
                            <label className="block mb-2 font-medium">Image URL</label>
                            <input
                              type="url"
                              name="image"
                              placeholder="https://i.ibb.co/..."
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                
                          {/* Health Status */}
                          <div>
                            <label className="block mb-2 font-medium">Health Status</label>
                            <input
                              type="text"
                              name="health"
                              placeholder="Healthy"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                
                          {/* Vaccination */}
                          <div>
                            <label className="block mb-2 font-medium">
                              Vaccination Status
                            </label>
                            <select
                              name="vaccination"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                              <option>Vaccinated</option>
                              <option>Partially Vaccinated</option>
                              <option>Not Vaccinated</option>
                            </select>
                          </div>
                
                          {/* Location */}
                          <div>
                            <label className="block mb-2 font-medium">Location</label>
                            <input
                              type="text"
                              name="location"
                              placeholder="Sylhet, Bangladesh"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                
                          {/* Adoption Fee */}
                          <div>
                            <label className="block mb-2 font-medium">Adoption Fee</label>
                            <input
                              type="number"
                              name="fee"
                              min={1}
                              placeholder="1000"
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                
                          {/* Owner Email */}
                          <div className="md:col-span-2">
                            <label className="block mb-2 font-medium">Owner Email</label>
                            <input
                              type="email"
                              name="ownerEmail"
                             // defaultValue={user?.email}
                              readOnly
                              className="w-full rounded-lg border bg-gray-100 px-4 py-3 cursor-not-allowed"
                            />
                          </div>
                
                          {/* Description */}
                          <div className="md:col-span-2">
                            <label className="block mb-2 font-medium">Description</label>
                            <textarea
                              rows={5}
                              name="description"
                              placeholder="Write about the pet..."
                              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            ></textarea>
                          </div>
                
                          {/* Submit */}
                          <div className="flex items-center justify-center gap-4">

   
              <Button slot="close" variant="secondary" className='rounded-sm'>
                Cancel
              </Button>
              <Button className='rounded-sm bg-linear-to-tr from-purple-500 to-blue-500'  type='submit'>Submit</Button>
            
                          </div>
                        </form>
              </Surface>
            </Modal.Body>
         
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}