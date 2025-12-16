export default function PeerReviewMedia() {
  const links = [
    { label: 'Interview', href: 'https://odia.tanarede.com.br/entrevista-com-paulo-fernandes-biao/' },
    { label: 'Feature Article', href: 'https://pautapop.faixacultural.com.br/2025/05/da-seguranca-eletronica-as-arquiteturas.html' },
    { label: 'Coverage', href: 'https://agenciainforma.app.br/os-bastidores-da-seguranca-bancaria-como-paulo-fernandes-biao-atuou-em-sistemas-que-protegem-operacoes-financeiras-de-grande-porte/' },
  ]

  return (
    <section className="mt-10 md:mt-14">
      <div className="max-w-5xl rounded-2xl border border-slate-800 bg-slate-950/50 p-6 md:p-8">
        <h3 className="text-xl font-semibold text-slate-50 mb-2">
          Selected Media Coverage & Interview
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          The following publications reflect public and industry interest in applied cybersecurity
          work related to financial systems and critical infrastructure. They complement — but do
          not replace — the formal evaluation methodologies described above.
        </p>

        <ul className="space-y-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
