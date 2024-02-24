import "./css/Content.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Siderbar from "./components/Siderbar";

import Clients from "../src/pages/Clients.jsx";
import Hola from "./pages/Hola";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Clients />,
  },
  {
    path: "/hello",
    element: <Hola />,
  },
]);

function App() {
  return (
    <>
      <Siderbar />
      <section id="content">
        <NavBar />
        <RouterProvider router={router} />
      </section>
    </>
  );
}

export default App;
