import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomeLayout from "../components/HomeLayout"
import Error from "../pages/Error"


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    errorElement:<Error/> ,
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
