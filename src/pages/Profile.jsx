import { Outlet, useNavigate, NavLink } from "react-router"

import { useGeneralStorage } from "../storage"
import { useEffect } from "react"
import '../assets/scss/profile.scss'

export default function Profile(){
  const isAuth = useGeneralStorage((state) => state.isAuth)
  
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth){
      navigate('/')
    }
  }, [isAuth])

  if(!isAuth) return null

  return (<>
    <div className="profile-page">
      <aside>
        <ul>
          <li>
            <NavLink to="/profile" className="btn-yellow">Account</NavLink>
          </li>
          <li>
            <NavLink to="/profile/fav" className="btn-yellow">Favorited</NavLink>
          </li>
        </ul>
      </aside>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  </>)
}