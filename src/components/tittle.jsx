"use client";
import Image from "next/image";
import Link from "next/link";

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90px] p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-emerald-100 dark:border-gray-700 m-0 mb-6">
      <header className="text-center">
        <Image
          src="/ifisica.png"
          alt="ifisica logo"
          width={110}
          height={110}
          priority
          className="mx-auto shadow-lg"
        />
<Link
  href="/cinematica"
  className="inline-block mt-6 px-6 py-2 text-white rounded-lg  hover:text-emerald-400 transition text-lg"
>
  Cinemática
</Link>
<Link
  href="/conservacao"
  className="inline-block mt-6 px-6 py-2 text-white rounded-lg  hover:text-emerald-400 transition text-lg"
>
  Conservação de energia
</Link>


      </header>
    </div>
  );
}

