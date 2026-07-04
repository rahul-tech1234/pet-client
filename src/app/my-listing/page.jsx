import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ListingCard } from "../components/ListingCard";
const MyListing = async() => {
    const token=await auth.api.getToken({
           headers: await headers()
       })
   const session=await auth.api.getSession({
    headers: await headers()
   })
   const user=session?.user;
  //console.log(user?.id)
     const res=await fetch(`http://localhost:5000/pets/${user?.id}`,{
         headers: {
                authorization: `Bearer ${token.token}`,
            },
     });               
     const lisgtingData=await res.json();
     //console.log(lisgtingData,'data')
     //onsole.log("user:", lisgtingData);
    return (
        <div>
           <h1 className="text-center mb-5 font-bold text-gray-400 text-3xl">My Listing</h1> 
           <div>
            {
               lisgtingData.length==0?
               <> <div className="flex flex-col items-center justify-center py-20" >
          <h3 className="text-3xl font-bold text-green-700">
            No Pets Found 🐾
          </h3>
          <p className="text-gray-500 mt-2">
            There are no pets listing right now.
          </p>
        </div></>:
               <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-5">
               {
                lisgtingData.map(data =><ListingCard key={data?._id} data={data}></ListingCard>)
               }
               </div> 
            }
            
           </div>
        </div>
    );
};

export default MyListing;