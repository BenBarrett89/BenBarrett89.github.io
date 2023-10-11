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
      <div>
        <Title title="Work Experience" />
        {workExperience.map((job: JobProps, index: number) => (
          <Job job={job} key={`job-${index}`} />
        ))}
      </div>
    </>
  );
}

export default WorkExperience;
