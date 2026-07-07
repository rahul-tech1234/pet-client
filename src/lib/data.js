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
