import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ListingCard } from "../components/ListingCard";
import State from "../components/State";

const MyListing = async () => {
    const requestHeaders = await headers();

    const [session, token] = await Promise.all([
        auth.api.getSession({ headers: requestHeaders }),
        auth.api.getToken({ headers: requestHeaders }),
    ]);

    const user = session?.user;
    const email = user?.email;
    console.log(email);

    if (!user) {
        return (
            <div className="flex items-center justify-center py-20">
                <h2 className="text-2xl font-semibold text-red-500">
                    Please sign in to view your listings.
                </h2>
            </div>
        );
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_PET_SERVER}/my-pets`, {
        headers: {
            authorization: `Bearer ${token?.token}`,
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch listings.");
    }
    const listingData = await res.json();
    const stateCount = await fetch(
        `${process.env.NEXT_PUBLIC_PET_SERVER}/owner-state-count/${email}`,
    );

    const stats = await stateCount.json();

    console.log("stats list", stats);

    return (
        <section className="space-y-8">
            <h1 className="text-center text-3xl font-bold text-gray-400">
                My Listing
            </h1>
            <div>
                <State stats={stats}></State>
            </div>

            {listingData.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <h3 className="text-3xl font-bold text-green-700">
                        No Pets Found 🐾
                    </h3>
                    <p className="mt-2 text-gray-500">
                        You haven&apos;t listed any pets yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {listingData.map((pet) => (
                        <ListingCard key={pet._id} data={pet} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default MyListing;
