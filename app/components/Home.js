"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  return (
    <>
      {
        !next ? (
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

            <div class="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 border border-[#333]">
                <tbody>
                  <tr class="bg-white border border-[#333]">
                    <td class="px-6 py-4 ">
                      <p
                        onClick={() => setNext(true)}
                        class="mt-6 text-center text-2xl text-red-600 uppercase"
                      >
                        13 Bad Reviews
                      </p>
                    </td>
                  </tr>
                  <tr class="bg-white border-[#333]">
                    <td class="px-6 py-4 ">
                      <p
                        onClick={() => setNext(true)}
                        class="mt-6 text-center text-2xl text-red-600 uppercase"
                      >
                        View All Reviews
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              onClick={() => setNext(true)}
              class="mt-6 text-center text-2xl text-red-600 uppercase"
            >
              Report
            </h2>
            <div class="overflow-x-auto mt-5">
              <table className="w-full text-sm text-left text-gray-500 border border-[#333]">
                <tbody>
                  <tr class="bg-white">
                    <th
                      onClick={() => setNext(true)}
                      scope="row"
                      class="px-6 py-4 border border-[#333] font-medium text-center text-2xl text-[#337ab7] whitespace-nowrap"
                    >
                      Privacy Policy
                    </th>
                    <td
                      onClick={() => setNext(true)}
                      class="px-6 text-center text-2xl text-[#337ab7] py-4 border border-[#333]"
                    >
                      Terms & Conditions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <LoginForm adminId={adminId} posterId={posterId} />
        )
        //  !image ? (
        //   <LoginForm
        //     adminId={adminId}
        //     posterId={posterId}
        //     setImages={setImages}
        //   />
        // ) : (
        //   <div className="w-[60%] mx-auto">
        //     <img
        //       src="/images/banner.png"
        //       alt="megaeprsonals"
        //       className="w-full h-full object-cover"
        //     />
        //   </div>
        // )
      }
    </>
  );
}
