import { Job, JobProps } from "./Job";
import Title from "./Title";

const jobs: Array<JobProps> = [
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

function WorkExperience() {
  return (
    <>
      <div>
        <Title title="Work Experience" />
        {jobs.map((job: JobProps) => (
          <Job job={job} />
        ))}
      </div>
    </>
  );
}

export default WorkExperience;
