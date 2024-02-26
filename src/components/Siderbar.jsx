import "../css/Siderbar.css";
import { useEffect } from "react";

import { BsPeopleFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";

function Siderbar() {
  useEffect(() => {
    const allSideMenu = document.querySelectorAll(
      "#sidebar .side-menu.top li a"
    );

    allSideMenu.forEach((item) => {
      const li = item.parentElement;

      item.addEventListener("click", function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
    });
  }, []);

  return (
    <section id="sidebar">
      <a className="brand gap-2">
    <img src="/icon.png" alt="Icono" width={50} height={50} />
    <span className="text-6xl font-mono">AdminHub</span>
</a>
      <ul className="side-menu top">
        {location.pathname == "/" ? (
          <li className="active">
            <a href={"/"} className="flex items-center justify-center gap-3">
              <BsPeopleFill />
              <span className="text">Clients</span>
            </a>
          </li>
        ) : (
          <li>
            <a href={"/"} className="flex items-center justify-center gap-3">
              <BsPeopleFill />
              <span className="text">Clients</span>
            </a>
          </li>
        )}

        {location.pathname == "/analisis" ? (
          <li className="active">
            <a
              href="/analisis"
              className="flex items-center justify-center gap-3">
              <SiGoogleanalytics />
              <span className="text">Analysis</span>
            </a>
          </li>
        ) : (
          <li>
            <a
              href="/analisis"
              className="flex items-center justify-center gap-3">
              <SiGoogleanalytics />
              <span className="text">Analysis</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}

export default Siderbar;