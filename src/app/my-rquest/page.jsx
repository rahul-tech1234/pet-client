import { auth } from "@/lib/auth";
import { ListingCard } from "../components/ListingCard";
import { headers } from "next/headers";

const MyRequest = async() => {
    const session=await auth.api.getSession({
        headers: await headers()
       })
       const user=session?.user;
       //console.log(user?.id)
       const res=await fetch(`http://localhost:5000/pet/${user.id}`);
       const data=await res.json()
       console.log(data);
    return (
        <div>
             <h1 className="text-center mb-5 font-bold text-gray-400 text-3xl">My Request</h1> 
                       <div className="space-y-4 grid grid-cols-3 gap-5">
                        
                        
                        
                       </div>
        </div>
    );
};

export default MyRequest;