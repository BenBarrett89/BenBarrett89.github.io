import { Technology } from "../cv-types";
import Title from "./Title";

function TechnologyLink({ technology }: { technology: Technology }) {
  return (
    <>
      <a href={technology.link}>{technology.name}</a>
      {technology.aka ? (
        <span>
          {" ("}
          {technology.aka}
          {")"}
        </span>
      ) : (
        ""
      )}
    </>
  );
}

function Technologies({ technologies }: { technologies: Array<Technology> }) {
  return (
    <>
      <div className="px-8 py-4">
        <Title title="Technologies" />
        <div className="grid grid-cols-3 grid-flow-row">
          {technologies.map((technology: Technology, index: number) => (
            <div className="p-1" key={`technology-li-${index}`}>
              <TechnologyLink
                technology={technology}
                key={`technology-${index}`}
              />
              {technology.subTechnologies && technology.subTechnologies.length
                ? technology.subTechnologies.map(
                    (subTechnology, index, arr) => {
                      const first = index === 0;
                      const last = arr.length === index + 1;
                      return (
                        <>
                          {first ? " (" : ""}
                          <TechnologyLink
                            technology={subTechnology}
                            key={`sub-technology-${index}`}
                          />
                          {last ? ")" : ", "}
                        </>
                      );
                    }
                  )
                : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Technologies;
