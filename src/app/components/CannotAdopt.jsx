"use client";
import { XCircle } from "lucide-react";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import Link from "next/link";

export default function CannotAdopt() {
    return (
        <AlertDialog>
            <AlertDialog.Trigger className="group flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xs select-none hover:bg-surface-secondary w-full">
                 <Button className="rounded-sm bg-linear-to-tr from-purple-500 to-blue-500 w-full">
                                Adopt
                            </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger">
                                <XCircle className="h-12 w-12 text-red-500 text-center" />
                            </AlertDialog.Icon>
                            <AlertDialog.Heading>
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    You cannot adopt your own pet
                                </h2>
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            {/* Description */}
                            <p className="mt-3 text-gray-500 leading-relaxed">
                                This pet already belongs to you. Pet owners are
                                not allowed to adopt pets they have listed for
                                adoption.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                OK
                            </Button>
                            <Button slot="close" variant="danger">
                                <Link href={"/all-pets"}> Go to My Pets</Link>
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

// import { Button } from "@heroui/react";
// import { XCircle } from "lucide-react";

// export default function CannotAdopt() {
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
//             <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
//                 {/* Icon */}
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
//                     <XCircle className="h-12 w-12 text-red-500" />
//                 </div>

//                 {/* Title */}
//                 <h2 className="mt-6 text-3xl font-bold text-gray-900">
//                     You cannot adopt your own pet
//                 </h2>

//                 {/* Description */}
//                 <p className="mt-3 text-gray-500 leading-relaxed">
//                     This pet already belongs to you. Pet owners are not allowed
//                     to adopt pets they have listed for adoption.
//                 </p>

//                 {/* Buttons */}
//                 <div className="mt-8 space-y-3">
//                     <Button
//                         color="danger"
//                         size="lg"
//                         className="w-full rounded-xl font-semibold"
//                     >
//                         OK
//                     </Button>

//                     <Button
//                         variant="light"
//                         size="lg"
//                         className="w-full font-medium"
//                     >
//                         Go to My Pets
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }
