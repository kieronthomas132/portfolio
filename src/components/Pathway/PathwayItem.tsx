import { Tooltip } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import useStore from "../zustandStore/SmallScreenStore.tsx";

const PathwayItem = ({
  title,
  content,
  icon,
  index,
}: {
  title: string;
  content: string;
  icon: ReactNode;
  index: number;
}) => {

  const [hovered, setHovered] = useState<null | number>(null);
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
        key={index}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="p-2.5 text-[#919191] items-center gap-2 flex bg-[#191919] rounded-xl border-2 border-[#212121] text-[14px]"
      >
        <p
          className={`bg-[#282828] ${hovered === index ? "text-[#DADADA]" : "text-[#9A9A9A]"} transition-all p-1.5 text-[20px] rounded-md`}
        >
          {icon}
        </p>
        {title}
      </li>
    </Tooltip>
  );
};

export default PathwayItem;
