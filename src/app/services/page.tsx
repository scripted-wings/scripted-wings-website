import Hero from "@/containers/services/hero";
import ServicesList from "@/containers/services/services-list";
import { getMetadata } from "@/utils/get-meta-data";
import { getSchemaData } from "@/utils/get-schema-data";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = getMetadata(
    "/services",
    "Services | Websites, Apps, Cloud Solutions | Scripted Wings",
    "Explore Scripted Wings' services—websites, apps, cloud solutions, and digital marketing. We deliver results that inspire and drive growth.",
    [
        "Website development services",
        "Mobile app development",
        "Cloud and DevOps solutions",
        "Scalable digital marketing strategies",
        "Custom digital solutions provider",
    ]
);

const Services = () => {
    const schemaData = getSchemaData(
        "services",
        "Services | Websites, Apps, Cloud Solutions | Scripted Wings",
        "Explore Scripted Wings' services—websites, apps, cloud solutions, and digital marketing. We deliver results that inspire and drive growth."
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
                <ServicesList />
            </div>
        </>
    );
};

export default Services;
