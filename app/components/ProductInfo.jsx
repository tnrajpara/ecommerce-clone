import React from "react";
import { useAppContext } from "../context/appcontext";

const ProductInfo = () => {
  const { isCartOpen } = useAppContext();
  const pictures = [
    "/productinfo-1.webp",
    "/productinfo-2.webp",
    "/productinfo-3.webp",
    "/productinfo-4.webp",
  ];
  return (
    <div
      className={`${
        isCartOpen
          ? "xl:mt-24 lg:mt-14 font-bebas bg-gray-500"
          : "xl:mt-24 lg:mt-14 font-bebas"
      }`}
    >
      <h1 className="py-2 px-2 text-2xl lg:text-4xl  xs:mb-20 lg:mb-10 mb-6 font-bold lg:ml-6">
        Make your style with varshell
      </h1>
      <div className="flex flex-col">
        {/* first  */}
        <div className="flex w-full">
          <img src={pictures[0]} alt="" className="w-1/2" />
          <div className="flex justify-center flex-col w-1/2 space-y-6">
            <div className="w-11/12 ml-4">
              <h1 className="lg:text-2xl xl:text-4xl font-semibold">
                Our bold take on style at home, or away.
              </h1>
              <div className="mt-[10px] mb-[10px] pt-[0px] pb-[0px] pr-[0px] text-left">
                <img src="/Line.svg" alt="" />
              </div>
              <p className="text-lg xl:text-2xl xl:leading-[3rem] leading-10">
                Made with a combination of sustainable, recycled and organic
                materials, every detail of the curve has been finely tuned so
                you look and feel the part, wherever these slippers take you.
              </p>
            </div>
          </div>
        </div>

        {/* second  */}

        <div className="flex w-full">
          <div className="flex justify-center flex-col w-1/2 space-y-6">
            <div className="w-11/12 ml-4">
              <h1 className="lg:text-2xl xl:text-4xl font-semibold">
                A slipper that&apos;s here to stay
              </h1>
              <div className="mt-[10px] mb-[10px] pt-[0px] pb-[0px] pr-[0px] text-left">
                <img src="/Line.svg" alt="" />
              </div>
              <p className="text-lg xl:text-2xl xl:leading-[3rem] leading-10">
                Made with a luxurious recycled ReWooly upper and a durable
                &quot;anywhere&quot; sole made from responsibly sourced
                Pura-Latex rubber, they&apos;re the slippers you&apos;ll be
                wearing for years to come.
              </p>
              <p className="text-lg xl:text-2xl xl:leading-[3rem] leading-10">
                What&apos;s more, the neoprene heel cradle holds them in place
                for a secure fit.
              </p>
            </div>
          </div>
          <img src={pictures[1]} alt="" className="w-1/2" />
        </div>
      </div>

      {/* third  */}
      <div className="flex w-full">
        <img src={pictures[2]} alt="" className="w-1/2" />
        <div className="flex justify-center flex-col w-1/2 space-y-6">
          <div className="w-11/12 ml-4">
            <h1 className="lg:text-2xl xl:text-4xl font-semibold">
              Quality that happened organically
            </h1>
            <div className="mt-[10px] mb-[10px] pt-[0px] pb-[0px] pr-[0px] text-left">
              <img src="/Line.svg" alt="" />
            </div>
            <p className="text-lg xl:text-2xl xl:leading-[3rem] leading-10">
              We went in search of the softest, most luxurious materials and
              discovered an Italian, 100% organic EcoCert wool perfect for
              lining the curve slippers. It keeps you warm in the winter,
              comfortable in the summer, and feeling good year round.
            </p>
          </div>
        </div>
      </div>

      {/* fourth  */}
      <div className="flex w-full">
        <div className="flex justify-center flex-col w-1/2 space-y-6">
          <div className="w-11/12 ml-4">
            <h1 className="lg:text-2xl xl:text-4xl font-semibold">
              Made with you and the planet in mind
            </h1>
            <div className="mt-[10px] mb-[10px] pt-[0px] pb-[0px] pr-[0px] text-left">
              <img src="/Line.svg" alt="" />
            </div>
            <p className="text-lg xl:text-2xl xl:leading-[3rem] leading-10">
              We chose our materials to keep the planet happy and our features
              to keep you in your slippers for longer.
            </p>
            <p className="text-lg xl:text-2xl xl:leading-[3rem] leading-10">
              We introduced the over-the-toe style to prevent scuffing, created
              a fully machine washable design and adapted the shape of the
              slipper to give you our most comfortable fit yet.
            </p>
          </div>
        </div>
        <img src={pictures[3]} alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default ProductInfo;
