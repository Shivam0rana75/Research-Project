import AffectedCard from "./AffectedCard"
export default function Affected({ Affected }){
    return (
        <div className="bg-bgCard rounded-3xl w-full mt-5 p-6">

            <p className="text-xl text-white font-semibold">
                Affected OT Equipment & IT Services
            </p>

            <AffectedCard assets={Affected} />

        </div>
    )
}