export interface SummaryItemProps {
  title: string;
  text: string;
}

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
