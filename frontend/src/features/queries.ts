import apiClient from "../services/apiClient";
import type { FormData } from "../components/register-form";
import { AxiosError } from "axios";
import type { FormDataLogin } from "../components/login-form";


interface OtpResponse {
    message:string;
}

interface AuthResponse {
    message:string;
}

export interface User {
  fullName: string;
  email: string;
 
  _id: string;
}

interface MeResponse {
  message: string;
  user: User;
}

export const fetchOtpRegister = async(credential:FormData): Promise<string> =>{
     try {
    const res = await apiClient.post<OtpResponse>("/api/auth/registerOtp", credential);
    return res.data.message; 
    } catch (error: any) {
   
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
   
    return "Something went wrong, please try again.";
  }
}

export const fetchOtpLogin = async(credential:FormDataLogin): Promise<string> =>{
     try {
    const res = await apiClient.post<OtpResponse>("/api/auth/loginOtp", credential);
    return res.data.message; 
    } catch (error: any) {
   
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
   
    return "Something went wrong, please try again.";
  }
    
}

export const registerWithOtp = async(credential:FormData):Promise<string> => {
  
       try {
    const res = await apiClient.post<AuthResponse>("/api/auth/register", credential);
    return res.data.message; 
    } catch (error: any) {
   
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
   
    return "Something went wrong, please try again.";
  }
    
}

export const loginWithOtp = async(credential:FormDataLogin):Promise<string> => {
       try {
    const res = await apiClient.post<AuthResponse>("/api/auth/login", credential);
    return res.data.message; 
    } catch (error: any) {
   
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
   
    return "Something went wrong, please try again.";
  }
}

export const fetchMe = async():Promise<User> =>{
  const res = await apiClient.get<MeResponse>("/api/auth/getuser");
  return res.data.user;

}