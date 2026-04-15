'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Element({ title, icon: Icon, href, isOpen }) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all
        ${
          isActive
            ? "bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
            : "hover:bg-bgSidebarHover"
        }`}
      >
        <Icon
          size={20}
          className={isActive ? "text-cyan-300" : "text-cyan-400"}
        />

        {isOpen && <span>{title}</span>}
      </div>
    </Link>
  );
}