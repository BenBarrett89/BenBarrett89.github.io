export type AcademicQualification = {
  grade: string;
  title: string;
  institution?: string;
  year?: string;
  quantity?: number;
};

export type Award = {
  name: string;
  date: string;
};

export type AchievementProps = {
  personalAwards: Array<Award>;
  projectAwards: Array<Award>;
};

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
  employerLink?: string;
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

export type VolunteerNote = {
  text: string;
  subtext?: Array<string>;
};

export type VolunteeringOpportunity = {
  title: string;
  organisation: string;
  location: string;
  startYear: string;
  endYear?: string;
  notes: Array<VolunteerNote>;
};
