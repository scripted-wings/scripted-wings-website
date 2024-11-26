import Link from "next/link";
import HeroImage from "./HeroImage";
import Container from "@/hoc/container";

const Hero = () => {
    return (
        <Container className="flex min-h-screen flex-col px-6 py-14 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
            <div className="mt-10 w-full md:mt-20 lg:mt-0 lg:w-7/12">
                <div className="font-roboto-slab text-5xl font-semibold">
                    <h1>Ideas That Inspire,</h1>

                    <h1>Solutions That Deliver,</h1>

                    <h1>Tech That Transforms.</h1>
                </div>

                <h2 className="mb-1 mt-10 text-lg lg:mt-16 lg:text-xl">
                    Welcome to Scripted Wings Technology Solutions. Your
                    launchpad for turning bold ideas into game-changing digital
                    experiences. From stunning websites to cutting-edge apps and
                    seamless cloud solutions, we&apos;re here to help your
                    business break boundaries, redefine success, and own the
                    future.
                </h2>

                <h2 className="mb-8 text-lg lg:mb-10 lg:text-xl">
                    Innovation meets hustle, powered by tech that works as hard
                    as you do. Let&apos;s build something extraordinary
                    together. 💡✨
                </h2>

                <button>
                    <Link
                        href="/#contact-us"
                        className="border bg-font-color p-4 text-background-color hover:bg-background-color hover:text-font-color"
                    >
                        Start Now
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
