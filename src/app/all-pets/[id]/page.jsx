import DetailsCard from "@/app/components/DetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const DetailsModal = async ({ params }) => {
    const token = await auth.api.getToken({
        headers: await headers(),
    });
    //console.log(token)
    const { id } = await params;

    // console.log(token);
    const res = await fetch(`https://pet-server-psi.vercel.app/pet/${id}`, {
        headers: {
            authorization: `Bearer ${token.token}`,
        },
    });
    const data = await res.json();

    return (
        <div className="my-9  justify-between items-center gap-5">
            <div className="">
                <DetailsCard pet={data}></DetailsCard>
            </div>
        </div>
    );
};

export default DetailsModal;
