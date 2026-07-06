"use client";

import { AlertDialog, Button } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
export function DeleteAltert({ data }) {
    // console.log(data)

    const { peckDate, fee, petName, image, description, _id } = data;

    const handleDelete = async () => {
        const { data: tokenData, error } = await authClient.token();
        console.log(tokenData);
        const res = await fetch(`http://localhost:5000/pet/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`,
            },
        });
        const data = await res.json();
        console.log("delete", data);
        if (res.ok) {
            toast.success("Delete This Successfully");
        } else if (!res.ok) {
            toast.error("Please try adain");
        }
        //console.log(data)
    };
    return (
        <AlertDialog>
            <Button variant={"danger"} className="rounded-md">
                {" "}
                <TrashBin />
                Delete{" "}
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete This Pet ? {petName}
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>{description}</p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                slot="close"
                                variant="danger"
                                onClick={handleDelete}
                            >
                                Delete Adaption
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
