import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      <Link
        href="/dashboard"
        className="inline-block rounded bg-blue-600 px-4 py-2 text-white">
        Ir para o dashboard
      </Link>
    </main>
  );
}