import React, { useState } from "react";
import { data } from "../data";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import { FaCartShopping, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import LightBox from "./LightBox";

function Products() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);
  const {mainImage} = products[value]
 

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };

  return (
    <div className="lg:p-8 ">
      {showLightBox && (
        <LightBox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setShowLightBox={setShowLightBox}
        />
      )}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-20 lg:place-items-center">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src={item.mainImage}
                  alt="Main"
                  className="w-full lg:rounded-xl cursor-pointer"
                  onClick={() => {
                    setShowLightBox(true);
                  }}
                />

                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={prevSlide}
                      className="bg-white absolute rounded-full p-5 shadow left-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white absolute rounded-full p-5 shadow right-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
           
                <img
                  src={mainImage}
                  alt="Main"
                  className="w-full lg:rounded-xl cursor-pointer"
                  onClick={() => {
                    setShowLightBox(true);
                  }}
                />
          
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 border-transparent rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.thumbnail} alt="Thumbnail" className="w-20" />
              </li>
            ))}
          </ul>
        </article>

        <article className="px-8 pb-10 ">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-small font-bold inline-block rounded shadow mb-10">
            Sneaker Company
          </h2>

          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>

          <p className="text-slate-600 mb-10 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            weather can offer.
          </p>

          <div className="flex flex-wrap items-center lg:items-start justify-between lg:flex-col lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-small font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>

            <p className="text-slate-600 text-sm">
              <s>$250.00 </s>
            </p>
          </div>

          <div className="mt-10 lg:flex justify-between items-center gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li className="cursor-pointer" onClick={handleMinus}>
                <img src={minus} alt="minus" />
              </li>

              <li>{amount}</li>

              <li
                className="cursor-pointer"
                onClick={() => setAmount(amount + 1)}
              >
                <img src={plus} alt="plus" />
              </li>
            </ul>

            <button className="flex items-center gap-4 bg-orange-500 py-2 px-4 w-full text-white font-bold rounded-lg shadow mt-5 justify-center cursor-pointer lg:flex-1 lg:mt-0 hover:bg-orange-600 transition-all duration-200">
              <FaCartShopping /> Add to cart
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Products;
