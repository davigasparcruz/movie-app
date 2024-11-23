import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

import './styles.css'

export const LayoutMain = () => {
  return (
    <div>
      <Header />
      
      <div className="container-layout-main">
        <Outlet />
      </div>
    </div>
  )
}
