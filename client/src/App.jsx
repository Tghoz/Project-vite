import "./css/Content.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Siderbar from "./components/Siderbar";

import Clients from "../src/pages/Clients.jsx";
import Analisis from "./pages/Analisis";
import NotFound from "./pages/NotFound.jsx";
import FormActualizar from "./components/FormActualizar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Clients />,
  },
  {
    path: "clientes/:id",
    element: <FormActualizar />,
  },
  {
    path: "/analisis",
    element: <Analisis />,
  },
  {
    path: "*",
    element: <NotFound />,
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
