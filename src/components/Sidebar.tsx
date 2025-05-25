"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "🏠 Dashboard" },
  { href: "/projects", label: "📁 Projects" },
  { href: "/settings", label: "⚙️ Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-gray-100 p-6">
      <nav className="flex flex-col gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors font-medium ${
              pathname === href
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
