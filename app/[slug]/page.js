"use client";
import React, { useEffect, useState, createContext } from "react";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { useAppContext } from "@/app/context/appcontext";
import { useSearchParams } from "next/navigation";
import ProductInfo from "../components/ProductInfo";

const Slug = () => {
  const [product, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [color, setColor] = useState("");
  const [Size, setSize] = useState("");
  const [cart, setCart] = useState([]);

  const {
    isCartOpen,
    setIsCartOpen,
    showSearchBar,
    setShowSearchBar,
    count,
    setCount,
  } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);

  // const id = useParams();
  // const strID = id.slug.toString();

  const searchParams = useSearchParams();
  const id = searchParams.get("product");

  const fetchProduct = async () => {
    const res = await fetch(`/api/productdetails/${id}`);
    const data = await res.json();
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Function to handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    // Create a new object representing the selected product
    const selectedProduct = {
      selectedImage:
        selectedImage || (product.length > 0 && product[0].images[0]),
      size: Size || (product.length > 0 && product[0].size[0]),
      quantity: count,
      price: product.length > 0 && product[0].price,
      name: product.length > 0 && product[0].name,
    };
    setCart((prevCart) => [...prevCart, selectedProduct]);
    const updatedCart = [...cart, selectedProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsCartOpen(true);
    window.scrollTo(0, 0);
    window.location.reload();
  };

  console.log(count, "count");

  return (
    <>
      {!cart && (
        <div className="flex justify-center w-screen items-center h-screen">
          <Image src="/loading.gif" height={500} width={500} alt="loading" />
        </div>
      )}

      {loading && (
        <div className="flex justify-center w-screen items-center h-screen">
          <Image src="/loading.gif" height={500} width={500} alt="loading" />
        </div>
      )}
      {!loading && (
        <>
          <div className={`${isCartOpen ? "bg-gray-500" : "bg-white"}`}>
            <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <div className="flex justify-center items-center py-1 my-4 mb-8 font-protest">
              <Link href="/">Home</Link>
              <span className="px-2">/</span>
              <Link href="/components/product">Product</Link>
            </div>

            {product.map((item) => {
              return (
                <div
                  className="flex justify-center "
                  key={product.id}
                  onClick={() => {
                    isCartOpen && setIsCartOpen(false);
                    if (showSearchBar === true) {
                      setShowSearchBar(false);
                    }
                  }}
                >
                  <div className="grid md:grid-cols-2 ml-4 space-x-7 flex-col grid-cols-1">
                    <div className="flex flex-row lg:space-x-12 space-x-7">
                      <div className="flex flex-col space-y-3">
                        {item.images.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => handleImageSelect(image)}
                            className={`${
                              isCartOpen
                                ? "backdrop-blur-xl bg-white/30"
                                : selectedImage === image
                                ? "border-black-500 border-black"
                                : "bg-gray-50 border-black"
                            }`}
                          >
                            <Image
                              src={image}
                              width={60}
                              height={60}
                              alt="black-flash"
                              className="active:border border-black"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col mb-5">
                        <Image
                          src={selectedImage || item.images[0]}
                          height={500}
                          width={500}
                          alt="something went wrong"
                          id="image"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div className="leading-8">
                          <h1 className="text-xl font-bold first-letter:capitalize">
                            {item.name}
                          </h1>
                          <p className="text-lg">₹ {item.price}</p>
                        </div>
                        <AiOutlineStar className="h-7 w-7 rounded-full" />
                      </div>

                      {/* adding color images */}
                      <div className="space-y-3">
                        <p>
                          Size: <span>{Size || item.size[0]}</span>
                        </p>
                        <div className="flex lg:space-x-6 space-x-3">
                          {item.size.map((size, index) => (
                            <div
                              key={index}
                              className={
                                Size === size
                                  ? "bg-gray-900 text-white rounded-md"
                                  : " rounded-lg"
                              }
                              onClick={() => setSize(size)}
                            >
                              <div className="border border-black rounded-md flex justify-center items-center w-12 h-12">
                                <button className="text-center">{size}</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="my-5 space-y-2">
                        <span className="font-semibold leading-9">
                          Quantity
                        </span>
                        <div className="w-5/6 space-x-8 flex">
                          <div className="flex space-x-6 border border-gray-500 w-24 rounded-sm p-3">
                            <button
                              onClick={() => {
                                if (count >= 2) {
                                  setCount(count - 1);
                                }
                              }}
                            >
                              -
                            </button>
                            <span className="text-black">{count}</span>
                            <button
                              onClick={() => {
                                if (count < 5) {
                                  setCount(count + 1);
                                }
                              }}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="border border-gray-900 p-3 w-4/5 rounded-md "
                            onClick={handleAddToCart}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <button className="bg-black text-white p-3 mx-3 mt-6 w-4/5 rounded-md lg:w-full lg:mx-auto lg:mt-auto xl:mx-auto xl:mt-auto xl:w-full active:border border-spacing-1">
                        Buy it now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ProductInfo />
        </>
      )}
    </>
  );
};

export default Slug;
