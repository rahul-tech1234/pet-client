"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href,children}) => {
    const path=usePathname();
    const isActive=path==href;
    
    //console.log(isActive,'isActive')
    return (

            <Link href={href} className={`${isActive ? 'border-b-2 pb-2 border-purple-600 text-gray-600' : ''} `}>{children}</Link>
        
    );
};

export default Navlink;