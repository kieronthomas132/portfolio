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
      classNames={{ content: "bg-tooltip_bg border-2 border-list_border" }}
      content={
        <div className="w-[350px] p-2 text-[15px] text-list_header">
          <h1 className="font-[600]">{title}</h1>
          <p className="mt-3 text-list_content font-[400]">{content}</p>
        </div>
      }
    >
      <li
        key={index}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="p-2.5 text-gray_text items-center gap-2 flex bg-[#191919] rounded-xl border-2 border-[#212121] text-[14px]"
      >
        <p
          className={`bg-icon_bg ${hovered === index ? "text-hovered_icon" : "text-inactive_icon"} transition-all p-1.5 text-[20px] rounded-md`}
        >
          {icon}
        </p>
        {title}
      </li>
    </Tooltip>
  );
};

export default PathwayItem;
