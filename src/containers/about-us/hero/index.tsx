import Container from "@/hoc/container";
import HeroImage from "@/containers/about-us/hero/HeroImage";
import Link from "next/link";

const Hero = () => {
    return (
        <Container className="flex min-h-screen flex-col px-6 py-14 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
            <div className="mt-10 w-full md:mt-20 lg:mt-0 lg:w-7/12">
                <h1 className="font-roboto-slab text-5xl font-semibold">
                    About Us
                </h1>

                <h2 className="mt-4 text-2xl font-medium lg:text-3xl">
                    More than a team — your partners in digital transformation.
                </h2>

                <h3 className="mb-1 mt-10 text-lg lg:mt-16 lg:text-xl">
                    At Scripted Wings Technology Solutions, we turn bold ideas
                    into reality. As a remote-first team, we bring fresh
                    perspectives, cutting-edge technology, and future-ready
                    strategies to empower businesses across the globe.
                </h3>

                <p className="mb-8 text-lg lg:mb-10 lg:text-xl">
                    Together, let&apos;s innovate, collaborate, and build
                    extraordinary solutions that redefine what&apos;s possible.
                </p>

                <Link
                    href="/#contact-us"
                    className="border bg-font-color p-4 text-background-color hover:bg-background-color hover:text-font-color"
                    aria-label="Navigate to contact us section"
                >
                    Let&apos;s Get Started
                </Link>
            </div>

            <div className="mt-16 lg:my-0 lg:w-5/12">
                <HeroImage />
            </div>
        </Container>
    );
};

export default Hero;
