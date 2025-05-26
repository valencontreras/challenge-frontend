import { Avatar, Card, Typography } from "components";
import { Journeyworker } from "interfaces";

export const MyJourneyworkers = ({ data }: { data: Journeyworker[] }) => {
  return (
    <Card className="w-full xl:w-[25%]" title="MY JOURNEYWORKERS">
      <div className="lg:max-h-80 overflow-y-scroll pr-1">
        <ul className="flex flex-col">
          {data.map((journeyworker, index) => (
            <li
              key={"journeyworker" + index}
              className="flex gap-4 items-center border-b border-gray-40 pb-6 mb-6"
            >
              <Avatar photoUrl={journeyworker.profile_image} size="medium" />
              <div>
                <Typography type="subtitle-3" className="text-black font-bold">
                  {journeyworker.name}
                </Typography>

                <Typography type="body-1" className="italic">
                  {journeyworker.email}
                </Typography>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
