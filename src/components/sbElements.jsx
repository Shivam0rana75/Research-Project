export default function Element({title ,icon : Icon}){
    return <>
        <div className="flex items-center gap-3 p-2 hover:bg-bgSidebarHover rounded-lg cursor-pointer">
            <Icon size={20} className="text-cyan-400" />
            <span>{title}</span>
        </div>
    </>
}