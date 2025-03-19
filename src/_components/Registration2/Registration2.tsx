'use client'
import { useState } from "react";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Registration2: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleEmailRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser!, {
        displayName: name,
      }); 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration successful. Please Sign In.",
        showConfirmButton: false,
        timer: 3500,
      });

      router.push("/logIn");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title:
          "There was an error: " +
          (error instanceof Error ? error.message : "Unknown error"),
        showConfirmButton: false,
        timer: 3500,
      });
    }
  };

  return (
    <div className="bg-gray-100 pt-10 pb-52 px-4">
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-5 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-5">
            Register
          </h2>
          <form onSubmit={handleEmailRegister}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <label
                htmlFor="forgotPassword"
                className="text-gray-600 text-sm pl-1"
              >
                Forgot password?
              </label>
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="bg-[#081831] text-white p-3 rounded w-full"
              >
                Register
              </button>
            </div>

            <div className="space-y-5 mt-5 text-center">
              <p>
                Already have an account?{" "}
                <Link href="/logIn" className="text-blue-500 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration2;
