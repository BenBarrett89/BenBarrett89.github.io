import { Summary, Technologies, WorkExperience } from "./components";
import data from "./data";

function CV() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-4 p-4">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <a href="/">Back to home</a>
        <Summary summary={data.summary} />
        <Technologies technologies={data.technologies} />
        <WorkExperience workExperience={data.workExperience} />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
