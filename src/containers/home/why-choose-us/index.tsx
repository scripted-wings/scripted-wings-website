import Container from "@/hoc/container";
import Link from "next/link";

const WhyChooseUs = () => {
    return (
        <Container className="px-6 py-14">
            <h2 className="text-3xl font-semibold md:text-4xl">
                Why Scripted Wings? Because You Deserve the Best.
            </h2>

            <h3 className="mb-6 mt-4 text-lg md:text-xl">
                At Scripted Wings, we don&apos;t just deliver services. We
                create partnerships built on trust, creativity, and innovation.
                With a passion for pushing boundaries and exceeding
                expectations, we craft solutions that empower your business to
                soar.
            </h3>

            <div className="mb-6 mt-10 grid grid-cols-1 gap-px border bg-font-color md:grid-cols-2">
                {advantages.map((advantage) => (
                    <div
                        key={advantage.id}
                        className="flex flex-col justify-center bg-background-color p-6 hover:relative hover:shadow-xl md:p-10"
                    >
                        <h4 className="text-2xl font-semibold md:text-3xl">
                            {advantage.title}
                        </h4>

                        <p className="mt-4 md:text-lg">{advantage.content}</p>
                    </div>
                ))}
            </div>

            <Link
                href="/#contact-us"
                className="group inline-flex w-fit flex-col"
                aria-label="Navigate to contact us section"
            >
                <p className="font-mono tracking-widest md:text-lg">
                    Let&apos;s Talk
                </p>

                <span className="h-0.5 w-full bg-font-color transition-all group-hover:translate-x-4" />
            </Link>
        </Container>
    );
};

export default WhyChooseUs;

const advantages = [
    {
        id: 0,
        title: "Custom-First Approach",
        content:
            "No one-size-fits-all here. We build every project from the ground up, tailored to your vision and goals. It's your idea, brought to life in a way that's bold, unique, and unforgettable.",
    },
    {
        id: 1,
        title: "Tech That Leads the Way",
        content:
            "Future-proof, scalable, and ready to perform. From React and Flutter to AWS and beyond, we use the latest tools to ensure your solutions don't just meet today's standards—they set tomorrow's.",
    },
    {
        id: 2,
        title: "We Speak Human, Not Jargon",
        content:
            "Tech doesn't have to be overwhelming. We translate complex ideas into simple, actionable steps, making sure working with us feels like collaborating with a team that truly gets you.",
    },
    {
        id: 3,
        title: "Speed Meets Precision",
        content:
            "We work fast, but we never cut corners. Our agile approach delivers high-quality results on time—every time—so you can keep moving forward without missing a beat.",
    },
    {
        id: 4,
        title: "Your Growth Is Our Goal",
        content:
            "We don't just complete projects; we build partnerships. When you succeed, we succeed. That's why we're here to support your journey and create solutions that grow with you.",
    },
    {
        id: 5,
        title: "Creative Solutions, Real Results",
        content:
            "We fuse big ideas with practical strategies, crafting solutions that are as innovative as they are effective. Whether it's boosting conversions, driving engagement, or scaling operations, we deliver creativity that works.",
    },
];
