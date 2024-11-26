import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Viewport } from "next";
import { Caveat, Poppins, Roboto_Slab } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    fallback: ["sans-serif"],
    preload: true,
    style: ["normal", "italic"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

const caveat = Caveat({
    variable: "--font-caveat",
    weight: ["400", "500", "600", "700"],
    fallback: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    preload: true,
    style: ["normal"],
    subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
    display: "swap",
});

const robotoSlab = Roboto_Slab({
    variable: "--font-roboto-slab",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    fallback: ["sans-serif"],
    preload: true,
    style: ["normal"],
    subsets: [
        "latin",
        "latin-ext",
        "cyrillic",
        "cyrillic-ext",
        "greek",
        "greek-ext",
    ],
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: "white",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${caveat.variable} ${robotoSlab.variable} min-h-screen w-screen overflow-y-auto font-poppins antialiased`}
            >
                <Navbar />

                <main className="h-full">{children}</main>

                <Footer />
            </body>
        </html>
    );
}
