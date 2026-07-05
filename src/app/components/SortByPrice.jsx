"use client";
import { Button } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SortByPrice = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const handleSortPrice = (price) => {
        const params = new URLSearchParams(searchParams);
        if (price) {
            params.set("price", price);
        } else {
            params.delete("price");
        }
        router.push(`${pathName}?${params.toString()}`);
    };
    return (
        <Button className="rounded-sm">
            <select
                name=""
                id="price-filter"
                className="text-gray-700"
                onChange={(e) => handleSortPrice(e.target.value)}
            >
                <option value="">Sort</option>
                <option value="high">High</option>
                <option value="low">Low</option>
            </select>
        </Button>
    );
};

export default SortByPrice;
