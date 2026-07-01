'use client'
import { Button, Card } from "@heroui/react";
import { ArrowLeft, House } from "@gravity-ui/icons";
import { TbError404 } from "react-icons/tb";
import { FaGhost } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-background to-secondary-100/20" />

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

            <Card
                className="relative z-10 w-full max-w-2xl border border-default-200/50 bg-content1/80 backdrop-blur-xl shadow-2xl"
                shadow="lg"
            >
                <Card className="items-center px-10 py-14 text-center">
                    {/* Ghost */}
                    <div className="animate-bounce">
                        <FaGhost className="mb-6 text-6xl text-primary" />
                    </div>

                    {/* 404 */}
                    <TbError404 className="text-[130px] text-primary" />

                    {/* Title */}
                    <h1 className="mt-2 text-4xl font-bold">Page Not Found</h1>

                    {/* Description */}
                    <p className="mt-4 max-w-md text-default-500 leading-7">
                        Sorry, the page you're trying to access doesn't exist,
                        may have been moved, or the URL is incorrect.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button
                            color="primary"
                            size="lg"
                            startContent={<House width={18} />}
                            onPress={() => (window.location.href = "/")}
                        >
                            Go Home
                        </Button>

                        <Button
                            variant="bordered"
                            size="lg"
                            startContent={<ArrowLeft width={18} />}
                            onPress={() => window.history.back()}
                        >
                            Go Back
                        </Button>
                    </div>
                </Card>
            </Card>
        </div>
    );
};

export default NotFound;
