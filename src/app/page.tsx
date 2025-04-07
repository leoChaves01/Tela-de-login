export default function HomePage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-background">
      <div className="form-container space-y-6">
        <h1 className="text-2xl font-bold">Bem-vindo ao Portal</h1>
        <p className="text-muted-foreground">
          Acesse sua conta ou registre-se para começar.
        </p>
        <div className="space-y-3">
          <a
            href="/portal/login"
            className="block w-full bg-black text-white text-center py-2 rounded-md font-semibold hover:bg-black/90 transition"
          >
            Entrar
          </a>
          <a
            href="/portal/cadastro"
            className="block w-full bg-white text-blue-600 border border-blue-600 text-center py-2 rounded-md font-semibold hover:bg-blue-50 transition"
          >
            Criar Conta
          </a>
        </div>
      </div>
    </main>
  );
}
