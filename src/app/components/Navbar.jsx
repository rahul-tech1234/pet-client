"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Navlink from "./Navlink";
import {Bars} from '@gravity-ui/icons';
import { useState } from "react";

const Navbar = () => {
    const [mobile,setMobilte]=useState(false);
    console.log(mobile,'mobile');
    const nablink=<>
    <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/all-pets'}>All Pets</Navlink></li>
                <li><Navlink href={'/my-rquest'}> My Requests</Navlink></li>
                <li><Navlink href={'add-pet'}>Add Pet</Navlink></li>
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
                {/* if loged in */}
                </ul>
                </div>
                <ul className="flex gap-5  ">
                <li>
                    Profile
                    <ul className="hidden">
                        <li>Dashboard</li>
                        <li>Logout</li>
                    </ul>
                </li>
                {/* if not loged in */}
                <li>Login </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;