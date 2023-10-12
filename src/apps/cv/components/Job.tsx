import { JobProps } from "../cv-types";

export function Job({ job }: { job: JobProps }) {
  return (
    <>
      <div className="grid job-container p-4 gap-4">
        <div className="row-start-1">
          <h3 className="text-2xl">
            <span className="font-bold">{job.title}</span> at{" "}
            {job.employerLink ? (
              <span className="font-bold">
                <a href={job.employerLink}>{job.employer}</a>
              </span>
            ) : (
              <span className="font-bold">{job.employer}</span>
            )}
          </h3>
          <p className="italic p-4 text-lg">{job.location}</p>
          <div>
            {job.positions.map((position) => (
              <p>
                {position.startDate} - {position.endDate}{" "}
                {position.title && `(${position.title})`}
              </p>
            ))}
          </div>
        </div>
        <div className="row-start-1 text-left">
          <p className="italic text-lg">Roles and projects:</p>
          <ul className="list-disc list-inside">
            {job.roles.map((role) => (
              <li>
                {role.title}{" "}
                {role.projects && (
                  <ul className="list-circle list-inside">
                    {role.projects.map((project) => (
                      <li>{project}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="row-start-2 col-span-2 text-left">
          <p className="italic text-lg">Responsibilities:</p>
          <ul>
            {job.responsibilities.map((responsibility) => (
              <li>
                <span className="font-bold">{responsibility.title}</span> -{" "}
                {responsibility.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
}
