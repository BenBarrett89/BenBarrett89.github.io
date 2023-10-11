import Title from "./Title";

type Technology = {
  name: string;
  aka?: string;
  link: string;
  subTechnologies?: Array<Technology>;
};

const technologies: Array<Technology> = [
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    subTechnologies: [
      { name: "Angular", link: "https://angular.io/" },
      { name: "React", link: "https://react.dev/" },
    ],
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    subTechnologies: [
      { name: "Vite", link: "https://vitejs.dev/" },
      { name: "React", link: "https://react.dev/" },
    ],
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/",
    subTechnologies: [
      { name: "Express", link: "https://expressjs.com/" },
      { name: "Nunjucks", link: "https://mozilla.github.io/nunjucks/" },
    ],
  },
  {
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    name: "Java",
    link: "https://www.java.com/en/",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Amazon Web Services",
    aka: "AWS",
    link: "https://aws.amazon.com/what-is-aws/",
  },
  {
    name: "Terraform",
    link: "https://www.terraform.io/",
  },
  {
    name: "SST",
    aka: "Serverless Stack",
    link: "https://sst.dev/",
  },
  {
    name: "AWS Cloud Development Kit",
    aka: "AWS CDK",
    link: "https://aws.amazon.com/cdk/",
  },
  {
    name: "Docker",
    link: "https://www.docker.com/",
  },
  {
    name: "Postman",
    link: "https://www.postman.com",
  },
];

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

function Technologies() {
  return (
    <>
      <div>
        <Title title="Technologies" />
        <ul>
          {technologies.map((technology: Technology) => (
            <li>
              <TechnologyLink technology={technology} />
              {technology.subTechnologies && technology.subTechnologies.length
                ? technology.subTechnologies.map(
                    (subTechnology, index, arr) => {
                      const first = index === 0;
                      const last = arr.length === index + 1;
                      return (
                        <>
                          {first ? " (" : ""}
                          <TechnologyLink technology={subTechnology} />
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
