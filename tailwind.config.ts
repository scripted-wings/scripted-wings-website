import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "background-color": "var(--background-color)",
                "secondary-background-color":
                    "var(--secondary-background-color)",
                "font-color": "var(--font-color)",
                "highlight-color": "var(--highlight-color)",
            },
            borderColor: {
                DEFAULT: "var(--font-color)",
            },
            fontFamily: {
                poppins: ["var(--font-poppins)", "sans-serif"],
                caveat: ["var(--font-caveat)", "cursive"],
                "roboto-slab": ["var(--font-roboto-slab)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
