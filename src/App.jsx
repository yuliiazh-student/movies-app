import { Outlet } from "react-router"
import SiteHeader from "./components/generic/SiteHeader"
import { ToastContainer } from "react-toastify"
import { useGeneralStorage } from "./storage"

function App() {
  const setIsAuth = useGeneralStorage((state) => state.setIsAuth)
  if (localStorage.getItem('session_id')) setIsAuth(true)

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <SiteHeader />
      <Outlet />
    </>
  )
}

export default App
