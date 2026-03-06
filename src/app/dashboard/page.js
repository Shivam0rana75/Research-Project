import CGroup from "@/components/dashboard/CGroup";
import TrendChart from "@/components/dashboard/graph/graph";
import DepartmentChart from "@/components/dashboard/graph/DeptChart";
export default function Dashboard(){
    return(
        <div>
            <CGroup />
            <div className="flex justify-between ">
                <TrendChart />
                <DepartmentChart />
            </div>
            
        </div>
        
    )
}