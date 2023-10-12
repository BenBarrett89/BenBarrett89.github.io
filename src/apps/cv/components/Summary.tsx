import { SummaryItemProps } from "../cv-types";
import Title from "./Title";

function SummaryItem({ title, text }: SummaryItemProps) {
  return (
    <>
      <div className="p-1">
        <p>
          <span className="font-bold">{title}: </span>
          {text}
        </p>
      </div>
    </>
  );
}

function Summary({ summary }: { summary: Array<SummaryItemProps> }) {
  return (
    <>
      <div className="px-8 py-4">
        <Title title="Summary" />
        <ul>
          {summary.map((item: SummaryItemProps, index: number) => (
            <SummaryItem
              title={item.title}
              text={item.text}
              key={`summary-item-${index}`}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Summary;
