import { getAllData } from "@/lib/data";
import { SingleCard } from "../components/SingleCard";
const AllPet= async() => {
    const pets=await getAllData()
    //console.log(pets);
    return (
        <div className=" mb-9">
            <h2 className="text-3xl font-bold text-center mb-8">
          All Pets
        </h2>
            <div className="grid md:grid-cols-3 gap-5">
                {pets.map(pet=><SingleCard key={pet._id} pet={pet}></SingleCard>)}
            </div>
            

            
        </div>
    );
};

export default AllPet;


