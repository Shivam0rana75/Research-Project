export default function IncidentDescription({ Description }) {
    
    return (
        <div className="bg-bgCard rounded-3xl w-full mt-5 p-6">
            <p className="text-white text-xl font-semibold ml-1 " >Incident Description</p>

            <p className="text-[#C7D2E0] font-sans text-sm mt-5 ml-1" >{Description}</p>
        </div>
    )

}