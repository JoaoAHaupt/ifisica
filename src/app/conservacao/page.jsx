"use client";
import Image from "next/image";
import { useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import Title from "@/components/tittle";
import Exercice from "@/components/exercice";
export default function LeisConservacao() {
  return (
    <div className="min-h-screen p-6 sm:p-12 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 font-sans w-full">
      <Title />

      <header className="mb-16 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-400 dark:to-emerald-500 mb-6">
          Leis da Conservação
        </h1>
        <div className="relative inline-block">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-emerald-100 dark:border-gray-700">
            As leis da conservação são princípios fundamentais da física que afirmam que certas quantidades permanecem constantes em processos naturais. Elas são essenciais para entender o comportamento da matéria e da energia no universo.
          </p>
          <div className="absolute -z-10 -inset-2 bg-green-200/40 dark:bg-green-900/40 blur-lg rounded-xl"></div>
        </div>
      </header>

      <main className="space-y-16 max-w-6xl mx-auto">

        {/* Origem e história */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            História e Origem
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            As leis da conservação surgiram a partir de observações experimentais feitas ao longo da história da física. No século XVII, com os trabalhos de Galileu e Newton, começou-se a compreender que certas grandezas se mantinham constantes em sistemas isolados. 
            <br /><br />
            No século XIX, cientistas como Émilie du Châtelet, Joule e Helmholtz ajudaram a formalizar a ideia da conservação da energia, mostrando que ela pode se transformar entre diferentes formas, mas nunca desaparecer.
            <br /><br />
            Hoje, conhecemos várias grandezas que são conservadas em processos físicos, como energia, quantidade de movimento, carga elétrica e até mesmo momento angular, sendo todas fundamentais para entender os fenômenos naturais.
          </p>
        </section>

{/* Tipos de energia */}
<section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
  <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-center">
    Tipos de Energia
  </h2>

  <ul className="space-y-8 text-lg text-gray-800 dark:text-gray-300">
    <li className="text-center">
      <strong>Energia Cinética:</strong> relacionada ao movimento de um corpo.
      <div className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
        <BlockMath math="E_{c} = \frac{m \cdot v^2}{2}" />
      </div>
    </li>

    <li className="text-center">
      <strong>Energia Potencial Gravitacional:</strong> relacionada à posição de um corpo em um campo gravitacional.
      <div className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
        <BlockMath math="E_{g} = m \cdot g \cdot h" />
      </div>
    </li>

    <li className="text-center">
      <strong>Energia Elástica:</strong> presente em objetos que podem ser deformados e retornar à forma original.
      <div className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
        <BlockMath math="E_{e} = \frac{k \cdot x^2}{2}" />
      </div>
    </li>

    <li className="text-center">
      <strong>Energia Térmica:</strong> associada à agitação das partículas de um corpo.
      <div className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
        <BlockMath math="Q = m \cdot c \cdot \Delta T" />
        <BlockMath math="Q = m \cdot L" />
      </div>
    </li>

    <li className="text-center">
      <strong>Energia Elétrica:</strong> relacionada ao movimento de cargas elétricas.
      <div className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto space-y-2">
        <BlockMath math="E = U \cdot q" />
        <BlockMath math="E = P \cdot t = U \cdot I \cdot t" />
      </div>
    </li>

    <li className="text-center">
      <strong>Energia Nuclear:</strong> liberada em processos que envolvem o núcleo atômico.
      <div className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
        <BlockMath math="E = m \cdot c^2" />
      </div>
    </li>
    
    
    <li className="text-center">
      <strong>Energia Química:</strong> armazenada nas ligações entre átomos e moléculas.
      <p className="mt-2 italic text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        (Depende das reações químicas específicas, sem fórmula geral única)
      </p>
    </li>
  </ul>
</section>


        {/* Conservação da Energia */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Conservação da Energia
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            A energia não pode ser criada nem destruída, apenas transformada. Em um sistema isolado, a energia total permanece constante.
          </p>
          <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto">
            <div className="text-lg sm:text-2xl">
              <BlockMath math="E_{mec\ total} = E_c + E_p = \text{constante}" />

            </div>
          </div>
        </section>

        {/* Conservação da Quantidade de Movimento */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Conservação da Quantidade de Movimento
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            Se nenhuma força externa atua sobre um sistema, a quantidade de movimento total permanece constante.
          </p>
          <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto">
            <div className="text-lg sm:text-2xl">
              <BlockMath math="\vec{p} = m \cdot \vec{v} \quad \Rightarrow \quad \sum \vec{p}_{inicial} = \sum \vec{p}_{final}" />
            </div>
          </div>
        </section>

        {/* Conservação da Carga Elétrica */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Conservação da Carga Elétrica
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            A carga elétrica total de um sistema isolado é sempre constante. As cargas podem ser transferidas entre corpos, mas nunca criadas ou destruídas.
          </p>
          <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto">
            <div className="text-lg sm:text-2xl">
              <BlockMath math="Q_{total\ antes} = Q_{total\ depois}" />
            </div>
          </div>
        </section>
        <Exercice/>
      </main>

      <footer className="mt-20 mb-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-emerald-100 dark:border-gray-700">
          <span className="text-gray-500 dark:text-gray-400">© 2025 Ifica</span>
          <span className="text-emerald-500 dark:text-emerald-400">—</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 font-medium">
            Entenda os princípios fundamentais da Física
          </span>
        </div>
      </footer>
    </div>
  );
}

