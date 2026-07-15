import { Link, NavLink } from "react-router"
import { navList } from "../../helpers/navigation"
import { useState } from "react"
import Modal from "react-modal"
import LoginForm from "./LoginForm"
import { modalStyle } from "../../helpers/componentsSettings"
import useAuth from "../../hooks/useAuth"
import { useGeneralStorage } from "../../storage"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { logout } = useAuth()
  const isAuth = useGeneralStorage((state) => state.isAuth)

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            Cine<span>Search</span>
          </Link>
        </div>
        <div className="nav-links">
          {navList.map((navItem) => {
            return <NavLink to={navItem.path} className="nav-link" key={navItem.name}>
              {navItem.name}
            </NavLink>
          })}
        </div>
        <div className="nav-right">
          <div className="btn-icon" title="Notifications">
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <div className="btn-icon" title="Watchlist">
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          {isAuth
            ? <>
              <Link to="/profile" className="avatar"></Link>
              <button className="btn-icon" title="Sign Out" onClick={logout}>
                <svg width={16} height={16} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7037 16.43L19.2137 12.71C19.3237 12.59 19.3237 12.41 19.2137 12.29L15.7037 8.56" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.2937 12.5H8.2937" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.7037 18.43V21.5C17.7037 21.78 17.4837 22 17.2037 22H5.20374C4.92374 22 4.70374 21.78 4.70374 21.5V3.5C4.70374 3.22 4.92374 3 5.20374 3H17.2037C17.4837 3 17.7037 3.22 17.7037 3.5V6.56999" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </>
            : <button className="btn-icon" title="Sign In" onClick={() => setIsOpen(true)}>
              <svg width={16} height={16} viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 10.61H6C5.72 10.61 5.5 10.83 5.5 11.11V21.5C5.5 21.78 5.72 22 6 22H18C18.28 22 18.5 21.78 18.5 21.5V11.11C18.5 10.83 18.28 10.61 18 10.61H17.5H10.5" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.5 6.5C15.5 4.57 13.93 3 12 3C10.07 3 8.5 4.57 8.5 6.5V10.61" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 16.75C12.5523 16.75 13 16.3023 13 15.75C13 15.1977 12.5523 14.75 12 14.75C11.4477 14.75 11 15.1977 11 15.75C11 16.3023 11.4477 16.75 12 16.75Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 18.75V19.75" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          }
        </div>
      </nav>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        style={modalStyle}
      >
        <LoginForm onCallback={(isOK) => isOK && setIsOpen(false)} />
      </Modal>
    </>
  )
}