import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { CircleDollar } from "@gravity-ui/icons";
import { DeleteAltert } from "./DeleteAlert";
import { EditModal } from "./EditModal";
import { RequestModal } from "./RequestModal";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
//import { authClient } from "@/lib/auth-client";
export async function ListingCard({ data }) {
    const { petName, fee, gender, image, description, _id } = data;
    //console.log(_id, "id", data);
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_PET_SERVER}/status-update/${_id}`,
    );
    const getPet = await res.json();
    const satus = getPet?.status;
    //console.log(getPet.status);

    // const res= await fetch(`https://pet-server-psi.vercel.app/adaption/${_id}`);
    // const adapData=await res.json();
    //console.log(adapData,'adapData');

    return (
        <Card className="w-full gap-5 flex flex-col">
            <div className="relative">
                <Image
                    alt={petName}
                    className="w-full object-cover h-[40vh] rounded-md "
                    src={image}
                    width={150}
                    height={150}
                />
                <Chip color="success" className="absolute top-3  right-3">
                    {gender}
                </Chip>
            </div>

            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <div className="flex justify-between items-center gap-5">
                        <Card.Title className="pr-8 text-xl font-bold">
                            {petName}
                        </Card.Title>
                        <span className=" font-medium  text-xl ">
                            <CircleDollar className="inline-block" />
                            {fee}
                        </span>
                    </div>
                    <Card.Description className="text-muted">
                        {description}
                    </Card.Description>
                </Card.Header>
                <Card.Footer className="">
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 justify-between items-center gap-5">
                            <EditModal data={data}></EditModal>
                            <Link href={`/all-pets/${data?._id}`}>
                                {" "}
                                <Button className="rounded-md bg-linear-to-tr from-purple-500 to-blue-500">
                                    Show More{" "}
                                </Button>
                            </Link>
                            <DeleteAltert data={data}></DeleteAltert>
                            <RequestModal
                                data={data}
                                satus={satus}
                            ></RequestModal>
                        </div>
                    </div>
                </Card.Footer>
            </div>
        </Card>
    );
}
