import Confetti from "./confetti";

async function getTotalContents() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
      {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(3000),
      },
    );
    if (!response.ok) return null;
    const header = response.headers.get("x-pagination-total-rows");
    if (header === null) return null;
    const total = Number(header);
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const total = await getTotalContents();

  return (
    <main>
      <Confetti />
      <h1>Em construção</h1>
      <p>
        Estamos neste exato momento reconstruindo o Tabnews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>
      <p className="total">
        {total !== null
          ? `${total.toLocaleString("pt-BR")} conteúdos publicados no TabNews`
          : "Não foi possível carregar o total de conteúdos publicados."}
      </p>
      <a href="https://www.tabnews.com.br">Acesse o TabNews oficial</a>
    </main>
  );
}
