import {
  AchievementProps,
  JobProps,
  SummaryItemProps,
  Technology,
} from "./cv-types";

const name = "Ben Barrett";

const summary: Array<SummaryItemProps> = [
  {
    title: "Software Engineering",
    text: "Strives to produce well-tested, high quality software solutions. Development experience with a wide variety of technologies from front-end to infrastructure.",
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
  {
    name: "OpenAPI",
    aka: "Swagger",
    link: "https://swagger.io/",
  },
  {
    name: "Cucumber",
    link: "https://cucumber.io/",
  },
  {
    name: "Cypress",
    link: "https://www.cypress.io/",
  },
  {
    name: "Selenium",
    link: "https://www.selenium.dev/",
  },
  {
    name: "GitLab CI",
    link: "https://about.gitlab.com/solutions/continuous-integration/",
  },
  {
    name: "GitHub Actions",
    link: "https://github.com/features/actions",
  },
  {
    name: "Agile",
    link: "https://en.wikipedia.org/wiki/Agile_software_development",
  },
  {
    name: "Test Driven Development",
    aka: "TDD",
    link: "https://en.wikipedia.org/wiki/Test-driven_development",
  },
  {
    name: "Behaviour Driven Development",
    aka: "BDD",
    link: "https://en.wikipedia.org/wiki/Behavior-driven_development",
  },
  {
    name: "Waterfall",
    link: "https://en.wikipedia.org/wiki/Waterfall_model",
  },
  {
    name: "Continuous Integration",
    aka: "CI",
    link: "https://en.wikipedia.org/wiki/Continuous_integration",
  },
  {
    name: "Continuous Deployment",
    aka: "CD",
    link: "https://en.wikipedia.org/wiki/Continuous_deployment",
  },
  {
    name: "Information Technology Infrastructure Library",
    aka: "ITIL",
    link: "https://en.wikipedia.org/wiki/ITIL",
  },
];

const workExperience: Array<JobProps> = [
  {
    title: "Senior Software Engineer",
    employer: "MindGym",
    employerLink: "https://themindgym.com/",
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
    employerLink:
      "https://www.gov.uk/government/organisations/department-for-work-pensions",
    location: "Newcastle-upon-Tyne, Tyne and Wear",
    positions: [
      { title: "G7 Grade", startDate: "September 2021", endDate: "July 2023" },
      { title: "SEO Grade", startDate: "July 2018", endDate: "September 2021" },
      { title: "HEO Grade", startDate: "October 2016", endDate: "July 2018" },
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
      {
        title: "API development",
        description:
          "Design, develop and test APIs including database connections using the Node.js ecosystem",
      },
      {
        title: "Infrastructure development",
        description:
          "Design, develop and test Infrastructure as Code using Terraform, Packer and Ansible",
      },
      {
        title: "Cloud development",
        description:
          "Provision, manage and support cloud applications in Amazon Web Services",
      },
      {
        title: "Quality assurance",
        description:
          "Champion behaviour driven development for acceptance criteria and testing using Cucumber and other technologies such as Selenium",
      },
      {
        title: "Technical leadership",
        description:
          "Lead technical development team from the front throughout a product's lifecycle",
      },
      {
        title: "Architectural design",
        description:
          "Produce and discuss designs with architectural governance authority",
      },
      {
        title: "Analysis",
        description: "Analyse business and technical requirements",
      },
      {
        title: "Code review",
        description: "Peer review code produced by colleagues",
      },
      {
        title: "Prove concepts and improve patterns",
        description: "Create proofs of concept and application patterns",
      },
      {
        title: "Mentor team members",
        description:
          "Collaborate with more junior team members and aid in their development",
      },
      {
        title: "Support",
        description:
          "Support and maintain live applications including contributing and responding in ITIL software",
      },
      {
        title: "Agile",
        description:
          "Work in an Agile environment and champion Agile to stakeholders less familiar with the methodology",
      },
      {
        title: "Community contribution",
        description: "Contribute to the wider software engineering community",
      },
      {
        title: "CI/CD pipelines",
        description:
          "Develop and use CI/CD pipelines for testing and deployment",
      },
      {
        title: "Collaboration",
        description:
          "Collaborate with other teams and disciplines both within and outside the department to produce and test solutions including penetration testing and joint integration testing",
      },
      {
        title: "Governance",
        description:
          "Support contracted teams in navigating DWP governance processes",
      },
    ],
  },
  {
    title: "Software Engineer",
    employer: "British Airways",
    employerLink: "https://www.britishairways.com/",
    location: "Newcastle-upon-Tyne, Tyne and Wear",
    positions: [{ startDate: "September 2013", endDate: "October 2016" }],
    roles: [
      {
        title: "Salesforce Developer",
        projects: ["New Distribution Capability"],
      },
      {
        title: "Java Developer",
        projects: [
          "Selling Flow Development",
          "Insurance Migration",
          "Payment Application Automated Testing",
        ],
      },
    ],
    responsibilities: [
      {
        title: "Web application development",
        description:
          "Design and develop web applications using Java, Spring, JSP, SQL and XSLT",
      },
      {
        title: "Salesforce development",
        description:
          "Design and develop with Salesforce (including Apex and Visualforce)",
      },
      {
        title: "Quality assurance",
        description: "Produce and run test suites and testing tools",
      },
      {
        title: "Collaboration",
        description:
          "Lead offshore resources to test onshore developed functionality",
      },
      {
        title: "Documentation",
        description: "Produce project documentation including wiki pages",
      },
      {
        title: "Release support",
        description:
          "Test and support developed functionality during release cycles",
      },
      {
        title: "Technical analysis",
        description: "Perform technical analysis of existing systems",
      },
      {
        title: "Adapt to selected methodology",
        description:
          "Work with a variety of development methodologies including Agile, BDD and Waterfall",
      },
      {
        title: "SharePoint management",
        description:
          "Manage ownership of team and project SharePoint collaboration platform",
      },
    ],
  },
  {
    title: "Radio Advert Mixer (Casual Basis)",
    employer: "T7 Productions",
    location: "Haltwhistle, Northumberland",
    positions: [{ startDate: "October 2012", endDate: "September 2013" }],
    roles: [{ title: "Radio advert mixer" }],
    responsibilities: [
      {
        title: "Communication",
        description: "Book voice overs for recording sessions",
      },
      {
        title: "Direction and recording",
        description: "Direct and record voice overs",
      },
      {
        title: "Mixing",
        description: "Mix radio adverts",
      },
    ],
  },
  {
    title: "Conversational English Teaching Assistant",
    employer: "Junten Junior/Senior High School",
    employerLink: "https://www.junten.ed.jp/",
    location: "Oji, Kita-ku, Tokyo",
    positions: [{ startDate: "September 2007", endDate: "September 2008" }],
    roles: [
      { title: "Conversational teaching assistant" },
      { title: "School representative" },
    ],
    responsibilities: [
      {
        title: "Communication",
        description: "Book voice overs for recording sessions",
      },
      {
        title: "Direction and recording",
        description: "Direct and record voice overs",
      },
      {
        title: "Mixing",
        description: "Mix radio adverts",
      },
    ],
  },
];

const achievements: AchievementProps = {
  personalAwards: [
    {
      name: "Nominated to shortlist for DWP Data & Analytics Leader of the Year",
      date: "November 2022",
    },
    {
      name: "DWP Digital Group Excellence Award for Transformation and Innovation",
      date: "February 2018",
    },
    {
      name: "Voucher awarded for Churchill project initial live release",
      date: "October 2017",
    },
    {
      name: "Voucher awarded for Churchill project React migration leadership",
      date: "March 2017",
    },
  ],
  projectAwards: [
    {
      name: "Churchill - Open Data Visualisation, Government Statistical Service Presentation and Dissemination Award",
      date: "2017",
    },
  ],
};

const data = {
  achievements,
  name,
  summary,
  technologies,
  workExperience,
};

export default data;
