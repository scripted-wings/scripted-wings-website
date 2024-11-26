import Container from "@/hoc/container";

const Tagline = () => {
    return (
        <Container className="flex h-full flex-col justify-center px-6 py-14">
            <h2 className="text-3xl font-semibold md:text-4xl">
                A Global Team, United by Innovation.
            </h2>

            <p className="mt-6">
                At Scripted Wings, remote isn&apos;t just how we work—it&apos;s
                how we thrive. With team members spanning the globe, we blend
                diverse perspectives, daring ideas, and a shared commitment to
                delivering excellence. Collaboration here breaks boundaries,
                transforming challenges into opportunities and ideas into
                impactful, future-ready solutions. Wherever we are, innovation
                brings us together.
            </p>
        </Container>
    );
};

export default Tagline;
