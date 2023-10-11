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
      <div>
        <Title title="Technologies" />
        <ul>
          {technologies.map((technology: Technology, index: number) => (
            <li key={`technology-li-${index}`}>
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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Technologies;
