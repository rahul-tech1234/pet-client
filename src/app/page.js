import { getLimitlData } from "@/lib/data";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import { SingleCard } from "./components/SingleCard";
import Static from "./components/Static";

export default async function Home() {
    const pets = await getLimitlData();
    // console.log(pet);
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <div className="grid md:grid-cols-3 gap-5">
                {pets.map((pet) => (
                    <SingleCard key={pet._id} pet={pet}></SingleCard>
                ))}
            </div>
            <Static></Static>
        </div>
    );
}
