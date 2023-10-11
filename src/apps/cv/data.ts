import { JobProps, SummaryItemProps, Technology } from "./cv-types";

const name = "Ben Barrett";

const summary: Array<SummaryItemProps> = [
  {
    title: "Software Engineering",
    text: "Strives to produce well-tested, high quality software solutions. Development experience with JavaScript (Angular, React), TypeScript (Vite), Node.js (Express, Nunjucks), Python, MongoDB, PostgreSQL, Amazon Web Services, Terraform, SST (Serverless Stack), Docker, Postman, Swagger/OpenAPI, Java, Cucumber, Cypress and Selenium.  Accustomed to Agile, TDD, BDD, Waterfall, Continuous Integration and Continuous Deployment (GitLab CI, GitHub Actions).",
  },
  {
    title: "Problem solving",
    text: "Independent problem solver wth a strong work ethic. Reliable, hardworking and determined to find the best solution.",
  },
  {
    title: "Open-minded",
    text: "Cooperative, flexible and always keeps an open-mind. Adapts well to new situations, methodologies and tooling. Enthusiastic about learning new things.",
  },
  {
    title: "Team player",
    text: "Good interpersonal skills and quick to build rapport. Clear communicator with a passion for community, knowledge sharing and colleague support.",
  },
];

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

const workExperience: Array<JobProps> = [
  {
    title: "Senior Software Engineer",
    employer: "MindGym",
    location: "Remote",
    positions: [{ startDate: "July 2023", endDate: "Present" }],
    roles: [
      {
        title: "SaaS Team Engineer",
        projects: [
          "Single Sign On integration",
          "User pool migration preparation",
          "Event driven architecture working group",
        ],
      },
    ],
    responsibilities: [
      {
        title: "Web application development",
        description:
          "Design, develop and test front-end web applications for performing login using React, TypeScript and AWS Amplify",
      },
      {
        title: "API development",
        description:
          " Extend and test API functionality using TypeScript and Postman",
      },
      {
        title: "Infrastructure development",
        description:
          "Design and develop Infrastructure as Code using Terraform and SST",
      },
      {
        title: "Cloud development",
        description:
          "Provision, manage and support cloud applications in Amazon Web Services",
      },
      {
        title: "Workflow improvements",
        description:
          "Maintain and improve GitHub Actions workflows for CI and CD",
      },
      {
        title: "Support",
        description:
          "Provide operational and technical support for the SaaS team services",
      },
      {
        title: "Working group contribution",
        description:
          "Discuss architectural decisions such as the use of event driven architecture",
      },
    ],
  },
  {
    title: "Senior Software Engineer (G7 Grade)",
    employer: "Department for Work and Pensions",
    location: "Newcastle-upon-Tyne, Tyne and Wear",
    positions: [
      { title: "G7 Grade", startDate: "September 2021", endDate: "July 2023" },
    ],
    roles: [
      { title: "Engineering Lead", projects: ["Common Risk Engine"] },
      {
        title: "Lead developer",
        projects: [
          "Management Information System Programme (MISP)",
          "EU Exit Settlement",
        ],
      },
      {
        title: "Developer",
        projects: ["Churchill - Open Data Visualisation", "Winter Fuels"],
      },
    ],
    responsibilities: [
      {
        title: "Web application development",
        description:
          "Design, develop and test front end web applications using Node.js ecosystem",
      },
    ],
  },
];

const data = {
  name,
  summary,
  technologies,
  workExperience,
};

export default data;
