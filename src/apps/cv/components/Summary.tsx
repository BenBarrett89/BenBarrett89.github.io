import { SummaryItem, SummaryItemProps } from "./SummaryItem";
import Title from "./Title";

const items: Array<SummaryItemProps> = [
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

function Summary() {
  return (
    <>
      <div>
        <Title title="Summary" />
        <ul>
          {items.map((item: SummaryItemProps) => (
            <SummaryItem title={item.title} text={item.text} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Summary;
