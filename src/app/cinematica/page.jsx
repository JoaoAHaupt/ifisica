"use client"
import Image from "next/image";
import { useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import Exercice from '../../components/exercice.jsx';
import Graphic from "@/components/graphic";
import Title from "@/components/tittle";
export default function Cinematica() {
  const [activeTab, setActiveTab] = useState("mru");
  const [showSolution, setShowSolution] = useState(false);
  const [velocity, setVelocity] = useState(0);
  
  return (
  
    <div className="min-h-screen p-6 sm:p-12 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 font-sans w-full">
        <Title/>    
      {/* Header com animação */}
      <header className="mb-16 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700 dark:from-emerald-400 dark:to-green-500 mb-6">
          Cinemática
        </h1>
        <div className="relative inline-block">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-emerald-100 dark:border-gray-700">
            Estudo do movimento dos corpos sem analisar as causas que o provocam. 
            Aqui você aprenderá os conceitos básicos para entender como e por que os objetos se movem.
          </p>
          <div className="absolute -z-10 -inset-2 bg-emerald-200/40 dark:bg-green-900/40 blur-lg rounded-xl"></div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="space-y-16 max-w-6xl mx-auto">

        {/* Seção 1: O que é cinemática */}
<section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700 transition-all hover:shadow-2xl hover:-translate-y-1 mt-8">
  <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">
    História da Cinemática
  </h2>
  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    O estudo do movimento dos corpos tem raízes na antiguidade, onde filósofos como Aristóteles buscavam entender e descrever como e por que os objetos se movem. No entanto, suas explicações eram baseadas mais em observações intuitivas do que em experimentos precisos.
    <br /><br />
    No século XVII, o cientista italiano Galileu Galilei revolucionou essa área ao realizar experimentos controlados e desenvolver conceitos matemáticos para descrever o movimento. Ele foi o primeiro a afirmar que objetos em queda livre aceleram a uma taxa constante, independentemente de sua massa uma ideia fundamental para a cinemática.
    <br /><br />
    Pouco depois, Isaac Newton formulou as leis do movimento e da gravitação universal, unificando o estudo do movimento com as causas que o provocam, como forças e massas. Com isso, a cinemática tornou-se parte da mecânica clássica, servindo como base para a física moderna.
    <br /><br />
    Hoje, a cinemática é uma ferramenta essencial não apenas na física, mas também na engenharia, robótica, animação e muitas outras áreas, permitindo a descrição precisa de trajetórias, velocidades e acelerações de objetos em movimento.
    <br /><br />
    Nesta apresentação, estudaremos uma versão simplificada da cinemática focada em entender como os objetos se movem no espaço e no tempo, sem entrar nas causas desse movimento um passo fundamental para avançar no estudo da física.
  </p>
</section>



	<section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700 transition-all hover:shadow-2xl hover:-translate-y-1">
	  <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">
	    Grandezas Fundamentais
	  </h2>
	  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
	    <li className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-xl border-l-4 border-green-500">
	      <div className="flex items-center justify-between mb-2">
		<h3 className="font-bold text-green-700 dark:text-green-400">Deslocamento (Δs)</h3>

		<div className="text-gray-700 dark:text-gray-300 italic text-xs ml-2">m</div>
	      </div>
	      <p className="text-gray-700 dark:text-gray-300">Mudança na posição entre dois instantes.</p>
	    </li>
	    <li className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-xl border-l-4 border-emerald-500">
	      <div className="flex items-center justify-between mb-2">
		<h3 className="font-bold text-emerald-700 dark:text-emerald-400">Tempo (t)</h3>
		<div className="text-gray-700 dark:text-gray-300 italic text-xs ml-2">
		  <BlockMath math="s" />
		</div>
	      </div>
	      <p className="text-gray-700 dark:text-gray-300">Tempo do movimento.</p>
	    </li>
	    <li className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-xl border-l-4 border-green-500">
	      <div className="flex items-center justify-between mb-2">
		<h3 className="font-bold text-green-700 dark:text-green-400">Aceleração (a)</h3>
		<div className="text-gray-700 dark:text-gray-300 italic text-xs ml-2">
		  <BlockMath math="\frac {m}{s^2}" />
		</div>
	      </div>
	      <p className="text-gray-700 dark:text-gray-300">Como a velocidade muda ao longo do tempo.</p>
	    </li>
	    <li className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-xl border-l-4 border-emerald-500">
	      <div className="flex items-center justify-between mb-2">
		<h3 className="font-bold text-emerald-700 dark:text-emerald-400">Velocidade (v)</h3>
		<div className="text-gray-700 dark:text-gray-300 italic text-xs ml-2">
		  <BlockMath math="\frac {m}{s}" />
		</div>
	      </div>
	      <p className="text-gray-700 dark:text-gray-300">Quão rápido e em que direção o corpo se move.</p>
	    </li>
	  </ul>
	</section>

        {/* Seção 3: Tipos de movimento com abas */}
        <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-emerald-100 dark:border-gray-700">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("mru")}
              className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${activeTab === "mru" ? "text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500" : "text-gray-500 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-gray-800"}`}
            >
              MRU
            </button>
            <button
              onClick={() => setActiveTab("mruv")}
              className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${activeTab === "mruv" ? "text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500" : "text-gray-500 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-gray-800"}`}
            >
              MRUV
            </button>
            <button
              onClick={() => setActiveTab("circular")}
              className={`flex-1 py-4 px-6 font-medium text-center transition-colors ${activeTab === "circular" ? "text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-500" : "text-gray-500 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-gray-800"}`}
            >
              Circular
            </button>
          </div>
          <div className="p-8">
            {activeTab === "mru" && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Movimento Retilíneo Uniforme (MRU)</h3>
                <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                  O objeto se move em linha reta com velocidade constante. Não há aceleração atuando sobre o corpo.
                </p>
                <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700">
                  <p className="font-mono text-lg"><strong>Fórmulas:</strong></p>
                <div className="text-2xl">
                  <BlockMath math="s = s_0 + v \cdot t"/>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "mruv" && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Movimento Retilíneo Uniformemente Variado (MRUV)</h3>
                <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                  O objeto se move em linha reta com aceleração constante. A velocidade varia uniformemente com o tempo.
                </p>
                <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700">
                  <p className="font-mono text-lg"><strong>Fórmulas:</strong></p>
		  <div className="text-2xl">
		   <BlockMath math="a= \frac{\Delta V}{\Delta t}" />
		   <BlockMath math="v = v_0 + a \cdot t" />
		   <BlockMath math="v^2 = v_0^2 + 2 \cdot a \cdot {\Delta s}" />
		    <BlockMath math="s = s_0 + v_0 \cdot t + \frac{a \cdot t^2}{2}" />
		  </div>
		  <p className="font-mono"></p>
                </div>
              </div>
            )}
            {activeTab === "circular" && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">Movimento Circular</h3>
                <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                  O objeto se move numa trajetória circular, podendo ter velocidade e aceleração variáveis. Pode ser uniforme ou acelerado.
                </p>
                <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700">
                  <p className="font-mono text-lg"><strong>Fórmulas:</strong></p>
                <div className="text-2xl">
                  <BlockMath math="\omega = \frac{\Delta \theta}{\Delta t} = \frac{2 \cdot \pi}{T} = {2 \cdot \pi \cdot f} \quad \text{(definição geral)}" />
      		  <BlockMath math="\alpha = \frac{\Delta \omega}{\Delta t} \quad \text{(aceleração angular)}" />
      		  </div>
                </div>
              </div>
            )}

                  

          </div>
                  <section className="flex justify-center">
          <div className="relative w-full max-w-2xl h-64 md:h-80 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl overflow-hidden border border-emerald-200 dark:border-gray-700 flex items-center justify-center mb-7">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-emerald-500 animate-spin-slow"></div>
              <div className="absolute w-24 h-24 rounded-full bg-emerald-500/20 animate-pulse"></div>
            </div>
            <div className="relative z-10 text-center p-6">
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">Movimento em Física</h3>
              <p className="text-emerald-600 dark:text-emerald-200">Ilustração de conceitos cinemáticos</p>
            </div>
          </div>
        </section>
        </section>
        <Graphic/>

        <Exercice/>

      </main>


     
      
      <footer className="mt-20 mb-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-emerald-100 dark:border-gray-700">
          <span className="text-gray-500 dark:text-gray-400">© 2025 Ifica</span>
          <span className="text-emerald-500 dark:text-emerald-400">—</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 font-medium">
            Aprenda Física com interatividade e diversão
          </span>
        </div>
      </footer>
    </div>
  );
}
