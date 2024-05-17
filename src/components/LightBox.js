import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import close from "../images/icon-close.svg";

function LightBox({
  products,
  slideIndex,
  nextSlide,
  prevSlide,
  setShowLightBox,
}) {
  return (
    <>
      <article className="bg-black bg-opacity-75 fixed bottom-0 top-0 left-0 right-0 z-50">
        <button onClick={() => setShowLightBox(false)}>
          <img
            src={close}
            alt="close"
            className="w-7 absolute top-10 right-10"
          />
        </button>
        <div className="flex items-center justify-center h-screen">
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt="Main"
                className="big-image lg:w-full h-96 lg:rounded-xl"
              />

              <ul>
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
      </article>
    </>
  );
}

export default LightBox;
