import { getAllData } from "@/lib/data";
import { SingleCard } from "../components/SingleCard";
import SearchFilter from "../components/SearchFilter";
import SortByPrice from "../components/SortByPrice";
const AllPet=async ({searchParams}) => {
  const pets = await getAllData({
      petName: searchParams?.search || "",
      price: searchParams?.price || "",
  });  
    return (
        <div className=" mb-9">
            <h2 className="text-3xl font-bold text-center mb-8">
          All Pets
        </h2>
            
              <div className='flex items-center justify-center gap-10 my-15'>
                <SearchFilter></SearchFilter>   
             <SortByPrice></SortByPrice>
             </div> 
              {/* <SearchFilter></SearchFilter>   
             <SortByPrice></SortByPrice> */}


            <div className="grid md:grid-cols-3 gap-5">
                {pets.map(pet=><SingleCard key={pet._id} pet={pet}></SingleCard>)}
            </div>
            

            
        </div>
    );
};

export default AllPet;


