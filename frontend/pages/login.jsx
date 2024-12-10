// pages/login.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import api from "../utils/axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/auth/login/", {
        username: username,
        password: password,
      });



      console.log("Login response:", response.data);

      // Update the auth state
      login(response.data);

      router.push("/"); // will be handled in the ProtectedRoute component
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setError(error.response?.data?.non_field_errors?.[0] || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-customPink to-customPurple shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
            </div>
            <div className="divide-y divide-gray-500">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="username "
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      User Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autocomplete="off"
                      required
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative flex justify-center items-center">
                    {error && <div classNameName="text-red-500">{error}</div>}
                    {/* <button  type="submit" className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button> */}
                    <div class="relative inline-flex py-3  group">
                      <div class="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-customPink to-customPurple rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        type="submit"
                        
                        class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-customPink font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customPurple"
                        
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p class="text-center text-gray-600 mt-4">Create a new account? <a href="/register" class="text-blue-500 font-semibold">Register</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
