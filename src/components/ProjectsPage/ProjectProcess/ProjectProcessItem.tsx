import { Tooltip } from "@nextui-org/react";
import useStore from "../../zustandStore/SmallScreenStore.tsx";
import { ReactNode, useState } from "react";

const ProjectProcessItem = ({
  title,
  content,
  index,
  icon,
}: {
  title: string;
  content: string;
  index: number;
  icon: ReactNode;
}) => {
  const [hovered, setHovered] = useState<number | null>(0);

  const { smallScreen } = useStore();

  return (
    <Tooltip
      placement={smallScreen ? "bottom" : "left"}
      classNames={{ content: "bg-[#191919]" }}
      content={
        <div className="w-[350px] p-2 text-[15px] text-[#CCCCCC]">
          <h1 className="font-[600]">{title}</h1>
          <p className="mt-3 text-[#757575] font-[400]">{content}</p>
        </div>
      }
    >
      <li
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        key={index}
        className={`p-2.5 ${index === hovered && "text-[#CCCCCC]"} text-[#919191] items-center gap-2 flex bg-[#191919] rounded-xl border-2 border-[#212121] text-[15px]`}
      >
        <p className="bg-[#282828] transition-all p-1.5 text-[20px] rounded-md">
          {icon}
        </p>
        {title}
      </li>
    </Tooltip>
  );
};

export default ProjectProcessItem;
