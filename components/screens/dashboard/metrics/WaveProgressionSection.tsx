import { Card, Icon, LineChartComponent, Typography } from "components";
import Icons from "const/icons";
import { WaveProgressionData } from "interfaces";

export const WaveProgressionSection = ({
  data,
}: {
  data: WaveProgressionData;
}) => {
  return (
    <Card className="w-full h-full relative" title="WAGE PROGESSION">
      <CurrentPayLabel value={data.currentPay} />
      <LineChartComponent
        id="wage-progession"
        label="Competencies"
        metricsArray={data.chartValues}
      />
    </Card>
  );
};

const CurrentPayLabel = ({ value }: { value: number }) => {
  return (
    <div className="absolute top-16 lg:top-6 right-10">
      <div className="flex items-center justify-between border border-primary rounded-[6px] px-2 py-1.5 w-64">
        <Typography type="body-1" className="text-primary font-bold">
          Current Pay
        </Typography>
        <div className="flex items-center gap-x-2">
          <Icon src={Icons.coins} className="size-6" />
          <Typography type="body-1" className="text-secondary font-bold">
            ${value} USD
          </Typography>
        </div>
      </div>
    </div>
  );
};
