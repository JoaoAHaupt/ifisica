"use client";
import { useState } from "react";
import { BlockMath, InlineMath } from 'react-katex';

const CircuitSimulator = () => {
    // Valores iniciais
    const [voltage, setVoltage] = useState(12);
    const [resistor1, setResistor1] = useState(4);
    const [resistor2, setResistor2] = useState(6);
    const [connectionType, setConnectionType] = useState('series');

    // Cálculos
    const equivalentResistance = connectionType === 'series'
        ? resistor1 + resistor2
        : 1 / (1/resistor1 + 1/resistor2);

    const totalCurrent = voltage / equivalentResistance;
    const powerResistor1 = totalCurrent ** 2 * resistor1;
    const powerResistor2 = totalCurrent ** 2 * resistor2;
    const totalPower = powerResistor1 + powerResistor2;

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-emerald-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-400">
                Simulador de Circuito Elétrico
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Controles */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Tensão da Fonte (V):
                            <input
                                type="range"
                                min="1"
                                max="24"
                                value={voltage}
                                onChange={(e) => setVoltage(parseFloat(e.target.value))}
                                className="w-full mt-2"
                            />
                            <span className="ml-2 font-mono">{voltage} V</span>
                        </label>
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Resistor 1 (Ω):
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="0.5"
                                value={resistor1}
                                onChange={(e) => setResistor1(parseFloat(e.target.value))}
                                className="w-full mt-2"
                            />
                            <span className="ml-2 font-mono">{resistor1} Ω</span>
                        </label>
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Resistor 2 (Ω):
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="0.5"
                                value={resistor2}
                                onChange={(e) => setResistor2(parseFloat(e.target.value))}
                                className="w-full mt-2"
                            />
                            <span className="ml-2 font-mono">{resistor2} Ω</span>
                        </label>
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Tipo de Conexão:
                            <select
                                value={connectionType}
                                onChange={(e) => setConnectionType(e.target.value)}
                                className="w-full mt-2 p-2 border rounded bg-white dark:bg-gray-700"
                            >
                                <option value="series">Série</option>
                                <option value="parallel">Paralelo</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* Visualização do circuito - VERSÃO CORRIGIDA */}
                <div className="flex flex-col items-center justify-center">
<div className="relative w-full h-48 mb-4 flex items-center justify-center">
    <div className="flex items-center space-x-4 relative">

        {/* Fonte de tensão */}
        <div className="w-14 h-20 border-2 border-gray-400 rounded flex flex-col items-center justify-center bg-white dark:bg-gray-700">
            <div className="text-xs font-bold">Fonte</div>
            <div className="text-sm font-mono">{voltage}V</div>
        </div>

        {/* Série */}
        {connectionType === 'series' ? (
            <>
                <div className="w-12 h-1 bg-gray-400" />
                <div className="w-12 h-20 border-2 border-gray-600 rounded flex items-center justify-center bg-white dark:bg-gray-600">
                    <span className="text-sm">R1</span>
                </div>
                <div className="w-12 h-1 bg-gray-400" />
                <div className="w-12 h-20 border-2 border-gray-600 rounded flex items-center justify-center bg-white dark:bg-gray-600">
                    <span className="text-sm">R2</span>
                </div>
                <div className="w-12 h-1 bg-gray-400" />
            </>
        ) : (
            // Paralelo
            <div className="flex items-center space-x-4">
                <div className="w-4 h-1 bg-gray-400" />
                <div className="flex flex-col justify-between h-28">
                    <div className="w-12 h-8 border-2 border-gray-600 rounded flex items-center justify-center bg-white dark:bg-gray-600">
                        <span className="text-xs">R1</span>
                    </div>
                    <div className="w-12 h-8 border-2 border-gray-600 rounded flex items-center justify-center bg-white dark:bg-gray-600">
                        <span className="text-xs">R2</span>
                    </div>
                </div>
                <div className="w-4 h-1 bg-gray-400" />
            </div>
        )}

        {/* Seta de corrente (opcional) */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-gray-500">
            →
        </div>
    </div>
</div>


                    {/* Fórmulas */}
                    <div className="bg-emerald-50 dark:bg-gray-700 p-3 rounded-lg text-sm w-full">
                        <p className="mb-1">
                            <InlineMath math={`R_{eq} = ${connectionType === 'series'
                                ? `${resistor1} + ${resistor2}`
                                : `\\frac{1}{\\frac{1}{${resistor1}} + \\frac{1}{${resistor2}}}`}`} />{" "}
                            = {equivalentResistance.toFixed(2)} Ω

                        </p>
                        <p className="mb-1">
                            <InlineMath math={`I = \\frac{V}{R_{eq}} = \\frac{${voltage}}{${equivalentResistance.toFixed(2)}}`} /> = {totalCurrent.toFixed(2)} A
                        </p>
                        <p>
                            <InlineMath math={`P_{total} = V \\times I = ${voltage} \\times ${totalCurrent.toFixed(2)}`} /> = {totalPower.toFixed(2)} W
                        </p>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold text-emerald-800 dark:text-emerald-300">Resistência Equivalente</h3>
                    <p className="text-2xl font-mono">{equivalentResistance.toFixed(2)} Ω</p>
                </div>
                <div className="bg-blue-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-800 dark:text-blue-300">Corrente Total</h3>
                    <p className="text-2xl font-mono">{totalCurrent.toFixed(2)} A</p>
                </div>
                <div className="bg-purple-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300">Potência Total</h3>
                    <p className="text-2xl font-mono">{totalPower.toFixed(2)} W</p>
                </div>
            </div>
        </div>
    );
};

export default CircuitSimulator;