export const getAllData = async (searchParams) => {
    // 1. Ensure searchParams is an object, default to empty if undefined
    const paramsObj = searchParams || {};

    // 2. Clean up undefined or empty values so they don't end up as ?price=undefined in your fetch URL
    const cleanParams = Object.fromEntries(
        Object.entries(paramsObj).filter(
            ([_, value]) => value !== undefined && value !== "",
        ),
    );

    // 3. Generate the query string safely
    const query = new URLSearchParams(cleanParams).toString();

    // 4. Only append the '?' if there are actual query parameters present
    const queryString = query ? `?${query}` : "";

    // console.log({ query: queryString }) // Easier to debug in console

    const res = await fetch(
        `https://pet-server-psi.vercel.app/all-pets${queryString}`,
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch pets data: ${res.statusText}`);
    }

    return res.json();
};
export const getLimitlData = async () => {
    const res = await fetch(`https://pet-server-psi.vercel.app/pet`);
    const pet = await res.json();
    return pet;
};

//const [stat, setStat] = useState("pending");

// export const addPet = async (petData) => {
//     const res = await fetch(`https://pet-server-psi.vercel.app/pet`, {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//         },
//         body: JSON.stringify(petData),
//     });
//     const data = await res.json();
//     return data;
// };
// [
//     {
//         petName: "Buddy",
//         species: "Dog",
//         breed: "Golden Retriever",
//         age: 3,
//         gender: "Male",
//         imageUrl: "https://i.ibb.co/example/buddy.jpg",
//         healthStatus: "Healthy",
//         vaccinationStatus: "Fully Vaccinated",
//         location: "Dhaka, Bangladesh",
//         adoptionFee: 5000,
//         description:
//             "Buddy is a friendly and energetic Golden Retriever who loves playing fetch and spending time with children.",
//     },
//     {
//         petName: "Luna",
//         species: "Cat",
//         breed: "Persian",
//         age: 2,
//         gender: "Female",
//         imageUrl: "https://i.ibb.co/example/luna.jpg",
//         healthStatus: "Healthy",
//         vaccinationStatus: "Fully Vaccinated",
//         location: "Sylhet, Bangladesh",
//         adoptionFee: 3500,
//         description:
//             "Luna is a calm and affectionate Persian cat who enjoys quiet environments and cuddles.",
//     },
//     {
//         petName: "Coco",
//         species: "Bird",
//         breed: "Cockatiel",
//         age: 1,
//         gender: "Female",
//         imageUrl: "https://i.ibb.co/example/coco.jpg",
//         healthStatus: "Healthy",
//         vaccinationStatus: "Not Required",
//         location: "Chattogram, Bangladesh",
//         adoptionFee: 2000,
//         description:
//             "Coco is a cheerful Cockatiel that loves whistling tunes and interacting with people.",
//     },
//     {
//         petName: "Rocky",
//         species: "Dog",
//         breed: "German Shepherd",
//         age: 4,
//         gender: "Male",
//         imageUrl: "https://i.ibb.co/example/rocky.jpg",
//         healthStatus: "Minor Skin Allergy",
//         vaccinationStatus: "Fully Vaccinated",
//         location: "Rajshahi, Bangladesh",
//         adoptionFee: 6500,
//         description:
//             "Rocky is a loyal and intelligent German Shepherd, ideal for an active family with a spacious home.",
//     },
//     {
//         petName: "Milo",
//         species: "Rabbit",
//         breed: "Holland Lop",
//         age: 2,
//         gender: "Male",
//         imageUrl: "https://i.ibb.co/example/milo.jpg",
//         healthStatus: "Healthy",
//         vaccinationStatus: "Partially Vaccinated",
//         location: "Khulna, Bangladesh",
//         adoptionFee: 1800,
//         description:
//             "Milo is a playful rabbit that enjoys fresh vegetables, hopping around, and gentle handling.",
//     },
//     {
//         petName: "Bella",
//         species: "Cat",
//         breed: "British Shorthair",
//         age: 3,
//         gender: "Female",
//         imageUrl: "https://i.ibb.co/example/bella.jpg",
//         healthStatus: "Healthy",
//         vaccinationStatus: "Fully Vaccinated",
//         location: "Barishal, Bangladesh",
//         adoptionFee: 4500,
//         description:
//             "Bella is a gentle and independent British Shorthair who loves relaxing by the window and being around people.",
//     },
// ];
