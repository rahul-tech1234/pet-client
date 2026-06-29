
import DetailsCard from "@/app/components/DetailsCard";
import { getDataById } from "@/lib/data";
import { Button } from "@heroui/react";

const DetailsModal = async({params}) => {
    const {id}=await params;
    const data=await getDataById(id)
    //console.log(data)
        return (
        <div className="my-9  justify-between items-center gap-5">
            <div className="">
                <DetailsCard pet={data}></DetailsCard>
            </div>
            
        
        
        </div>
    );
};

export default DetailsModal;