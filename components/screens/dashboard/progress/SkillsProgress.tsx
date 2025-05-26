import { useGetData } from "hooks/useGetData";
import { ProgressCard } from "./ProgressCard";
import { Card } from "components/card";

export const SkillsProgress = () => {
  const { data } = useGetData();
  return (
    <Card className="w-[35%]" title="SKILLS PROGRESS">
      <ProgressCard
        header={["SKILLS", "PROGRESS"]}
        data={data.skillsProgress}
        highColor="#03C43E"
      />{" "}
    </Card>
  );
};
