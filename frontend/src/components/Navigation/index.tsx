"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const routes = [
    ['Главная', '/'],
    ['Настройки', '/settings'],
  ]

  return (
    <nav className="ml-10">
      <ul className="flex leading-none">
        {routes.map(([title, url]) => (
          <li key={url} className="px-1">
            <Link className={`block py-4 px-5 rounded-md ${pathname === url ? "bg-rose-500 text-white" : ""}`} href={url}>
              {title}
            </Link>
          </li>
          )
        )}
      </ul>
    </nav>
  );
}
