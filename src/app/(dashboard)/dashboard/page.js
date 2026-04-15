import CGroup from "@/components/dashboard/CGroup";
import TrendChart from "@/components/dashboard/graph/graph";
import DepartmentChart from "@/components/dashboard/graph/DeptChart";
import Feed from "@/components/dashboard/Feed";
import Status from "@/components/dashboard/Status";
export default function Dashboard(){
    return(
        <div>
            <CGroup />
            <div className="flex justify-between ">
                <TrendChart />
                <DepartmentChart />
            </div>
            <div className="flex justify-between">
                <Feed />
                <Status  />
            </div>
            
            
        </div>
        
    )
}