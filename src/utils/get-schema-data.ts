export const getSchemaData = (
    path: string,
    title: string,
    description: string
) => {
    const url = `https://scriptedwings.com/${path}`;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@id": "https://scriptedwings.com/#website",
                "@type": "WebSite",
                inLanguage: "en",
                name: "Scripted Wings Technology Solutions",
                url: "https://scriptedwings.com",
                publisher: {
                    "@id": "https://scriptedwings.com/#identity",
                },
            },
            {
                "@id": `${url}/#webpage`,
                "@type": "WebPage",
                description,
                name: title,
                url,
                about: {
                    "@id": "https://scriptedwings.com/#identity",
                },
                isPartOf: {
                    "@id": "https://scriptedwings.com/#website",
                },
                potentialAction: [
                    {
                        "@type": "ReadAction",
                        target: [url],
                    },
                ],
                primaryImageOfPage: {
                    "@id": "https://scriptedwings.com/#logo",
                },
            },
            {
                "@id": "https://scriptedwings.com/#identity",
                "@type": "Organization",
                name: "Scripted Wings Technology Solutions",
                url: "https://scriptedwings.com",
                aggregateRating: {
                    ratingValue: 4.9,
                    reviewCount: 271,
                },
                sameAs: ["https://twitter.com/ScriptedWingsHQ"],
            },
            {
                "@id": "https://scriptedwings.com/#logo",
                "@type": "ImageObject",
                caption: "Scripted Wings Technology Solutions",
                contentUrl: "https://ik.imagekit.io/scriptedwings/logo.svg",
                inLanguage: "en",
                url: "https://ik.imagekit.io/scriptedwings/logo.svg",
            },
            {
                "@id": "https://scriptedwings.com/#organization",
                "@type": "Organization",
                logo: "https://ik.imagekit.io/scriptedwings/logo.svg",
                name: "Scripted Wings Technology Solutions",
                url: "https://scriptedwings.com",
                sameAs: ["https://twitter.com/ScriptedWingsHQ"],
            },
        ],
    };
};
