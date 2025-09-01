  import {  z } from "zod";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import logo from "../assets/logo.png";
  import rightColumn from '../assets/right-column.png'
  import { Calendar } from "lucide-react";
 
import { useState } from "react";
import { toast } from "react-toastify";
import { useRegister } from "../hooks/useRegister";
import { Link, useNavigate } from "@tanstack/react-router";
import { useOtpRegister } from "../hooks/useOtp";

  const formSchema = z.object({
    fullName: z.string().min(1, "Name is required"),
    email: z.email("Invalid Email"),
    dob: z.iso
      .date("Invalid Date")
      .refine((dateStr) => new Date(dateStr) <= new Date(), {
        message: "Date of birth cannot be in the future",
      }),
    otp: z.string().min(6 , "Otp is required").optional()
  });
  
  export type FormData = z.infer<typeof formSchema>;

  const RegisterForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(formSchema),
    });
    const navigate = useNavigate()
    const [otp, setOtp] = useState<boolean | null>()
    const getOtp = useOtpRegister()
    const onSubmit =  async(data: FormData) => {
      console.log('hello ')
        const message = await getOtp?.mutateAsync(data ,{
              
            onSuccess:()=>setOtp(true)
            
          })
        toast(message)
    };
    
    const registerUser = useRegister()
    const onSubmitWithOtp = async (data: FormData)=> {
     try {
    const message = await registerUser.mutateAsync(data);
    toast(message);
    navigate({ to: "/dashboard" });
  } catch (err: any) {
    toast.error(err.message || "Something went wrong");
  }
    }
    
   console.log( registerUser.isPending )
    return (
      <div className="h-full  bg-white flex items-start  justify-center px-4">
        <div className="md:w-[45%] w-full h-full flex  justify-center ">
          <div className="w-full h-full space-y-6">
            <div className="flex md:items-start justify-start w-full h-full  flex-col gap-6">
              <div className="w-16 not-sm:w-full not-sm:pt-12 pt-8 md:ml-10 flex justify-center">
                <img
                  className="aspect-auto w-full not-sm:w-20 object-contain"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className=" md:flex md:w-full h-full not-sm:space-y-6 flex-col gap-4 items-center justify-center">
                <div className="flex w-full max-w-sm flex-col   md:items-start justify-center gap-2 text-center">
                  <h2 className="not-sm:text-5xl text-3xl font-mono text-primarytext tracking-tighter font-bold">
                    Sign up
                  </h2>
                  <p className="tracking-widest text-md text-secondarytext">
                    Sign up to enjoy the feature of HD
                  </p>
                </div>
              <form className="space-y-6 max-w-sm w-full">
                <div className="relative ">
                  <label
                    className="absolute left-3 -top-3.5  text-secondarytext text-md transition-all bg-white p-1 "
                    htmlFor="fullName"
                  >
                    Your Name
                  </label>
                  <input
                    className=" w-full rounded-lg border  border-inputbr px-3 pt-5 pb-2  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    type="text"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="relative w-full">
                  <label
                    htmlFor="dob"
                    className="absolute left-3 -top-3.5 bg-white px-1 text-secondarytext text-sm"
                  >
                    Date of Birth
                  </label>
                  <div className="flex items-center w-full rounded-lg border border-inputbr px-3 pt-5 pb-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      id="dob"
                      {...register("dob")}
                      className="w-full bg-transparent focus:outline-none text-secondarytext text-sm hide-date-icon"
                    />
                  </div>

                  {errors.dob && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.dob.message as string}
                    </p>
                  )}
                </div>

                <div className="relative ">
                  <label
                    className="absolute left-3 -top-3.5  text-secondarytext text-md transition-all bg-white p-1 "
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="peer w-full rounded-lg border border-inputbr px-3 pt-5 pb-2  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                {otp && <div className="relative ">
                  <label
                    className="absolute left-3 -top-3.5  text-secondarytext text-md transition-all bg-white p-1 "
                    htmlFor="otp"
                  >
                    Otp
                  </label>
                  <input
                    className="peer w-full rounded-lg border border-inputbr px-3 pt-5 pb-2  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...register("otp")}
                  />
                  {errors.otp && (
                    <p className="text-red-500">{errors.otp?.message}</p>
                  )}
                </div>
}
               {otp ?   <button
                  type="submit"
                  onClick={handleSubmit(onSubmitWithOtp)}
                  className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition"
                >
                  {registerUser?.isPending ? 'Verifying' : 'Verify Otp'}
                </button> :   <button
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition"
                >
                  {getOtp.isPending ? 'Sending' : 'Get Otp'}
                </button>}
              </form>
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
               <Link to="/auth/login" className="text-blue-500 underline">
                  Sign In
               </Link>
              </p>
              </div>

            </div>
          </div>
        </div>
        <div className="h-full w-[55%] overflow-hidden not-sm:hidden flex items-center justify-end">
          <img className="w-full h-full rounded " src={rightColumn} alt="right-column" />
        </div>
      </div>
    );
  };

  export default RegisterForm;
