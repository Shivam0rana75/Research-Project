import SystemStatusBar from "./SSbar";
export default function Status(){
    return (
        <div className="flex flex-col bg-bgCard w-[480px] h-[450px] mr-7 mt-5 rounded-3xl items-start">
            <p className="text-white text-lg font-semibold mt-5 mr-5 ml-5">
                System Status
            </p>
            <p className="text-gray-400 text-sm mb-3 mt-3 mr-5 ml-5">
                Refinery units & IT systems
            </p>

            <SystemStatusBar
                name="Crude Distillation Unit"
                percent={98}
                status="healthy"
            />

            <SystemStatusBar
            name="Catalytic Cracking"
            percent={95}
            status="healthy"
            />

            <SystemStatusBar
            name="Reforming Unit"
            percent={82}
            status="warning"
            />

            <SystemStatusBar
            name="Hydrotreating"
            percent={97}
            status="healthy"
            />

            <SystemStatusBar
            name="SCADA Network"
            percent={99}
            status="healthy"
            />

            <SystemStatusBar
            name="Firewall Infrastructure"
            percent={100}
            status="healthy"
            />

        </div>
    )
}