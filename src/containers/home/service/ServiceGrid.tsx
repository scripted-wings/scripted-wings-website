const ServiceGrid = () => {
    return (
        <div className="mb-6 mt-10 grid grid-cols-1 gap-px border bg-font-color md:grid-cols-2">
            {services.map((service) => {
                return (
                    <div
                        key={service.id}
                        className="flex flex-col justify-center bg-background-color p-6 hover:relative hover:shadow-xl md:p-10"
                    >
                        <h3 className="text-2xl font-semibold md:text-3xl">
                            {service.heading}
                        </h3>

                        <h4 className="text-lg font-medium md:text-xl">
                            {service.subheading}
                        </h4>

                        <p className="mt-4 md:text-lg">{service.content}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ServiceGrid;

const services = [
    {
        id: 0,
        heading: "Website Development",
        subheading: "Websites That Captivate and Convert.",
        content:
            "Your website is more than a URL—it's your brand's first impression. We craft visually stunning, lightning-fast, and fully responsive websites tailored to your vision. Designed to engage, optimized to convert, and built to grow with you.",
    },
    {
        id: 1,
        heading: "Mobile App Development",
        subheading: "Apps That Wow, Wherever They Go.",
        content:
            "Bring your business to your audience's fingertips with powerful, intuitive apps. From Flutter and React Native to native iOS and Android, we create apps that captivate, perform, and scale—your way, on every device.",
    },
    {
        id: 2,
        heading: "DevOps & Cloud Services",
        subheading: "Scale Effortlessly. Perform Flawlessly.",
        content:
            "Leave infrastructure headaches behind. From AWS to Google Cloud, Azure, and beyond, we optimize your cloud environment for speed, security, and scalability. Say hello to smooth operations and worry-free growth.",
    },
    {
        id: 3,
        heading: "Digital Marketing",
        subheading: "Your Brand, Unforgettable Everywhere.",
        content:
            "Stand out in the crowd and make your mark. With data-driven SEO strategies, creative social media campaigns, and impactful branding, we connect your business with the right audience and deliver measurable results.",
    },
];
