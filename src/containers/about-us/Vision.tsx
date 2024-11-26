import Container from "@/hoc/container";

const Vision = () => {
    return (
        <div className="border-y">
            <Container className="flex h-full flex-col justify-center px-6 py-14">
                <h2 className="text-3xl font-semibold md:text-4xl">
                    Our Vision
                </h2>

                <h3 className="mt-2 text-lg lg:text-xl">
                    Empowering Innovators. Redefining Tomorrow.
                </h3>

                <p className="mt-6">
                    At Scripted Wings, we dream big—for you and with you. We see
                    a future where startups and entrepreneurs don&apos;t just
                    keep pace with change—they lead it. Our vision is to empower
                    businesses to innovate fearlessly, thrive in the digital
                    age, and leave an indelible mark on the world. By fusing
                    creativity, strategic insight, and transformative
                    technology, we go beyond crafting solutions—we&apos;re
                    shaping a global ecosystem where bold ideas take flight and
                    become groundbreaking realities.
                </p>
            </Container>
        </div>
    );
};

export default Vision;
