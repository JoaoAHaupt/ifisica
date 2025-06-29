"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { BlockMath } from 'react-katex';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graphic() {
  const [type, setType] = useState("muv");

  const [velocity, setVelocity] = useState(0);
  const [acceleration, setAcceleration] = useState(0);
  const [time, setTime] = useState(10);
  const [space, setSpace] = useState(0);

  const timeLabels = Array.from({ length: time + 1 }, (_, i) => i);

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: "Espaço (m)",
        data: timeLabels.map((t) =>
          type === "mruv"
            ? space + velocity * t + 0.5 * acceleration * t ** 2
            : space + velocity * t
        ),
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.3)",
        tension: 0.0,
      },
    ],
  };

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Gráfico Espaço vs Tempo",
    },
  },
  scales: {
    x: {
      min: -50,
      max: 50,
      title: {
        display: true,
        text: "Tempo (s)",
      },
    },
    y: {
      min: -100,
      max: 100,
      title: {
        display: true,
        text: "Espaço (m)",
      },
    },
  },
};

let latex = "";	
if(type ==="muv"){
	latex = `${space + velocity * time} m = ${space} + ${velocity} \\cdot ${time}`;
}
else{
	latex = `${space + velocity * time + 0.5 * acceleration * time ** 2} m = ${space} + ${velocity} \\cdot ${time} + \\dfrac{${acceleration} \\cdot ${time}^2}{2} `;
}


  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
      <h2 className="text-3xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
        Espaço vs Tempo
      </h2>

      <label>
        Tipo de movimento:{" "}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="ml-2"
        >
          <option value="muv">MRU</option>
          <option value="mruv">MRUV</option>
        </select>
      </label>

      <div className="mt-4">
        <label>
          Posição inicial (m):{" "}
          <input
            type="number"
            value={space}
            onChange={(e) => setSpace(Number(e.target.value))}
            className="border px-2 py-1 rounded ml-2"
            step="1"
            min="0"
          />
        </label>
      </div>

      <div className="mt-4">
        <label>
          Velocidade (m/s):{" "}
          <input
            type="number"
            value={velocity}
            onChange={(e) => setVelocity(Number(e.target.value))}
            className="border px-2 py-1 rounded ml-2"
            step="1"
            
          />
        </label>
      </div>

      {type === "mruv" && (
        <div className="mt-4">
          <label>
            Aceleração (m/s²):{" "}
            <input
              type="number"
              value={acceleration}
              onChange={(e) => setAcceleration(Number(e.target.value))}
              className="border px-2 py-1 rounded ml-2"
              step="1"
              
            />
          </label>
        </div>
      )}

      <div className="mt-4">
        <label>
          Tempo total (s):{" "}
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="border px-2 py-1 rounded ml-2"
            step="1"
            min="1"
          />
        </label>
      </div>
<BlockMath math={latex} />

      <div className="mt-8">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

