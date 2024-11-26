import { Metadata } from "next";

export const getMetadata = (
    path: string,
    title: string,
    description: string,
    keywords: string[]
): Metadata => {
    const url = `https://scriptedwings.com/${path}`;

    return {
        title,
        description,
        keywords,
        authors: [
            {
                name: "Scripted Wings Technology Solutions",
                url: "https://scriptedwings.com",
            },
            {
                name: "Harrsh Patel",
                url: "https://harrsh.com",
            },
        ],
        openGraph: {
            title,
            description,
            url,
            siteName: "Scripted Wings Technology Solutions",
            images: [
                {
                    url: "https://ik.imagekit.io/scriptedwings/og.svg",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            alternateLocale: ["en_IN"],
            type: "website",
            countryName: "IN",
            emails: ["scriptedwings@outlook.com"],
            phoneNumbers: ["+919773195484"],
        },
        twitter: {
            card: "summary_large_image",
            site: "@ScriptedWingsHQ",
            creator: "@ScriptedWingsHQ",
            title,
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon.ico",
            apple: "/apple-icon.png",
        },
        alternates: {
            canonical: url,
            languages: {
                en: url,
            },
        },
        applicationName: "Scripted Wings Technology Solutions",
        category: "Technology",
        classification: "Technology",
        creator: "Scripted Wings Technology Solutions",
        facebook: {
            appId: "1208134706957301",
        },
        generator: "Next.js",
        publisher: "Scripted Wings Technology Solutions",
        referrer: "origin",
        robots: "index, follow",
    };
};
