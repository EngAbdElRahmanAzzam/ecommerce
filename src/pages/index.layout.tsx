import Navbar from "@/components/common/navbar"

import { Outlet } from "react-router-dom"
const RootLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout