import Container from "@/hoc/container";
import HeroImage from "@/containers/services/hero/HeroImage";
import Link from "next/link";

const Hero = () => {
    return (
        <Container className="flex min-h-screen flex-col px-6 py-14 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
            <div className="mt-10 w-full md:mt-20 lg:mt-0 lg:w-7/12">
                <h1 className="font-roboto-slab text-5xl font-semibold">
                    Services
                </h1>

                <h2 className="mt-4 text-2xl font-medium lg:text-3xl">
                    Your vision, brought to life with cutting-edge tech and
                    smart strategies.
                </h2>

                <h2 className="mb-1 mt-10 text-lg lg:mt-16 lg:text-xl">
                    At Scripted Wings Technology Solutions, we don&apos;t just
                    deliver services—we redefine possibilities. From stunning
                    websites that leave lasting impressions to apps your users
                    won&apos;t want to put down, scalable cloud solutions, and
                    powerful backends that keep it all running, we cover every
                    digital need. And our work doesn&apos;t stop there—our
                    data-driven digital marketing strategies amplify your brand,
                    connect you with your audience, and drive results that
                    matter. Backed by the latest technologies and fueled by a
                    passion for innovation, we turn your bold ideas into
                    game-changing realities.
                </h2>

                <h2 className="mb-8 text-lg lg:mb-10 lg:text-xl">
                    Together, let&apos;s create something extraordinary.
                </h2>

                <button>
                    <Link
                        href="/#contact-us"
                        className="border bg-font-color p-4 text-background-color hover:bg-background-color hover:text-font-color"
                    >
                        Let&apos;s Get Started
                    </Link>
                </button>
            </div>

            <div className="mt-16 lg:my-0 lg:w-5/12">
                <HeroImage />
            </div>
        </Container>
    );
};

export default Hero;
