import FAQ from "@/containers/about-us/FAQ";
import FootNote from "@/containers/about-us/FootNote";
import Hero from "@/containers/about-us/hero";
import Mission from "@/containers/about-us/Mission";
import Tagline from "@/containers/about-us/Tagline";
import Values from "@/containers/about-us/Values";
import Vision from "@/containers/about-us/Vision";
import WhatSetsUsApart from "@/containers/about-us/WhatSetsUsApart";
import { getMetadata } from "@/utils/get-meta-data";
import { getSchemaData } from "@/utils/get-schema-data";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = getMetadata(
    "/about-us",
    "About Us | Creativity Meets Technology | Scripted Wings",
    "Learn about Scripted Wings—a remote-first team blending creativity and tech to craft digital solutions. Discover our vision and values today.",
    [
        "About Scripted Wings Technology Solutions",
        "Remote-first tech company",
        "Innovative digital experiences",
        "Agile and creative tech team",
        "Building digital futures",
    ]
);

const AboutUs = () => {
    const schemaData = getSchemaData(
        "about-us",
        "About Us | Creativity Meets Technology | Scripted Wings",
        "Learn about Scripted Wings—a remote-first team blending creativity and tech to craft digital solutions. Discover our vision and values today."
    );

    return (
        <>
            <Script
                id="schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />

            <div className="h-full">
                <Hero />
                <Vision />
                <Mission />
                <Values />
                <Tagline />
                <WhatSetsUsApart />
                <FAQ />
                <FootNote />
            </div>
        </>
    );
};

export default AboutUs;
