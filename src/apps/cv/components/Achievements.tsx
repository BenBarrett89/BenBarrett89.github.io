import { Award, AchievementProps } from "../cv-types";
import Title from "./Title";

function AwardBlock({
  awardList,
  listName,
}: {
  awardList: Array<Award>;
  listName: string;
}) {
  return (
    <div className="text-left py-2">
      <h2 className="text-2xl">{listName}</h2>
      <ul className="list-disc list-inside">
        {awardList.map((award) => {
          return <AwardBullet award={award} />;
        })}
      </ul>
    </div>
  );
}

function AwardBullet({ award }: { award: Award }) {
  return (
    <li>
      <span>{award.name}</span> <span className="italic">({award.date})</span>
    </li>
  );
}

function Achievements({ achievements }: { achievements: AchievementProps }) {
  return (
    <>
      <div className="px-8 py-4">
        <Title title="Achievements and Awards" />
        <AwardBlock
          awardList={achievements.personalAwards}
          listName="Personal awards"
        />
        <AwardBlock
          awardList={achievements.projectAwards}
          listName="Project awards"
        />
      </div>
    </>
  );
}

export default Achievements;
