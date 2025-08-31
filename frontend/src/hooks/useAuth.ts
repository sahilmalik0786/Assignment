import type { User } from "../features/queries";
import { useMe } from "./useMe";

export const useAuth = ():{
  user: User | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}=>{
    const {data:user, isLoading} = useMe()
    return {
        user , 
        isAuthenticated : !!user,
        isLoading
    }
}