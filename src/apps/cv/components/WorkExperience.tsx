import { JobProps } from "../cv-types";
import { Job } from "./Job";
import Title from "./Title";

function WorkExperience({
  workExperience,
}: {
  workExperience: Array<JobProps>;
}) {
  return (
    <>
      <div className="px-8 py-4">
        <Title title="Work Experience" />
        <div className="grid">
          {workExperience.map((job: JobProps, index: number) => (
            <Job job={job} key={`job-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
