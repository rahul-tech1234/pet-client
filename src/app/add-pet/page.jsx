"use client";
import useSession from "@/lib/useSession";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddPet() {
    console.log(`url: ${process.env.NEXT_PUBLIC_PET_SERVER}`);
    const router = useRouter();

    const { data: session, isPending } = useSession();
    const user = session?.user;

    const [loading, setLoading] = useState(false);

    const handleAddPet = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please login first.");
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);

            const petData = {
                ...Object.fromEntries(formData.entries()),
                userId: user.id,
            };

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_PET_SERVER}/pet`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${session?.token}`,
                    },
                    body: JSON.stringify(petData),
                },
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Failed to add pet.");
            }

            toast.success("Pet added successfully!");

            router.push("/my-listing");
            router.refresh();
        } catch (error) {
            toast.error(error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    if (isPending) {
        return <div className="flex justify-center py-20">Loading...</div>;
    }

    return (
        <section className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="mb-8 text-center text-3xl font-bold">
                    Add a New Pet
                </h2>

                <form
                    onSubmit={handleAddPet}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    {/* Pet Name */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Pet Name
                        </label>
                        <input
                            type="text"
                            name="petName"
                            placeholder="Enter pet name"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Species */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Species
                        </label>
                        <select
                            name="species"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Bird</option>
                            <option>Rabbit</option>
                            <option>Fish</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Breed */}
                    <div>
                        <label className="block mb-2 font-medium">Breed</label>
                        <input
                            type="text"
                            name="breed"
                            placeholder="Golden Retriever"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block mb-2 font-medium">Age</label>
                        <input
                            type="number"
                            name="age"
                            placeholder="2"
                            min={1}
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block mb-2 font-medium">Gender</label>
                        <select
                            name="gender"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            placeholder="https://i.ibb.co/..."
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Health Status */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Health Status
                        </label>
                        <input
                            type="text"
                            name="health"
                            placeholder="Healthy"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Vaccination */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Vaccination Status
                        </label>
                        <select
                            name="vaccination"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option>Vaccinated</option>
                            <option>Partially Vaccinated</option>
                            <option>Not Vaccinated</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Sylhet, Bangladesh"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {/* Adoption Fee */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Adoption Fee
                        </label>
                        <input
                            type="number"
                            name="price"
                            min={1}
                            placeholder="1000"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="mb-2 block font-medium">
                            Owner Email
                        </label>

                        <input
                            type="email"
                            name="ownerEmail"
                            value={user?.email ?? ""}
                            readOnly
                            className="w-full cursor-not-allowed rounded-lg border bg-gray-100 px-4 py-3"
                        />
                    </div>

                    {/* Description */}

                    <div className="md:col-span-2">
                        <label className="mb-2 block font-medium">
                            Description
                        </label>

                        <textarea
                            rows={5}
                            name="description"
                            className="w-full rounded-lg border px-4 py-3"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <Button
                            type="submit"
                            isLoading={loading}
                            isDisabled={loading}
                            className="w-full rounded-sm bg-linear-to-r from-purple-500 to-blue-500"
                        >
                            {loading ? "Adding Pet..." : "Add Pet"}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
