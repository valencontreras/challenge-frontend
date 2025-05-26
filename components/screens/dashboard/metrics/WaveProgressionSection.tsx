import { Card, Icon, LineChartComponent, Typography } from "components";
import Icons from "const/icons";
import { useGetData } from "hooks/useGetData";

export const WaveProgressionSection = () => {
  const { data } = useGetData();
  return (
    <Card className="w-full h-full relative" title="WAGE PROGESSION">
      <CurrentPayLabel />
      <LineChartComponent
        id="wage-progession"
        label="Competencies"
        metricsArray={data.waveProgressionData.chartValues}
      />
    </Card>
  );
};

const CurrentPayLabel = () => {
  return (
    <div className="absolute top-6 right-10">
      <div className="flex items-center justify-between border border-primary rounded-[6px] px-2 py-1.5 w-64">
        <Typography type="body-1" className="text-primary font-bold">
          Current Pay
        </Typography>
        <div className="flex items-center gap-x-2">
          <Icon src={Icons.coins} className="size-6" />
          <Typography type="body-1" className="text-secondary font-bold">
            $30 USD
          </Typography>
        </div>
      </div>
    </div>
  );
};
