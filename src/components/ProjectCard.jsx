export default function ProjectCard({
  image,
  title,
  description,
  tags,
  github,
  live,
}) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
          <a
            href={github || "#"}
            target="_blank"
            className={`inline-flex items-center justify-center h-9 w-9 rounded-md 
              ${github 
                ? "bg-white/90 hover:bg-white" 
                : "bg-gray-300 cursor-not-allowed opacity-50"}
            `}
            onClick={(e) => !github && e.preventDefault()}
          >
            <svg
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
                d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
              />
            </svg>
          </a>

          <a
            href={live || "#"}
            target="_blank"
            className={`inline-flex items-center justify-center h-9 w-9 rounded-md 
              ${live 
                ? "bg-white/90 hover:bg-white" 
                : "bg-gray-300 cursor-not-allowed opacity-50"}
            `}
            onClick={(e) => !live && e.preventDefault()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>

      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-gray-400 dark:border-gray-500 px-2.5 py-0.5 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
