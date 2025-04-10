interface BoxProjectProps {
  openedContent: boolean;
  handleOpen: () => void;
  title: string;
  data: string[] | string[][] | undefined;
}
const BoxProject = ({
  openedContent,
  handleOpen,
  title,
  data,
}: BoxProjectProps) => {
  if (data === undefined) return null;
  return (
    <div className="w-full mt-20 text-start rounded-10 overflow-hidden">
      <div
        onClick={handleOpen}
        className="bg-main-400 text-black p-10 flex items-center gap-10 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 stroke-black"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {openedContent ? (
            <path d="M18 15l-6-6-6 6" />
          ) : (
            <path d="M6 9l6 6 6-6" />
          )}
        </svg>
        <p>{title}</p>
      </div>
      <div
        className={`${openedContent && 'px-15 py-10 bg-main-300 text-black rounded-b-10'}`}
      >
        {openedContent &&
          data.map((v, i) =>
            typeof v === 'string' ? (
              <div
                key={i}
                className="leading-28 pb-5 before:content-['📍'] before:pr-10"
              >
                {v}
              </div>
            ) : (
              v.map((v1, i1) => (
                <div key={i1}>
                  {i1 % 2 === 0 ? (
                    <p className="font-bold leading-28 pb-5">✏️ {v1}</p>
                  ) : (
                    <p className="leading-28 pb-20 whitespace-break-spaces">
                      {v1}
                    </p>
                  )}
                </div>
              ))
            ),
          )}
      </div>
    </div>
  );
};

export default BoxProject;
