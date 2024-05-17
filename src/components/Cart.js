import React from "react";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import delicon from "../images/icon-delete.svg";

function Cart() {
  const text = "Autumn Limited Edition Sneakers";
  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
        style={{ zIndex: "1000" }}
      >
        <h2 className="border-b border-slate-400 font-bold pb-2 mb-8"> Cart</h2>

        <div className="flex items-center justify-between gap-2">
          <img src={thumbnail} alt="thumb" className="rounded-lg w-14" />

          <ul>
            <li className="text-slate-600 text-sm">{`${text.substring(
              0,
              23
            )}...`}</li>
            <li className="text-slate-600 text-sm">
              $125.00 x 3{" "}
              <span className="text-slate-900 font-bold">$375.00</span>{" "}
            </li>
          </ul>

          <img src={delicon} alt="delete" />
        </div>

        <button className="bg-orange-500 py-2 px-4 w-full text-white font-bold rounded-lg shadow mt-5 justify-center cursor-pointer lg:flex-1 lg:mt-0 hover:bg-orange-600 transition-all duration-200">
          Checkout
        </button>
      </article>
    </>
  );
}

export default Cart;
