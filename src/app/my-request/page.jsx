import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import State from "../components/State";

const MyRequest = async () => {
    const requestHeaders = await headers();

    const [session, token] = await Promise.all([
        auth.api.getSession({ headers: requestHeaders }),
        auth.api.getToken({ headers: requestHeaders }),
    ]);

    const user = session?.user;

    const stateCount = await fetch(
        `${process.env.NEXT_PUBLIC_PET_SERVER}/client-state-count/${user?.id}`,
    );

    const stats = await stateCount.json();
   
      console.log("stats", stats);

    //  console.log("user", user);
    // console.log(`user: ${token}`);

    if (!user) {
        return (
            <div className="flex justify-center py-20">
                <h2 className="text-2xl font-semibold">
                    Please login to view your requests.
                </h2>
            </div>
        );
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_PET_SERVER}/my-adoption-request/${user?.id}`,
        {
            headers: {
                authorization: `Bearer ${token?.token}`,
            },
            cache: "no-store",
        },
    );

    if (!res.ok) {
        throw new Error("Failed to fetch requests.");
    }

    const requests = await res.json();

    return (
        <section className="space-y-8 my-10">
            <h1 className="text-center text-3xl font-bold text-gray-400">
                My Requests
            </h1>
            <State stats={stats}></State>

            {requests.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <h2 className="text-3xl font-bold text-green-600">
                        No Requests Found 🐾
                    </h2>
                    <p className="mt-2 text-gray-500">
                        You haven&apos;t requested to adopt any pets yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {requests.map((request) => (
                        <div
                            key={request._id}
                            className="overflow-hidden rounded-xl border bg-white shadow transition hover:shadow-lg"
                        >
                            <Image
                                src={request.image}
                                alt={request.Name}
                                width={300}
                                height={300}
                                className="h-56 w-full object-cover"
                            />

                            <div className="space-y-2 p-5">
                                <h2 className="text-xl font-bold">
                                    {request.Name}
                                </h2>

                                <p>
                                    <span className="font-semibold">
                                        Request Date:
                                    </span>{" "}
                                    {new Date(
                                        request.peckDate,
                                    ).toLocaleDateString()}
                                </p>

                                <p>
                                    <span className="font-semibold">
                                        Status:
                                    </span>{" "}
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                                            request.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : request.status === "approved"
                                                  ? "bg-green-100 text-green-700"
                                                  : "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        {request.status}
                                    </span>
                                </p>

                                <p className="text-gray-600">
                                    <span className="font-semibold">
                                        Message:
                                    </span>{" "}
                                    {request.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default MyRequest;
