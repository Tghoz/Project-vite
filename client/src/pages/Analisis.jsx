/* eslint-disable no-unused-vars */
import Modaleft from "../components/Modaleft";
import Modalpropuesta from "../components/Modalpropuesta";
import Botonpdf from "../components/Botonpdf";
import { jsPDF } from "jspdf";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React from "react";
import { useEffect, useState } from "react";
import { getPropuesta, getPublicacion } from "../api/analisis.api";

function Analisis() {
  const handlePDFGeneration = () => {
    const doc = new jsPDF();
    const charts = document.querySelectorAll("canvas");
    charts.forEach((chart, index) => {
      if (index !== 0) {
        doc.addPage();
      }
      const imgData = chart.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 10, 10, 180, 100);
    });
    doc.save("analisis.pdf");
  };

  const [propuesta, setPropuesta] = useState([]);
  const [metricas, setMetricas] = useState([]);

  useEffect(() => {
    async function loadPropuestas() {
      const propuestaResponse = await getPropuesta();
      const metricasResponse = await getPublicacion();

      setPropuesta(propuestaResponse.data);
      setMetricas(metricasResponse.data);
      return {
        propuesta: propuestaResponse,
        metricas: metricasResponse,
      };
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
          <i></i>
          <span className="text">
            <p>Facebook</p>
            <img src="/facebook.png" alt="Icono" width={50} height={60} />
          </span>
          <div>
            <Bar
              data={{
                labels: metricas.map((propuestas) => propuestas.nombre),
                datasets: [
                  {
                    label: `revenue`,
                    data: metricas
                      .filter((elemento) => elemento.id_red === 1)
                      .map((elemento) => elemento.metrica),
                  },
                ],
              }}
            />
          </div>

          <div>
            <h1> va ganando </h1>
          </div>
        </li>
        <li>
          <i></i>
          <span className="text">
            <p>Instagram</p>
            <img src="/instagram.png" alt="Icono" width={50} height={60} />
          </span>
          <div>
            <Bar
              data={{
                labels: metricas.map((propuestas) => propuestas.nombre),
                datasets: [
                  {
                    label: `revenue`,
                    data: metricas
                      .filter((elemento) => elemento.id_red === 2)
                      .map((elemento) => elemento.metrica),
                  },
                ],
              }}
            />
          </div>
        </li>
      </ul>
      <div className="modal-container">
        <Botonpdf onClick={handlePDFGeneration} />
        <Modaleft />
        <Botonpdf />
        <Modaleft />
      </div>
      <ul className="box-info">
        <li>
          <i></i>
          <div className="xdse">
            <img src="/twitterx.png" alt="Icono" width={50} height={60} />
          </div>
          <div className="xds">
            <p>X</p>
          </div>
          <div>
            <Bar
              data={{
                labels: metricas.map((propuestas) => propuestas.nombre),
                datasets: [
                  {
                    label: `revenue`,
                    data: metricas
                      .filter((elemento) => elemento.id_red === 4)
                      .map((elemento) => elemento.metrica),
                  },
                ],
              }}
            />
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
                labels: metricas.map((propuestas) => propuestas.nombre),
                datasets: [
                  {
                    label: `revenue`,
                    data: metricas
                      .filter((elemento) => elemento.id_red === 3)
                      .map((elemento) => elemento.metrica),
                  },
                ],
              }}
            />
          </div>
        </li>
      </ul>
      <div className="modal-container">
        <Botonpdf onClick={handlePDFGeneration} />
        <Modaleft />
        <Botonpdf />
        <Modaleft />
      </div>
    </main>
  );
}

export default Analisis;
