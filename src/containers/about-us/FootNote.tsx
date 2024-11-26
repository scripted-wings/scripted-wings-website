import Container from "@/hoc/container";

const FootNote = () => {
    return (
        <div className="border-y">
            <Container className="flex h-full flex-col justify-center px-6 py-14">
                <h2 className="text-3xl font-semibold md:text-4xl">
                    Let&apos;s Shape Tomorrow, Together.
                </h2>

                <p className="mt-6">
                    Got a bold idea? Let&apos;s bring it to life. Whether
                    it&apos;s designing sleek, high-impact websites, crafting
                    apps that wow users, or building marketing strategies that
                    demand attention, we&apos;re here to make it happen.
                    Together, we&apos;ll create cutting-edge solutions that
                    inspire, innovate, and drive your success in today&apos;s
                    digital-first world.
                </p>
            </Container>
        </div>
    );
};

export default FootNote;
