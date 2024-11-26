import Container from "@/hoc/container";

const Vision = () => {
    return (
        <Container className="flex h-full flex-col justify-center px-6 py-14">
            <h2 className="text-3xl font-semibold md:text-4xl">Our Mission</h2>

            <h3 className="mt-2 text-lg lg:text-xl">
                Innovate Boldly. Empower Globally. Deliver with Excellence.
            </h3>

            <ul className="mt-6 list-inside list-disc">
                <li>
                    Transform visionary ideas into impactful, user-first digital
                    experiences that stand out in a crowded digital world.
                </li>

                <li>
                    Design scalable, creative, and results-driven strategies
                    that fuel growth and drive long-term success.
                </li>

                <li>
                    Empower businesses worldwide with future-ready technology
                    and bespoke solutions tailored to their unique needs.
                </li>
            </ul>
        </Container>
    );
};

export default Vision;
