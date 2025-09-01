import { createFileRoute, redirect } from '@tanstack/react-router'
import LoginForm from '../../components/login-form'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const {isAuthenticated } = useAuth()
  useEffect(()=>{
     isAuthenticated && redirect({to:'/dashboard'})
  },[isAuthenticated])
  return  <div className='h-screen'>
     <LoginForm />
  </div>
}
