import "./css/Content.css";

import NavBar from "./components/NavBar";
import Siderbar from "./components/Siderbar";
import Clients from "./pages/Clients";

function App() {
  return (
    <>
      <Siderbar />
      <section id="content">
        <NavBar />
        <Clients />
      </section>
    </>
  );
}

export default App;
