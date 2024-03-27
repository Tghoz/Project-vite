/* eslint-disable no-unused-vars */

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React from "react";
import { useEffect, useState } from "react";
import { getPropuesta } from "../api/analisis.api";

function Chart() {
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
    <div className="App">
      <div></div>
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
    </div>
  );
}

export default Chart;
