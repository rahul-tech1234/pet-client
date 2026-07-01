"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Navlink from "./Navlink";
import {ArrowRightFromSquare, Bars} from '@gravity-ui/icons';import { useState } from "react";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { ChevronDown } from "lucide-react";
const Navbar = () => {
    const [mobile,setMobilte]=useState(false);
    const [isClick,setIsClick]=useState(false);
    const {data}=useSession();
    const user=data?.user;
    //console.log(data?.user)
    const handleLogOut=async()=>{
        await authClient.signOut();
    }
     
    //console.log(mobile,'mobile');
    const nablink=<>
    <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/all-pets'}>All Pets</Navlink></li>
                <li><Navlink href={'/my-rquest'}> My Requests</Navlink></li>
                <li><Navlink href={'add-pet'}>Add Pet</Navlink></li>
                <li><Navlink href={'/my-listing'}>My Listing</Navlink></li>
    </>;
    return (
        <nav className="flex justify-between items-center gap-5 my-5">
            <div className="flex justify-between items-center gap-5 start">
                <h1 className="md:hidden" onClick={()=>setMobilte(!mobile)}><Bars className="size-7" /></h1>
                
                <ul className={`${mobile ? '': 'hidden'} absolute top-15 left-10  p-5  space-y-2 z-50 bg-gray-100`}>
                    {nablink}
                </ul>

                
                <h1 className="font-bold text-3xl">Petyfy</h1>
                <Image src={logo} alt="logo" width={50} height={50}></Image>
            </div>
            <div className="end flex gap-5  ">
                <div className="hidden md:block">
                    <ul className=" flex gap-5">
                {nablink}
                
                </ul>
                </div>
                {/* if loged in */}
                <ul className="flex gap-5  ">
              {
                 user ? 
               <>
                <li >

<div className=" flex justify-between items-center gap-3">
    <Avatar>
        <Avatar.Image alt={user?.name} src={user?.image} />
      <Avatar.Fallback>{user?.name.charAt(2)}</Avatar.Fallback>
      </Avatar>

                    <Button variant="outline"  onClick={()=>setIsClick(!isClick)}>
                        
                        
                        Profile <ChevronDown className="inline-block"/></Button>
</div>
                    <ul className={`${!isClick &&'hidden'} space-y-2 mt-2 flex flex-col items-center justify-end`}>
                        <li>Dashboard</li>
                        <li onClick={handleLogOut} className="cursor-pointer"><ArrowRightFromSquare className="inline-block"/> Logout</li>
                    </ul>

                </li>
               
               </>
               :<>
                {/* if not loged in */}
                <li><Link href={'/logIn'}><Button className='rounded-md  bg-linear-to-tr from-purple-500 to-blue-500'>Login</Button></Link> </li>
               </>
              }
               
                






                

            </ul>
            </div>
        </nav>
    );
};

export default Navbar;