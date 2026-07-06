"use client";

import { Heart } from "@gravity-ui/icons";
import { Button, Chip, Modal } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
export function RequestModal({ data }) {
    const { userId } = data;
    const [stat, setStat] = useState();
    const [isClick, setIsClick] = useState("Pending");
    console.log(isClick);
    const handleRequest = async (userId) => {
        const res = await fetch(`http://localhost:5000/adaption/${userId}`);
        const getData = await res.json();
        setStat(getData);
        //return getData;
    };
    // console.log(stat)
    //console.log('stat:',stat)
    const handleReject = async () => {
        setIsClick("Reject");
        await updateStatus("ejected");
        toast.error("Reject this request");
    };
    const handleApprove = async () => {
        setIsClick("Approve");
        await updateStatus("approved");
        toast.success("Approve this request");
    };
    const updateStatus = async (status) => {
        const res = await fetch(`http://localhost:5000/adoption/${data._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        });

        const result = await res.json();
        // console.log('result:',result);

        if (result.modifiedCount > 0) {
            toast.success(`Status updated to ${status}`);
        }
    };

    // console.log('isclick:' ,isClick)

    return (
        <Modal>
            <Modal.Trigger className="group flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xs select-none hover:bg-surface-secondary">
                <Button
                    variant="outline"
                    className="rounded-md"
                    onClick={() => handleRequest(userId)}
                >
                    Request
                </Button>
            </Modal.Trigger>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px] relative">
                        <Chip
                            className={`absolute top-3 right-3`}
                            color={`${isClick == "Pending" ? "warning" : isClick == "Approve" ? "success" : "danger"}`}
                        >
                            {isClick}
                        </Chip>
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Heart className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Request {stat?.Name}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{stat?.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            {isClick == "Pending" && (
                                <>
                                    <Button
                                        onClick={handleReject}
                                        slot="close"
                                        className="rounded-md"
                                        variant="secondary"
                                    >
                                        Reject
                                    </Button>
                                    <Button
                                        onClick={handleApprove}
                                        slot="close"
                                        className="rounded-md bg-linear-to-tr from-purple-500 to-blue-500"
                                    >
                                        Approve
                                    </Button>
                                </>
                            )}
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
