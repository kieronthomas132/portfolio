import { useState } from "react";
import { useSpring, animated } from "react-spring";
//@ts-ignore
import useSound from "use-sound";
import switchOnSound from '../assets/audioAssets/switch_on.wav'
import switchOffSound from '../assets/audioAssets/switch_off.wav'
import {useTheme} from "next-themes";
const DarkModeAnimation = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const [isDarkMode, toggleDarkMode] = useState(false);
    const [playSwitchOnSound] = useSound(switchOnSound, { volume: 0.5 });
    const [playSwitchOffSound] = useSound(switchOffSound, { volume: 0.5 });

    const handleToggleDarkMode = () => {
        toggleDarkMode((prev) => !prev);
        changeTheme()

        if (isDarkMode) {
            playSwitchOnSound();
        } else {
            playSwitchOffSound();
        }
    };

    const properties = {
        sun: {
            r: 9,
            transform: "rotate(40deg)",
            cx: 12,
            cy: 4,
            opacity: 0
        },
        moon: {
            r: 5,
            transform: "rotate(90deg)",
            cx: 30,
            cy: 0,
            opacity: 1
        },
        springConfig: { mass: 4, tension: 250, friction: 35 }
    };
    const { r, transform, cx, cy, opacity } = isDarkMode
        ? properties["moon"]
        : properties["sun"];
    const svgContainerProps = useSpring({
        transform,
        config: properties.springConfig
    });
    const centerCircleProps = useSpring({ r, config: properties.springConfig });
    const maskedCircleProps = useSpring({
        cx,
        cy,
        config: properties.springConfig
    });
    const linesProps = useSpring({ opacity, config: properties.springConfig });

    return (
        <div>
            <animated.svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke={`${isDarkMode ? "#0093E9" : "white"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ ...svgContainerProps, cursor: "pointer" }}
                onClick={handleToggleDarkMode}
            >
                <mask id="mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <animated.circle
                        style={maskedCircleProps}
                        cx="12"
                        cy="4"
                        r="9"
                        fill="black"
                    />
                </mask>
                <animated.circle
                    style={centerCircleProps}
                    fill={isDarkMode ? "#0093E9" : "white"}
                    cx="12"
                    cy="12"
                    r="9"
                    mask="url(#mask)"
                />

                <animated.g style={linesProps} fill="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </animated.g>
            </animated.svg>
        </div>
    );
}

export default DarkModeAnimation