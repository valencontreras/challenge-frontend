import clsx from "clsx";
import { Typography, Button, Avatar } from "components";
import Icons from "const/icons";

const GuideStyles = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-20 w-full max-w-3xl mx-auto p-10">
        {/* *** Typography *** */}
        <Separator text="Typography" />
        <div className="space-y-10 w-full">
          <Typography type="title">title</Typography>
          <Typography type="subtitle-1">subtitle-1</Typography>
          <Typography type="subtitle-2">subtitle-2</Typography>
          <Typography type="subtitle-3">subtitle-3</Typography>
          <Typography type="body-1">body-1</Typography>
          <Typography type="body-2">body-2</Typography>
          <Typography type="caption">caption</Typography>
          <Typography type="overline">overline</Typography>
        </div>
        {/* *** Buttons *** */}
        <Separator text="Buttons" />
        {/* Button decoration */}
        <div className="flex flex-wrap justify-between gap-4 w-full">
          <Button decoration="fill" size="medium">
            Button fill
          </Button>
          <Button decoration="line-primary" size="medium">
            Button line-primary
          </Button>
          <Button decoration="not-fill" size="medium">
            Button not-fill
          </Button>
        </div>
        {/* Button disabled */}
        <Separator text="Disabled" className="max-w-[200px] self-center" />
        <div className="flex flex-wrap justify-between gap-4 w-full">
          <Button decoration="fill" size="medium" disabled>
            Button fill disabled
          </Button>
          <Button decoration="line-primary" size="medium" disabled>
            Button line-primary disabled
          </Button>
          <Button decoration="not-fill" size="medium" disabled>
            Button not-fill disabled
          </Button>
        </div>
        {/* Button size */}
        <Separator text="Size" className="max-w-[200px] self-center" />
        <div className="flex flex-wrap justify-between gap-4 w-full">
          <Button decoration="fill" size="fit">
            Button fit
          </Button>
          <Button decoration="fill" size="extra-small">
            Button extra
          </Button>
          <Button decoration="fill" size="small">
            Button small
          </Button>
          <Button decoration="fill" size="medium">
            Button medium
          </Button>
          <Button decoration="fill" size="large">
            Button large
          </Button>
          <Button decoration="fill" size="full">
            Button full
          </Button>
        </div>
        {/* With icons */}
        <Separator text="With icons" className="max-w-[200px] self-center" />
        <div className="flex flex-wrap justify-between gap-4 w-full">
          <Button
            decoration="fill"
            size="fit"
            iconLeft
            icon={Icons.plus}
            label="Button iconLeft"
          ></Button>
          <Button
            decoration="fill"
            size="fit"
            iconRight
            icon={Icons.plus}
            label="Button iconRight"
          ></Button>
          <Button
            decoration="line-primary"
            size="fit"
            iconLeft
            icon={Icons.plus}
            label="Button iconLeft"
          ></Button>
          <Button
            decoration="line-primary"
            size="fit"
            iconRight
            icon={Icons.plus}
            label="Button iconRight"
          ></Button>
          <Button
            decoration="not-fill"
            size="fit"
            iconLeft
            icon={Icons.plus}
            label="Button iconLeft"
          ></Button>
          <Button
            decoration="not-fill"
            size="fit"
            iconRight
            icon={Icons.plus}
            label="Button iconRight"
          ></Button>
        </div>

        {/* Avatars */}
        <Separator text="Avatars" />
        <div className="flex flex-wrap justify-betwen gap-10 w-full">
          <Avatar photoUrl={Icons.avatar} className="w-20 h-20" />
          <Avatar photoUrl={Icons.avatar} size="large" />
          <Avatar photoUrl={Icons.avatar} size="medium" />
          <Avatar photoUrl={Icons.avatar} size="small" />
        </div>
      </div>
    </>
  );
};

export default GuideStyles;

type SeparatorProps = {
  text?: string;
  className?: string;
};

export const Separator: React.FC<SeparatorProps> = ({ text, className }) => {
  return (
    <div className={clsx("relative w-full", className)}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-dark-40" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-2 text-sm text-dark-100">{text}</span>
      </div>
    </div>
  );
};
