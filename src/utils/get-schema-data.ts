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
                    "@id": "https://scriptedwings.com/#organization",
                },
                about: {
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
                breadcrumb: {
                    "@id": "https://scriptedwings.com/#breadcrumb",
                },
            },
            {
                "@id": "https://scriptedwings.com/#identity",
                "@type": "Thing",
                name: "Scripted Wings Technology Solutions",
                url: "https://scriptedwings.com",
                description:
                    "Discover Scripted Wings Technology Solutions. We craft websites, apps, and cloud solutions to help businesses innovate and thrive.",
                sameAs: [
                    "https://twitter.com/ScriptedWingsHQ",
                    "https://facebook.com/ScriptedWingsHQ",
                    "https://instagram.com/ScriptedWingsHQ",
                    "https://www.linkedin.com/company/scripted-wings-hq",
                ],
            },
            {
                "@id": "https://scriptedwings.com/#organization",
                "@type": "Organization",
                name: "Scripted Wings Technology Solutions",
                url: "https://scriptedwings.com",
                logo: "https://ik.imagekit.io/scriptedwings/og.svg",
                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        telephone: "+919773195484",
                        contactType: "Admin Office",
                        areaServed: "IN",
                        availableLanguage: ["English"],
                    },
                ],
                address: {
                    "@type": "PostalAddress",
                    streetAddress:
                        "Scripted Wings Technology Solutions, Regency Tower, Vastrapur",
                    addressLocality: "Ahmedabad",
                    addressRegion: "Gujarat",
                    postalCode: "380015",
                    addressCountry: "IN",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: 4.9,
                    reviewCount: 271,
                    bestRating: 5,
                    worstRating: 4.5,
                },
                sameAs: [
                    "https://twitter.com/ScriptedWingsHQ",
                    "https://facebook.com/ScriptedWingsHQ",
                    "https://instagram.com/ScriptedWingsHQ",
                    "https://www.linkedin.com/company/scripted-wings-hq",
                ],
            },
            {
                "@id": "https://scriptedwings.com/#logo",
                "@type": "ImageObject",
                caption: "Scripted Wings Technology Solutions",
                contentUrl: "https://ik.imagekit.io/scriptedwings/og.svg",
                inLanguage: "en",
                url: "https://ik.imagekit.io/scriptedwings/og.svg",
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://scriptedwings.com/#breadcrumb",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://scriptedwings.com/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: title,
                        item: url,
                    },
                ],
            },
        ],
    };
};
