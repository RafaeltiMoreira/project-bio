export default function ProjectCard() {
  return (
    <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img src="/project1.jpg" alt="1º Projeto" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">10 cliques</span>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl">1º Projeto</span>
          <span className="text-content-body text-sm">
            Descrição detalhada do que é o projeto desenvolvido.
          </span>
        </div>
      </div>
    </div>
  )
}