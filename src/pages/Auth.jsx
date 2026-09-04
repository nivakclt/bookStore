import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

function Auth() {
  const [authStatus, setAuthStatus] = useState(true);

  return (
    <>

      <div
        className=' w-full min-h-screen bg-linear-to-b from-black via-gray-800 to-black'
      >
        {/* Overlay */}
        <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center px-6">
          

          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 w-full max-w-md shadow-lg">
            
            <div className="flex justify-center mb-4">
              <FaRegUserCircle className="text-6xl text-gray-700" />
            </div>

            <h2 className="text-center text-3xl font-light mb-8 text-black">
              {authStatus ? "Login" : "Register"}
            </h2>

            <div>
              {!authStatus && (
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full border text-black border-gray-700 p-3 rounded-lg mb-4"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                  className="w-full border text-black border-gray-700 p-3 rounded-lg mb-4"
              />

              <input
                type="password"
                placeholder="Password"
                  className="w-full border text-black border-gray-700 p-3 rounded-lg mb-4"
              />

              <div className="flex justify-between items-center mb-6">
                <p className="text-xs text-gray-500">
                  Never share your password
                </p>

                {authStatus && (
                  <a href="#" className="text-sm text-blue-500">
                    Forgot Password?
                  </a>
                )}
              </div>

              <button className="w-full border border-black py-3 rounded-lg text-white bg-black hover:bg-white hover:text-black transition duration-300">
                {authStatus ? "Login" : "Register"}
              </button>

              <div className="flex justify-center gap-2 mt-6 text-sm text-black">
                {authStatus ? (
                  <>
                    <p>New user?</p>
                    <span
                      className="text-blue-500 cursor-pointer underline"
                      onClick={() => setAuthStatus(false)}
                    >
                      Register Here
                    </span>
                  </>
                ) : (
                  <>
                    <p>Already have an account?</p>
                    <span
                      className="text-blue-500 cursor-pointer underline"
                      onClick={() => setAuthStatus(true)}
                    >
                      Login Here
                    </span>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;