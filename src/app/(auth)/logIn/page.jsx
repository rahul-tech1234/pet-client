"use client";

import Link from "next/link";
import { Button, Description, FieldError, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { Check } from "lucide-react";
import { authClient } from "@/lib/auth-client";
export default function LoginPage() {
  const handleLogin =async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
    
    email: userData.email,
    password: userData.password,
   
    callbackURL: '/all-pets',
    });

    //console.log(data,error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue your pet adoption journey.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
        
          
   <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>


      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>




        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 border-t"></div>
        </div>

        <Button
          variant="bordered"
          className="w-full text-blue-500"
        >
         <FcGoogle></FcGoogle> Continue with Google
        </Button>

        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}