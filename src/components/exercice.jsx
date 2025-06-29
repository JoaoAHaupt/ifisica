"use client";
import Image from "next/image";
import { useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function Exercice() {
  const [showSolution, setShowSolution] = useState(false);
  const questions = []
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">
          Exercícios 
        </h2>
        
        <div className="bg-emerald-50 dark:bg-gray-800 p-6 rounded-xl mb-6">
          <p className="text-lg mb-4 text-gray-800 dark:text-gray-300">
            Um carro parte do repouso e acelera uniformemente a 3 m/s² por 10 segundos.  
            Qual a velocidade final e o deslocamento do carro nesse intervalo?
          </p>
          <button 
            onClick={() => setShowSolution(!showSolution)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {showSolution ? 'Ocultar Solução' : 'Mostrar Solução'}
          </button>
        </div>
        {showSolution && (
          <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl border border-green-200 dark:border-gray-700 animate-fade-in">
            <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">Resolução:</h3>
            <div className="space-y-3">
              <p className="font-mono text-gray-800 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-400">1.</span> v = v₀ + a·t = 0 + 3·10 = <strong>30 m/s</strong>
              </p>
              <p className="font-mono text-gray-800 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-400">2.</span> s = s₀ + v₀·t + (a·t²)/2 = 0 + 0 + (3·100)/2 = <strong>150 m</strong>
              </p>
            </div>
          </div>
        )}
        
      </section>
    </div>
  );
}

