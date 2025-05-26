import {
  DashboardData,
  ApprenticeshipInformation,
  ContactData,
  CourseStatus,
  Journeyworker,
  MetricItem,
  OJTData,
  ProgressMetric,
  RTIData,
  WaveProgressionData,
} from "interfaces";

/**
 * The `useGetData` function in TypeScript React returns a data object containing various information
 * related to a dashboard.
 * @returns The `useGetData` function is returning an object with a property `data` which contains
 * various data related to a dashboard. This data includes information about the user (`username`),
 * apprenticeship information, contact data for sponsor and employer, progress metrics for skills and
 * competencies, OJT data, RTI data, wave progression data, competencies progress data, journeyworkers
 * data, skills progress data,
 */
export const useGetData = (): { data: DashboardData } => {
  const username = "Kayla";

  const apprenticeshipInformation: ApprenticeshipInformation = {
    program:
      "Telecommunications Equipment Installers and Repairers, Except Line Installers - Jobs Program 1",
    company: "ATT",
    onet: "15-1252.00",
    rapids: "1129CB",
  };

  const sponsorContactData: ContactData = {
    name: "Jennifer Johnson",
    office: "123 W 20 ST Sprout, GS 1234",
    email: "email@gosprout.app",
  };

  const employerContactData: ContactData = {
    name: "Jennifer Johnson",
    office: "123 W 20 ST Sprout, GS 1234",
    email: "email@gosprout.app",
  };

  const skillsCompletedData: ProgressMetric = {
    value: 40,
    missing: 20,
  };

  const competenciesCompletedData: ProgressMetric = {
    value: 40,
    missing: 20,
  };

  const ojtData: OJTData = {
    review: 5,
    pending: 5,
    approved: 5,
    total: "65.00",
    hours_completed: 40,
    hours_missing: 40,
  };

  const rtiData: RTIData = {
    pending: 5,
    approved: 5,
    total: "65.00",
    completed_courses: 40,
    missing_courses: 40,
  };

  const waveProgressionData: WaveProgressionData = {
    currentPay: 30,
    chartValues: [
      {
        x: 0,
        y: 10,
      },
      {
        x: 10,
        y: 30,
      },
      {
        x: 30,
        y: 30,
      },
      {
        x: 40,
        y: 40,
      },
      {
        x: 50,
        y: 60,
      },
      {
        x: 70,
        y: 70,
      },
      {
        x: 80,
        y: 50,
      },
      {
        x: 90,
        y: 80,
      },
    ],
  };

  const competenciesProgressData: MetricItem[] = [
    {
      description:
        "Perform routine maintenance on equipment, including adjusting and lubricating components…",
      value: 70,
    },
    {
      description:
        "Clean and maintain tools, test equipment, and motor vehicles.",
      value: 30,
    },
    {
      description:
        "Measure distances from landmarks to identify exact installation sites for equipment.",
      value: 70,
    },
    {
      description:
        "Request support from technical service centers when on-site procedures fail to solve installation..",
      value: 70,
    },
  ];

  const journeyworkesData: Journeyworker[] = [
    {
      name: "James Smith",
      email: "email@gosprout.app",
      profile_image: "/icons/png/avatar.png",
    },
    {
      name: "Jennifer Johnson",
      email: "email@gosprout.app",
      profile_image: "/icons/png/avatar.png",
    },
    {
      name: "Marta Flores",
      email: "email@gosprout.app",
      profile_image: "/icons/png/avatar.png",
    },
    {
      name: "Marta Flores",
      email: "email@gosprout.app",
      profile_image: "/icons/png/avatar.png",
    },
  ];

  const skillsProgress: MetricItem[] = [
    {
      description: "Creative Thinking",
      value: 100,
    },
    {
      description: "Critical Thinking",
      value: 100,
    },
    {
      description: "Conflict Resolution",
      value: 70,
    },
    {
      description: "Communication",
      value: 70,
    },
  ];

  const courseStatusData: CourseStatus[] = [
    {
      name: "Computer and Information Sciences",
      section: "Session B",
      start_date: "12/31/2022",
      end_date: "02/17/2023",
    },
    {
      name: "Computer and Information Sciences",
      section: "Session B",
      start_date: "12/31/2022",
      end_date: "02/17/2023",
    },
    {
      name: "Computer and Information Sciences",
      section: "Session B",
      start_date: "12/31/2022",
      end_date: "02/17/2023",
    },
    {
      name: "Computer and Information Sciences",
      section: "Session B",
      start_date: "12/31/2022",
      end_date: "02/17/2023",
    },
    {
      name: "Computer and Information Sciences",
      section: "Session B",
      start_date: "12/31/2022",
      end_date: "02/17/2023",
    },
  ];

  const data = {
    username,
    apprenticeshipInformation,
    competenciesCompletedData,
    courseStatusData,
    competenciesProgressData,
    employerContactData,
    journeyworkesData,
    ojtData,
    rtiData,
    skillsCompletedData,
    skillsProgress,
    sponsorContactData,
    waveProgressionData,
  };

  return {
    data,
  };
};
