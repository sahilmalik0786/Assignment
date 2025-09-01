import { createFileRoute, redirect } from '@tanstack/react-router'
import RegisterForm from '../../components/register-form'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,
})

function RouteComponent() {
   const {isAuthenticated } = useAuth()
    useEffect(()=>{
       isAuthenticated && redirect({to:'/dashboard'})
    },[isAuthenticated])
  return <div className='  h-screen '>
     <RegisterForm />
  </div>
}
