import Container from "@/hoc/container";
import AddIcon from "@/components/icons/AddIcon";
import MinusIcon from "@/components/icons/MinusIcon";

const FAQ = () => {
    return (
        <Container className="flex h-full flex-col justify-center px-6 py-14">
            <h2 className="text-3xl font-semibold md:text-4xl">FAQs</h2>

            <div
                className="mt-6 divide-y divide-font-color border"
                itemScope
                itemType="https://schema.org/FAQPage"
            >
                {faq.map((item) => (
                    <details
                        key={item.id}
                        className="group lg:break-inside-avoid"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <summary className="flex cursor-pointer justify-between p-4 font-medium lg:px-8 lg:py-6">
                            <h6 itemProp="name">{item.question}</h6>

                            <div className="group-open:hidden">
                                <AddIcon />
                            </div>

                            <div className="hidden group-open:block">
                                <MinusIcon />
                            </div>
                        </summary>

                        <div
                            className="px-4 pb-4 lg:px-8 lg:pb-8"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <p className="lg:text-lg" itemProp="text">
                                {item.answer}
                            </p>
                        </div>
                    </details>
                ))}
            </div>
        </Container>
    );
};

export default FAQ;

const faq = [
    {
        id: 0,
        question:
            "What services does Scripted Wings Technology Solutions offer?",
        answer: "We craft stunning websites, build engaging mobile apps, power businesses with backend and cloud solutions, streamline DevOps, and amplify your digital presence with data-driven marketing strategies.",
    },
    {
        id: 1,
        question: "What makes Scripted Wings different from other companies?",
        answer: "We're not just another tech company. We mix creativity, innovation, and tech to deliver unique, client-first solutions. Think no cookie-cutter templates—just custom strategies that work.",
    },
    {
        id: 2,
        question: "How does your remote-first model work?",
        answer: "With top-notch tools and seamless communication, we collaborate across borders to bring your project to life, making distance irrelevant and results exceptional.",
    },
    {
        id: 3,
        question: "How can I start a project with Scripted Wings?",
        answer: "Kickstart your project by reaching out on our contact page or booking a free consultation. Your ideas meet our expertise, and magic happens.",
    },
    {
        id: 4,
        question: "What industries do you work with?",
        answer: "From tech and e-commerce to healthcare and beyond, we partner with startups, small businesses, and enterprises to deliver tailored digital solutions.",
    },
    {
        id: 5,
        question:
            "Can you help with digital marketing strategies for startups?",
        answer: "Absolutely! We design impactful SEO, social media, and ROI-focused campaigns to help startups stand out and scale effortlessly.",
    },
    {
        id: 6,
        question: "Why choose a remote-first company like Scripted Wings?",
        answer: "Our remote-first model means flexibility, accessibility, and a global talent pool—tailored for your needs, delivering solutions without borders.",
    },
    {
        id: 7,
        question: "What's the first step to working with Scripted Wings?",
        answer: "Let's connect! Book a call or drop us a message to share your goals. We'll brainstorm, strategize, and map out a plan that aligns perfectly with your vision.",
    },
    {
        id: 8,
        question: "How do you ensure scalability in your solutions?",
        answer: "Every solution we build is future-proof, whether it's robust cloud architecture or agile backend development. Growth-ready tech is our mantra.",
    },
    {
        id: 9,
        question: "Do you offer post-launch support?",
        answer: "Of course! We're in it for the long haul—providing updates, optimizations, and continuous support to keep you ahead in the game.",
    },
    {
        id: 10,
        question: "What technologies does Scripted Wings specialize in?",
        answer: "We use cutting-edge tech like React, Flutter, AWS, and Node.js to deliver high-performing, future-ready solutions tailored to your needs.",
    },
    {
        id: 11,
        question: "How long does it take to complete a project?",
        answer: "Timelines depend on the scope, but no surprises here! We'll share a detailed roadmap upfront and ensure timely delivery every step of the way.",
    },
    {
        id: 12,
        question:
            "Do you provide custom development or off-the-shelf solutions?",
        answer: "Custom is our middle name! Every solution we deliver is tailored to your unique needs—crafted from scratch to help your business thrive.",
    },
    {
        id: 13,
        question: "Can you handle large-scale enterprise projects?",
        answer: "Absolutely! Whether you're a startup or an enterprise, we scale our solutions to meet your project's complexity and deliver big-league results.",
    },
    {
        id: 14,
        question: "What does your digital marketing process involve?",
        answer: "From in-depth market research to strategy creation, campaign execution, and analytics—we cover it all to drive measurable growth.",
    },
    {
        id: 15,
        question: "What kind of apps can you build?",
        answer: "From sleek iOS and Android apps to cross-platform wonders, we design and develop apps using cutting-edge tech like React Native and Flutter.",
    },
    {
        id: 16,
        question: "How do you ensure the security of your solutions?",
        answer: "Security is in our DNA. We implement encryption, secure frameworks, and regular audits to safeguard your data and build trust.",
    },
    {
        id: 17,
        question: "What if I need changes after the project is completed?",
        answer: "We're here for the long run! Our team offers flexible maintenance and upgrades to evolve with your needs and keep your solutions at their best.",
    },
];
