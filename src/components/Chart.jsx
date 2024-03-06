/* eslint-disable no-unused-vars */

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Chart() {
  return (
    <div className="App">
      <div className="text-3xl text-red-900">test 1</div>
      <div>
        <Bar
          data={{
            labels: ["a", "b", "c"],
            datasets: [
              {
                label: "revenue",
                data: [200, 300, 400],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Chart;
