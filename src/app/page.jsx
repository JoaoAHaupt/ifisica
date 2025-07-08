import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
    return (
        <>
            <div
                className="
          grid
          grid-rows-[auto_1fr_auto]
          min-h-screen
          gap-16
          font-sans
          bg-gradient-to-b from-white to-blue-50
          dark:from-gray-900 dark:to-gray-800
          text-gray-900 dark:text-gray-100
          px-4 sm:px-8 lg:px-16
          transition-colors duration-500
        "
            >
                {/* Conteúdo principal */}
                <main className="row-start-2 flex flex-col items-center gap-8 sm:gap-10 max-w-4xl mx-auto">
                    {/* Logo com sombra e hover zoom */}
                    <div className="group relative overflow-hidden rounded-lg shadow-2xl hover:shadow-emerald-500/50 transition-shadow duration-500 cursor-pointer">
                        <Image
                            src="/ifisica.png"
                            alt="ifisica logo"
                            width={500}
                            height={500}
                            priority
                            className="transform transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 500px"
                            quality={90}
                        />
                    </div>

                    {/* Lista com instruções */}
                    <ol className="list-decimal list-inside text-center sm:text-left max-w-xl text-base sm:text-lg space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed select-none">
                        <li className="hover:text-emerald-600 transition-colors duration-300 cursor-default">
                            Explore simulações de queda livre, forças e energia.
                        </li>
                        <li className="hover:text-emerald-600 transition-colors duration-300 cursor-default">
                            Aprenda conceitos passo a passo com visualizações.
                        </li>
                        <li className="hover:text-emerald-600 transition-colors duration-300 cursor-default">
                            Teste seus conhecimentos com exercícios interativos.
                        </li>
                    </ol>

                    {/* Botão de navegação para a seção Cinemática */}
                    <Link
                        href="/cinematica"
                        className="
              inline-block
              mt-6
              px-10 py-3
              bg-emerald-600
              text-white
              font-semibold
              rounded-lg
              shadow-lg
              hover:bg-emerald-700
              focus:outline-none
              focus:ring-4
              focus:ring-emerald-300
              dark:focus:ring-emerald-500
              transition
              duration-300
              transform
              hover:-translate-y-1 hover:scale-105
              active:translate-y-0 active:scale-100
              select-none
              cursor-pointer
            "
                        aria-label="Ir para a página de Cinemática"
                    >
                        Ir para Cinemática
                    </Link>
                    <Link
                        href="/conservacao"
                        className="
              inline-block
              mt-6
              px-10 py-3
              bg-emerald-600
              text-white
              font-semibold
              rounded-lg
              shadow-lg
              hover:bg-emerald-700
              focus:outline-none
              focus:ring-4
              focus:ring-emerald-300
              dark:focus:ring-emerald-500
              transition
              duration-300
              transform
              hover:-translate-y-1 hover:scale-105
              active:translate-y-0 active:scale-100
              select-none
              cursor-pointer
            "
                        aria-label="Ir para a página de Cinemática"
                    >
                        Ir para Energia
                    </Link>
                     <Link
                                            href="/eletrica"
                                            className="
                                  inline-block
                                  mt-6
                                  px-10 py-3
                                  bg-emerald-600
                                  text-white
                                  font-semibold
                                  rounded-lg
                                  shadow-lg
                                  hover:bg-emerald-700
                                  focus:outline-none
                                  focus:ring-4
                                  focus:ring-emerald-300
                                  dark:focus:ring-emerald-500
                                  transition
                                  duration-300
                                  transform
                                  hover:-translate-y-1 hover:scale-105
                                  active:translate-y-0 active:scale-100
                                  select-none
                                  cursor-pointer
                                "
                                            aria-label="Ir para a página de Eletrica"
                                        >
                                            Ir para Energia
                                        </Link>
                </main>

                {/* Rodapé com efeito pulse no coração */}
                <footer className="row-start-3 text-center text-sm text-gray-500 dark:text-gray-400 mt-10 mb-6 select-none">
                    <p>
                        Feito com{" "}
                        <span
                            aria-label="coração"
                            role="img"
                            className="inline-block animate-pulse text-red-500"
                        >
              ❤️
            </span>{" "}
                        para estudantes por{" "}
                        <a
                            href="#"
                            className="underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                        >
                            Ifica
                        </a>
                    </p>
                </footer>
            </div>
        </>
    );
}
