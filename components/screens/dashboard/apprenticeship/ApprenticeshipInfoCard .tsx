"use client";

import { useState } from "react";
import clsx from "clsx";
import { Card } from "components/card";
import { Icon, Typography } from "components/common";
import Icons from "const/icons";

export const ApprenticeshipInfoCard = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const cardData = [0, 0, 0];

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
      className="relative !py-5 cursor-pointer min-w-lg 2xl:min-w-xl max-w-xl max-h-56 shadow-lg transition-all duration-300 ease-in-out"
    >
      <Icon
        src={Icons.card}
        className="w-[71px] h-[57px] absolute top-3 right-5"
      />
      <div
        className={clsx("transition-opacity duration-300", fade && "opacity-0")}
      >
        {index === 0 ? (
          <ApprenticesCard />
        ) : (
          <ContactCard
            type={index === 1 ? "Name" : "Sponsor"}
            email="test"
            office="test"
          />
        )}
        <div className="flex justify-center gap-5 mt-5">
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

const ApprenticesCard = () => {
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
            test
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
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
            test
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
            test
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
            test
          </Typography>
        </div>
      </div>
    </>
  );
};

interface ContactCardProps {
  type: string;
  office: string;
  email: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  type,
  office,
  email,
}) => {
  const fields = [
    { label: type, value: "test" },
    { label: "Office", value: office },
    { label: "Email", value: email },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-4">
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
