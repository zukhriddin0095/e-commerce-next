// "use client";

// import { useState, useEffect } from "react";
// import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
// import { StarIcon } from "@heroicons/react/24/solid";
// import CustomImage from "@/components/image";
// import { ProductType } from "@/interface";

// const ShoppingCard = () => {
//   const [total, setTotal] = useState<number>(0);
//   const [products, setProducts] = useState<ProductType[]>(
//     JSON.parse(localStorage.getItem("carts") as string) || []
//   );

//   const removeProduct = (id: number) => {
//     const updatedcart = products.filter((product) => product.id !== id);
//     localStorage.setItem("carts", JSON.stringify(updatedcart));
//     setProducts(updatedcart);
//   };

//   const handleIncriment = (id: number) => {
//     const updatedcart = products.map((product) => {
//       if (product.id === id) {
//         return {
//           ...product,
//           quantity: product.quantity + 1,
//         };
//       }
//       return product;
//     });
//     localStorage.setItem("carts", JSON.stringify(updatedcart));
//     setProducts(updatedcart);
//   };

//   const handleDencriment = (id: number) => {
//     const existProduct = products.find((product) => product.id === id);
//     if (existProduct?.quantity === 1) {
//       removeProduct(existProduct?.id);
//     } else {
//       const updatedcart = products.map((product) => {
//         if (product.id === id) {
//           return {
//             ...product,
//             quantity: product.quantity - 1,
//           };
//         }
//         return product;
//       });
//       localStorage.setItem("carts", JSON.stringify(updatedcart));
//       setProducts(updatedcart);
//     }
//   };
//    useEffect(() => {
//      if (typeof localStorage !== "undefined") {
//        const storedCarts =
//          JSON.parse(localStorage.getItem("carts") as string) || [];
//        setProducts(storedCarts);
//      }
//    }, []);

//   useEffect(() => {
//     const total = products.reduce((acc, i) => {
//       return acc + i.price * i.quantity;
//     }, 0);
//     setTotal(total);
//   }, [products]);

//   return (
//     <>
//       {products.length ? (
//         <section>
//           <div className="h-screen bg-gray-100 pt-20">
//             <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//             <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//               <div className="rounded-lg md:w-2/3">
//                 {products.map((product) => (
//                   <div
//                     key={product?.id}
//                     className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
//                   >
//                     <div className="relative w-52">
//                       <CustomImage product={product} fill />
//                     </div>
//                     <div className="sm:ml-4 sm:flex sm:w-full gap-x-4 sm:justify-between">
//                       <div className="mt-5 sm:mt-0">
//                         <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
//                           {product?.title}
//                         </h2>
//                         <p className="mt-1 text-xs text-gray-700 line-clamp-2">
//                           {product?.description}
//                         </p>
//                         <div className="flex items-center text-sm my-4">
//                           <p>{product?.rating?.rate}</p>
//                           {product?.rating?.rate && (
//                             <div className="flex items-center ml-2 mr-6">
//                               {Array.from(
//                                 {
//                                   length: Math.floor(product.rating.rate),
//                                 },
//                                 (_, i) => (
//                                   <StarIcon
//                                     key={i}
//                                     className="h-4 w-4 text-yellow-500"
//                                   />
//                                 )
//                               )}
//                               {Array.from(
//                                 { length: 5 - Math.floor(product.rating.rate) },
//                                 (_, i) => (
//                                   <StarIconOutline
//                                     key={i}
//                                     className="h-4 w-4 text-yellow-500"
//                                   />
//                                 )
//                               )}
//                               {/* <ReactStars
//                             value={product.rating.rate}
//                             edit={false}
//                           /> */}
//                             </div>
//                           )}
//                           <p className="text-blue-600 hover:underline cursor-pointer text-xs">
//                             See All {product?.rating?.count} reviews
//                           </p>
//                         </div>
//                       </div>
//                       <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                         <div className="flex items-center border-gray-100">
//                           <span
//                             onClick={() => handleDencriment(product.id)}
//                             className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
//                           >
//                             -
//                           </span>
//                           <input
//                             className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                             type="number"
//                             value={product.quantity}
//                             min="1"
//                             // onChange={(e) => handleQuantityChange(e)}
//                           />
//                           <span
//                             onClick={() => handleIncriment(product.id)}
//                             className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
//                           >
//                             +
//                           </span>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                           <p className="text-sm">
//                             {(product.price * product.quantity).toLocaleString(
//                               "en-US",
//                               {
//                                 style: "currency",
//                                 currency: "usd",
//                               }
//                             )}
//                           </p>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                             onClick={() => removeProduct(product.id)}
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {/* <!-- Sub total --> */}
//               <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//                 <div className="mb-2 flex justify-between">
//                   <p className="text-gray-700">Subtotal</p>
//                   <p className="text-gray-700">
//                     {total.toLocaleString("en-US", {
//                       currency: "usd",
//                       style: "currency",
//                     })}
//                   </p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p className="text-gray-700">Shipping</p>
//                   <p className="text-gray-700">
//                     {(10).toLocaleString("en-US", {
//                       currency: "usd",
//                       style: "currency",
//                     })}
//                   </p>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="flex justify-between">
//                   <p className="text-lg font-bold">Total</p>
//                   <div className="">
//                     <p className="mb-1 text-lg font-bold">
//                       {(total + 10).toLocaleString("en-US", {
//                         currency: "usd",
//                         style: "currency",
//                       })}{" "}
//                       USD
//                     </p>
//                     <p className="text-sm text-gray-700">including VAT</p>
//                   </div>
//                 </div>
//                 <button className="border mt-6 w-full rounded-md bg-blue-500 py-4 font-medium text-blue-50 hover:bg-white hover:text-black hover:border ">
//                   Check out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <div className="pt-44 text-center">
//           <h1 className="mb-4 text-4xl font-semibold text-red-500">
//             shopping cart is empty
//           </h1>
//           <div className="mt-8 animate-bounce">
//             <svg
//               className="mx-auto h-16 w-16 text-red-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//               ></path>
//             </svg>
//           </div>
//           <p className="mt-4 text-gray-600">
//             Let s get you back{" "}
//             <a href="/" className="text-blue-500">
//               home
//             </a>
//             .
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default ShoppingCard;





"use client";

import { useState, useEffect } from "react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import CustomImage from "@/components/image";
import { ProductType } from "@/interface";

const ShoppingCard = () => {
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );

  const removeProduct = (id: number) => {
    const updatedcart = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedcart));
    setProducts(updatedcart);
  };

  const handleIncrement = (id: number) => {
    const updatedcart = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    localStorage.setItem("carts", JSON.stringify(updatedcart));
    setProducts(updatedcart);
  };

  const handleDecrement = (id: number) => {
    const existProduct = products.find((product) => product.id === id);
    if (existProduct?.quantity === 1) {
      removeProduct(existProduct?.id);
    } else {
      const updatedcart = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      localStorage.setItem("carts", JSON.stringify(updatedcart));
      setProducts(updatedcart);
    }
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedCarts =
        JSON.parse(localStorage.getItem("carts") as string) || [];
      setProducts(storedCarts);
    }
  }, []);

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotal(total);
  }, [products]);

  return (
    <>
      {products.length ? (
        <section>
          <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {products.map((product) => (
                  <div
                    key={product?.id}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <div className="relative w-52">
                      <CustomImage product={product} fill />
                    </div>
                    <div className="sm:ml-4 sm:flex sm:w-full gap-x-4 sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
                          {product?.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700 line-clamp-2">
                          {product?.description}
                        </p>
                        <div className="flex items-center text-sm my-4">
                          <p>{product?.rating?.rate}</p>
                          {product?.rating?.rate && (
                            <div className="flex items-center ml-2 mr-6">
                              {Array.from(
                                {
                                  length: Math.floor(product.rating.rate),
                                },
                                (_, i) => (
                                  <StarIcon
                                    key={i}
                                    className="h-4 w-4 text-yellow-500"
                                  />
                                )
                              )}
                              {Array.from(
                                { length: 5 - Math.floor(product.rating.rate) },
                                (_, i) => (
                                  <StarIconOutline
                                    key={i}
                                    className="h-4 w-4 text-yellow-500"
                                  />
                                )
                              )}
                            </div>
                          )}
                          <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                            See All {product?.rating?.count} reviews
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={() => handleDecrement(product.id)}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            -
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={product.quantity}
                            min="1"
                          />
                          <span
                            onClick={() => handleIncrement(product.id)}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            +
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">
                            {(product.price * product.quantity).toLocaleString(
                              "en-US",
                              {
                                style: "currency",
                                currency: "usd",
                              }
                            )}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            onClick={() => removeProduct(product.id)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">
                    {total.toLocaleString("en-US", {
                      currency: "usd",
                      style: "currency",
                    })}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">
                    {(10).toLocaleString("en-US", {
                      currency: "usd",
                      style: "currency",
                    })}
                  </p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">
                      {(total + 10).toLocaleString("en-US", {
                        currency: "usd",
                        style: "currency",
                      })}{" "}
                      USD
                    </p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button className="border mt-6 w-full rounded-md bg-blue-500 py-4 font-medium text-blue-50 hover:bg-white hover:text-black hover:border ">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="pt-44 text-center">
          <h1 className="mb-4 text-4xl font-semibold text-red-500">
            shopping cart is empty
          </h1>
          <div className="mt-8 animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p className="mt-4 text-gray-600">
            Let s get you back{" "}
            <a href="/" className="text-blue-500">
              home
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
};

export default ShoppingCard;
