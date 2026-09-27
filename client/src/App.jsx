import React, { useEffect } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomeLayout from "../components/HomeLayout"
import Error from "../pages/Error"
import { initClickSound } from "./utils/clickSound"


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/> ,
  }
])

function App() {
  useEffect(() => initClickSound(), [])
  return <RouterProvider router={router}/>
}

export default App;
