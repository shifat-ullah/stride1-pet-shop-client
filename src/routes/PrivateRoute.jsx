import { useContext } from 'react'

import { Navigate, useLocation } from 'react-router'

import { AuthContext } from '../provider/AuthProviders'
import Spiner from '../components/shared/Spiner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <Spiner />
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute