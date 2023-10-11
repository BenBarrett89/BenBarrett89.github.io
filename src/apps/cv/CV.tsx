import { Summary, Technologies, WorkExperience } from "./components";

function CV() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-4 p-4">
        <h1 className="text-4xl font-bold">Ben Barrett</h1>
        <a href="/">Back to home</a>
        <Summary />
        <Technologies />
        <WorkExperience />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
