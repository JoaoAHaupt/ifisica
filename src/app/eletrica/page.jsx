"use client";
import { useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import Title from "@/app/components/tittle";
import Exercice from "@/app/components/exercice";
import CircuitSimulator from "@/app/components/circuit";

const exercises = [
    {
        question: `Qual é a resistência equivalente de dois resistores de 6 Ω e 3 Ω ligados em série?`,
        options: [
            "A) 2 Ω",
            "B) 9 Ω",
            "C) 18 Ω",
            "D) 1.5 Ω"
        ],
        solution: `
Em série, a resistência equivalente é a soma das resistências individuais:

R_{eq} = R_1 + R_2 = 6\, \Omega + 3\, \Omega = 9\, \Omega

Resposta correta: B) 9 Ω
    `,
    },
    {
        question: `Dois resistores de 4 Ω e 12 Ω estão ligados em paralelo. Qual a resistência equivalente?`,
        options: [],
        solution: `
Para resistores em paralelo, o inverso da resistência equivalente é a soma dos inversos:

\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{4\, \Omega} + \frac{1}{12\, \Omega} = \frac{3}{12} + \frac{1}{12} = \frac{4}{12}

Portanto:

R_{eq} = \frac{12}{4} = 3\, \Omega
    `,
    },
    {
        question: `Um circuito possui uma bateria de 12 V ligada a um resistor de 6 Ω. Qual é a corrente que passa pelo resistor?`,
        options: [],
        solution: `
Usando a Lei de Ohm, que relaciona tensão (V), corrente (I) e resistência (R):

I = \frac{V}{R} = \frac{12\, V}{6\, \Omega} = 2\, A
    `,
    },
    {
        question: `Explique o que acontece com a corrente em um circuito quando a resistência aumenta, considerando uma tensão constante.`,
        options: [],
        solution: `
De acordo com a Lei de Ohm (I = V / R), mantendo a tensão constante, se a resistência aumenta, a corrente diminui.

Isso acontece porque a resistência oferece maior oposição à passagem da carga elétrica, reduzindo o fluxo de elétrons no circuito.
    `,
    },
    {
        question: `Calcule a potência dissipada por um resistor de 10 Ω por onde passa uma corrente de 3 A.`,
        options: [],
        solution: `
A potência dissipada pelo resistor é dada por:

P = R \cdot I^2 = 10\, \Omega \times (3\, A)^2 = 10 \times 9 = 90\, W
    `,
    },
];

export default function EletricidadeBasica() {
    return (
        <div className="min-h-screen p-6 sm:p-12 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 font-sans w-full">
            <Title />

            <header className="mb-16 text-center animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-400 dark:to-emerald-500 mb-6">
                    Eletricidade Básica
                </h1>
                <div className="relative inline-block">
                    <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-emerald-100 dark:border-gray-700">
                        A eletricidade é uma forma de energia fundamental no nosso cotidiano, baseada no movimento de cargas elétricas. Aqui exploramos os conceitos fundamentais como resistência, corrente, tensão, potência e o comportamento de circuitos simples, com explicações detalhadas para facilitar o entendimento.
                    </p>
                    <div className="absolute -z-10 -inset-2 bg-green-200/40 dark:bg-green-900/40 blur-lg rounded-xl"></div>
                </div>
            </header>

            <main className="space-y-16 max-w-6xl mx-auto">

                {/* Conceitos Básicos */}
                <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
                    <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                        Conceitos Básicos
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        A corrente elétrica (<em>I</em>) representa o fluxo ordenado de cargas elétricas, medida em amperes (A). A tensão (<em>V</em>) é a diferença de potencial elétrico entre dois pontos, que impulsiona as cargas a se moverem, medida em volts (V). A resistência (<em>R</em>) é a oposição que um material oferece à passagem da corrente, medida em ohms (Ω).
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-300">
                        Essas grandezas estão relacionadas pela Lei de Ohm:
                    </p>
                    <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md mx-auto my-6">
                        <BlockMath math="V = I \cdot R" />
                    </div>
                </section>

                {/* Resistência em série e paralelo */}
                <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
                    <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                        Resistência em Série e Paralelo
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Quando resistores são ligados em <strong>série</strong>, a resistência total é a soma direta das resistências individuais:
                    </p>
                    <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md mx-auto mb-6">
                        <BlockMath math="R_{eq} = R_1 + R_2 + \cdots + R_n" />
                    </div>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Já em <strong>paralelo</strong>, o inverso da resistência equivalente é igual à soma dos inversos das resistências:
                    </p>
                    <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md mx-auto">
                        <BlockMath math="\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}" />
                    </div>
                </section>

                {/* Potência elétrica */}
                <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
                    <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                        Potência Elétrica
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        A potência elétrica (<em>P</em>) indica a taxa de consumo ou transformação de energia em um circuito, medida em watts (W). Ela pode ser calculada por diversas fórmulas, dependendo das grandezas disponíveis:
                    </p>
                    <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md mx-auto">
                        <BlockMath math="P = V \cdot I = R \cdot I^2 = \frac{V^2}{R}" />
                    </div>
                </section>
                {/* Geradores e Capacitadores */}
                <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
                    <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                        Geradores e Capacitadores
                    </h2>

                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400">
                        Geradores Elétricos
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Geradores são dispositivos que convertem diferentes formas de energia em energia elétrica, fornecendo uma diferença de potencial (tensão) que pode alimentar circuitos elétricos.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Os geradores produzem uma força eletromotriz (f.e.m.) que mantém o fluxo contínuo de cargas no circuito, essencial para o funcionamento de aparelhos elétricos.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Exemplos comuns incluem baterias químicas, geradores mecânicos (dinamos) e células solares.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400">
                        Capacitores
                    </h3>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Capacitores (ou capacitadores) são componentes que armazenam energia elétrica na forma de um campo elétrico entre duas placas condutoras separadas por um material isolante chamado dielétrico.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        A capacidade de um capacitor é medida em farads (F) e indica quanta carga elétrica ele pode armazenar para uma dada diferença de potencial.
                    </p>
                    <div className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md mx-auto mb-6">
                        <BlockMath math="C = \frac{Q}{V}" />
                    </div>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Onde:
                        <br />
                        <strong>C</strong> = capacitância (farads, F) <br />
                        <strong>Q</strong> = carga armazenada (coulombs, C) <br />
                        <strong>V</strong> = diferença de potencial (volts, V)
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                        Capacitores são amplamente usados em circuitos para filtrar sinais, armazenar energia temporariamente e controlar temporizações.
                    </p>
                </section>

                {/* Exercícios */}
                {/* Simulador Interativo */}
                <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
                    <CircuitSimulator />
                </section>
                <Exercice exercises={exercises} />
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
