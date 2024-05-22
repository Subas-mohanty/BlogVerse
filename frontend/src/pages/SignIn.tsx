import React from "react";
import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";

function SignIn() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Auth type="signin"/>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}

export default SignIn;
