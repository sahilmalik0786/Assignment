import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {isAuthenticated , user} = useAuth()
  console.log(isAuthenticated , user)
  return <div>Hello "/"!   {isAuthenticated && user?.email }</div>
}
