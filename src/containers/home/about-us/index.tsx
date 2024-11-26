import Container from "@/hoc/container";
import Link from "next/link";
import AboutUsImage from "@/containers/home/about-us/AboutUsImage";

const AboutUs = () => {
    return (
        <div className="border-y">
            <Container className="h-full px-6 py-14">
                <h2 className="text-3xl font-semibold lg:text-4xl">
                    Scripted Wings: Building Dreams, One Digital Solution at a
                    Time.
                </h2>

                <h3 className="mt-4 text-lg lg:text-xl">
                    We&apos;re a team of creators, innovators, and
                    problem-solvers on a mission to empower businesses
                    worldwide. With agility, creativity, and excellence at the
                    heart of everything we do, we&apos;re here to help you make
                    your mark in the digital world.
                </h3>

                <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center lg:gap-2">
                    <div className="flex w-full flex-col gap-4 lg:w-7/12 lg:gap-6">
                        <div className="flex flex-col justify-center">
                            <h4 className="text-lg font-semibold lg:text-xl">
                                Our Vision:
                            </h4>

                            <p>
                                To empower businesses to own their digital
                                future with tech solutions that reflect their
                                unique story. Every business has a spark.
                                We&apos;re here to amplify yours and turn it
                                into a lasting digital impact.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold lg:text-xl">
                                Our Story:
                            </h4>

                            <p>
                                Scripted Wings was born from a bold idea: to
                                merge cutting-edge technology with the power of
                                creativity. Starting as a remote-first company,
                                we&apos;ve grown into a global collective of
                                designers, developers, and strategists dedicated
                                to building digital experiences that inspire and
                                deliver.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold lg:text-xl">
                                What Drives Us:
                            </h4>

                            <p>
                                Our work revolves around three core values:
                                agility, creativity, and excellence. Whether
                                it&apos;s adapting to your needs, delivering
                                bold ideas, or ensuring impeccable quality, we
                                measure our success by yours.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold lg:text-xl">
                                What Makes Us Different:
                            </h4>

                            <ul className="list-inside list-disc">
                                <li>
                                    <strong>A blend of art and tech:</strong> We
                                    seamlessly fuse the precision of engineering
                                    with the beauty of design to craft solutions
                                    that stand out.
                                </li>
                                <li>
                                    <strong>Customer-first approach:</strong> We
                                    don&apos;t just listen—we adapt, innovate,
                                    and deliver solutions that truly make an
                                    impact.
                                </li>
                                <li>
                                    <strong>Remote-first, world-class:</strong>{" "}
                                    Wherever you are, we&apos;re ready to
                                    collaborate and bring our A-game to deliver
                                    excellence.
                                </li>
                            </ul>
                        </div>

                        <Link
                            className="group inline-flex w-fit flex-col"
                            href="/about-us"
                        >
                            <p className="font-mono tracking-widest lg:text-lg">
                                Learn More About Us
                            </p>
                            <span className="h-0.5 w-full bg-font-color transition-all group-hover:translate-x-4" />
                        </Link>
                    </div>

                    <div className="py-10 lg:w-5/12 lg:py-0">
                        <AboutUsImage />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;
