import {
  Academic,
  Achievements,
  Summary,
  Technologies,
  Volunteering,
  WorkExperience,
} from "./components";
import data from "./data";
import "./cv.css";

function CV() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-4 p-4">
        <h1 className="text-6xl font-bold">{data.name}</h1>
        <a className="pt-4" href="/">
          Back to home
        </a>
        <Summary summary={data.summary} />
        <Technologies technologies={data.technologies} />
        <WorkExperience workExperience={data.workExperience} />
        <Achievements achievements={data.achievements} />
        <Academic academicQualifications={data.academicQualifications} />
        <Volunteering volunteering={data.volunteering} />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
