import AboutIcon from "@/components/navbar/icon/AboutIcon";
import ServiceIcon from "@/components/navbar/icon/ServiceIcon";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav
            role="navigation"
            id="navbar"
            className="fixed left-0 right-0 top-0 z-50 flex h-12 items-center justify-between bg-background-color pl-8 shadow-md md:h-14"
        >
            <Link href="/" className="h-auto w-20">
                <Image
                    priority
                    src="https://ik.imagekit.io/scriptedwings/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    loading="eager"
                    className="w-full"
                />
            </Link>

            <ul className="hidden gap-8 md:flex">
                {navList.map(({ icon, name, link, id, title }) => (
                    <li
                        key={id}
                        className="font-medium transition-colors hover:text-highlight-color"
                    >
                        <Link
                            href={link}
                            aria-labelledby={title}
                            className="flex items-center justify-center gap-2"
                        >
                            <span className="text-2xl">{icon}</span>

                            <p>{name}</p>
                        </Link>
                    </li>
                ))}
            </ul>

            <Link
                href="/#contact-us"
                className="flex h-full items-center justify-center border border-highlight-color bg-highlight-color px-4 text-background-color transition-colors hover:bg-background-color hover:text-highlight-color"
                aria-label="Navigate to contact us section"
            >
                Contact Us
            </Link>
        </nav>
    );
};

export default Navbar;

const navList = [
    {
        id: 0,
        name: "Services",
        link: "/services",
        icon: <ServiceIcon />,
        title: "Services",
    },
    {
        id: 1,
        name: "About Us",
        link: "/about-us",
        icon: <AboutIcon />,
        title: "About Us",
    },
];
