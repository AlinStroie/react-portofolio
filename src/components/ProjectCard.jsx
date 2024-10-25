const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink = "#",
    classes = ""
}) => {
    const handleClick = () => {
        console.log("Project link:", projectLink); // Debugging log
        if (projectLink) {
            // Comment out to check for issues
            window.open(projectLink, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div
            onClick={handleClick}
            className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors cursor-pointer " + classes}
        >
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img 
                    src={imgSrc} 
                    alt={title}
                    loading='lazy'
                    className="img-cover" 
                />
            </figure>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span 
                                key={key}
                                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span 
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>

            <a 
                href={projectLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="sr-only"
            >
                Open project link
            </a>
        </div>
    );
};

export default ProjectCard;