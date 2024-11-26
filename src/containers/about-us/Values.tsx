import Container from "@/hoc/container";

const Values = () => {
    return (
        <div className="border-y">
            <Container className="flex h-full flex-col justify-center px-6 py-14">
                <h2 className="text-3xl font-semibold md:text-4xl">
                    Values We Live By
                </h2>

                <h3 className="mt-2 text-lg lg:text-xl">
                    Guiding every step we take and every solution we create.
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-px border bg-font-color lg:grid-cols-2">
                    {values.map((value) => (
                        <div
                            key={value.id}
                            className="flex flex-col justify-center bg-background-color p-6 hover:relative hover:shadow-xl md:p-10"
                        >
                            <h4 className="text-2xl font-semibold md:text-3xl">
                                {value.title}
                            </h4>

                            <p className="mt-4 md:text-lg">{value.content}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Values;

const values = [
    {
        id: 0,
        title: "Innovation",
        content:
            "We don't just follow trends—we set them. By embracing creativity and bold thinking, we turn groundbreaking ideas into solutions that truly make a difference.",
    },
    {
        id: 1,
        title: "Trust",
        content:
            "Your success is our mission. As your dedicated partners, we build relationships on integrity, reliability, and unwavering commitment to your growth.",
    },
    {
        id: 2,
        title: "Flexibility",
        content:
            "Our remote-first culture enables us to adapt seamlessly to your needs, delivering world-class results from anywhere, to anywhere.",
    },
    {
        id: 3,
        title: "Excellence",
        content:
            "Perfection isn't our goal—it's our standard. With a focus on precision and care, we craft solutions that exceed expectations, every time.",
    },
    {
        id: 4,
        title: "Future-Ready",
        content:
            "The digital landscape evolves daily, and so do we. Our forward-thinking approach ensures your business stays ready to conquer tomorrow.",
    },
    {
        id: 5,
        title: "Collaboration",
        content:
            "We believe great minds achieve greater things together. Through transparent communication and shared goals, we transform visions into impactful realities.",
    },
];
