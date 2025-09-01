
import { createFileRoute, redirect } from '@tanstack/react-router'
import { queryClient } from '../queryClient';
import { fetchMe, type User } from '../features/queries';
import DashboardComp from '../components/Dashboard/dashboardComp';

export const Route = createFileRoute('/dashboard')({
  
    
      loader: async () => {
       try {
       const me = await queryClient.fetchQuery<User>({
        queryKey: ["me"],
        queryFn: fetchMe,});
        return { me };
      } catch {
      throw redirect({ to: "/auth/login" });
     }
  },
  
  
  component: RouteComponent,
})

function RouteComponent() {
  return <div className=''>
    <DashboardComp />
  </div>
}
