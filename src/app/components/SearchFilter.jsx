'use client';
import { Button } from "@heroui/react";
import { Search } from "lucide-react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFilter = () => {
  const[searchInp,setSearchInp]=useState('');
  const router=useRouter();
  const pathName=usePathname();
  const searchParams=useSearchParams();
  const searchHandle=()=>{
const params=new URLSearchParams(searchParams)
    console.log('params:' ,params);
    if (searchInp) {
      params.set('search',searchInp)
    }else{
      params.delete('search')
    }
    router.push(`${pathName}?${params.toString()}`)
  }
  return (
    <div className="relative w-xl">
      
                 <input onChange={(e)=>setSearchInp(e.target.value)} type="text" className="w-full border shadow-md p-2 rounded-md" placeholder="Search pet name" name="search" defaultValue={searchInp} />
              <Button  onClick={searchHandle} variant="outline" className='rounded-sm absolute top-0 right-0 h-full'><Search></Search></Button>
      

    </div>
  );
};

export default SearchFilter;