import { AcademicQualification } from "../cv-types";
import Title from "./Title";

function Qualification({
  qualification,
}: {
  qualification: AcademicQualification;
}) {
  return (
    <>
      {qualification.quantity ? (
        <li className="py-1">
          <span className="italic">{qualification.quantity}</span>
          <>, </>
          <span className="font-bold">{qualification.title}</span>{" "}
          <span>{qualification.grade}</span>
          <>, </>
        </li>
      ) : (
        <li className="py-1">
          <span className="italic">{qualification.grade}</span>
          <>, </>
          <span className="font-bold">{qualification.title}</span>
          <>, </>
          {qualification.institution ? (
            <>
              <span>{qualification.institution}</span>
              <>, </>
            </>
          ) : (
            <></>
          )}
          <span>{qualification.year}</span>
        </li>
      )}
    </>
  );
}

function Academic({
  academicQualifications,
}: {
  academicQualifications: Array<AcademicQualification>;
}) {
  return (
    <>
      <div className="px-8 py-4">
        <Title title="Academic Qualifications and Education" />
        <ul>
          {academicQualifications.map((qualification) => {
            return <Qualification qualification={qualification} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default Academic;
