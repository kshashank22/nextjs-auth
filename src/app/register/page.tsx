"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";

const Register = () => {
    const routing=useRouter();
    
    const validateSchema=yup.object({
        name:yup.string().min(3,"Name required atleast 3 characters").required("Name is Required"),
        email:yup.string().email("Email must valid").required("Email is Required"),
        password:yup.string().min(6,"Password required atleast 6 characters").required("Password is Required"),
        confirmpassword:yup.string().oneOf([yup.ref("password")]),
    })

    

    const initialValues={
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    }
    const formik=useFormik({
        initialValues:initialValues,
        validationSchema:validateSchema,
        onSubmit:async (values:any)=>{
            try{
            const response=await fetch('api/register',{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(values)
            })
            console.log(response)
            if(response.ok){
              formik.resetForm()
            }else{
              console.log("User Registration Failed")
            }
            localStorage.setItem("values",JSON.stringify(values.email))
            
            //routing.push("/login")
            }catch(error:any){
              console.log("Error During Registration:",error)
            }
        }
    })
  return (
    <div className="h-lvh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col items-center p-10">
        <h1 className="text-xl text-white">Register Here</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-10">
            <label className="text-white" htmlFor="name">Name</label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                style={{ width: "500px", height: "35px" }}
                placeholder="Enter the name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="text-white" htmlFor="email">Email</label>
            <div className="mt-2">
              <input
                type="text"
                id="email"
                style={{ width: "500px", height: "35px" }}
                placeholder="Enter the email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="text-white" htmlFor="password">Password</label>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                style={{ width: "500px", height: "35px" }}
                placeholder="Enter the password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="text-white" htmlFor="confirmpassword">Confirm Password</label>
            <div className="mt-2">
              <input
                type="password"
                id="confirmpassword"
                style={{ width: "500px", height: "35px" }}
                placeholder="Enter the confirm password"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div>
            <button
              style={{
                width: "500px",
                height: "35px",
                backgroundColor: "black",
                color: "white",
              }}
              type="submit"
            >
              Register
            </button>
          </div>
          <Link href={"/login"}>
            <div className="text-white text-center mt-5">
              Account already exists? Login Here
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
