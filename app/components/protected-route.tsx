import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { privateRoutes, publicRoutes } from '~/constants/route'
import { useBoundStore } from '~/stores/use-bound-store'

interface ProtectedRouteProps {
  redirectPath?: string
}

const ProtectedRoute = ({ redirectPath = publicRoutes.LOGIN }: ProtectedRouteProps) => {
  const isLoggedIn = useBoundStore((state) => state.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(redirectPath)
    }
  }, [isLoggedIn])

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />
  }

  return <Outlet />
}

export default ProtectedRoute
