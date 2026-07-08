"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import Navlink from "./Navlink";
import { ArrowRightFromSquare, Bars } from "@gravity-ui/icons";
import { useState } from "react";
import Link from "next/link";

import { Avatar, Button } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";
import useSession from "@/lib/useSession";

const Navbar = () => {
    const [mobile, setMobile] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const { data } = useSession();
    const user = data?.user;

    const handleLogOut = async () => {
        await authClient.signOut();
    };

    const navLinks = (
        <>
            <li>
                <Navlink href="/">Home</Navlink>
            </li>

            <li>
                <Navlink href="/all-pets">All Pets</Navlink>
            </li>

            {user && (
                <>
                    <li>
                        <Navlink href="/my-request">My Requests</Navlink>
                    </li>

                    <li>
                        <Navlink href="/add-pet">Add Pet</Navlink>
                    </li>

                    <li>
                        <Navlink href="/my-listing">My Listing</Navlink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <nav className="flex items-center justify-between gap-5 my-5">
            {/* Left Side */}
            <div className="flex items-center gap-5">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMobile(!mobile)}
                >
                    <Bars className="size-7" />
                </button>

                {/* Mobile Menu */}
                <ul
                    className={`${
                        mobile ? "block" : "hidden"
                    } absolute top-16 left-5 z-50 rounded-lg bg-white dark:bg-neutral-900 shadow-lg p-5 space-y-3 md:hidden`}
                >
                    {navLinks}
                </ul>

                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={50} height={50} />
                    <h1 className="text-3xl font-bold">Petify</h1>
                </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5">
                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5">{navLinks}</ul>
                </div>

                {user ? (
                    <div className="relative flex items-center gap-3">
                        <Avatar src={user.image ?? ""} name={user.name} />

                        <Button
                            variant="bordered"
                            onClick={() => setIsClick(!isClick)}
                        >
                            Profile
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>

                        <ThemeToggle />

                        {/* Profile Dropdown */}
                        {isClick && (
                            <ul className="absolute right-0 top-14 w-44 rounded-lg border bg-white dark:bg-neutral-900 shadow-lg p-3 space-y-3 z-20">
                                <li>
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {user.email}
                                    </p>
                                </li>

                                <hr />

                                <li>
                                    <Link href="/dashboard">Dashboard</Link>
                                </li>

                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="flex items-center gap-2 text-red-500 hover:text-red-600"
                                    >
                                        <ArrowRightFromSquare className="size-4" />
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <Link href="/logIn">
                            <Button className="rounded-md bg-linear-to-r from-purple-500 to-blue-500 text-white">
                                Login
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
