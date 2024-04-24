import { ReactNode } from "react";

const SkillItem = ({
  skill,
  icon,
  index,
  type,
}: {
  skill: string;
  icon: ReactNode;
  index: number;
  type: string;
}) => {
  return (
    <li
      key={index}
      className="p-2 font-[500] justify-between tracking-wide text-[#CCCCCC] items-center gap-2 flex bg-[#141414] rounded-xl border-2 border-[#212121] text-[15px]"
    >
      <div className="flex items-center gap-2">
        <p className="bg-[#282828] text-[#999999] transition-all p-2.5 text-[20px] rounded-md">
          {icon}
        </p>
        <p className="font-[14px] ">{skill}</p>
      </div>
      <p className="text-[14px] font-[500] text-[#999999] bg-[#1F1F1F] p-2 rounded-lg">
        {type}
      </p>
    </li>
  );
};

export default SkillItem;
