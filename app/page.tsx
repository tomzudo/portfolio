import { projects } from "./data/projects"; 
import { ProjectCard } from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ================= HERO ================= */}
      <section className="relative bg-portfolio-hero px-6 py-32 overflow-hidden">

        {/* OVERLAY TRANSLÚCIDO */}
        <div className="absolute inset-0 bg-black/1"></div>

        {/* GRADIENTE SUAVE */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-6xl mx-auto flex justify-center">
          <div
            className="
              w-full max-w-md
              rounded-3xl
              bg-white/5
              backdrop-blur-md
              border border-white/5
              shadow-xl shadow-black/20
              p-12
              flex flex-col items-center gap-6
              text-center
              text-portfolio-textLight
              transition-all duration-300
            "
          >
            <img
              src="https://avatars.githubusercontent.com/u/208907254?s=400"
              alt="Tom"
              className="w-32 h-32 rounded-full object-cover border border-portfolio-accent"
            />

            <h1 className="text-3xl font-bold text-white">Tom</h1>

            <p className="text-white/80 leading-relaxed">
              Desenvolvedor focado em criar aplicações web modernas,
              com atenção à desorganização e ao código bem estruturado.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                className="
                  px-6 py-3 rounded-xl
                  bg-white/85
                  text-portfolio-textLight
                  font-semibold
                  hover:opacity-90
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="#about"
                className="
                  px-6 py-3 rounded-xl
                  border border-white/20
                  text-white
                  hover:bg-white/5
                  transition
                "
              >
                Sobre
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="bg-portfolio-background px-6 py-10"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-portfolio-surface mb-16">
            Sobre mim
          </h2>

          <div className="flex items-center gap-10">

            <div className="shrink-0">
              <img
                src="https://avatars.githubusercontent.com/u/208907254?s=400"
                alt="Tom"
                className="
                  w-20 h-20
                  rounded-full
                  object-cover
                  shadow-lg
                "
              />
            </div>

            <div
              className="
                relative
                bg-white/70
                rounded-2xl
                p-8
                flex flex-col gap-6
                border border-white/10
                shadow-lg shadow-black/30
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300
              "
            >
              <span
                className="
                  absolute
                  -left-3
                  top-10
                  w-6 h-6
                  bg-white/40
                  rotate-45
                  shadow-lg
                "
              />

              <p className="text-portfolio-grayish leading-relaxed">
                Apaixonado por tecnologia, ingressei na área de desenvolvimento em 2023.
                Atualmente, curso Análise e Desenvolvimento de Sistemas (ADS) e atuo como
                estagiário em Backend.
              </p>

              <p className="text-portfolio-grayish leading-relaxed">
                Estou sempre em busca de oferecer as melhores experiências
                em meus projetos e serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projetos"
        className="bg-portfolio-background px-6 py-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-portfolio-surface">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                github={project.github}
                live={project.live} 
                image={project.image}              
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-portfolio-hero py-6 text-center">
        <p className="text-sm text-white/60">
          2026 © Desenvolvido por Erivelton Araújo
        </p>
      </footer>

    </main>
  );
}