"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = (props: { href: string, children: React.ReactNode }) => {
  let pathName = usePathname();
  return (
    <Link
      {...props}
      className={
        pathName === props.href
          ? "active mr-5 hover:text-gray-900"
          : " mr-5 hover:text-gray-900"
      }
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
