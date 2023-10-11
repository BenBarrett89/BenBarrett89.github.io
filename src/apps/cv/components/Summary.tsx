import { SummaryItemProps } from "../cv-types";
import { SummaryItem } from "./SummaryItem";
import Title from "./Title";

function Summary({ summary }: { summary: Array<SummaryItemProps> }) {
  return (
    <>
      <div>
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
