import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col items-center gap-8">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-xl font-semibold">Welcome to My Next.js App!</h1>
        <p className="text-center">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            src/app/page.tsx
          </code>
          .
        </p>
      </main>
      <footer className="flex gap-6 mt-8">
        <a
          className="rounded-full bg-blue-600 text-white py-2 px-4"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy Now
        </a>
        <a
          className="rounded-full bg-gray-200 hover:bg-gray-300 py-2 px-4"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Docs
        </a>
      </footer>
    </div>
  );
}
