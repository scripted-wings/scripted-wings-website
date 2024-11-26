import { getMetadata } from "@/utils/get-meta-data";
import { getSchemaData } from "@/utils/get-schema-data";
import { Metadata } from "next";
import Script from "next/script";
import AboutUs from "../containers/home/about-us";
import Hero from "../containers/home/hero";
import Service from "../containers/home/service";
import WhyChooseUs from "../containers/home/why-choose-us";

export const metadata: Metadata = getMetadata(
    "/",
    "Scripted Wings | Turning Ideas Into Reality",
    "Discover Scripted Wings Technology Solutions. We craft websites, apps, and cloud solutions to help businesses innovate and thrive. Start today!",
    [
        "Digital solutions for businesses",
        "Website and app development",
        "Cloud solutions company",
        "Innovative tech services",
        "Remote-first tech company",
    ]
);

const Home = () => {
    const schemaData = getSchemaData(
        "",
        "Scripted Wings | Turning Ideas Into Reality",
        "Discover Scripted Wings Technology Solutions. We craft websites, apps, and cloud solutions to help businesses innovate and thrive. Start today!"
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
                <Service />
                <WhyChooseUs />
                <AboutUs />
            </div>
        </>
    );
};

export default Home;
