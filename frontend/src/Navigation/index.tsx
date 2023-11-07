"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex">
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Главная
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/settings" ? "active" : ""}`}
            href="/settings"
          >
            Настройки
          </Link>
        </li>
      </ul>
    </nav>
  );
}
