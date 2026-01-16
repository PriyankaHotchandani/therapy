import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="#">
                    <img
                        className="h-12 md:h-16 w-auto"
                        src="/assets/logo.png"
                        alt="logo"
                        width={420}
                        height={126}
                    />
                </a>

                <div className="hidden md:flex items-center gap-8 transition duration-500 flex-1 justify-center ml-25">
                    {navlinks.map((link: INavLink) => (
                        <a key={link.name} href={link.href} className="text-lg font-medium hover:text-pink-500 transition">{link.name}</a>
                    ))}
                </div>

                <button className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full">
                    <a href="mailto:yourmom@email.com?subject=Inquiry:%20Starting%20my%20therapy%20journey&body=Hi,%0D%0A%0D%0AI%20am%20interested%20in%20starting%20therapy%20and%20would%20like%20to%20know%20the%20next%20steps.%0D%0A%0D%0AThanks.">Start your journey</a>
                </button>
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link: INavLink) => (
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}