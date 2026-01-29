type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string | null;
};

export function ProjectCard({
  title,
  description,
  image,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        bg-portfolio-card
        backdrop-blur-md
        rounded-2xl
        overflow-hidden
        flex flex-col
        border border-white/10
        shadow-lg shadow-black/20
        hover:-translate-y-1
        hover:shadow-xl
        transition-all duration-300
        text-portfolio-textLight
      "
    >
      {/* IMAGEM */}
      <div className=" h-80 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-90
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* overlay sutil */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* CONTEÚDO */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-sm text-portfolio-grayish leading-relaxed">
          {description}
        </p>

        <div className="flex gap-3 mt-auto pt-2">
          <a
            href={github}
            target="_blank"
            className="
              px-4 py-2 rounded-lg
              bg-portfolio-accent
              text-white
              font-medium
              hover:opacity-90
              transition
            "
          >
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              className="
                px-4 py-2 rounded-lg
                bg-portfolio-accent
                text-white
                font-medium
                hover:opacity-90
                transition
              "
            >
              Ver site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}