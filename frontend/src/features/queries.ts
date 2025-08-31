import apiClient from "../services/apiClient";
import type { FormData } from "../components/register-form";




import type { FormDataLogin } from "../components/login-form";
import type { FormDataNotes } from "../components/Dashboard/modal";

interface OtpResponse {
  message: string;
}

interface messageResponse {
  message: string;
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

export const fetchOtpRegister = async (
  credential: FormData
): Promise<string> => {
  try {
    const res = await apiClient.post<OtpResponse>(
      "/api/auth/registerOtp",
      credential
    );
    return res.data.message;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }

    return "Something went wrong, please try again.";
  }
};

export const fetchOtpLogin = async (
  credential: FormDataLogin
): Promise<string> => {
  try {
    const res = await apiClient.post<OtpResponse>(
      "/api/auth/loginOtp",
      credential
    );
    return res.data.message;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }

    return "Something went wrong, please try again.";
  }
};

export const registerWithOtp = async (
  credential: FormData
): Promise<string> => {
  try {
    const res = await apiClient.post<messageResponse>(
      "/api/auth/register",
      credential
    );
    return res.data.message;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }

    return "Something went wrong, please try again.";
  }
};

export const loginWithOtp = async (
  credential: FormDataLogin
): Promise<string> => {
  try {
    const res = await apiClient.post<messageResponse>(
      "/api/auth/login",
      credential
    );
    return res.data.message;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }

    return "Something went wrong, please try again.";
  }
};

export const fetchMe = async (): Promise<User> => {
  const res = await apiClient.get<MeResponse>("/api/auth/getuser");
  return res.data.user;
};


export const createNote = async (data:FormDataNotes): Promise<string> => {
  try {
    const res = await apiClient.post<messageResponse>(
      "/api/notes/create",
      data
    );
    return res.data.message;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }

    return "Something went wrong, please try again.";
  }
};


export const deleteNote = async (noteId: string): Promise<string> => {
  try {
    const res = await apiClient.delete<messageResponse>(`/api/notes/${noteId}`);
    return res.data.message;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return error.response.data.message as string;
    }

    return "Something went wrong, please try again.";
  }
}
