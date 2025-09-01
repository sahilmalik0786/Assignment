import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../assets/logo.png";
import rightColumn from "../assets/right-column.png";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import { toast } from "react-toastify";
import { useOtpLogin } from "../hooks/useOtpLogin";
import { useLogin } from "../hooks/useLogin";

const formSchema = z.object({
  email: z.email("Invalid Email"),
  otp: z.string().min(6, "Invalid Otp").optional(),
});

export type FormDataLogin = z.infer<typeof formSchema>;


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: zodResolver(formSchema),
  });
  // const navigate = useNavigate();
  const [otp, setOtp] = useState<boolean | null>();
  const [cooldown, setCooldown] = useState<number>(0)
  const getOtp = useOtpLogin();
  const onSubmit = async (data: FormDataLogin) => {
    
    const message = await getOtp?.mutateAsync(data, {
      onSuccess: () => {
        setOtp(true)
        setCooldown(90)
      }
    });

    toast(message);
  };
 
  const handleResend = async(data:FormDataLogin) =>{
     try {
       await getOtp.mutateAsync(data);
       toast("OTP resent!");
       setCooldown(90); // restart cooldown
    } catch (err: any) {
      toast.error(err.message || "Failed to resend OTP");
    }
  };
  

  const LoginUser = useLogin();
  const onSubmitWithOtp = async (data: FormDataLogin) => {
     try {
    const message = await LoginUser.mutateAsync(data);
    toast(message);
    // navigate({ to: '/dashboard' });
  } catch (err: any) {
    toast.error(err.message || "Something went wrong");
  }
  };

    useEffect(() => {
    let timer:ReturnType<typeof setTimeout>;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
    }, [cooldown]);
  
  return (
    <div className="h-full bg-white flex items-start  justify-center px-4">
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
            <div className=" md:flex md:w-full h-full not-sm:space-y-8 flex-col gap-4  items-center ">
              <div className="flex w-full max-w-sm flex-col md:mt-20  md:items-start justify-center gap-2 text-center">
                <h2 className="not-sm:text-5xl text-3xl font-mono text-primarytext tracking-tighter font-bold">
                  Sign In
                </h2>
                <p className="tracking-widest text-sm  text-secondarytext">
                  Please login to continue to your account.
                </p>
              </div>
              <form className="space-y-6 max-w-sm w-full">
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
                {otp && (
                  <div className="relative ">
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
                )}
                {otp && <button className="text-blue-500 underline w-fit p-1 " onClick={handleSubmit(handleResend)} disabled={cooldown > 0 || getOtp.isPending}>
                     {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend OTP"}
                  </button>}
                {otp ? (
                  <button
                    type="submit"
                    onClick={handleSubmit(onSubmitWithOtp)}
                    className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition"
                  >
                    {LoginUser.isPending ? 'Verifying' :'Verify Otp'}
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="w-full rounded-lg bg-blue-500 py-3 text-white font-medium hover:bg-blue-600 transition"
                  >
                    {getOtp.isPending ? 'Sending' :'Get Otp'}
                  </button>
                )}
              </form>
              <p className="text-center text-sm text-gray-500">
                Need an account?{" "}
                <Link to="/auth/register" className="text-blue-500 underline">
                  Create One
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[55%] overflow-hidden not-sm:hidden flex items-center justify-end">
        <img
          className="w-full h-full rounded "
          src={rightColumn}
          alt="right-column"
        />
      </div>
    </div>
  );
};

export default LoginForm;
