import { SummaryItemProps } from "../cv-types";

export function SummaryItem({ title, text }: SummaryItemProps) {
  return (
    <>
      <li>
        <p>
          <span className="font-bold">{title}: </span>
          {text}
        </p>
      </li>
    </>
  );
}
