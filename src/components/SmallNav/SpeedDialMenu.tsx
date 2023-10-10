import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaReact } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

const actions = [
  {
    icon: <FaReact style={{ fontSize: 20 }} />,
    name: "Tech Stack",
    link: "/techstack",
  },
  {
    icon: <BsFillBarChartFill style={{ fontSize: 20 }} />,
    name: "Professional Development",
    link: "/development",
  },
  {
    icon: <SiAboutdotme style={{ fontSize: 20 }} />,
    name: "About",
    link: "/about",
  },
];

const SpeedDialMenu = () => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "absolute",
        bottom: 5,
        right: 16,
        "& .MuiFab-primary": {
          width: 45,
          height: 45,
          backgroundColor: "#3E3E3E",
          "&:hover": { backgroundColor: "#525252" },
        },
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            if (action.link) {
              window.location.href = action.link;
            }
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialMenu;
