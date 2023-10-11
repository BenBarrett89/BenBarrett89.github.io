import { JobProps } from "../cv-types";

export function Job({ job }: { job: JobProps }) {
  return (
    <>
      <div>
        <div>
          <h3 className="text-2xl">
            {job.title} at {job.employer}
          </h3>
          <p className="italic">{job.location}</p>
        </div>
        <div>
          {job.positions.map((position) => (
            <p>
              {position.startDate} - {position.endDate}{" "}
              {position.title && `(${position.title})`}
            </p>
          ))}
        </div>
        <div>
          <p>Roles and projects:</p>
          <ul>
            {job.roles.map((role) => (
              <li>
                {role.title}{" "}
                {role.projects && (
                  <ul>
                    {role.projects.map((project) => (
                      <li>{project}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Responsibilities:</p>
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
    </>
  );
}
