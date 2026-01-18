

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <span className="text-sm text-slate-400">
            Último acesso: agora pouco
          </span>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-900/70 p-4 border border-slate-800">
            <h2 className="text-sm font-medium text-slate-400">
              Usuários ativos
            </h2>
            <p className="mt-2 text-2xl font-semibold">12</p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-4 border border-slate-800">
            <h2 className="text-sm font-medium text-slate-400">
              Novos cadastros
            </h2>
            <p className="mt-2 text-2xl font-semibold">3</p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-4 border border-slate-800">
            <h2 className="text-sm font-medium text-slate-400">
              Notificações
            </h2>
            <p className="mt-2 text-2xl font-semibold">5</p>
          </div>
        </section>
      </div>
    </main>
  );
}
