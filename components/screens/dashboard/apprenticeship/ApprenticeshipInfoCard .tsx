"use client";

import * as React from "react";
import clsx from "clsx";
import { Card, Icon, Typography } from "components";
import Icons from "const/icons";
import {
  ApprenticeshipInformation,
  ContactData,
  DashboardData,
} from "interfaces";

export const ApprenticeshipInfoCard = ({ data }: { data: DashboardData }) => {
  const [index, setIndex] = React.useState(0);
  const [fade, setFade] = React.useState(false);

  const cardData = [
    data.apprenticeshipInformation,
    data.sponsorContactData,
    data.employerContactData,
  ];

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cardData.length);
      setFade(false);
    }, 300); // duration of the transition
  };

  const title: Record<number, string> = {
    0: "APPRENTICESHIP INFORMATION",
    1: "SPONSOR CONTACT",
    2: "EMPLOYER CONTACT",
  };

  return (
    <Card
      title={title[index]}
      onClick={handleNext}
      className="relative !py-5 cursor-pointer h-[400px] min-w-full lg:min-w-lg 2xl:min-w-xl lg:max-w-xl lg:h-[235px] shadow-lg transition-all duration-300 ease-in-out"
    >
      <Icon
        src={Icons.card}
        className="w-[50px] lg:w-[71px] lg:h-[57px] absolute top-10 lg:top-3 right-5"
      />
      <div
        className={clsx("transition-opacity duration-300", fade && "opacity-0")}
      >
        {index === 0 ? (
          <ApprenticesCard
            company={data.apprenticeshipInformation.company}
            onet={data.apprenticeshipInformation.onet}
            program={data.apprenticeshipInformation.program}
            rapids={data.apprenticeshipInformation.rapids}
          />
        ) : index === 1 ? (
          <ContactCard
            type="Sponsor"
            email={data.sponsorContactData.email}
            office={data.sponsorContactData.office}
            name={data.sponsorContactData.name}
          />
        ) : (
          <ContactCard
            type="Name"
            email={data.employerContactData.email}
            office={data.employerContactData.office}
            name={data.employerContactData.name}
          />
        )}
        <div className="flex justify-center gap-5 absolute bottom-5 right-[45%]">
          {cardData.map((_, i) => (
            <div
              key={i}
              className={`size-1.5 rounded-full ring-1 ring-primary ${
                i === index ? "bg-primary" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

const ApprenticesCard: React.FC<ApprenticeshipInformation> = ({
  company,
  onet,
  program,
  rapids,
}) => {
  return (
    <>
      <div className="flex justify-between items-start mb-2">
        <div>
          <Typography
            type="custom-p"
            className="text-[17px] text-primary font-extrabold"
          >
            Program
          </Typography>
          <Typography
            type="body-2"
            className="text-typography-secondary font-semibold"
          >
            {program}
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div>
          <Typography
            type="custom-p"
            className="text-[17px] text-primary font-extrabold"
          >
            Company
          </Typography>
          <Typography
            type="body-2"
            className="text-typography-secondary font-semibold"
          >
            {company}
          </Typography>
        </div>
        <div>
          <Typography
            type="custom-p"
            className="text-[17px] text-primary font-extrabold"
          >
            ONET-SOC
          </Typography>
          <Typography
            type="body-2"
            className="text-typography-secondary font-semibold"
          >
            {onet}
          </Typography>
        </div>
        <div>
          <Typography
            type="custom-p"
            className="text-[17px] text-primary font-extrabold"
          >
            RAPIDS
          </Typography>
          <Typography
            type="body-2"
            className="text-typography-secondary font-semibold"
          >
            {rapids}
          </Typography>
        </div>
      </div>
    </>
  );
};

export const ContactCard: React.FC<ContactData & { type: string }> = ({
  type,
  office,
  email,
  name,
}) => {
  const fields = [
    { label: type, value: name },
    { label: "Office", value: office },
    { label: "Email", value: email },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">
      {fields.map(({ label, value }, index) => (
        <div key={index}>
          <Typography
            type="custom-p"
            className="text-[17px] text-primary font-extrabold"
          >
            {label}
          </Typography>
          <Typography
            type="body-2"
            className="text-typography-secondary font-semibold"
          >
            {value}
          </Typography>
        </div>
      ))}
    </div>
  );
};
