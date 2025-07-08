"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import Title from "@/app/components/tittle";
import Exercice from "@/app/components/exercice";

const exercises = [
  {
    question: `Um patinador gira com momento de inércia I₁ e velocidade angular ω₁. Ao aproximar os braços, seu momento de inércia muda para I₂. Qual a nova velocidade angular ω₂?`,
    options: [],
    solution: `
Usando a conservação do momento angular:

L₁ = L₂
I₁ * ω₁ = I₂ * ω₂
=> ω₂ = (I₁ / I₂) * ω₁
`,
  },
  {
    question: `Dois carrinhos de massas m₁ = 2 kg e m₂ = 3 kg colidem frontalmente com velocidades v₁ = 4 m/s e v₂ = -2 m/s. Qual é a velocidade final dos carrinhos após uma colisão perfeitamente inelástica?`,
    options: [],
    solution: `
Na colisão perfeitamente inelástica, os carrinhos grudam-se e a velocidade final é dada por:

v_f = (m₁ * v₁ + m₂ * v₂) / (m₁ + m₂) = (2*4 + 3*(-2)) / (5) = (8 - 6)/5 = 0.4 m/s
`,
  },
  {
    question: `Explique por que a energia cinética total não é conservada em uma colisão inelástica, mas a quantidade de movimento é.`,
    options: [],
    solution: `
Porque durante a colisão inelástica parte da energia cinética é transformada em outras formas de energia (calor, som, deformação), enquanto a quantidade de movimento, que depende da massa e velocidade, é conservada pela terceira lei de Newton e pela ausência de forças externas.
`,
  },
  {
    question: `Um objeto de massa 5 kg se move com velocidade de 10 m/s. Qual é sua energia cinética?`,
    options: [
      "A) 250 J",
      "B) 125 J",
      "C) 50 J",
      "D) 500 J"
    ],
    solution: `
E_c = (m * v²) / 2 = (5 * 100) / 2 = 250 J
Resposta correta: A) 250 J
`,
  },
  {
    question: `Um capacitor armazena energia elétrica dada por E = 1/2 * C * V². Se a capacitância é 2 μF e a tensão aplicada é 5 V, qual a energia armazenada?`,
    options: [],
    solution: `
E = 1/2 * C * V² = 0.5 * 2e-6 * 25 = 25e-6 J = 25 μJ
`,
  },
];


export default function LeisConservacao() {
    const [inertia, setInertia] = useState(50);
    const [angularVelocity, setAngularVelocity] = useState(2);
    const [rotation, setRotation] = useState(0);
    const [armsAngle, setArmsAngle] = useState(55); // Ângulo dos braços

    const initialInertia = 80;
    const initialAngularVelocity = 1.25;

    // Animação de rotação
    useEffect(() => {
      const animationFrame = requestAnimationFrame(() => {
        setRotation(prev => prev + angularVelocity * 2);
      });
      return () => cancelAnimationFrame(animationFrame);
    }, [rotation, angularVelocity]);
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
{/* Simulação Interativa - Conservação do Momento Angular */}

        {/* Origem e história */}
        <section
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            História e Origem
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            As leis da conservação surgiram a partir de observações experimentais feitas ao longo da história da física.
            No século XVII, com os trabalhos de Galileu e Newton, começou-se a compreender que certas grandezas se
            mantinham constantes em sistemas isolados.
            <br/><br/>
            No século XIX, cientistas como Émilie du Châtelet, Joule e Helmholtz ajudaram a formalizar a ideia da
            conservação da energia, mostrando que ela pode se transformar entre diferentes formas, mas nunca
            desaparecer.
            <br/><br/>
            Hoje, conhecemos várias grandezas que são conservadas em processos físicos, como energia, quantidade de
            movimento, carga elétrica e até mesmo momento angular, sendo todas fundamentais para entender os fenômenos
            naturais.
          </p>
        </section>

        {/* Tipos de energia */}
        <section
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 text-center">
            Tipos de Energia
          </h2>

          <ul className="space-y-8 text-lg text-gray-800 dark:text-gray-300">
            <li className="text-center">
              <strong>Energia Cinética:</strong> relacionada ao movimento de um corpo.
              <div
                  className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
                <BlockMath math="E_{c} = \frac{m \cdot v^2}{2}"/>
              </div>
            </li>

            <li className="text-center">
              <strong>Energia Potencial Gravitacional:</strong> relacionada à posição de um corpo em um campo
              gravitacional.
              <div
                  className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
                <BlockMath math="E_{g} = m \cdot g \cdot h"/>
              </div>
            </li>

            <li className="text-center">
              <strong>Energia Elástica:</strong> presente em objetos que podem ser deformados e retornar à forma
              original.
              <div
                  className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
                <BlockMath math="E_{e} = \frac{k \cdot x^2}{2}"/>
              </div>
            </li>

            <li className="text-center">
              <strong>Energia Térmica:</strong> associada à agitação das partículas de um corpo.
              <div
                  className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
                <BlockMath math="Q = m \cdot c \cdot \Delta T"/>
                <BlockMath math="Q = m \cdot L"/>
              </div>
            </li>

            <li className="text-center">
              <strong>Energia Elétrica:</strong> relacionada ao movimento de cargas elétricas.
              <div
                  className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto space-y-2">
                <BlockMath math="E = U \cdot q"/>
                <BlockMath math="E = P \cdot t = U \cdot I \cdot t"/>
              </div>
            </li>

            <li className="text-center">
              <strong>Energia Nuclear:</strong> liberada em processos que envolvem o núcleo atômico.
              <div
                  className="bg-emerald-50 dark:bg-gray-800 mt-2 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto max-w-md w-full mx-auto">
                <BlockMath math="E = m \cdot c^2"/>
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
        <section
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Conservação da Energia
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            A energia não pode ser criada nem destruída, apenas transformada. Em um sistema isolado, a energia total
            permanece constante.
          </p>
          <div
              className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto">
            <div className="text-lg sm:text-2xl">
              <BlockMath math="E_{mec\ total} = E_c + E_p = \text{constante}"/>

            </div>
          </div>
        </section>

        {/* Conservação da Quantidade de Movimento */}
        <section
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Conservação da Quantidade de Movimento
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            Se nenhuma força externa atua sobre um sistema, a quantidade de movimento total permanece constante.
          </p>
          <div
              className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto">
            <div className="text-lg sm:text-2xl">
              <BlockMath
                  math="\vec{p} = m \cdot \vec{v} \quad \Rightarrow \quad \sum \vec{p}_{inicial} = \sum \vec{p}_{final}"/>
            </div>
          </div>
        </section>

        {/* Conservação da Carga Elétrica */}
        <section
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Conservação da Carga Elétrica
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            A carga elétrica total de um sistema isolado é sempre constante. As cargas podem ser transferidas entre
            corpos, mas nunca criadas ou destruídas.
          </p>
          <div
              className="bg-emerald-50 dark:bg-gray-800 p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto">
            <div className="text-lg sm:text-2xl">
              <BlockMath math="Q_{total\ antes} = Q_{total\ depois}"/>
            </div>
          </div>
        </section>

        <section
            className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700"
        >
          <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            E se não houvesse dissipação de energia?
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            Imagine um mundo onde a energia nunca se dissipa ou se perde — ou seja, onde não existissem atrito,
            resistência do ar, ou qualquer processo que converta energia mecânica em calor ou outras formas não úteis.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            Nesse mundo ideal, tudo que colocássemos em movimento continuaria para sempre, sem nunca parar. Uma bola
            rolando sobre uma superfície continuaria indefinidamente, um pêndulo balançaria eternamente, e as máquinas
            funcionariam sem precisar de combustível.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
            Porém, essa ausência de dissipação também traria desafios: por exemplo, seria impossível dissipar calor,
            dificultando o controle de temperaturas; além disso, muitos processos naturais que dependem da transformação
            e dispersão de energia não aconteceriam da forma que conhecemos.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            Por isso, a dissipação de energia, apesar de parecer uma “perda”, é fundamental para o equilíbrio e
            funcionamento do mundo real.
          </p>
        </section>
  {/* Simulação Interativa - Conservação do Momento Angular (Responsivo) */}
  <section className="bg-white dark:bg-gray-900 p-4 sm:p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
      Simulação: Conservação do Momento Angular
    </h2>

    <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-center">
      {/* Container da animação */}
      <div className="w-full lg:flex-1">
        <div className="relative w-full h-48 sm:h-64 bg-emerald-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-emerald-200 dark:border-gray-700">
          {/* Patinador */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            style={{
              width: `clamp(60px, ${100 - inertia * 0.8}px, 120px)`,
              height: `clamp(60px, ${100 - inertia * 0.8}px, 120px)`,
              borderRadius: '50%',
              backgroundColor: '#10b981',
              border: '4px solid #047857',
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              transformOrigin: 'center'
            }}
          >
            {/* Braços */}
            <div
              className="absolute top-1/2 left-1/2 w-1 h-12 sm:h-16 bg-amber-600 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${armsAngle}deg)`,
                transformOrigin: 'top center'
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-1 h-12 sm:h-16 bg-amber-600 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${-armsAngle}deg)`,
                transformOrigin: 'top center'
              }}
            />
          </div>
        </div>
      </div>

      {/* Controles e informações */}
      <div className="w-full lg:flex-1 space-y-4 sm:space-y-6">
        <div>
          <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
            Momento de Inércia: {inertia.toFixed(1)}
          </label>
          <input
            type="range"
            min="10"
            max="90"
            value={inertia}
            onChange={(e) => {
              setInertia(Number(e.target.value));
              const newAngularVelocity = (initialInertia * initialAngularVelocity) / Number(e.target.value);
              setAngularVelocity(newAngularVelocity);
              setArmsAngle(20 + (90 - Number(e.target.value)) * 0.7);
            }}
            className="w-full h-2 bg-emerald-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            <span>Braços fechados</span>
            <span>Braços abertos</span>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-emerald-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Velocidade Angular</p>
              <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">
                {angularVelocity.toFixed(2)} rad/s
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Momento Angular</p>
              <p className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">
                {(inertia * angularVelocity).toFixed(2)} kg·m²/s
              </p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-emerald-200 dark:border-gray-700 overflow-x-auto">
          <div className="text-sm sm:text-base">
            <BlockMath math={`L = I \\cdot \\omega = ${inertia.toFixed(1)} \\cdot ${angularVelocity.toFixed(2)} = ${(inertia * angularVelocity).toFixed(2)} \\, \\text{kg·m²/s}`} />
          </div>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Quando o patinador fecha os braços (reduzindo I), ω aumenta para conservar L.
          </p>
        </div>
      </div>
    </div>
  </section>

        <Exercice exercises={exercises}/>
      </main>

      <footer className="mt-20 mb-10 text-center">
        <div
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-emerald-100 dark:border-gray-700">
          <span className="text-gray-500 dark:text-gray-400">© 2025 Ifica</span>
          <span className="text-emerald-500 dark:text-emerald-400">—</span>
          <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 font-medium">
            Entenda os princípios fundamentais da Física
          </span>
        </div>
      </footer>
    </div>
  );
}

