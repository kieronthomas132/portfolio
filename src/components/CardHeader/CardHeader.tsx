import {ReactNode} from "react";

interface CardHeaderProps {
  headerTitle: string;
  headerSubHeading: string;
  headerIcon: ReactNode;
}

const CardHeader = ({ headerTitle, headerSubHeading, headerIcon }: CardHeaderProps) => {
  return (
    <div>
      <div className="flex gap-1 font-[500] p-2 text-[#999999] justify-center items-center">
          <span className="text-[#A291FD] text-[20px]">{headerIcon}</span>
        <h2>{headerTitle}</h2>
      </div>
      <h2 className="text-[#E6E6E6] text-[17px] text-center font-[600]">
        {headerSubHeading}
      </h2>
    </div>
  );
};

export default CardHeader;
