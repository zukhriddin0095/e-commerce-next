"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "@/shared";
import { useEffect, useState } from "react";
import { ProductType } from "@/interface";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  

  useEffect(() => {
     if (typeof window !== "undefined") {
       const storedData = localStorage.getItem("carts");
       if (storedData) {
         const parsedData = JSON.parse(storedData);
         setProducts(parsedData);
       }
     }
    function handleScroll() {
      if (window.scrollY >= 80) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, []);



  return (
    <header
      id="header__scroll"
      className={
        header
          ? "flex items-center p-4  md:px-12 py-2 justify-between fixed top-0 w-full z-10 shadow bg-white"
          : "flex items-center p-4 pt-4 pb-4 md:px-12 py-2 justify-between fixed top-0 w-full z-10 shadow bg-white"
      }
    >
      <Link className="flex items-center " href={"/"}>
        <Image src={logo} alt="logo" width={40} />
        <h2>E commerce</h2>
      </Link>
      <nav className="gap-8 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/products"}>Products</NavLink>
        <NavLink href={"/cart"}>Cart</NavLink>
        <NavLink href={"/checkout"}>Checkout</NavLink>
      </nav>

      <div className="flex items-center space-x-2.5 text-sm">
        <Link href={"/login"}>
          <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            Log in
          </button>
        </Link>
        <button className="button bg-transparent text-black border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white">
          Sign in
        </button>
      </div>
        <Link href={"/shopping-card"}>
          <button className="ml-4 relative p-2 border rounded font-semibold transition duration-200 ease-out bg-transparent text-black border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="p-0.5 absolute top-[-8px] right-[-5px] rounded bg-red-500 text-white">
              {products?.length}
            </span>
          </button>
        </Link>
    </header>
  );
};

export default Navbar;
