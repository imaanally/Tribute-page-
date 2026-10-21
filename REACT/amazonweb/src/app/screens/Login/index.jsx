import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import bgImg from "../../../assets/hero.png";
import { useNavigate } from "react-router-dom";
import useApp from "../../hooks/useApps";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const request = useAxios();

  const { setMember, setToken } = useApp();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email) {
      toast.error("Email required");
      return;
    }

    if (!password) {
      toast.error("Password required");
      return;
    }

    const res = await request({
      method: "POST",
      url: "member/login",
      data: { email, password },
    });

    const responseData = res?.responseData;

    console.log(responseData);

    const member = responseData?.member ?? null;
    const token = responseData?.token ?? responseData?.access_token ?? null;

    setMember(member);
    setToken(token);

    localStorage.setItem("member", JSON.stringify(member));
    localStorage.setItem("token", token ?? "");

    navigate("/product");

    if (res?._error === true) {
      return;
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Toaster />

      <div className="w-[90%] md:w-[40vw] bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="block w-full border rounded py-2 px-3 text-gray-700"
            id="email"
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="block w-full border rounded py-2 px-3 text-gray-700"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>

          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Forgot Password?
          </a>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          ©2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
