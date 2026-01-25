type ProjectCardProps = {
  title: string;
  description: string;
  github: string;
  live?: string | null;
};

export function ProjectCard({
  title,
  description,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div
      className="
        bg-portfolio-card
        backdrop-blur-md
        rounded-2xl
        p-6
        flex flex-col
        gap-4
        border border-white/10
        shadow-lg shadow-black/20
        hover:-translate-y-1
        hover:shadow-xl
        transition-all duration-300
        text-portfolio-textLight
      "
    >
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
  );
}
