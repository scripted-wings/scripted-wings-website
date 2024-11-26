import Container from "@/hoc/container";

const WhatSetsUsApart = () => {
    return (
        <div className="border-y">
            <Container className="flex h-full flex-col justify-center px-6 py-14">
                <h2 className="text-3xl font-semibold md:text-4xl">
                    What Sets Us Apart?
                </h2>

                <h3 className="mt-2 text-lg lg:text-xl">
                    Where Creativity Fuels Innovation.
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

export default WhatSetsUsApart;

const values = [
    {
        id: 0,
        title: "Tailored to You",
        content:
            "Your business is one of a kind, and so are our solutions. We craft every strategy and product from the ground up, ensuring it fits your unique goals like a glove—no templates, just results.",
    },
    {
        id: 1,
        title: "Ahead of the Curve",
        content:
            "Innovation is in our DNA. From leveraging cutting-edge cloud infrastructure to designing next-gen apps, we use the latest tech to bring bold ideas to life and keep you ahead of the competition.",
    },
    {
        id: 2,
        title: "Seamless Remote Collaboration",
        content:
            "Distance is no barrier to brilliance. Our remote-first culture ensures effortless communication, transparent processes, and collaboration that feels as seamless as working side by side.",
    },
    {
        id: 3,
        title: "Solutions That Deliver",
        content:
            "We don't just build technology; we build success. Every solution is designed to empower your business, drive measurable growth, and create real impact.",
    },
];
