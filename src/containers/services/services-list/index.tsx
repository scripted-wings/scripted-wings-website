"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";
import RightArrow from "@/components/icons/RightArrow";

const ServicesList = () => {
    const isLargeScreen = useIsLargeScreen();

    const getAdjustedTechnologies = (
        technologies: { id: number; title: string; image: string }[]
    ) => {
        if (!isLargeScreen) return technologies; // No fillers for small screens

        const length = technologies.length;
        const remainder = length % 3;
        if (remainder === 0) return technologies;

        const placeholders = Array(3 - remainder).fill({
            id: null,
            title: "",
            image: "",
        }) as { id: number | null; title: string; image: string }[];
        return [...technologies, ...placeholders];
    };

    return (
        <div className="flex flex-col gap-px border-y bg-font-color">
            {services.map(
                ({
                    id,
                    title,
                    subheading,
                    description,
                    cta,
                    technologies: techs,
                }) => {
                    const technologies = getAdjustedTechnologies(techs);

                    return (
                        <div
                            key={id}
                            className="grid grid-cols-1 gap-px bg-font-color lg:grid-cols-2"
                        >
                            <div className="flex-none bg-background-color px-8 pb-8 pt-20 lg:px-20 lg:pb-20 lg:pt-20">
                                <h2 className="text-3xl font-medium lg:text-4xl">
                                    {title}
                                </h2>

                                <h3 className="mt-2 text-lg font-medium lg:text-xl">
                                    {subheading}
                                </h3>

                                <p className="mt-6">{description}</p>

                                <Link
                                    href="/#contact-us"
                                    className="group mt-6 flex w-fit items-center gap-4 bg-font-color px-6 py-4 text-left text-background-color"
                                    aria-label="Navigate to contact us section"
                                >
                                    <p>{cta}</p>

                                    <span className="text-lg transition-all duration-150 ease-in-out group-hover:mr-2 group-hover:translate-x-2">
                                        <RightArrow />
                                    </span>
                                </Link>
                            </div>

                            <div className="h-full bg-secondary-background-color p-8 lg:flex lg:p-12">
                                <div className="grid grid-cols-1 gap-px border bg-font-color lg:m-auto lg:grid-cols-3">
                                    {technologies.map(
                                        ({ id, title, image }, index) => {
                                            return (
                                                <div
                                                    key={id ?? index}
                                                    className="flex w-full items-center bg-background-color hover:relative hover:shadow-xl lg:h-full lg:flex-col lg:p-10"
                                                >
                                                    <span className="w-20 p-4 lg:mb-4 lg:h-20 lg:w-full lg:p-0">
                                                        {image ? (
                                                            <Image
                                                                src={image}
                                                                alt={title}
                                                                width={300}
                                                                height={300}
                                                                className="h-full w-full object-contain"
                                                            />
                                                        ) : null}
                                                    </span>

                                                    <p className="text-center font-medium">
                                                        {title}
                                                    </p>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
};

export default ServicesList;

const services = [
    {
        id: 0,
        title: "Website Development",
        subheading: "Websites that captivate and convert.",
        description:
            "Your website is more than a URL—it's your digital storefront, your first impression, and your 24/7 salesperson. At Scripted Wings, we create websites that do it all: captivate your audience, drive engagement, and deliver measurable results. Combining sleek, responsive design with blazing-fast performance and SEO best practices, we ensure your site not only looks great but works even harder for your business. Whether you're launching your dream startup or scaling your enterprise, our expertise with cutting-edge tools like React and Next.js brings your vision to life. Because a great website doesn't just represent your brand—it propels it forward.",
        cta: "Get Started",
        technologies: [
            {
                id: 0,
                title: "React",
                image: "/technology-icons/frontend/react.svg",
            },
            {
                id: 1,
                title: "Next.js",
                image: "/technology-icons/frontend/next-js.svg",
            },
            {
                id: 2,
                title: "JavaScript",
                image: "/technology-icons/frontend/javascript.svg",
            },
            {
                id: 3,
                title: "TypeScript",
                image: "/technology-icons/frontend/typescript.svg",
            },
            {
                id: 4,
                title: "Tailwind CSS",
                image: "/technology-icons/frontend/tailwind-css.svg",
            },
            {
                id: 5,
                title: "Bootstrap",
                image: "/technology-icons/frontend/bootstrap.svg",
            },
        ],
    },
    {
        id: 1,
        title: "Mobile App Development",
        subheading: "Apps That Engage, Perform, and Scale.",
        description:
            "Apps are more than tools—they're your brand in the palm of your customer's hand. At Scripted Wings, we craft apps that your audience loves to use. Whether it's native development for iOS and Android or cross-platform solutions with Flutter and React Native, we focus on intuitive designs and seamless functionality. From customer-facing experiences to internal tools, every app we build is designed to grow with your business and leave an unforgettable impression.",
        cta: "Get Started",
        technologies: [
            {
                id: 0,
                title: "React Native",
                image: "/technology-icons/mobile/react-native.svg",
            },
            {
                id: 1,
                title: "Flutter",
                image: "/technology-icons/mobile/flutter.svg",
            },
            {
                id: 2,
                title: "Swift",
                image: "/technology-icons/mobile/swift.svg",
            },
            {
                id: 3,
                title: "Kotlin",
                image: "/technology-icons/mobile/kotlin.svg",
            },
            {
                id: 4,
                title: "Android",
                image: "/technology-icons/mobile/android.svg",
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        subheading: "Fueling Your Vision with Reliable Performance.",
        description:
            "Behind every seamless digital experience is a powerful backend doing the heavy lifting. At Scripted Wings, we specialize in building robust, secure, and scalable backend systems that make your website or app perform like a dream. From crafting secure APIs to managing complex databases, we ensure your backend can handle anything—real-time functionality, growing user bases, and more. With cutting-edge frameworks like Node.js and reliable databases like PostgreSQL, we build the foundation your business needs to thrive. Because when your backend works flawlessly, your entire business soars.",
        cta: "Get Started",
        technologies: [
            {
                id: 0,
                title: "Node.js",
                image: "/technology-icons/backend/node-js.svg",
            },
            {
                id: 1,
                title: "Express.js",
                image: "/technology-icons/backend/express-js.svg",
            },
            {
                id: 2,
                title: "Nest.js",
                image: "/technology-icons/backend/nest-js.svg",
            },
            {
                id: 3,
                title: "JavaScript",
                image: "/technology-icons/frontend/javascript.svg",
            },
            {
                id: 4,
                title: "TypeScript",
                image: "/technology-icons/frontend/typescript.svg",
            },
        ],
    },
    {
        id: 3,
        title: "Cloud Services",
        subheading: "Empowering Your Business in the Cloud.",
        description:
            "Scalability, security, and unmatched efficiency—our cloud services are designed to future-proof your business. Whether you're migrating to the cloud, optimizing your infrastructure, or developing cloud-native applications, we make the process seamless and stress-free. With expertise in platforms like AWS, Google Cloud, and Azure, we ensure your business stays agile, secure, and ready to tackle any challenge. Let's unlock limitless potential and elevate your operations with a cloud system that works as hard as you do.",
        cta: "Get Started",
        technologies: [
            {
                id: 0,
                title: "AWS",
                image: "/technology-icons/cloud/aws.svg",
            },
            {
                id: 1,
                title: "Azure",
                image: "/technology-icons/cloud/azure.svg",
            },
            {
                id: 2,
                title: "GCP",
                image: "/technology-icons/cloud/gcp.svg",
            },
            {
                id: 3,
                title: "Digital Ocean",
                image: "/technology-icons/cloud/digital-ocean.svg",
            },
            {
                id: 4,
                title: "Heroku",
                image: "/technology-icons/cloud/heroku.svg",
            },
            {
                id: 5,
                title: "Vercel",
                image: "/technology-icons/cloud/vercel.svg",
            },
        ],
    },
    {
        id: 4,
        title: "DevOps Services",
        subheading: "Accelerate. Automate. Innovate.",
        description:
            "In today's digital-first world, speed and efficiency aren't optional—they're essential. Our DevOps services are designed to supercharge your development process, helping you build smarter, deploy faster, and scale effortlessly. From automating workflows with CI/CD pipelines to managing infrastructure with Kubernetes, we streamline every step for maximum efficiency. The result? Faster releases, fewer roadblocks, and a team empowered to focus on innovation. Let's turn your DevOps strategy into a competitive edge.",
        cta: "Optimize Now",
        technologies: [
            {
                id: 0,
                title: "Docker",
                image: "/technology-icons/devops/docker.svg",
            },
            {
                id: 1,
                title: "Docker Swarm",
                image: "/technology-icons/devops/docker-swarm.svg",
            },
            {
                id: 2,
                title: "Terraform",
                image: "/technology-icons/devops/terraform.svg",
            },
            {
                id: 3,
                title: "Kubernetes",
                image: "/technology-icons/devops/kubernetes.svg",
            },
            {
                id: 4,
                title: "Nginx",
                image: "/technology-icons/devops/nginx.svg",
            },
            {
                id: 5,
                title: "PM2",
                image: "/technology-icons/devops/pm2.svg",
            },
        ],
    },
    {
        id: 5,
        title: "Digital Marketing",
        subheading: "Your Brand, Everywhere It Matters.",
        description:
            "Your business deserves to be seen, heard, and remembered. At Scripted Wings, we craft digital marketing strategies that do just that—helping your brand rank higher, engage better, and convert faster. From data-driven SEO techniques to scroll-stopping social media campaigns, we leverage tools like SEMrush and Google Ads to connect you with your audience in meaningful ways. Whether your goal is driving traffic, growing engagement, or maximizing conversions, we’re here to make your brand the one they can’t ignore.",
        cta: "Shine Online",
        technologies: [
            {
                id: 0,
                title: "Ahrefs",
                image: "/technology-icons/digital-marketing/ahrefs.svg",
            },
            {
                id: 1,
                title: "SEMrush",
                image: "/technology-icons/digital-marketing/semrush.png",
            },
            {
                id: 2,
                title: "Google Ads",
                image: "/technology-icons/digital-marketing/google-ads.svg",
            },
            {
                id: 3,
                title: "Google Analytics",
                image: "/technology-icons/digital-marketing/google-analytics.svg",
            },
            {
                id: 4,
                title: "Hotjar",
                image: "/technology-icons/digital-marketing/hotjar.svg",
            },
        ],
    },
];
