import { getLimitlData } from "@/lib/data";
import Banner from "./components/Banner";
import { SingleCard } from "./components/SingleCard";
import Static from "./components/Static";


export default async function Home() {
    const pets = await getLimitlData();
    // const res = await fetch("http://localhost:5000/petsort");
    // const data = await res.json();
    // console.log(data);
    return (
        <div>

            <Banner></Banner>

            <div className="grid md:grid-cols-3 gap-5">
                {pets.map((pet) => (
                    <SingleCard key={pet._id} pet={pet}></SingleCard>
                ))}
            </div>
            <Static></Static>
        </div>
    );
}
