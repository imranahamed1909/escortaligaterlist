"use client";

import { useState } from "react";
import LoginForm from "./components/LoginForm";

export default function Home() {
  const [image, setImage] = useState(false);
  return (
    <>
      {!image ? (
        <LoginForm setImage={setImage} />
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
