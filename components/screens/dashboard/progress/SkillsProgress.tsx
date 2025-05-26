import { ProgressCard } from "./ProgressCard";
import { Card } from "components/card";
import { MetricItem } from "interfaces";

export const SkillsProgress = ({ data }: { data: MetricItem[] }) => {
  return (
    <Card className="w-[35%]" title="SKILLS PROGRESS">
      <ProgressCard
        header={["SKILLS", "PROGRESS"]}
        data={data}
        highColor="#03C43E"
      />{" "}
    </Card>
  );
};
