"use client"
import Link from "next/link";
import React from "react";
import {useFormik } from "formik";
import * as yup from 'yup'
import { useRouter } from "next/navigation";


const Login = () => {

    const routing=useRouter();
    
    
    const validateSchema=yup.object({
        email:yup.string().email("Email must valid").required("Email is Required"),
        password:yup.string().min(6,"Password required atleast 6 characters").required("Password is Required")
    })

    

    const initialValues={
        email:"",
        password:""
    }
    const formik=useFormik({
        initialValues:initialValues,
        validationSchema:validateSchema,
        onSubmit:(values:any)=>{
            try{
                const data=localStorage.getItem("values")
                if(data){
                    if(data.includes(values.email)){
                        routing.push("/")
                    }
                }
            }catch(error:any){

            }
        }
    })
  return (
    <div className="h-lvh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col items-center p-10">
        <h1 className="text-xl text-white">Login Here</h1>
        <form onSubmit={formik.handleSubmit}>
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
              Login
            </button>
          </div>
          <Link href={"/register"}>
            <div className="text-white text-center mt-5">
              Account not exists? Register Now
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
