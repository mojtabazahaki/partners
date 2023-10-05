import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Hompage from "./pages/Homepage/Hompage";

function App() {


  const router = createBrowserRouter(createRoutesFromElements(


    <>
      <Route path="/" element={<Hompage />} />
      <Route path="*" element={<div>Not found</div>} />
    </>
  ))

  return (

    <RouterProvider router={router} />
  )
}

export default App
