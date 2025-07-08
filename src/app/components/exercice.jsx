"use client";
import { useState } from "react";



export default function Exercice({ exercises = []}) {
    const [visibleSolutions, setVisibleSolutions] = useState(
        exercises.map(() => false)
    );

  function toggleSolution(index) {
    const newVisibilities = [...visibleSolutions];
    newVisibilities[index] = !newVisibilities[index];
    setVisibleSolutions(newVisibilities);
  }

  return (
      <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700 max-w-4xl mx-auto my-10">
        <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">
          Exercícios
        </h2>

        {exercises.map(({ question, options, solution, image }, i) => (
            <div key={i} className="mb-10">
                <h3 className="text-xl">{i+1})</h3>
              <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 whitespace-pre-line">
                {question}
              </p>
              {image && (
                  <div className="flex justify-center mb-4">
                    <img
                        src={image}
                        alt="Imagem da questão"
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
              )}



              {options.length > 0 && (
                  <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-400">
                    {options.map((opt, idx) => (
                        <li key={idx}>{opt}</li>
                    ))}
                  </ul>
              )}

              <button
                  onClick={() => toggleSolution(i)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                {visibleSolutions[i] ? "Ocultar Solução" : "Mostrar Solução"}
              </button>

              {visibleSolutions[i] && (
                  <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl border border-green-200 dark:border-gray-700 mt-4 whitespace-pre-line">
                    {solution}
                  </div>
              )}
            </div>
        ))}
      </section>
  );
}
