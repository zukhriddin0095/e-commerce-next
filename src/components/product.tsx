"use client";
import React from "react";
import { ProductType } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "./image";

const ProductPage: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border ">
      <Link
        href={`/product/${product.id}`}
        className="relative max-h-72 flex-1 "
      >
        <CustomImage product={product} fill />
      </Link>
      <h3 className="tracking-widest mt-5 text-indigo-500 text-xs font-medium title-font">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <p className="leading-relaxed text-base line-clamp-2">
        {product.description}
      </p>
    </div>
  );
};

export default ProductPage;
