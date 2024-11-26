"use client";

import { useEffect, useState } from "react";

export const useIsLargeScreen = () => {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsLarge(window.innerWidth >= 1024); // lg breakpoint is 1024px
        };

        // Set initial screen size
        updateScreenSize();

        // Listen for window resize
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return isLarge;
};
