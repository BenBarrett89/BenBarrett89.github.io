import { VolunteeringOpportunity } from "../cv-types";
import Title from "./Title";

function Opportunity({
  opportunity,
}: {
  opportunity: VolunteeringOpportunity;
}) {
  return (
    <>
      <div className="grid job-container p-4 gap-4">
        <div className="row-start-1">
          <div>
            <span className="font-bold">{opportunity.title}</span> at{" "}
            <span className="font-bold">{opportunity.organisation}</span>
          </div>
          <div>
            <span className="italic">{opportunity.location}</span>
          </div>
          <div>
            <span>{opportunity.startYear}</span>
            {opportunity.endYear ? (
              <>
                {" "}
                - <span>{opportunity.endYear}</span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row-start-1">
          <div className="text-left">
            <ul className="list-disc list-inside">
              {opportunity.notes.map((note) => {
                return (
                  <li>
                    <span className={note.subtext ? "font-bold" : ""}>
                      {note.text}
                    </span>
                    {note.subtext ? (
                      <ul className="list-circle list-inside">
                        {note.subtext.map((subtext) => {
                          return <li>{subtext}</li>;
                        })}
                      </ul>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
}

function Volunteering({
  volunteering,
}: {
  volunteering: Array<VolunteeringOpportunity>;
}) {
  return (
    <>
      <div className="px-8 py-4">
        <Title title="Volunteering and Community Involvement" />
        <div className="grid">
          {volunteering.map((opportunity, index) => (
            <Opportunity opportunity={opportunity} key={`volunteer-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Volunteering;
