import Container from "@/hoc/container";
import Link from "next/link";
import ServiceGrid from "@/containers/home/service/ServiceGrid";

const Service = () => {
    return (
        <div className="border-y">
            <Container className="flex h-full flex-col justify-center px-6 py-14">
                <h2 className="text-3xl font-semibold md:text-4xl">
                    Solutions That Turn Ideas Into Impact.
                </h2>

                <p className="mt-4 text-lg md:text-xl">
                    At Scripted Wings, we&apos;re not just building
                    tech—we&apos;re crafting experiences that matter. Whether
                    it&apos;s designing stunning websites, creating apps your
                    customers can&apos;t put down, optimizing your business with
                    seamless cloud solutions, or making your brand
                    unforgettable, we bring your vision to life. Whatever your
                    goals, we&apos;ll help you achieve them with innovation,
                    precision, and passion.
                </p>

                <ServiceGrid />

                <Link
                    className="group inline-flex w-fit flex-col"
                    href="/services"
                >
                    <p className="font-mono tracking-widest md:text-lg">
                        Explore Our Services
                    </p>
                    <span className="h-0.5 w-full bg-font-color transition-all group-hover:translate-x-4" />
                </Link>
            </Container>
        </div>
    );
};

export default Service;
