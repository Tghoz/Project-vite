import "../css/Siderbar.css";
import { BsPeopleFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { SiArkecosystem } from "react-icons/si";

function Siderbar() {
  return (
    <section id="sidebar" className="p-0">
      <a href="#" className="flex items-center justify-center my-10 gap-3  ">
        <SiArkecosystem size={50} />
        <span className="text-3xl font-mono">AdminHub</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#" className="flex items-center justify-center gap-3">
            <BsPeopleFill />
            <span className="text">Clients</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center gap-3">
            <SiGoogleanalytics />
            <span className="text">Analysis</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Siderbar;
