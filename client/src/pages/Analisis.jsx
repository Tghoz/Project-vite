//import "../css/Pages.css";
import Modalpropuesta from "../components/Modalpropuesta";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { getPropuesta } from "../api/analisis.api";

import Metricas from "../components/Metricas";

function Analisis() {
  const num = 10;

  const [propuesta, setPropuesta] = useState([]);

  useEffect(() => {
    async function loadPropuestas() {
      const response = await getPropuesta();
      setPropuesta(response.data);
      return response;
    }

    loadPropuestas();
  }, []);

  return (
    <main>
      <div>
        <Modalpropuesta />
      </div>
      <ul className="box-info">
        <li>
          <span className="text">
            <p>Facebook</p>
            <img src="/facebook.png" alt="Icono" width={50} height={60} />
          </span>
          <div>
            <Bar
              data={{
                labels: propuesta.map((propuestas) => propuestas.destino),
                datasets: [
                  {
                    label: `revenue`,
                    data: [num, 1, 1],
                  },
                ],
              }}
            />
          </div>
          <div>
            <Metricas />
          </div>
        </li>

        <li>
          <span className="text">
            <p>Instagram</p>
            <img src="/instagram.png" alt="Icono" width={50} height={60} />
          </span>
          <div>
            <Bar
              data={{
                labels: propuesta.map((propuestas) => propuestas.destino),
                datasets: [
                  {
                    label: `revenue`,
                    data: [1, 1, 1],
                  },
                ],
              }}
            />
          </div>
          <div>
            <Metricas />
          </div>
        </li>
      </ul>

      <ul className="box-info">
        <li>
          <i></i>
          <span className="text">
            <p>X</p>
            <img src="/twitterx.png" alt="Icono" width={50} height={60} />
          </span>
          <div>
            <Bar
              data={{
                labels: propuesta.map((propuestas) => propuestas.destino),
                datasets: [
                  {
                    label: `revenue`,
                    data: [1, 1, 1],
                  },
                ],
              }}
            />
          </div>
          <div>
            <Metricas />
          </div>
        </li>
        <li>
          <i></i>
          <span className="text">
            <p>Tik Tok</p>
            <img src="/tiktok.png" alt="Icono" width={50} height={60} />
          </span>
          <div>
            <Bar
              data={{
                labels: propuesta.map((propuestas) => propuestas.destino),
                datasets: [
                  {
                    label: `revenue`,
                    data: [1, 1, 1],
                  },
                ],
              }}
            />
          </div>
          <div>
            <Metricas />
          </div>
        </li>
      </ul>
      <div className="modal-container">
        <button className="open-modal-btn"></button>
      </div>
    </main>
  );
}

export default Analisis;
