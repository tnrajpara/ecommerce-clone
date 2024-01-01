"use client";
import React, { useEffect, useState, createContext } from "react";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { useAppContext } from "@/app/context/appcontext";
import { useSearchParams } from "next/navigation";

const Slug = () => {
  const [product, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState(""); // New state to keep track of the selected image
  const [colorImage, setcolorImage] = useState("");
  const [color, setColor] = useState("");
  const [Size, setSize] = useState("");
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const { isCartOpen, setIsCartOpen, showSearchBar, setShowSearchBar } =
    useAppContext();
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
    console.log(data);
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Function to handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const colorImageSelect = (image, color) => {
    setColor(color);
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    // Create a new object representing the selected product
    const selectedProduct = {
      color: color || (product.length > 0 && product[0].colorImages[0].color),
      selectedImage:
        selectedImage || (product.length > 0 && product[0].images[0]),
      size: Size || (product.length > 0 && product[0].sizes[0]),
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
        <div>
          <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          <div className="flex justify-center items-center py-1 my-4">
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
                  <div className="flex flex-row space-x-12">
                    <div className="flex flex-col space-y-3">
                      {item.images.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => handleImageSelect(image)}
                          className={`${
                            selectedImage === image
                              ? "border-black-500"
                              : "border-black"
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
                    <div className="flex flex-col">
                      <Image
                        src={selectedImage || item.images[0] || colorImage}
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
                        <h1 className="text-3xl font-bold">{item.name}</h1>
                        <p className="text-lg">$ {item.price}</p>
                      </div>
                      <AiOutlineStar className="h-7 w-7 rounded-full" />
                    </div>

                    {/* adding color images */}
                    <div className="flex space-y-2 flex-col leading-9">
                      <p>
                        Color: <span>{color || item.colorImages[0].color}</span>
                      </p>
                      <div className="flex space-x-4">
                        {item.colorImages.map((image, index) => (
                          <>
                            <div
                              key={index}
                              onClick={() =>
                                colorImageSelect(image.url, image.color)
                              }
                              className={`${
                                colorImage === image
                                  ? "border-black-500"
                                  : "border-black"
                              }`}
                            >
                              <Image
                                src={image.url}
                                width={60}
                                height={60}
                                alt="black-flash"
                                className="active:border border-black"
                              />
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p>
                        Size: <span>{Size || item.sizes[0]}</span>
                      </p>
                      <div className="flex space-x-4">
                        {item.sizes.map((size, index) => (
                          <div
                            key={index}
                            className={
                              Size === size
                                ? "bg-gray-900 text-white rounded-lg"
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
                      <span className="font-semibold leading-9">Quantity</span>
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
                          <span>{count}</span>
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

                    <button className="bg-black text-white p-3 mx-3 mt-6 w-3/4 rounded-md lg:w-full lg:mx-auto lg:mt-auto xl:mx-auto xl:mt-auto xl:w-full active:border border-spacing-1">
                      Buy it now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Slug;
