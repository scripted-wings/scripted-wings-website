import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Viewport } from "next";
import { Caveat, Poppins, Roboto_Slab } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";

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
            <Script
                defer
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-5W9V4Z3N');
                    `,
                }}
                id="gtm-script"
            />

            <Script
                defer
                src="https://www.googletagmanager.com/gtag/js?id=G-5X41GV86LD"
            />

            <Script
                defer
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-5X41GV86LD');
                    `,
                }}
                id="gtag-script"
            />

            <body
                className={`${poppins.variable} ${caveat.variable} ${robotoSlab.variable} min-h-screen w-screen overflow-y-auto font-poppins antialiased`}
            >
                <Navbar />

                <main className="h-full">{children}</main>

                <Footer />

                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5W9V4Z3N"
                        height="0"
                        width="0"
                        style={{
                            display: "none",
                            visibility: "hidden",
                        }}
                        loading="lazy"
                    ></iframe>
                </noscript>
            </body>
        </html>
    );
}
