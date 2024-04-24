import { ReactNode } from "react";

const SliderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-hidden text-[#999999] font-[500] h-[80px] relative">
      <div className="w-[600px] mt-5 flex flex-col">{children}</div>
    </div>
  );
};

export default SliderLayout;
