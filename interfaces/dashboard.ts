export type MetricItem = {
  description: string;
  value: number;
  color?: string;
};

export interface ApprenticeshipInformation {
  program: string;
  company: string;
  onet: string;
  rapids: string;
}

export interface ContactData {
  name?: string;
  office: string;
  email: string;
}

export interface ProgressMetric {
  value: number;
  missing: number;
}

export interface OJTData {
  review: number;
  pending: number;
  approved: number;
  total: string;
  hours_completed: number;
  hours_missing: number;
}

export interface RTIData {
  pending: number;
  approved: number;
  total: string;
  completed_courses: number;
  missing_courses: number;
}

export interface ChartPoint {
  x: number;
  y: number | string;
}

export interface WaveProgressionData {
  currentPay: number;
  chartValues: ChartPoint[];
}

export interface Journeyworker {
  name: string;
  email: string;
  profile_image: string;
}

export interface CourseStatus {
  name: string;
  section: string;
  start_date: string;
  end_date: string;
}

export interface DashboardData {
  username: string;
  apprenticeshipInformation: ApprenticeshipInformation;
  sponsorContactData: ContactData;
  employerContactData: ContactData;
  skillsCompletedData: ProgressMetric;
  competenciesCompletedData: ProgressMetric;
  ojtData: OJTData;
  rtiData: RTIData;
  waveProgressionData: WaveProgressionData;
  competenciesProgressData: MetricItem[];
  journeyworkesData: Journeyworker[];
  skillsProgress: MetricItem[];
  courseStatusData: CourseStatus[];
}
