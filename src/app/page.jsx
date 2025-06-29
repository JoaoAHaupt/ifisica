import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
      "
    >
      {/* Conteúdo principal */}
      <main className="row-start-2 flex flex-col items-center gap-8 sm:gap-10 max-w-4xl mx-auto">
        {/* Logo */}
        <Image
          src="/ifisica.png"
          alt="ifisica logo"
          width={500}
          height={500}
          priority
          className="mx-auto rounded-lg shadow-lg"
          sizes="(max-width: 768px) 100vw, 500px"
          quality={90}
        />

        {/* Lista com instruções */}
        <ol className="list-decimal list-inside text-center sm:text-left max-w-xl text-base sm:text-lg space-y-3 text-gray-700 dark:text-gray-300">
          <li>Explore simulações de queda livre, forças e energia.</li>
          <li>Aprenda conceitos passo a passo com visualizações.</li>
          <li>Teste seus conhecimentos com exercícios interativos.</li>
        </ol>

        {/* Botão de navegação para a seção Cinemática */}
        <Link
          href="/cinematica"
          className="
            inline-block 
            mt-6 
            px-8 py-3 
            bg-emerald-600 
            text-white 
            font-semibold 
            rounded-lg 
            shadow-md 
            hover:bg-emerald-700 
            transition 
            focus:outline-none 
            focus:ring-4 
            focus:ring-emerald-300 
            dark:focus:ring-emerald-500
          "
          aria-label="Ir para a página de Cinemática"
        >
          Ir para Cinemática
        </Link>
      </main>

      {/* Rodapé */}
      <footer className="row-start-3 text-center text-sm text-gray-500 dark:text-gray-400 mt-10 mb-6">
        <p>
          Feito com <span aria-label="coração" role="img">❤️</span> para estudantes por{" "}
          <a href="#" className="underline hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            Ifica
          </a>
        </p>
      </footer>
    </div>
  );
}

