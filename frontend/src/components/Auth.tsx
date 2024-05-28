import { userSchema } from "@subasmohanty/zod";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<userSchema>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`, postInputs);
      const jwt = response.data.jwt;
      
      localStorage.setItem("token", "bearer " + jwt);
      navigate("/blogs")
    } catch (error) {
      // show alert to user that signup has failed
      alert("An error occured, Please sign up again");
    }
  }
  return (
    <div className="flex justify-center items-center">
      <div className="h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="px-10">
            <div className="text-2xl font-extrabold">
              {type === "signup"
                ? "Create an account"
                : "Log in to your account"}
            </div>
            <div className="text-slate-400">
              {type === "signup"
                ? "Already have an account ?"
                : "Don't have an account ?"}
              <Link
                to={type === "signup" ? "/signin" : "/signup"}
                className="hover:underline text-blue-500 pl-2"
              >
                {type === "signup" ? "Login" : "Sign up"}
              </Link>
            </div>
          </div>
          <div>
            <div className={type === "signup" ? "visible" : "hidden"}>
              <LabelledInput
                label={"Name"}
                placeholder={"Subas"}
                onChange={(e) => {
                  setPostInputs({
                    // spreading the postInputs and updating the name variable
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <LabelledInput
              label={"Email"}
              placeholder={"abc@xyz.com"}
              onChange={(e) => {
                setPostInputs({
                  // spreading the postInputs and updating the name variable
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              type={"password"}
              label={"Password"}
              placeholder={"password"}
              onChange={(e) => {
                setPostInputs({
                  // spreading the postInputs and updating the name variable
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button onClick={sendRequest} className="mt-6 bg-black text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer">
            {type === "signup" ? "sign up" : "sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-gray-900 mt-2">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
