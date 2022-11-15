import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

function ThemedSpotlight() {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const lightModeProps = {
        color: "white",
        position: [0, 10, 1],
        intensity: 4,
    }

    const darkModeProps = {
        color: "#B5A6FE",
        position: [0, 1, 0.06],
        intensity: 1,
    }

    const themedLightProps = theme == 'light' ? lightModeProps : darkModeProps;

    return (
        isMounted && <pointLight
            angle={0.14}
            penumbra={1}
            castShadow
            receiveShadow
            {...themedLightProps} />
    );
}

export default ThemedSpotlight;