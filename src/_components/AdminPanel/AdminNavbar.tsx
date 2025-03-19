"use client";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaBook } from "react-icons/fa";
import { MdAllInbox } from "react-icons/md";
import { usePathname } from "next/navigation"; // Use usePathname instead

export default function AdminNavbar() {
  const pathname = usePathname(); // Use usePathname hook

  // Helper function to determine the active link
  const isActive = (path: string) => (pathname === path ? "text-blue-500" : "");

  return (
    <ul className="gap-4 py-3 bg-white text-lg lg:menu-horizontal flex  justify-center sticky top-0 z-[39]">
      <li className="hover:bg-gray-100 px-5 rounded-lg py-3">
        <Link href="/admin/events">
          <div
            className={`flex items-center gap-2 ${isActive("/admin/events")}`}
          >
            <FaCalendarAlt className="w-5 h-5" />
            <span>Events</span>
          </div>
        </Link>
      </li>

      <li className="hover:bg-gray-100 px-5 rounded-lg py-3">
        <Link href="/admin/blogs">
          <div
            className={`flex items-center gap-2 ${isActive("/admin/blogs")}`}
          >
            <FaBook className="w-5 h-5" />
            <span>Blog</span>
          </div>
        </Link>
      </li>
      <li className="hover:bg-gray-100 px-5 rounded-lg py-3">
        <Link href="/admin/welcomeModal">
          <div
            className={`flex items-center gap-2 ${isActive(
              "/admin/welcomeModal"
            )}`}
          >
            <MdAllInbox className="w-5 h-5" />
            <span>Welome Modal</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
