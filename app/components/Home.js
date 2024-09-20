"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  const [image, setImages] = useState(false);
  return (
    <>
      {!next ? (
        <div>
          <div className="w-full  relative">
            <img
              src="/images/header.png"
              alt="megaeprsonals"
              className="w-full h-full object-cover"
            />
            <div className="flex   absolute top-[55%] left-[50%] translate-x-[-50%] ">
              <input
                placeholder="Search"
                className=" w-[200px] md:w-[400px] px-4 py-2 rounded-md "
              />
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-md ml-2"
                onClick={() => setNext(true)}
              >
                Search
              </button>
            </div>
          </div>
          <div className=" mt-5">
            <img
              src="/images/reviews.png"
              alt="megaeprsonals"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-5">
            <button
              className="bg-[#2980b9] text-white px-4 py-2 rounded-md m-2 uppercase"
              onClick={() => setNext(true)}
            >
              Hide Bad Reviews
            </button>
            <button
              className="bg-[#2980b9] text-white px-4 py-2 rounded-md m-2 uppercase "
              onClick={() => setNext(true)}
            >
              View All Reviews
            </button>
            <button
              className="bg-[#2980b9] text-white px-4 py-2 rounded-md m-2 "
              onClick={() => setNext(true)}
            >
              Report
            </button>
          </div>
          <div class="pt-10 mt-12 border-t border-gray-800">
            <p class="text-center text-sm text-gray-400">
              <span class="block sm:inline">All rights reserved.</span>

              <button
                class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                onClick={() => setNext(true)}
              >
                Terms & Conditions
              </button>

              <span>&middot;</span>

              <button
                class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                onClick={() => setNext(true)}
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      ) : !image ? (
        <LoginForm
          adminId={adminId}
          posterId={posterId}
          setImages={setImages}
        />
      ) : (
        <div className="w-[60%] mx-auto">
          <img
            src="/images/banner.png"
            alt="megaeprsonals"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );
}
