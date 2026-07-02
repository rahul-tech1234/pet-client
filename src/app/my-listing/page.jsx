import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ListingCard } from "../components/ListingCard";
const MyListing = async() => {
   const session=await auth.api.getSession({
    headers: await headers()
   })
   const user=session?.user;
  console.log(user?.id)
     const res=await fetch(`http://localhost:5000/pets/${user?.id}`);               
     const lisgtingData=await res.json();
     //console.log(lisgtingData)
    return (
        <div>
           <h1 className="text-center mb-5 font-bold text-gray-400 text-3xl">My Listing</h1> 
           <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            {
               lisgtingData.length==0?
               <>No data  Myn Listing</>:
               <>
               {
                lisgtingData.map(data =><ListingCard key={data?._id} data={data}></ListingCard>)
               }
               </> 
            }
            
           </div>
        </div>
    );
};

export default MyListing;