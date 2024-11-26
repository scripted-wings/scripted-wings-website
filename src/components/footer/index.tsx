import Container from "@/hoc/container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer id="contact-us" className="pt-12 md:pt-14">
            <Container className="px-6 py-14">
                <div className="mb-8 flex flex-col items-center md:mb-14 md:flex-row md:gap-8">
                    <div className="min-w-[50%] flex-1">
                        <div className="flex flex-col gap-4 border-b pb-12">
                            <h4 className="text-xl font-semibold md:text-2xl">
                                India (HQ)
                            </h4>

                            <p>
                                Scripted Wings Technology Solutions, Regency
                                Tower, Vastrapur, Ahmedabad, Gujarat India -
                                380015
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 border-b py-12 md:border-b-0 md:pb-0">
                            <h4 className="text-xl font-semibold md:text-2xl">
                                India (Sales Office)
                            </h4>

                            <p>
                                301, 302 & 303, Shubham Complex, Shrimali
                                Society, Navrangpura, Ahmedabad, Gujarat, India
                                - 380009
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-4 pt-12 md:w-fit md:pt-0">
                        <Link
                            className="group inline-flex w-fit flex-col"
                            href="tel:+919773195484"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="tracking-widest">+91 97731 95484</p>
                            <span className="h-0.5 w-full bg-font-color transition-all group-hover:translate-x-4" />
                        </Link>

                        <Link
                            className="group mb-4 inline-flex w-fit flex-col md:mb-6"
                            href="mailto:sales@scriptedwings.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="tracking-widest">
                                sales@scriptedwings.com
                            </p>
                            <span className="h-0.5 w-full bg-font-color transition-all group-hover:translate-x-4" />
                        </Link>

                        <Link
                            href="https://cal.com/scripted-wings"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit items-center gap-4"
                        >
                            <Image
                                src="/social-media-icons/google-meet-icon.svg"
                                alt="Book a free online consultation with our team and let's discuss how we can transform your ideas into reality."
                                width={1000}
                                height={1000}
                                className="h-8 w-8"
                            />
                            Schedule a call
                        </Link>

                        <Link
                            href="https://www.linkedin.com/company/scripted-wings-hq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit items-center gap-4"
                        >
                            <Image
                                src="/social-media-icons/linkedin-icon.svg"
                                alt="Follow us on LinkedIn for insights, updates, and exciting news about our journey in tech and design."
                                width={1000}
                                height={1000}
                                className="h-8 w-8"
                            />
                            Stay Connected – Follow Us on LinkedIn
                        </Link>

                        <Link
                            href="https://g.page/r/CZD4jlr9B4vZEBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit items-center gap-4"
                        >
                            <Image
                                src="/social-media-icons/google-icon.svg"
                                alt="Your feedback helps us grow and reach more businesses like yours. Share your experience with Scripted Wings on Google."
                                width={1000}
                                height={1000}
                                className="h-8 w-8"
                            />
                            Love Working With Us? Rate Us on Google!
                        </Link>
                    </div>
                </div>

                <div className="w-full border-t pt-4 text-center md:mx-auto md:w-fit">
                    <p>
                        © {new Date().getFullYear()} Scripted Wings Technology
                        Solutions.
                    </p>

                    <p> All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
