"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { Description } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {Eye,EyeSlash} from '@gravity-ui/icons';
export default function SignUp() {
    const [error, setError] = useState(false);
    const route=useRouter();
    const [isVisible,setIsVisible]=useState(false);
    const [isOpen,setIsOpen]=useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user)
const { data, error } = await authClient.signUp.email({
    name: user.name,
email: user.email,
password: user.password,
image: user.image,
});
//console.log(error)
if (data) {
  toast.success('Sign Up Successfyll');
  route.push('/')
  return ;
}
if (error) {
  toast.error(error.message);
  return ;
}
     
console.log(data,error)



     if (user.password != user.confirmPassword) {
    setError(true);

    return;
  }
  //nsole.log(error)
  setError(false)
  if (error){ 
    toast.error('error')
  }
  console.log(error,data)
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Register to adopt your favorite pet
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
        
{/* name */}
<TextField
        isRequired
        name="name"
        type="name"
       
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      {/* email */}
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

    {/* email */}
    <TextField
        isRequired
        name="image"
        type="url"
       
      >
        <Label>Photo URL</Label>
        <Input placeholder="Enter your photo" />
        <FieldError />
      </TextField>
{/* password */}

   <TextField
        isRequired
        className='relative'
        minLength={6}
        name="password"
        type={isVisible ?'text':'password'}
        validate={(value) => {
          if (value.length <6 ) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (error) {
            return error
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
        
      >
        
        <Label>Password</Label>
        <Input placeholder="Enter your password"/>
        <span onClick={()=>setIsVisible(!isVisible)} className="absolute top-8 right-4 cursor-pointer">{isVisible ?<Eye></Eye>:<EyeSlash></EyeSlash>}</span>
        <Description>Must be at least 6 haracters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      {/* confirm password */}
      <TextField
        isRequired
        minLength={6}
        className='relative'
        name="confirmPassword"
        type={isOpen?'text':'password'}
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (error) {
            return "Passwords do not match."
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
        
      >
        <Label>Confirm Password</Label>
        <Input placeholder="Enter your password" />
         <span onClick={()=>setIsOpen(!isOpen)} className="absolute top-8 right-4 cursor-pointer">{isOpen ?<Eye></Eye>:<EyeSlash></EyeSlash>}</span>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>


          <Button
            type="submit"
            color="primary"
            className="w-full"
          >
            Register
          </Button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link href="/logIn" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}