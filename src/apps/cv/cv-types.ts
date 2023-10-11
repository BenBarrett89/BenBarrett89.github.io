export type Position = {
  title?: string | undefined;
  startDate: string;
  endDate: string;
};

export type Role = {
  title: string;
  projects?: Array<string>;
};

export type Responsibility = {
  title: string;
  description: string;
};

export interface JobProps {
  title: string;
  employer: string;
  location: string;
  positions: Array<Position>;
  roles: Array<Role>;
  responsibilities: Array<Responsibility>;
}

export interface SummaryItemProps {
  title: string;
  text: string;
}

export type Technology = {
  name: string;
  aka?: string;
  link: string;
  subTechnologies?: Array<Technology>;
};
